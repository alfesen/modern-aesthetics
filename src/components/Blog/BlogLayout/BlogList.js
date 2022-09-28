import { useLocation, Route } from 'react-router-dom'
import s from './BlogList.module.scss'
import BlogItem from './BlogItem'
import { sortPosts } from '../../../helpers/sortPosts'
import { useSelector } from 'react-redux'
import { browserName } from 'react-device-detect'

const BlogList = props => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const blogItems = useSelector(state => state.blog.items)

  const items = []
  blogItems.forEach(item => {
    item.posts.forEach(post => {
      items.push({
        ...post,
        author: item.author,
        image: item.image,
      })
    })
  })

  const sortedItems = sortPosts(
    browserName === 'Chrome' ? items : items.reverse()
  )

  const postList = sortedItems.map(post => {
    const { id, author, title, image, content, tags, date } = post

    const blogItems = (
      <BlogItem
        key={id}
        avatar={image}
        id={id}
        title={title}
        author={author}
        content={content}
        date={date}
        tags={tags}
      />
    )

    return (
      <div key={id} className='w-100'>
        {!queryParams.get('tag') && !queryParams.get('author') && (
          <Route path='/blog' exact>
            {blogItems}
          </Route>
        )}
        {tags.includes(queryParams.get('tag')) && blogItems}
        {author.includes(queryParams.get('author')) && blogItems}
      </div>
    )
  })

  return (
    <div
      className={`col-12 col-md-8 d-flex flex-column align-items-center ${s['blog-list']}`}>
      {postList}
    </div>
  )
}

export default BlogList
