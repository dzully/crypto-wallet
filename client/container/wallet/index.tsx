import ListDetails from '@/components/ListDetails'
import NoData from '@/components/NoData'
import Popper from '@/components/Popper'
import { popupProps } from '@/components/types'
import Connector from '@/container/wallet/Connector'
import Disconnect from '@/container/wallet/Disconnect'
import { MenuProps } from '@/container/wallet/types'
import { handleAccount } from '@/redux/reducer/wallet'
import { RootState } from '@/redux/store'
import { DialogActions } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { startCase } from 'lodash'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Wallet = ({
  buttonTitle = 'check wallet details',
  dialogTitle = 'wallet details',
}: MenuProps) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  const [popup, setPopup] = useState<popupProps>({
    message: '',
    severity: 'info',
    status: false,
  })

  const walletState = useSelector((state: RootState) => state?.wallet)
  const provider = walletState?.provider
  const balance = walletState?.balance

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLoading = (param: boolean) => setLoading(param)

  const chainChangedHandler = () => {
    window.location.reload()
  }

  const getAccountBalance = (account: any) => {
    // @ts-ignore
    window.ethereum
      .request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then((balance: any) => {
        // @ts-ignore
        setUserBalance(ethers.utils.formatEther(balance))
      })
      .catch((error: any) => {
        setPopup({
          severity: 'error',
          status: true,
          message: error.message,
        })
      })
  }

  const accountChangedHandler = (newAccount: any) => {
    dispatch(handleAccount(newAccount))
    getAccountBalance(newAccount.toString())
  }

  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.ethereum.on('accountsChanged', accountChangedHandler)
    // @ts-ignore
    window.ethereum.on('chainChanged', chainChangedHandler)
  }

  const handlePopup = () => {
    setPopup({ ...popup, status: false })
  }

  return (
    <>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {startCase(dialogTitle?.toLowerCase())}
        </DialogTitle>
        <DialogContent>
          {provider && !loading ? <ListDetails /> : <NoData />}
        </DialogContent>
        <DialogActions>
          {!provider || !balance ? (
            <Connector
              handleCancel={handleClose}
              handleLoading={handleLoading}
              loading={loading}
            />
          ) : (
            <Disconnect handleCancel={handleClose} />
          )}
        </DialogActions>
      </Dialog>
      <Popper popup={popup} handlePopup={handlePopup} />
    </>
  )
}

export default Wallet
