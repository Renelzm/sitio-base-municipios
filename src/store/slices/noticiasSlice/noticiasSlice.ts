
import { createSlice } from '@reduxjs/toolkit';
import {DocumentData } from 'firebase/firestore';

import  { fetchNoticias } from './thunks'
import { notasInterface } from '../../../interfaces/notaInterface';
// Función para convertir At a Date


export const noticiasSlice = createSlice({
  name: 'noticias',
  initialState: {
    data: [] as DocumentData[],
    isLoading: false,
    notaData: {} as notasInterface,
    error: null as string | null,
  },
  reducers: {
    setNotaId: (state, action) => {
      state.notaData = action.payload;
    },
    startLoadingNota: (state) => {
      state.isLoading = true;
    },
    setNotaData: (state, action) => {
      state.notaData = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNoticias.pending, (state) => {
        state.isLoading = true;
      
        state.error = null;
      })
      .addCase(fetchNoticias.fulfilled, (state, action) => {
        state.isLoading = false;
   
        state.data = action.payload;
      })
      .addCase(fetchNoticias.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch noticias';
      });
  },
});

export const { setNotaId, startLoadingNota, setNotaData} = noticiasSlice.actions;