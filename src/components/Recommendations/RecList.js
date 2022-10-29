import { useState } from 'react'
import { useSelector } from 'react-redux'
import RecListItem from './RecListItem'
import { Card, ImageList, useMediaQuery, useTheme } from '@mui/material'
import CategorySelect from './CategorySelect'

const RecList = () => {
  const recomItems = useSelector(state => state.recommendations.items)
  const [filteredItems, setFilteredItems] = useState(recomItems)
  const theme = useTheme()

  const categoryFilterHandler = category => {
    const filtered = recomItems.filter(item => item.category === category)
    setFilteredItems(category === 'any' ? recomItems : filtered)
  }

  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'))
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))

  let match
  ;(matchDownSm && (match = 1)) || (matchDownMd && (match = 2)) || (match = 3)

  return (
    <Card className={'p-3 p-md-5'}>
      <CategorySelect items={recomItems} onChange={categoryFilterHandler} />
      <ImageList cols={match}>
        {filteredItems.map(rec => {
          const { id, title, author, description } = rec
          const image = require('../../assets/img/' + rec.image + '.jpg')

          return (
            <RecListItem
              key={id}
              id={id}
              title={title}
              author={author}
              description={description}
              image={image}
            />
          )
        })}
      </ImageList>
    </Card>
  )
}

export default RecList
