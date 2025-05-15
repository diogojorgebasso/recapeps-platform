'use client';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import { toaster } from '@/components/ui/toaster';
import { callCreatePortal } from '../userFunctions';

export default function SubscriptionSection({ pro }: { pro: boolean }) {
    const [loading, setLoading] = useState(false);

    const openPortal = async () => {
        setLoading(true);

        const { data } = await callCreatePortal({});
        if (data.url) window.open(data.url, '_blank');
        else
            toaster.create({ type: 'error', title: data.error ?? 'Lien indisponible' });
        setLoading(false);
    };

    if (pro)
        return (
            <VStack align="start">
                <Heading as="h3" size="md">
                    Mon abonnement
                </Heading>
                <Text>Vous possédez un abonnement Recap’eps Pro.</Text>
                <Button onClick={openPortal} loading={loading} colorPalette="orange">
                    Gérer mon abonnement
                </Button>
            </VStack>
        );

    return (
        <>
            <Heading as="h3" size="md" mb={4}>
                Passer à Recap’eps Pro
            </Heading>
            <Button asChild>
                <Link href="/checkout">S’abonner</Link>
            </Button>
        </>
    );
}
