import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './blog-slice'
import recomSlice from './recommendations-slice'
import infoSlice from './info-slice'

const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
    recommendations: recomSlice.reducer,
    info: infoSlice.reducer,
  },
})

export default store
