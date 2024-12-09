import { addMultipleQuizzesToFirestore } from "@/api/boilerPlateQuizzes"

export default function DashboardAdmin() {
    return (
        <div>
            <h1>Dashboard Admin</h1>
            <button onClick={() => addMultipleQuizzesToFirestore} >Add quizz</button>
        </div>
    )
}