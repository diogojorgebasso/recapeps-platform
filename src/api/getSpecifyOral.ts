import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

export async function getSpecifyOral(subjectId: string) {
    const subjectText = doc(db, "oral", subjectId);
    return await getDoc(subjectText);
}
