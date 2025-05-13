import ClientComponent from "./ClientComponent";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";

async function getOral(firebaseServerApp: any, subjectId: string) {
    const db = getFirestore(firebaseServerApp);
    return await getDoc(doc(db, "oral-3", subjectId));
}
export default async function Page({ params }: { params: Promise<{ subject: string }> }) {
    const { subject } = await params;
    const { firebaseServerApp } = await getAuthenticatedAppForUser();
    const oralDoc = await getOral(firebaseServerApp, subject);
    const title = oralDoc.data()?.title || "Oral Exercise";

    return <ClientComponent title={title} subjectId={subject} />;
}