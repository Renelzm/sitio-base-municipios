
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import {  At } from '../../interfaces/notaInterface';
import { RootState } from '../store';

// Función para convertir At a Date
const atToDate = (date: At): Date => {
  const newdate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
  return newdate
};


// >2 Thunk para obtener noticias desde Firebase
export const fetchNoticias = createAsyncThunk<DocumentData[], void, { state: RootState }>(
  'noticias/fetchNoticias',
  async () => {
    const querySnapshot = await getDocs(collection(db, 'publicaciones'));
    const items = querySnapshot.docs.map((doc) => doc.data() as DocumentData);
    items.sort((a, b) => atToDate(b.publishAt).getTime() - atToDate(a.publishAt).getTime());
    const maptranform = items.map((item) => ({
      ...item,
      publishAt: atToDate(item.publishAt).toLocaleDateString(),
      createdAt: atToDate(item.createdAt).toLocaleDateString(),
      updatedAt: atToDate(item.updatedAt).toLocaleDateString(),
    }));
    return maptranform;
  }
);


export const noticiasSlice = createSlice({
  name: 'noticias',
  initialState: {
    data: [] as DocumentData[],
    isLoading: false,
    notaData: "",
    error: null as string | null,
  },
  reducers: {
    setNotaId: (state, action) => {
      state.notaData = action.payload;
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

export const { setNotaId } = noticiasSlice.actions;