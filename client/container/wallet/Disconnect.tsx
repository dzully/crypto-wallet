import ConnectorComponent from '@/components/converter/Connector'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { handleDisconnect } from '@/redux/reducer/wallet'
import Popper from '@/components/Popper'
import { popupProps } from '@/components/types'
import { DisconnectProps } from '@/container/wallet/types'
import { useWeb3React } from '@web3-react/core'

const Disconnect = ({ handleCancel }: DisconnectProps) => {
  const { deactivate } = useWeb3React()
  const [popup, setPopup] = useState<popupProps>({
    message: '',
    severity: 'info',
    status: false,
  })

  const dispatch = useDispatch()
  const walletState = useSelector((state: RootState) => state?.wallet)
  const provider = walletState?.provider

  const disconnectWallet = async () => {
    try {
      deactivate()
      dispatch(handleDisconnect())
      setPopup({
        severity: 'info',
        status: true,
        message: 'Disconnect from wallet',
      })
    } catch (error) {
      console.log('Error on disconnect:', error)
    }
  }

  const handlePopup = () => {
    setPopup({ ...popup, status: false })
  }

  return (
    <>
      <ConnectorComponent
        handleClick={disconnectWallet}
        handleCancel={handleCancel}
        mainButtonColor="secondary"
        secondaryTitle=""
        primaryTitle="Disconnect"
      />
      <Popper popup={popup} handlePopup={handlePopup} />
    </>
  )
}

export default Disconnect
