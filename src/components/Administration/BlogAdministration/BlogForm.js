import { useState, Fragment, useEffect } from 'react'
import {
  Card,
  TextField,
  FormControl,
  Switch,
  Avatar,
  FormControlLabel,
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { blogActions } from '../../../store/blog-slice'
import s from './BlogForm.module.scss'
import { v4 as uuidv4 } from 'uuid'
import BlogAuthorSelect from './BlogAuthorSelect'
import FormTooltip from '../../UI/FormTooltip'
import Error from '../../UI/Error'
import Success from '../../UI/Success'

const BlogForm = props => {
  const [author, setAuthor] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [biography, setBiography] = useState('')
  const [tags, setTags] = useState('')
  const [newAuthor, setNewAuthor] = useState(false)
  const [image, setImage] = useState('')
  const [isError, setIsError] = useState(false)
  const [success, setSuccess] = useState(false)

  const dispatch = useDispatch()

  const history = useHistory()

  const items = useSelector(state => state.blog.items)

  const handleSwitchEdition = e => {
    setNewAuthor(!newAuthor)
    setIsError(false)
  }

  useEffect(() => {}, [])

  const handleChangeAuthor = e => {
    setAuthor(e.target.value)
    if (!newAuthor) {
      setAuthorId(e.explicitOriginalTarget.id)
    } else {
      setAuthorId(uuidv4)
    }
  }

  const handleAuthorBiography = e => {
    setBiography(e.target.value)
  }

  const handleChangeTitle = e => {
    setTitle(e.target.value)
  }

  const handleChangeText = e => {
    let content = e.target.value
    e.target.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        content = e.target.value + '\n '
      }
    })
    console.log(content)
    setText(content)
  }

  const handleChangeTags = e => {
    setTags(e.target.value)
  }

  const handleLoadImage = e => {
    setImage(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    if (
      (!newAuthor && (!author || !tags || !text || !title)) ||
      (newAuthor && (!author || !tags || !text || !biography || !title))
    ) {
      setSuccess(false)
      setIsError(true)
      return
    }

    const tagsArr = []
    const newTags = tags.split(',')
    newTags.forEach(tag => {
      const trimmed = tag.trim()
      tagsArr.push(trimmed)
    })

    dispatch(
      blogActions.addPostToBlog({
        author,
        title,
        biography,
        id: authorId,
        content: text,
        tags: tagsArr,
        image,
      })
    )

    setIsError(false)
    setSuccess(true)
    setAuthor('')
    setAuthorId('')
    setImage('')
    setTags('')
    setText('')
    setTitle('')
    setBiography('')
  }

  const cancelHandler = () => {
    history.push('/admin')
  }

  let formInputs

  if (!newAuthor) {
    formInputs = (
      <BlogAuthorSelect
        size='small'
        items={items}
        author={author}
        onChange={handleChangeAuthor}
      />
    )
  } else {
    formInputs = (
      <Fragment>
        <TextField
          value={author}
          size='small'
          label={`Author's name`}
          id='new-author-name'
          onChange={handleChangeAuthor}
        />{' '}
        <TextField
          value={biography}
          className={`my-3`}
          id='post-content'
          label={`Author's biography`}
          placeholder='Placeholder'
          onChange={handleAuthorBiography}
          multiline
        />
        <div className={`d-flex justify-content-between align-items-center`}>
          <TextField
            value={image}
            size='small'
            id='author-image'
            fullWidth
            className={`mt-3`}
            label={`Author's image - insert link`}
            onChange={handleLoadImage}
          />
          <Avatar src={image} alt={author} className={`mx-4`} />
        </div>
      </Fragment>
    )
  }

  return (
    <Card className='p-4 m-0'>
      <FormControlLabel
        control={
          <Switch
            id='add-author'
            onChange={handleSwitchEdition}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label='New Author'
      />

      {isError && <Error />}
      {success && <Success />}

      <form className={`d-flex m-1 ${s['blog-form']}`} onSubmit={submitHandler}>
        <FormControl fullWidth size='small'>
          {formInputs}
          <TextField
            value={title}
            size='small'
            label='Post title'
            className={`mt-3`}
            onChange={handleChangeTitle}
          />
          <TextField
            value={tags}
            size='small'
            className={`mt-3`}
            id='post-tags'
            label='Tags, divide with comas'
            onChange={handleChangeTags}
          />

          <TextField
            value={text}
            className={`my-3`}
            id='post-content'
            label='Write your post here'
            placeholder='Placeholder'
            onChange={handleChangeText}
            multiline
          />
          <FormTooltip onCancel={cancelHandler} />
        </FormControl>
      </form>
    </Card>
  )
}

export default BlogForm
