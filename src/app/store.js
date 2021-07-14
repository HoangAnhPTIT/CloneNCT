import { configureStore } from '@reduxjs/toolkit'
import registerSlice from '../feature/register/registerSlice'
export default configureStore({
  reducer: {
    register: registerSlice
  },
})