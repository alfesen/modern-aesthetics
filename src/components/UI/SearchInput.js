
import { TextField } from '@mui/material'

const SearchInput = props => {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
      <TextField className={'mb-3 mt-2'} id="outlined-basic" label={props.label} variant="outlined" onChange={handleChange} size='small' />
  )
}

export default SearchInput
