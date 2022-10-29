import { TextField } from '@mui/material'

const SearchInput = props => {
  const { onChange, label } = props

  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <TextField
      className={'mb-3 mt-2'}
      id='outlined-basic'
      label={label}
      variant='outlined'
      onChange={handleChange}
      size='small'
    />
  )
}

export default SearchInput
