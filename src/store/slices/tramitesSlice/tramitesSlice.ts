import { createSlice  } from '@reduxjs/toolkit';

export const tramitesSlice = createSlice({
    name: 'tramites',
    initialState: {
      data: [],
      isLoading: false,
      error: null,
    },
    reducers: {
      setData: (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      },
      startLoadingTramites: (state) => {
        state.isLoading = true;
      }
    },
    
  });
  
export const { setData, startLoadingTramites } = tramitesSlice.actions;