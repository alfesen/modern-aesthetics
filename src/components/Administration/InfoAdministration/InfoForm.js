import { useState } from 'react'
import { TextField, Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { infoActions } from '../../../store/info-slice'
import Success from '../../UI/Success'
import FormTooltip from '../../UI/FormTooltip'
import { v4 as uuidv4 } from 'uuid'

const InfoForm = props => {
  const { onClick, id } = props

  const [title, setTitle] = useState('')
  const [titleType, setTitleType] = useState('none')
  const [content, setContent] = useState('')
  const [success, setSuccess] = useState(false)

  const dispatch = useDispatch()

  const history = useHistory()

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleTitleType = e => {
    setTitleType(e.target.value)
  }

  const handleInfoContent = e => {
    let content = e.target.value
    e.target.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        content = e.target.value + '\n '
      }
    })

    setContent(content)
  }

  const handleCancel = () => {
    if (onClick) {
      onClick()
    } else history.push('/admin')
  }

  const handleAddItem = e => {
    e.preventDefault()
    dispatch(
      infoActions.addContent({
        title: title,
        titleType: titleType,
        content: content,
        id: uuidv4(),
      })
    )
    setTitle('')
    setContent('')
    setSuccess(true)
  }

  const handleUpdateItem = e => {
    e.preventDefault()
    dispatch(
      infoActions.updateContent({
        id: id,
        title: title,
        titleType: titleType,
        content: content,
      })
    )
    onClick()
  }

  return (
    <form
      className='p-5'
      onSubmit={
        (props.onSend === 'add' && handleAddItem) ||
        (props.onSend === 'update' && handleUpdateItem)
      }>
      {success && <Success />}
      <div className='d-flex'>
        <TextField
          label='Section title'
          fullWidth
          onChange={handleTitle}
          value={title || props.title}
        />
        <Select
          sx={{ minWidth: 120, marginLeft: 1 }}
          label='Type'
          value={!titleType ? 'none' : titleType}
          onChange={handleTitleType}>
          <MenuItem value='none' disabled default>
            Choose type
          </MenuItem>
          <MenuItem value='h3'>Section Title</MenuItem>
          <MenuItem value='h4'>Subsection Title</MenuItem>
        </Select>
      </div>
      <TextField
        className='my-3'
        fullWidth
        label='Info content'
        multiline
        value={content || props.content}
        onChange={handleInfoContent}
      />
      <FormTooltip onCancel={handleCancel} />
    </form>
  )
}

export default InfoForm
