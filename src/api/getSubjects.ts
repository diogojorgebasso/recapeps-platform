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
    console.log(subjectsCache.data);
    return subjectsCache.data;
  }
  try {
    const q = query(
      collection(db, "subjects"),
      where("contains", "array-contains", "quiz")
    );
    const querySnapshot = await getDocs(q);

    let subjects: Subject[] = [];
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
    // Group notes by evaluation and premium status
    const freeEcrit1 = subjects.filter(
      (note) => !note.premium && note.evaluation === 1
    );
    const paidEcrit1 = subjects.filter(
      (note) => note.premium && note.evaluation === 1
    );
    const freeEcrit2 = subjects.filter(
      (note) => !note.premium && note.evaluation === 2
    );
    const paidEcrit2 = subjects.filter(
      (note) => note.premium && note.evaluation === 2
    );
    const orderedSubjects = [
      ...freeEcrit1,
      ...paidEcrit1,
      ...freeEcrit2,
      ...paidEcrit2,
    ];

    notesCache = { data: orderedSubjects, expiry: now + CACHE_TIMEOUT };
    return orderedSubjects;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
}
