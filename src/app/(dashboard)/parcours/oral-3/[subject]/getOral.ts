import { db } from "@/lib/firebase/clientApp";
import { getDoc, doc, getFirestore } from "firebase/firestore";

export async function getOral(subjectId: string) {
    return await getDoc(doc(db, "oral-3", subjectId));
}