import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase"; // Ajuste o caminho para sua configuração do Firebase
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router";

type Flashcard = {
    id: string;
    answer: string;
    question: string;
};


export default function FlashcardsSubject() {
    const { subjectId } = useParams();
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchFlashcards = async () => {
            if (!subjectId) return;
            setLoading(true);
            try {
                const querySnapshot = await getDocs(
                    collection(db, "flashcards", subjectId, "questions")
                );
                const cards = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Flashcard[];
                setFlashcards(cards);
            } catch (error) {
                console.error("Error fetching flashcards:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFlashcards();
    }, [subjectId]);



    if (loading) {
        return <div className="flex justify-center items-center h-screen">Chargement...</div>;
    }

    if (!flashcards.length) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Aucun flashcard trouvé pour ce sujet.</p>
            </div>
        );
    }

    if (currentPage === flashcards.length) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Card className="border p-6 max-w-md w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Félicitations!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-xl text-white">
                            Vous avez terminé toutes les flashcards.
                        </p>
                        <Button
                            onClick={() => navigate("/flashcards")}
                            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white"
                        >
                            Retour à tout les sujets
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
    const currentFlashcard = flashcards[currentPage];

    const handleNext = () => {
        if (currentPage < flashcards.length) {
            setCurrentPage(currentPage + 1);
        }
        setShowExplanation(false);
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        setShowExplanation(false)
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Flashcards</h1>
            <div className="flex justify-center items-center">
                {currentFlashcard && (
                    <Flashcard
                        word={currentFlashcard.question}
                        explanation={currentFlashcard.answer}
                        showExplanation={showExplanation}
                        setShowExplanation={setShowExplanation}
                    />
                )}
            </div>
            <div className="flex  items-center mt-8">
                <Button
                    onClick={handlePrevious}
                    variant="default"
                    disabled={currentPage === 0}
                    className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
                >
                    Précédent
                </Button>
                <span className="text-lg">
                    {currentPage + 1} / {flashcards.length}
                </span>
                <Button
                    onClick={handleNext}
                    variant="success"
                    disabled={currentPage === flashcards.length}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}

function Flashcard({ word, explanation, showExplanation,
    setShowExplanation }: {
        word: string;
        explanation: string,
        showExplanation: boolean;
        setShowExplanation: React.Dispatch<React.SetStateAction<boolean>>;
    }) {

    return (
        <Card className="border p-6 max-w-md w-full">
            <CardHeader>
                <CardTitle className="text-2xl text-center">{word}</CardTitle>
            </CardHeader>
            <CardContent>
                {showExplanation ? (
                    <p className="text-center text-xl text-white">{explanation}</p>
                ) : (
                    <p className="text-center text-gray-500">
                        Cliquez pour révéler l'explication
                    </p>
                )}
                <Button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white"
                >
                    {showExplanation ? "Cacher l'explication" : "Montrer l'explication"}
                </Button>
            </CardContent>
        </Card>
    );
}
