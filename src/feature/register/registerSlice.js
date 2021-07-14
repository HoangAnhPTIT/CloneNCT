import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    class: ""
  },
  reducers: {
    clickBtnRegister: (state) => {
      state.class =  state.class.length > 0 ? "" : "click-register"
      console.log(state.class);
    }
  }
})

export const {clickBtnRegister} = registerSlice.actions

export default registerSlice.reducer
