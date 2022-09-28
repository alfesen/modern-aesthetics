import './index.scss'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Loading from './components/UI/Loading'
import MainLayout from './components/Layout/MainLayout'

import PrivateRoute from './helpers/PrivateRoute'
import { useDispatch } from 'react-redux'
import { fetchBlogData } from './store/blog-actions'
import { fetchRecommendationsData } from './store/recommendations-actions'
import { fetchInfoData } from './store/info-actions'

const Login = lazy(() => import('./components/Administration/Login'))
const Admin = lazy(() => import('./pages/Admin'))
const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const Info = lazy(() => import('./pages/Info'))
const Recommendations = lazy(() => import('./pages/Recommendations'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInfoData())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchBlogData())
  }, [dispatch])
  useEffect(() => {
    dispatch(fetchRecommendationsData())
  }, [dispatch])

  return (
    <div className='root'>
      <MainLayout>
        <Suspense
          fallback={
            <div className='text-center'>
              <Loading />
            </div>
          }>
          <Switch>
            <Route path='/admin-login' exact>
              <Login />
            </Route>
            <PrivateRoute path='/admin' component={Admin} />
            <Route path='/' exact>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' exact>
              <Home />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/recommendations' exact>
              <Recommendations />
            </Route>
            <Route path='/info' exact>
              <Info />
            </Route>
          </Switch>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default App
