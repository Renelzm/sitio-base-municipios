import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const TramitesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "publicaciones"));
      const items = querySnapshot.docs.map((doc) => doc.data());
      setData(items);
    };
    fetchData();
  }, []);

  
  return (
    <>
    
    <div>
      <h1>Firestore Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>

    
    </>
  )
}
