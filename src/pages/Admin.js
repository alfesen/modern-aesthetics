import { Fragment, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchBlogData } from '../store/blog-actions'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import PageTitle from '../components/UI/PageTitle'
import BlogAdministration from '../components/Administration/BlogAdministration/BlogAdministration'
import InfoAdministration from '../components/Administration/InfoAdministration/InfoAdministration'

const Admin = params => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogData())
  }, [dispatch])

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <Fragment>
      <PageTitle title='Administration Panel' className='m' />
      <section className='container text-center w-100 w-md-75 p-md-4'>
        <Link to='/admin/blog'>
          <Button className='col-5 p-4 m-3' variant='contained'>
            Blog
          </Button>
        </Link>
        <Link to='/admin/info'>
          <Button className='col-5 p-4 m-3' variant='contained'>
            Info
          </Button>
        </Link>
        <Route path='/admin/blog'>
          <BlogAdministration />
        </Route>
        <Route path='/admin/info'>
          <InfoAdministration />
        </Route>
        <div>
          <Button onClick={logout}>Logout</Button>
        </div>
      </section>
    </Fragment>
  )
}

export default Admin
