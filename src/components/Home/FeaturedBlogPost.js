import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Button, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

import { browserName } from 'react-device-detect'
import s from './FeaturedBlogPost.module.scss'
import { sortPosts } from '../../helpers/sortPosts'
import TagCard from '../UI/TagCard'

const FeaturedBlogPost = props => {
  const [tagsAreVisible, setTagsAreVisible] = useState(false)
  const blogItems = useSelector(state => state.blog.items)

  const allPosts = []
  blogItems.forEach(item => {
    item.posts.forEach(post => {
      allPosts.push({ ...post, author: item.author, image: item.image })
    })
  })
  const sorted = sortPosts(browserName === 'Chrome' ? allPosts : allPosts.reverse())

  const lastPost = sorted[0]

  const toggleTags = () => {
    setTagsAreVisible(!tagsAreVisible)
  }

  return (
    <Card
      className={`${props.className} ${s.featured} px-4 mb-4 py-4 d-flex flex-column align-items-start`}>
      <h4 className={s['featured__section-title']}>Featured Post</h4>
      <div className={s['featured__title']}>
        <h3>{lastPost.title}</h3>
        <div className='d-flex align-items-center'>
          <Button className={`py-2 px-0`} onClick={toggleTags}>
            Show tags
          </Button>
          {tagsAreVisible && (
            <TagCard className='mx-3 px-3' tags={lastPost.tags} />
          )}
        </div>
      </div>
      <div className={`${s['featured__content']} py-3`}>
        <p>{lastPost.content}</p>
      </div>
      <div
        className={`${s['featured__author']} d-flex w-100 justify-content-between pt-4 align-items-center`}>
        <Button className={s.author}>
          <Link
            className={`d-flex align-items-center`}
            to={`/blog?author=${lastPost.author}`}>
            <Avatar sx={{ marginRight: '10px' }} src={lastPost.image}></Avatar>
            {lastPost.author}
          </Link>
        </Button>
        <div className={s['featured__date']}>{lastPost.date}</div>
      </div>
      <div className='align-self-end p-2'>
        <Link to='/blog'>Read more...</Link>
      </div>
    </Card>
  )
} 

export default FeaturedBlogPost
