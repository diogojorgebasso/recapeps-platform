"use server";

import { redirect } from 'next/navigation'
import { Box, Text, Link } from '@chakra-ui/react'
import { stripe } from '@/lib/stripe';

export default async function Return({
    searchParams
}: {
    searchParams: Promise<{ session_id: string }>
}) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        customer_details,
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        return (
            <Box as="section" id="success">
                <Text>
                    Merci pour votre confiance {customer_details?.name}! Un email de confirmation a été ennvoyé à
                    {customer_details?.email}. Si vous avez des questions, n&apos;hésitez pas à nous contacter à l&apos;adresse suivante :
                </Text>
                <Link href="mailto:support@recapeps.fr">support@recapeps.fr</Link>. {/* Use Link for anchor */}
                <Text>
                    Bonnes révisions et à bientôt sur Recap&apos;eps!
                </Text>
            </Box>
        )
    }
}