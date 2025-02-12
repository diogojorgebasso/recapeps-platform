import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/utils/firebase";

export async function postContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  return addDoc(collection(db, "contact"), {
    ...formData,
    timestamp: serverTimestamp(),
  });
}
