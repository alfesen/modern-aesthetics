import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import s from './TagCard.module.scss'

const TagCard = props => {
  const { className, tags } = props

  return (
    <Card className={s['tag-card'] + ' ' + className} variant='outlined'>
      {tags.map(tag => {
        return (
          <Link key={tag} to={`/blog?tag=${tag.trim()}`}>
            {tag.trim()}
          </Link>
        )
      })}
    </Card>
  )
}

export default TagCard
