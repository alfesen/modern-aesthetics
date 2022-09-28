import { useSelector } from 'react-redux'
import { Container } from '@mui/material'
import PageTitle from '../components/UI/PageTitle'
import About from '../components/Home/About'
import FeaturedBlogPost from '../components/Home/FeaturedBlogPost'
import RandomRecommendations from '../components/Home/RandomRecommendations'

const Home = () => {
  const isRendered = {
    blog: useSelector(state => state.blog.blogIsRendered),
    recommendations: useSelector(state => state.recommendations.isRendered),
    info: useSelector(state => state.info.isRendered),
  }

  return (
    <Container className='row d-flex justify-content-around'>
      <PageTitle title='Feel at home' />
      {isRendered.info && <About />}
      {isRendered.blog && <FeaturedBlogPost className='col-lg-4' />}
      {isRendered.recommendations && (
        <RandomRecommendations className='col-lg-7 p-3' />
      )}
    </Container>
  )
}

export default Home
