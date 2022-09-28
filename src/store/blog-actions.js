import { blogActions } from './blog-slice'

export const fetchBlogData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/blogItems.json`
      )

      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = await response.json()

      return data
    }
    try {
      const blogData = await fetchData()
      dispatch(
        blogActions.replaceItems({
          items: blogData,
        })
      )
    } catch (err) {
      console.log(err)
    }

    dispatch(blogActions.render())
  }
}

export const sendBlogData = async blog => {
  await fetch(
    `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/blogItems.json`,
    {
      method: 'PUT',
      body: JSON.stringify(blog),
    }
  )
}
