import { db } from "@/lib/firebase/clientApp"
import { collection, where, query, limit, getDocs } from "firebase/firestore"

export async function getIsNotification(uid: string) {
    const docRef = collection(db, "users", uid, "notifications")
    const q = query(docRef, where("isRead", "==", false), limit(1))
    const snapshot = await getDocs(q)
    return snapshot.docs.length > 0
}
