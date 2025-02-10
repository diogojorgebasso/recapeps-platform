import { Container, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

export default function Success() {
    return (
        <Container maxW="container.md" py={10}>
            <VStack gap={6} textAlign="center">
                <Icon as={FaCheckCircle} w={16} h={16} color="green.500" />
                <Heading size="xl">Bonne chance pour tes révisions 🚀!</Heading>
                <Text fontSize="lg">
                    Félicitations, tu es désormais titulaire d’un abonnement Recap’eps pro, tu peux maintenant accéder à tout le contenu disponible sur le site. Régale-toi et n’hésite pas à nous faire un retour sur ton expérience !
                </Text>
                <Text fontSize="md" >
                    PS: Cela peut prendre un peu de temps pour procéder à la vérification de tes données alors pas de panique si ton abonnement n’apparaît pas dans la seconde ;)
                </Text>
            </VStack>
        </Container>
    );
};
