import { VStack } from "@chakra-ui/react";
import { Link } from "react-router";

export default function SidebarMobile({
    onClose,
}: {
    onClose: () => void;
}) {
    return (
        <VStack gap={4}>
            <Link to="/dashboard" onClick={onClose}>
                Tableau de bord
            </Link>
            <Link to="/quizz" onClick={onClose}>
                Quizz
            </Link>
            <Link to="/flashcards" onClick={onClose}>
                Flashcards
            </Link>
            <Link to="/chatbot" onClick={onClose}>
                Chatbot
            </Link>
            <Link to="/notes" onClick={onClose}>
                Fiches de révision
            </Link>
        </VStack>)

}