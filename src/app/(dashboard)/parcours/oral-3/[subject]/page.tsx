import ClientComponent from "./ClientComponent";

export default async function Page({ params }: { params: Promise<{ subject: string }> }) {
    const { subject } = await params;
    return <ClientComponent subjectId={subject} />;
}