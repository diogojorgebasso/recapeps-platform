import { logEvent, getAnalytics } from "firebase/analytics"

import QuizScoresChart from "@/components/dashboard/historicData";
import StyledQuizScoresChart from "@/components/dashboard/historicData2";

export default function Dashboard() {
    const analytics = getAnalytics();
    logEvent(analytics, 'tutorial_started');

    return (
        <div>
        <h1>Dashboard</h1>
        <QuizScoresChart />
        <StyledQuizScoresChart />
        </div>
    )
}