import { ConnectorProps } from '@/components/converter/types'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

const Connector = ({
  primaryTitle = 'connect',
  secondaryTitle = 'cancel',
  handleClick,
  handleCancel,
  loading = false,
  mainButtonColor = 'primary',
}: ConnectorProps) => (
  <div className="flex relative w-full">
    {!loading ? (
      <>
        <Button
          fullWidth
          style={{
            backgroundColor: mainButtonColor === 'primary' ? '#0d162e' : 'red',
            color: mainButtonColor === 'primary' ? '' : 'white',
          }}
          variant="contained"
          color={mainButtonColor}
          onClick={handleClick}
        >
          {primaryTitle}
        </Button>
        {secondaryTitle && secondaryTitle?.length > 0 ? (
          <>
            <div className="m-1" />
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={handleCancel}
            >
              {secondaryTitle}
            </Button>
          </>
        ) : null}
      </>
    ) : (
      <div className="flex relative justify-center w-full">
        <CircularProgress />
      </div>
    )}
  </div>
)

export default Connector
