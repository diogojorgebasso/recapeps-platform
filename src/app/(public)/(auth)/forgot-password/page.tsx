import { getAuthenticatedAppForUser } from '@/lib/firebase/serverApp';
import { redirect } from 'next/navigation';
import ClientComponent from './ClientComponent';

export default async function Page() {

    const { user } = await getAuthenticatedAppForUser();

    if (user) {
        redirect("/parcours/dashboard")
    }

    return (<ClientComponent />)
}
