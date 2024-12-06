import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase"; // Adjust the path to your firebase configuration
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the Flashcard type
type Flashcard = {
    id: string;
    word: string;
    explanation: string;
    subject: string;
};

export default function FlashcardsPage() {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "flashcards"));
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
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    const currentFlashcard = flashcards[currentPage];

    const handleNext = () => {
        if (currentPage < flashcards.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Flashcards</h1>
            <div className="flex justify-center items-center">
                {currentFlashcard && (
                    <Flashcard
                        word={currentFlashcard.word}
                        explanation={currentFlashcard.explanation}
                    />
                )}
            </div>
            <div className="flex justify-between items-center mt-8">
                <Button
                    onClick={handlePrevious}
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
                    disabled={currentPage === flashcards.length - 1}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
}

function Flashcard({ word, explanation }: { word: string; explanation: string }) {
    const [showExplanation, setShowExplanation] = useState(false);

    return (
        <Card className="border p-6 max-w-md w-full">
            <CardHeader>
                <CardTitle className="text-2xl text-center">{word}</CardTitle>
            </CardHeader>
            <CardContent>
                {showExplanation ? (
                    <p className="text-center text-gray-800">{explanation}</p>
                ) : (
                    <p className="text-center text-gray-500">Cliquez pour révéler l'explication</p>
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
