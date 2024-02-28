import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore'
import { firestore } from '../firebase.config'

// saving new Item in firestore database
export const saveItem = async (data) => {
  await setDoc(
    doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true },
  );
}

// get all food item
export const getAllFoodItems = async ()=>{
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    // console.log("Items: ", items);
    console.debug("Food items fetched successfully");

    return items.docs.map((doc)=> doc.data());
}
