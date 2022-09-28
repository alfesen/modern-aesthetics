import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRecommendationsData} from '../store/recommendations-actions'
import { Container } from '@mui/material'
import PageTitle from '../components/UI/PageTitle'
import RecList from '../components/Recommendations/RecList'
import AboutRec from '../components/Recommendations/AboutRec'
import Loading from '../components/UI/Loading'

const Recommendations = () => {
  const dispatch = useDispatch()

  const isRendered = useSelector(state => state.recommendations.isRendered)

  useEffect(() => {
    dispatch(fetchRecommendationsData())
  }, [dispatch])

  return (
    <Container>
      <PageTitle title='Thoughtful Recommendations' />
      <AboutRec />
      {!isRendered && <Loading />}
      {isRendered && <RecList />}
    </Container>
  )
}

export default Recommendations
