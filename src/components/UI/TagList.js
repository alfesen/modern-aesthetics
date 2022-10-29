import { useState } from 'react'

import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'

const TagList = props => {
  const { content, className, label, allTags } = props

  const tags = content
  const [filteredTags, setFilteredTags] = useState(tags)

  const filterTagsBySearch = searchInput => {
    if (searchInput.trim() === '') {
      setFilteredTags(tags)
    } else {
      const trimmed = searchInput.split(' ').join('').toLowerCase()
      const filteredTags = tags.filter(tag =>
        tag.props.children.split(' ').join('').toLowerCase().includes(trimmed)
      )
      setFilteredTags(filteredTags)
    }
  }

  return (
    <Card style={{ overflow: 'auto' }} className={`${className}`}>
      <SearchInput label={`Search by ${label}`} onChange={filterTagsBySearch} />
      <h4 className='text-center mb-4 mt-2'>{label}</h4>
      <ul>
        <li className='py-1'>
          <Link to='/blog'>{allTags}</Link>
        </li>
        {filteredTags.length > 0 ? filteredTags : <p>nothing found</p>}
      </ul>
    </Card>
  )
}

export default TagList
