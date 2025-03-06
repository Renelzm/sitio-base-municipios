import { Dispatch } from "@reduxjs/toolkit"
import { setData, startLoadingTramites } from "./tramitesSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { TopLevel } from "../../../interfaces/tramitesInterface";


export const getTramites = () => {
    return async (dispatch: Dispatch) => {
        dispatch(startLoadingTramites());
        const querySnapshot = await getDocs(collection(db, "tramites"));
    
        const items = querySnapshot.docs.map((doc, index) => { 
      
          const data = doc.data() as TopLevel;
          return {
            ...data,
            key: (index + 1).toString(),
            label: data.nombre,
            children: "<Tramite data={data}/>",
          };
        });
        dispatch(setData(items))

    }
}