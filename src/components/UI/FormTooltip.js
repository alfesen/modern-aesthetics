import { Button } from '@mui/material'

const FormTooltip = props => {
  return (
    <div className='d-flex justify-content-end'>
      <Button onClick={props.onCancel} className='mx-3' variant='outlined'>
        Cancel
      </Button>
      <Button type='submit' variant='contained' color='success'>
        Submit
      </Button>
    </div>
  )
}

export default FormTooltip
