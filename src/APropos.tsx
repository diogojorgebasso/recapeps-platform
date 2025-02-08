import {
    Box,
    Container,
    Heading,
    Text,
    Highlight,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router";

export default function APropos() {
    return (
        <Box
            minH="100vh"
            alignItems="center"
            justifyContent="center"
        >
            {/* Título principal */}
            <Heading
                as="h1"
                size="xl"
                textAlign="center"
                fontWeight="extrabold"
                mb="8"
            >
                <Highlight query="Recap’eps" styles={{ color: "orange.600" }}>
                    À propos de  Recap’eps
                </Highlight>
            </Heading>


            {/* Título de section */}
            <Heading
                as="h2"
                size="lg"
                mb="4"
                color="gray.800"
                _dark={{ color: "gray.100" }}
            >
                Notre raison d’être :
            </Heading>

            <Text
                fontSize="lg"
                lineHeight="tall"
                mb="6"
            >
                Recap’eps est né d’un constat simple : accéder à du contenu de qualité, eh ben ça coûte cher et ce n’est pas forcément facile. Un étudiant lambda n’a pas toujours les moyens de débourser des centaines d’euros pour acheter des fiches de révision ou des formations en ligne.


            </Text>

            {/* Pourquoi Nous Choisir */}
            <Heading
                as="h2"
                size="lg"
                mb="4"
            >
                Notre mission :
            </Heading>
            <Text fontSize="lg"
                lineHeight="tall"
                mb="6">
                Notre ambition est claire : Démocratiser l’accès aux meilleures ressources pour préparer le CAPEPS.
                Nous mettons à disposition du contenu de qualité, conçu par des étudiants ayant brillamment réussi leurs concours du CAPEPS, ainsi que des outils interactifs pour vous permettre d’assimiler efficacement les notions clés.
                Notre mission est en fin de compte de permettre à tous de se préparer dans les meilleures conditions au concours du CAPEPS, sans que l’aspect financier ne soit jamais un frein. L’objectif ? Que tous les candidats puissent arriver aux épreuves avec les mêmes cartes en main.
            </Text>
            <Heading
                as="h2"
                size="lg"
                mb="4"
                color="gray.800"
                _dark={{ color: "gray.100" }}
            >
                Construisons l’avenir ensemble
            </Heading>

            <Text
                fontSize="lg"
                lineHeight="tall"
                mb="6"
            >
                Recap’eps est un outil de révision conçu par des étudiants, pour des étudiants. C’est un projet collaboratif qui ne fait que commencer. Votre avis compte !



                Si vous souhaitez nous aider à améliorer nos services, n’hésitez pas à nous faire des retours en masse sur votre expérience utilisateur. Toutes les critiques sont bonnes à prendre. Pour cela, vous pouvez remplir ce Google Form (URL) ou nous contacter directement par mail à l’adresse support@recapeps.fr.



                Ce sont vos suggestions qui nous permettent d’évoluer et d’adapter nos services à vos besoins. C’est par vos critiques que nous construirons le monde de demain, ou dans un futur plus proche, que vous appréhenderez sereinement les épreuves du CAPEPS.

            </Text>

            <Box mt="10" textAlign="center">
                <Button
                    bgGradient="to-r"
                    gradientFrom="blue.500"
                    gradientTo="blue.600"
                    color="white"
                    py="3"
                    px="6"
                    rounded="lg"
                    shadow="lg"
                    _focus={{ ring: 4, ringColor: "blue.300", _dark: { ringColor: "blue.700" } }}
                    transition="all 0.3s"
                >
                    <Link to="/contact">
                        Contactez-Nous
                    </Link>
                </Button>
            </Box>
        </Box>
    );
}
