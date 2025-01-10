import { addQuestionsToFirestore } from "@/api/boilerPlateQuizzes"

export default function DashboardAdmin() {
    return (
        <div>
            <h1>Dashboard Admin</h1>
            <button onClick={() => addQuestionsToFirestore()} >Add quizz</button>
        </div>
    )
}