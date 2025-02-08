import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Subject } from "@/types/Subject";

/**
 * Fetches all subjects from the Firestore collection.
 *
 * @returns {Promise<Subject[]>} A promise that resolves to an array of subjects. If an error occurs, returns an empty array.
 */
export async function getSubjectsFlashcards() {
  try {
    const subjectsCollectionRef = collection(db, "subjects");
    const querySnapshot = await getDocs(subjectsCollectionRef);

    const subjects: Subject[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.contains?.includes("flashcard")) {
        subjects.push({
          id: doc.id,
          name: data.name,
          evaluation: data.evaluation,
          image: data.image,
          premium: data.premium,
        });
      }
    });

    return subjects;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return [];
  }
}
