import { sendBlogData } from './blog-actions'
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogIsRendered: false,
    items: [],
  },
  reducers: {
    render(state) {
      state.blogIsRendered = true
    },
    replaceItems(state, action) {
      state.items = action.payload.items
    },
    addPostToBlog(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(
        item => item.author === newItem.author
      )
      if (!existingItem) {
        const itemToAdd = {
          author: newItem.author,
          biography: newItem.biography,
          id: uuidv4(),
          image: newItem.image,
          posts: [
            {
              title: newItem.title,
              content: newItem.content,
              tags: newItem.tags,
              id: uuidv4(),
              date: new Date().toLocaleDateString('en-US', {
                month: '2-digit',
                year: 'numeric',
                day: '2-digit',
              }),
            },
          ],
        }
        state.items.push(itemToAdd)
      } else {
        const dataToAdd = {
          title: newItem.title,
          content: newItem.content,
          tags: newItem.tags,
          id: uuidv4(),
          date: new Date().toLocaleString('en-US', {
            month: '2-digit',
            year: 'numeric',
            day: '2-digit',
          }),
        }
        existingItem.posts.push(dataToAdd)
      }
      sendBlogData(state.items)
    },
    removeItemFromBlog(state, action) {
      const actions = action.payload
      const author = state.items.find(item => item.author === actions.author)
      const post = author.posts.find(post => post.id === actions.id)
      author.posts = author.posts.filter(item => item.id !== post.id)
      if (author.posts.length === 0) {
        state.items = state.items.filter(item => item.id !== author.id)
      }
      sendBlogData(state.items)
    },
  },
})

export const blogActions = blogSlice.actions

export default blogSlice
