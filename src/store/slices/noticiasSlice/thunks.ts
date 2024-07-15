import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { collection, DocumentData, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import {  At } from '../../../interfaces/notaInterface';
import { RootState } from "../../store";
import {  setNotaData, startLoadingNota } from "./noticiasSlice";


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

    // >2 Thunk para obtener nota desde Firebase


      export const getNota = (id: number) => {
        
        return async ( dispatch: Dispatch ) => {
            dispatch(startLoadingNota()); // Inicia la carga de la nota
            const q = query(collection(db, "publicaciones"), where("id", "==", Number(id))); // Asegúrate de que el id es de tipo number
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const item = querySnapshot.docs[0].data() ; // Obtén el primer documento
                const maptranform = ({
                    ...item,
                    publishAt: atToDate(item.publishAt).toLocaleDateString(),
                    createdAt: atToDate(item.createdAt).toLocaleDateString(),
                    updatedAt: atToDate(item.updatedAt).toLocaleDateString(),
                  });
            dispatch(setNotaData(maptranform))    
               
    
      }
    }
}