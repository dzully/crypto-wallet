import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ImageIcon from '@mui/icons-material/Image'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import AccountIcon from '@mui/icons-material/AccountCircle'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { startCase } from 'lodash'

interface modelProps {
  label: string
  value: string
  icon: any
}

const ListDetails = () => {
  const walletState = useSelector((state: RootState) => state?.wallet)
  const account = walletState?.account
  const balance = walletState?.balance
  const chainId = walletState?.chainId
  const provider = walletState?.provider

  const model: modelProps[] = [
    {
      label: 'account',
      value: account,
      icon: AccountIcon,
    },
    {
      label: 'chain_id',
      value: chainId,
      icon: FingerprintIcon,
    },
    {
      label: 'account',
      value: balance,
      icon: AccountBalanceIcon,
    },
  ]

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        minWidth: 300,
        bgcolor: 'background.paper',
      }}
    >
      {model?.map((item: modelProps, key: number) => {
        const ItemIcon = item.icon

        return (
          <ListItem key={key.toString()}>
            <ListItemAvatar>
              <ItemIcon />
            </ListItemAvatar>
            <ListItemText
              primary={startCase(item.label)}
              secondary={
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.value}
                </div>
              }
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default ListDetails
