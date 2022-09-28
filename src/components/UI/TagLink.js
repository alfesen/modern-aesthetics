import { Link, useLocation } from 'react-router-dom'
const TagLink = props => {
  const location = useLocation()
  const tagURL = `${location.pathname}?${props.query}=${props.tag.trim()}`

  return (
    <li className={props.className || ''}>
      <hr/>
      <Link className='px-4 py-2' onClick={props.onClick} to={tagURL}>
        {props.tag.trim()}
      </Link>
    </li>
  )
}

export default TagLink
