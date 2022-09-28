import { Fragment } from 'react'
import MainNavigation from './Header/MainNavigation'
import MainHeader from './Header/MainHeader'
import Footer from './Footer/Footer'

const MainLayout = props => {
  return (
    <Fragment>
      <MainNavigation />
      <MainHeader />
      <section className='my-5'>{props.children}</section>
      <Footer />
    </Fragment>
  )
}

export default MainLayout
