import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: any = {
  
}

export const dataSlice = createSlice({
  name: 'g_data',

  initialState,
  reducers: {
    setData: (state:any, payload:any) => {
      state[payload.name] = payload.data;
    },
    
  },
})

export const { setData } = dataSlice.actions


export default dataSlice.reducer