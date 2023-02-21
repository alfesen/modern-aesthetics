import { Card, ImageList, useMediaQuery, createTheme } from '@mui/material'
import RecListItem from '../Recommendations/RecListItem'
import useRandomRecommendations from '../../hooks/useRandomRecommendations'

const RandomRecommendations = props => {
  const { className } = props
  const randomCards = useRandomRecommendations()

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  })

  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'))
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'))
  const matchDownXl = useMediaQuery(theme.breakpoints.up('lg'))
  let match

  let random = []
  const oneRandom = randomCards.slice(0, 1)
  const fourRandom = randomCards.slice(0, 4)
  const threeRandom = randomCards.slice(0, 3)

  if (matchDownSm) {
    random = oneRandom
    match = 1
  } else if (matchDownMd) {
    random = fourRandom
    match = 2
  } else if (matchDownLg) {
    random = threeRandom
    match = 3
  } else if (matchDownXl) {
    random = fourRandom
    match = 2
  }

  const items = random.map(item => {
    const image = require('../../assets/img/' + item.image + '.jpg')
    return (
      <RecListItem
        key={item.id}
        id={item.id}
        image={image}
        title={item.title}
        description={item.description}
        author={item.author}
      />
    )
  })

  return (
    <Card className={className}>
      <ImageList cols={match} sx={{ height: '100%' }}>
        {items}
      </ImageList>
    </Card>
  )
}

export default RandomRecommendations
