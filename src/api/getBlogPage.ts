import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

export async function getBlogPage(subject: string) {
  try {
    const notesCollection = collection(db, "subjects", subject, "notes");
    const snapshot = await getDocs(notesCollection);
    const pages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return pages[0];
  } catch (error) {
    console.error("Erro ao buscar a página: ", error);
    throw error;
  }
}
