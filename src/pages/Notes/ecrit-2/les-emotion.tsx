import {
    Box,
    Heading,
    Text,
    List,
    Stack,
} from "@chakra-ui/react";
import { Section, Sommaire } from "../formatter";

export default function LesEmotions() {
    return (
        <Box>
            <Box
                as="header"
                bgGradient="to-r" gradientFrom="blue.500" gradientTo="red.400"
                p={6}
                color="white"
                display="flex"
                alignItems="center"
            >
                <Box>
                    <Heading as="h1" size="xl" fontWeight="bold">
                        Les Émotions
                    </Heading>
                    <Text as="span" textDecoration="underline">
                        Sujet
                    </Text>{" "}
                    : La place des émotions en EPS
                    <Text>ITEM : Comprendre, s’exprimer et apprendre à transmettre</Text>
                </Box>
            </Box>

            <Sommaire />
            <Box mx="auto" mt={8} >
                <Stack gap={10}>
                    <Section title="I. Accroches" bgColor="blue.100">
                        <Text>
                            « Le professeur ne tient pas suffisamment compte des émotions
                            véhiculées et générées par les APSA »
                            <Text as="i"> (Gagnaire & Lavie, 2005)</Text>
                        </Text>
                        <Text>
                            « Rares sont les disciplines qui sollicitent une telle implication
                            émotionnelle : c’est là un phénomène que les enseignants ne
                            peuvent ignorer »
                            <Text as="i"> (Gagnaire & Lavie, 2005)</Text>
                        </Text>
                    </Section>

                    <Section title="II. Définitions" bgColor="blue.200">
                        <Text color="pink.600">
                            « État affectif multidimensionnel qui s’accompagne de
                            manifestations physiologiques, cognitives, expressives et
                            subjectives. »
                            <Text as="i" display="block">
                                (Christophe, Les émotions, 1998)
                            </Text>
                        </Text>
                        <Text>
                            « Ces mouvements de l’âme sont souvent déclenchés par des
                            événements ou des objets qui affectent l’âme sans que la personne
                            en question les ait recherchés. Ils ne sont pas directement soumis
                            à la volonté ; ils s’imposent : des impulsions, des actions, des
                            pensées, des sentiments. »
                            <Text as="i"> Tcherkassof, Nico, Frijda, Les émotions..., 2014</Text>
                        </Text>
                        <Text>
                            « La notion d’« émotion » sert à indiquer des réponses complexes
                            (...), c’est-à-dire composées de plusieurs réponses, qu’elles
                            soient physiologiques, motrices, cognitives, affectives et/ou
                            ressenties (« syndrome multi-componentiel »). »
                            <Text as="i"> Tcherkassof, Nico, Frijda, Les émotions..., 2014</Text>
                        </Text>
                        <Text>
                            « L’évaluation de la pertinence d’un événement vis-à-vis des
                            intérêts du sujet constitue l’aspect probablement le plus central
                            de l’émotion »
                            <Text as="i">(Frijda, 2007)</Text>
                        </Text>
                    </Section>

                    <Section title="III. Ce qu’en disent les auteurs" bgColor="blue.300">
                        <Heading as="h3" size="md" mb={2}>
                            Damasio, 2017
                        </Heading>
                        <List.Root mb={4} pl={4}>
                            <List.Item>
                                Émotions primaires ou universelles : réactions fondamentales
                                comme la peur ou la joie.
                            </List.Item>
                            <List.Item>
                                Émotions secondaires ou sociales : influencées par notre
                                environnement social (ex : jalousie, culpabilité).
                            </List.Item>
                            <List.Item>
                                Émotions d’arrière-plan : états émotionnels influencés par des
                                facteurs internes (ex : fatigue, cycle biologique).
                            </List.Item>
                        </List.Root>
                        <Text>
                            « Les émotions sont un processus indispensable à la prise de
                            décision. »
                            <Text as="i" display="block">
                                (Damasio, 1995)
                            </Text>
                        </Text>
                    </Section>

                    <Section title="IV. Ce qu’en disent les textes officiels" bgColor="blue.400">
                        <Text>
                            « L’EPS apprend aux élèves à s’exprimer en utilisant des codes non
                            verbaux, gestuels et corporels originaux. »
                            <Text as="i" display="block">
                                (Cycle 3, BO spécial n°11, 2015)
                            </Text>
                        </Text>
                        <Text>
                            « Les émotions jouent un rôle essentiel pour maintenir
                            l’engagement dans les apprentissages. »
                            <Text as="i" display="block">
                                (Cycle 4, BO 2015)
                            </Text>
                        </Text>
                    </Section>

                    <Section title="Bloc de définition" bgColor="blue.500">
                        <Text>
                            « Les émotions sont un état affectif multidimensionnel (...).
                            L’élève les ressent et les exprime dans ses comportements et
                            prises de décisions. »
                            <Text as="i" display="block">
                                (V. Christophe, 1998)
                            </Text>
                        </Text>
                    </Section>

                    <Section title="Bloc argumentaire : Empathie" bgColor="blue.600">
                        <Text>
                            « Les élèves ne sont pas fraternels, ils ont des relations
                            difficiles et ont du mal à se comprendre. »
                            <Text as="i" display="block">
                                (J. Méard, 2015)
                            </Text>
                        </Text>
                        <Text>
                            Une démarche empathique par le corps favorise la compréhension et
                            la bienveillance envers autrui, tout en développant l’intelligence
                            relationnelle.
                            <Text as="i" display="block">
                                (Goleman, 2009)
                            </Text>
                        </Text>
                        <Text>
                            Exemple pratique : Utilisation du « jeu des mousquetaires » pour
                            renforcer les capacités d’observation, de coopération, et de
                            bienveillance dans une équipe.
                        </Text>
                    </Section>
                </Stack>
            </Box>
        </Box>
    );
}
