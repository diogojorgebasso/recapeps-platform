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

    let subjects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      evaluation: doc.data().evaluation,
      image: doc.data().image,
      premium: doc.data().premium,
    }));

    // Group subjects by evaluation and premium status
    const freeSubjects = subjects.filter((subject) => !subject.premium);
    const paidSubjects = subjects.filter((subject) => subject.premium);
    subjects = [...freeSubjects, ...paidSubjects];

    cachedSubjects = subjects;
    return subjects;
  } catch {
    return [];
  }
}
