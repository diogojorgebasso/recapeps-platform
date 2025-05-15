'use client'

import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { httpsCallable } from 'firebase/functions'
import { functions } from '@/lib/firebase/clientApp'
import { useCallback } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

export default function Checkout({ priceId }: { priceId: string }) {

    if (!priceId) {
        throw new Error('Please provide a valid priceId (`price_1...`)')
    }

    const fetchClientSecret = useCallback(async () => {
        const createSession = httpsCallable<
            { priceId: string },
            string
        >(functions, 'createstripecheckoutsession');

        try {
            const { data: clientSecret } = await createSession({ priceId });
            return clientSecret;
        } catch (err: any) {
            throw err;
        }
    }, [priceId]);



    return (
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    )
}