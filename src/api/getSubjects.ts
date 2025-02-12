import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Subject, SubjectNote } from "@/types/Subject";

// Add caching variables at the top of the file
let subjectsCache: { data: Subject[]; expiry: number } | null = null;
let notesCache: { data: SubjectNote[]; expiry: number } | null = null;
const CACHE_TIMEOUT = 10 * 60 * 1000; // 10 minutes

export async function getSubjects() {
  const now = Date.now();
  if (subjectsCache && subjectsCache.expiry > now) {
    console.log("Cache hit");
    return subjectsCache.data;
  }
  try {
    const q = query(
      collection(db, "subjects"),
      where("contains", "array-contains", "quiz")
    );
    const querySnapshot = await getDocs(q);

    const subjects: Subject[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      subjects.push({
        id: doc.id,
        name: data.name,
        evaluation: data.evaluation,
        image: data.image,
        premium: data.premium,
      });
    });

    subjects.sort((a, b) => Number(a.premium) - Number(b.premium));
    subjectsCache = { data: subjects, expiry: now + CACHE_TIMEOUT };
    return subjects;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return [];
  }
}

export async function getNotes() {
  const now = Date.now();
  if (notesCache && notesCache.expiry > now) {
    return notesCache.data;
  }
  try {
    const q = query(
      collection(db, "subjects"),
      where("contains", "array-contains", "notes")
    );
    const querySnapshot = await getDocs(q);

    const subjects: SubjectNote[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
      subjects.push({
        id: doc.id,
        name: data.name,
        evaluation: data.evaluation,
        image: data.image,
        premium: data.premium,
        link: data.link,
      });
    });

    subjects.sort((a, b) => Number(a.premium) - Number(b.premium));
    notesCache = { data: subjects, expiry: now + CACHE_TIMEOUT };
    return subjects;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
}
