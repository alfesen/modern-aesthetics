import { useState, useEffect, useCallback, useMemo } from 'react'
import Button from '@mui/material/Button'
import s from './MainHeader.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MainHeader = () => {
  const [randomId, setRandomId] = useState('')

  const isRendered = useSelector(state => state.blog.blogIsRendered)
  const blogItems = useSelector(state => state.blog.items)

  const items = useMemo(() => [], [])

  blogItems.forEach(item => {
    item.posts.forEach(post => {
      items.push({
        ...post,
        author: item.author,
        image: item.image,
      })
    })
  })

  const setRandom = useCallback(() => {
    const random =
      isRendered && items[Math.floor(Math.random() * items.length)].id
    setRandomId(random)
  }, [isRendered, items])

  useEffect(() => {
    setRandom()
  }, [setRandom])

  return (
    <div onClick={setRandom} className={s.root}>
      <h1>modern<span>?</span>aesthetics</h1>
      {isRendered && (
        <Link to={`/blog/post?post=${randomId}`}>
          <Button variant='contained' sx={{backgroundColor: '#82650d'}}>
            Random post
          </Button>
        </Link>
      )}
    </div>
  )
}

export default MainHeader
