import InfoForm from './InfoForm'
import { Card } from '@mui/material'

const InfoAdministration = () => {
  
  return (
    <Card className='m-3 mx-md-5'>
      <InfoForm onSend='add' />
    </Card>
  )
}

export default InfoAdministration
