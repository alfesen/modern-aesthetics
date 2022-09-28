import { createSlice } from '@reduxjs/toolkit'
import {sendRecommendationsData} from './recommendations-actions'

const recomSlice = createSlice({
  name: 'recommendations',
  initialState: {
    items: [],
    isRendered: false,
  },
  reducers: {
    replaceItems(state, action) {
      state.items = action.payload.items
    },
    like(state, action) {
      const itemId = action.payload
      const item = state.items.find(item => item.id === itemId)
      item.isLiked = !item.isLiked
      sendRecommendationsData(state.items)
    },
    render(state) {
      state.isRendered = true
    }
  },
})

export const recomActions = recomSlice.actions

export default recomSlice
