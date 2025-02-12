import { Container, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

export default function Success() {
    return (
        <Container maxW="container.md" py={10}>
            <VStack gap={6} textAlign="center">
                <Icon as={FaCheckCircle} w={16} h={16} color="green.500" />
                <Heading size="xl">Bonne chance pour tes révisions 🚀!</Heading>
                <Text color="red" fontWeight="bold" as="h2">
                    Notre plateforme vient de démarrer, et les paiements peuvent donc prendre jusqu'à 2 minutes pour être vérifiés. Nous sommes déjà en train de résoudre ce problème au plus vite.
                    En cas de souci, n’hésitez pas à me contacter : diogojbasso@gmail.com.
                </Text>
                <Text fontSize="lg">
                    Félicitations, tu es désormais titulaire d’un abonnement Recap’eps pro, tu peux maintenant accéder à tout le contenu disponible sur le site. Régale-toi et n’hésite pas à nous faire un retour sur ton expérience !
                </Text>
            </VStack>
        </Container>
    );
};
