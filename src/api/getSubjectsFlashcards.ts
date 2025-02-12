import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Subject } from "@/types/Subject";

let cachedSubjects: Subject[] | null = null;

export async function getSubjectsFlashcards() {
  if (cachedSubjects) {
    console.log("Cache hit in Flashcards");
    return cachedSubjects;
  }

  try {
    const subjectsQuery = query(
      collection(db, "subjects"),
      where("contains", "array-contains", "flashcard")
    );
    const querySnapshot = await getDocs(subjectsQuery);

    const subjects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      evaluation: doc.data().evaluation,
      image: doc.data().image,
      premium: doc.data().premium,
    }));

    subjects.sort((a, b) => Number(a.premium) - Number(b.premium));
    cachedSubjects = subjects;
    return subjects;
  } catch {
    return [];
  }
}
