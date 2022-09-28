import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import s from './TagCard.module.scss'

const TagCard = props => {
  return (
    <Card className={s['tag-card'] + ' ' + props.className} variant="outlined">
      {props.tags.map(tag => {
        return <Link key={tag} to={`/blog?tag=${tag.trim()}`}>{tag.trim()}</Link>
      })}
    </Card>
  )
}

export default TagCard
