import { ImageListItem } from '@mui/material'
import HeartBrokenRoundedIcon from '@mui/icons-material/HeartBrokenRounded'
import s from './RecListItem.module.scss'
import { capitalize } from '../../helpers/capitalize'
import { useDispatch, useSelector } from 'react-redux'
import { recomActions } from '../../store/recommendations-slice'

const RecListItem = props => {
  const { id, image, title, description, author } = props

  const dispatch = useDispatch()

  const items = useSelector(state => state.recommendations.items)

  const thisItem = items.find(item => item.id === id)
  const likeButtonHandler = e => {
    dispatch(recomActions.like(id))
  }

  return (
    <ImageListItem id={id} key={id} variant='masonry' className={`${s.box}`}>
      <img src={image} alt={title} />
      <div
        onDoubleClick={likeButtonHandler}
        className={`${s.description} text-center`}>
        <div
          onClick={likeButtonHandler}
          className={`${s.button} ${thisItem.isLiked ? s.active : ''}`}>
          <HeartBrokenRoundedIcon />
        </div>
        <h4>{capitalize(title)}</h4>
        <h6>{capitalize(author)}</h6>
        <p>{description}</p>
      </div>
    </ImageListItem>
  )
}

export default RecListItem
