import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

export async function getAllOral(){
    const OralColection = collection(db, "oral");
    const snapshot = await getDocs(OralColection);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
}