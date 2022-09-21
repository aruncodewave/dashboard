import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }
  export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
     
    },
  })
  
  // Action creators are generated for each case reducer function
 
  
  export default authSlice.reducer  