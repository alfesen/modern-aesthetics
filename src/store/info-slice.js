import { createSlice } from '@reduxjs/toolkit'
import { sendInfoData } from './info-actions'

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    isRendered: false,
    items: [],
  },
  reducers: {
    replaceItems(state, action) {
      state.items = action.payload.items
    },
    render(state) {
      state.isRendered = true
    },
    addContent(state, action) {
      const newItem = action.payload
      const item = {
        title: newItem.title,
        titleType: newItem.titleType,
        content: newItem.content,
        id: newItem.id
      }
      state.items.push(item)
      sendInfoData(state.items)
    },
    updateContent(state, action) {
      const newData = action.payload
      const existingItem = state.items.find(item => item.id === newData.id)
      const index = state.items.indexOf(existingItem)
      const newItem = {title: newData.title === '' ? existingItem.title : newData.title, titleType: newData.titleType === 'none' ? existingItem.titleType : newData.titleType, content: newData.content === '' ? existingItem.content : newData.content, id: existingItem.id}
      state.items.splice(index, 1, newItem)
      sendInfoData(state.items)
    },
    removeItem(state, action) {
      const itemId = action.payload
      state.items = state.items.filter(item => item.id !== itemId)

      sendInfoData(state.items)
    },
  },
})

export const infoActions = infoSlice.actions

export default infoSlice
