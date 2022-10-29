import { Fragment } from 'react'
import { Select, InputLabel, MenuItem } from '@mui/material'

const BlogAuthorSelect = props => {
  const { items, author } = props

  const authorOptions = items.map(item => {
    return (
      <MenuItem key={item.id} value={item.author} id={item.id}>
        {item.author}
      </MenuItem>
    )
  })

  return (
    <Fragment>
      <InputLabel id='author-select'>Author</InputLabel>
      <Select
        labelId='author-select'
        id='author-select'
        onChange={props.onChange}
        value={author}
        label='Author'>
        <MenuItem value='' disabled>
          <em>-- choose author --</em>
        </MenuItem>
        {authorOptions}
      </Select>
    </Fragment>
  )
}

export default BlogAuthorSelect
