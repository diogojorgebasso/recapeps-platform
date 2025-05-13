import QuizComponent from './QuizComponent';

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (
        <QuizComponent quizId={id} />
    );
}
