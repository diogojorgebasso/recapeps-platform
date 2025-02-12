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
    const freeEcrit1 = subjects.filter(
      (subject) => !subject.premium && subject.evaluation === 1
    );
    const paidEcrit1 = subjects.filter(
      (subject) => subject.premium && subject.evaluation === 1
    );
    const freeEcrit2 = subjects.filter(
      (subject) => !subject.premium && subject.evaluation === 2
    );
    const paidEcrit2 = subjects.filter(
      (subject) => subject.premium && subject.evaluation === 2
    );
    subjects = [...freeEcrit1, ...paidEcrit1, ...freeEcrit2, ...paidEcrit2];

    cachedSubjects = subjects;
    return subjects;
  } catch {
    return [];
  }
}
