import React, { useEffect, useState } from 'react'

function FirestoreItems ({firebaseConfig, collectionName}) {
    const [items, setItems] = useState(null);

    const app = initializeApp (firebaseConfig);
    const db = getFirestore (app);

    useEffect(() =>{
        const collectionRef = collection (db, collectionName);
        getDocs (collectionRef).then ((snapshot) => {
            if (snapshot.size > 0){
                const {docs} = snapshot;
                const data = doc.map ((doc) => doc.data())
                console.log(data)
                setItems(data)
            } else {
                alert ("No hay items en tu colección")
            }
        })
    }, []);
    if (items)
    return(
        <div>
            <h3>Documents data</h3>
            <ul>
                {items.map((i) =>(
                    <li key= {index}>
                        <p>{JSON.stringify(i)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
  return (
    <div>
      <p>Loading data</p>
    </div>
  )
}

export default FirestoreItems
