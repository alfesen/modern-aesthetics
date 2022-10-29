import { useState, useEffect, Fragment } from 'react'
import { Route, useLocation } from 'react-router-dom'
import PageTitle from '../components/UI/PageTitle'
import BlogTags from '../components/Blog/BlogLayout/BlogTags'
import BlogList from '../components/Blog/BlogLayout/BlogList'
import PostPage from '../components/Blog/PostPage/PostPage'
import AuthorModal from '../components/Blog/AuthorModal/AuthorModal'
import Loading from '../components/UI/Loading'
import { useSelector } from 'react-redux'

const Blog = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [author, setAuthor] = useState('')
  const [authorData, setAuthorData] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const location = useLocation()

  const onPostPage = location.pathname.includes('/post')

  const blogIsRendered = useSelector(state => state.blog.blogIsRendered)
  const blogItems = useSelector(state => state.blog.items)

  useEffect(() => {
    if (modalIsVisible) {
      document.body.classList.add('sticky')
    } else {
      document.body.classList.remove('sticky')
    }
  }, [modalIsVisible])

  const modalHandler = author => {
    setModalIsVisible(true)
    const authorPosts = blogItems.filter(item => item.author.name === author)
    setAuthor(author)
    setAuthorData(authorPosts)
  }

  const closeModal = () => {
    setModalIsVisible(false)
  }

  return (
    <Fragment>
      {modalIsVisible && (
        <AuthorModal author={author} onClose={closeModal} items={authorData} />
      )}
      {!onPostPage && <PageTitle title='Sophisticated Blog' />}

      <section className='container'>
        <Route path='/blog/post'>
          <PostPage />
        </Route>

        <div className='row'>
          {!blogIsRendered && <Loading />}
          <div className='d-flex flex-column-reverse flex-md-row align-items-between'>
            <BlogList className='' />
            {!onPostPage && blogIsRendered && (
              <BlogTags offset={offset} onTagChoice={modalHandler} />
            )}
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Blog
