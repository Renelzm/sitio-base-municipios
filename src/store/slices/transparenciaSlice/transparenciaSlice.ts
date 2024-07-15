import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export const transparenciaSlice = createSlice({
  name: 'TransparenciaSlice',
  initialState: {
    data: [],
    isLoading: false,
    
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    startLoadingTranparencia: (state) => {
        state.isLoading = true;
    }
  },
})

