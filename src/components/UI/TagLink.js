import { Link, useLocation } from 'react-router-dom'
const TagLink = props => {
  const { className, query, tag, onClick } = props

  const location = useLocation()
  const tagURL = `${location.pathname}?${query}=${tag.trim()}`

  return (
    <li className={className || ''}>
      <hr />
      <Link className='px-4 py-2' onClick={onClick} to={tagURL}>
        {tag.trim()}
      </Link>
    </li>
  )
}

export default TagLink
