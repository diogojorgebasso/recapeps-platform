import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/firebase";
import { Link } from "react-router";

type Subject = {
    id: string;
    name: string;
};


export default function FlashcardsSubject() {
    const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "flashcards"));
                const subjectsList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                })) as Subject[];
                setSubjects(subjectsList);
            } catch (error) {
                console.error("Error fetching subjects:", error);
            }
        };
        fetchSubjects();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Choisissez un sujet</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                    <Link key={subject.id} to={`/flashcards/${subject.name}`}>
                        <Button
                            key={subject.id}
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            {subject.name}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );

}
