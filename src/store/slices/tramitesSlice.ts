import { createSlice  } from '@reduxjs/toolkit';
// import type { RootState } from '../store'
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';

// import { fetchNoticiasFromFirebase } from '../../firebaseAPI';
// Thunk para obtener noticias desde Firebase


// export const fetchTramites = createAsyncThunk<Pokemon, string>(
//   'pokemon/fetchByName',
//   async (name, { rejectWithValue }) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     const data = await response.json()
//     if (response.status < 200 || response.status >= 300) {
//       return rejectWithValue(data)
//     }
//     return data
//   },
// )

export const tramitesSlice = createSlice({
    name: 'tramites',
    initialState: {
      data: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    
  });
  
