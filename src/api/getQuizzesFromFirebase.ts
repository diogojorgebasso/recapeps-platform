import { getFirestore, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";

export async function getQuizzesFromFirebase(userId: string) {
    const db = getFirestore();
    const quizResultsRef = collection(db, "quizResults");

    const q = query(
        quizResultsRef,
        where("userId", "==", userId),
        orderBy("completedAt", "desc"),
        limit(5) // Pega os últimos 5 quizzes realizados
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
