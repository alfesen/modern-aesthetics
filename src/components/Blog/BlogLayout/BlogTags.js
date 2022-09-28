import s from './BlogTags.module.scss'
import TagLink from '../../UI/TagLink'
import TagList from '../../UI/TagList'
import { useSelector } from 'react-redux'

const BlogTags = props => {
  const blogItems = useSelector(state => state.blog.items)
  
  const tagsArr = blogItems.map(item => {
    const posts = item.posts
    return posts.map(post => post.tags)
  })

  const setTags = [...new Set(tagsArr)].join().split(',')
  const uniqueTags = [...new Set(setTags)].join().split(',')

  const authorsArr = blogItems.map(item => {
    return item.author
  })
  const uniqueAuthors = [...new Set(authorsArr)].join().split(',')

  const renderTags = uniqueTags.map(tag => {
    return (
      <TagLink className='px-5 px-sm-3' key={tag} query='tag' tag={tag}>
        {tag}
      </TagLink>
    )
  })

  const renderAuthors = uniqueAuthors.map(author => {
    const choiceHandler = () => {
      props.onTagChoice(author)
    }
    return (
      <TagLink
        className='px-5 px-sm-3'
        key={author}
        query='author'
        tag={author}
        onClick={choiceHandler}>
        {author}
      </TagLink>
    )
  })

  return (
    <div className={`${s.tags} d-flex col-md-4 flex-column justify-content-around justify-content-md-start mb-2 mx-md-3 `}>
      <div
        className={`${s['tag-container']} ${
          props.offset > 360 && `sticky-top ${s.offset}`
        }  flex-column justify-content-around  flex-sm-row flex-md-column`}>
        <TagList
          offset={props.offset}
          label='Tags'
          className={` mb-3 text-center ${s['blog-tags']}`}
          allTags='All tags'
          content={renderTags}
        />

        <TagList
          offset={props.offset}
          label='Authors'
          className={` mb-2 text-center ${s['blog-tags']} authors `}
          allTags='All authors'
          content={renderAuthors}
        />
      </div>
    </div>
  )
}

export default BlogTags
