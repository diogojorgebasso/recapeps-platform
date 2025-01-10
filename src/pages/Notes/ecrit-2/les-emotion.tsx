import {
    Box,
    Heading,
    Text,
    List,
    Stack,
} from "@chakra-ui/react";
import { CTA, Section, Sommaire } from "../formatter";
import { HeaderNotes } from "../formatter";

export default function LesEmotions() {
    return (
        <Box>
            <HeaderNotes
                title="Les émotions"
                exam="Ecrit 2"
                item="Comprendre, s'expr"
            />

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

                    <Section title="VI. Liens avec d’autres thèmes">
                        <Text></Text>
                    </Section>

                    <Section title="VII. Bloc de définition" bgColor="blue.500">
                        <Text>
                            « Les émotions sont un état affectif multidimensionnel (...).
                            L’élève les ressent et les exprime dans ses comportements et
                            prises de décisions. »
                            <Text as="i" display="block">
                                (V. Christophe, 1998)
                            </Text>
                        </Text>
                    </Section>

                    <Section title="VIII. Bloc argumentaire : Empathie" bgColor="blue.600">
                        <Text>
                            Pour ouvrir nos propos nous partons d’un constat formulé par J.Méard. L’auteur nous révèle que « les élèves ne sont pas fraternels » ils ont des relations difficiles, et ont du mal à se comprendre ».
                            (Méard, les compétences sociales en EPS « faut-il didactiser la fraternité », revue EPS n°364, 2015).
                            Or les relations entre pairs font partie intégrante de l’environnement des enfants et adolescents à l’école.
                            Celles-ci influencent leur apprentissages et leur réussite scolaire (Dejaiffe et Espinosa, 2013)
                            et constituent un des facteurs du bien-être social de l’élève à l’école (Christophe Marsollier, Le bien-être des enfants à l’école : fondements et enjeux, 2019).
                        </Text>
                        <Text>
                            Pour être acteur du climat scolaire / favoriser les apprentissages des élèves, dans l’établissement X, nous décidons d’agir sur l’amélioration des relations entre pairs, en mettant en œuvre une démarche d’éducation à l’empathie par le corps, dans la mesure où « la relation à autrui s’établit d’abord et avant tout dans et par le corps qui est à la fois expression et langage » (BRUNEL, M-L. & COSNIER, J., L’empathie : un sixième sens, PUL, 2012, p. 13). De plus, l’entrée dans une démarche empathique par le corps va permettre à l’élève de développer à la fois la compréhension et la bienveillance envers les autres, tout autant que son « intelligence relationnelle » (GOLEMAN, D., Cultiver l’intelligence relationnelle, 2009), condition nécessaire à la réussite personnelle et professionnelle. Le climat scolaire, tout comme les apprentissages s’en trouvent ainsi renforcés.
                        </Text>
                        <Text>
                            A titre d’exemple, nous nous inscrivons dans la classe de X, dans la séquence de X.
                        </Text>
                        <Text>
                            Nous prenons appui sur la situation du « jeu des mousquetaires », (Canvel et al, santé, le bien-être et le climat scolaire,2018), en opérant un traitement pédagogique et didactique propre à notre environnement.
                            Pour cela nous formons 5 équipes. Les élèves sont volontairement répartis avec des niveaux hétérogènes, et les groupements affinitaires habituels sont partiellement séparés, afin de permettre aux élèves en léger conflit ou avec peu d’affinité d’entrer dans une démarche de compréhension et d’ouverture à l’autre.

                            Dans chaque équipe, 4 élèves sont placés dans une position de renforcement spécifique située dans la marge haute de leur zone proximale de développement, afin que l’exercice les mette légèrement en difficulté. En effet, le 5èmeélève devra pendant ce temps là X (faire une traversée, réaliser des gammes, faire un parcours gymnique…), jusqu’à ce qu’un des élèves en position de renforcement veuille échanger sa place avec lui. Le but étant pour l’équipe de 5 élève de tenir le plus longtemps possible dans les positions données. Les élèves statiques peuvent interpeller le dernier membre de leur équipe par la voix ou un signal corporel. Mais l’élève en situation dynamique se doit également d’être attentif aux expressions faciales, signaux corporels de fatigue (tremblements, affaissement…) afin de pouvoir échanger volontairement sa place afin de ne pas perdre le défi. Les élèves regroupés dans la même équipe ont également tout intérêt à discuter entre eux, dans la mesure où un seul élève à la fois peut échanger sa place. Nous incitons par cette pratique les comportements bienveillants (« vas-y d’abord, j’irais ensuite ») ainsi que les capacités d’observations et d’écoute de l’autre.
                            Cette mise en œuvre s’inscrit ainsi parfaitement dans le cadre du domaine 1 du socle « les langages pour penser et communiquer ».
                            Nous pouvons complexifier cette situation en interdisant la communication par la parole, ce qui impliquera un travail davantage axé sur la lecture et communication corporelle, et ainsi de s’axer encore davantage dans la compétence « apprendre à s’exprimer en utilisant son corps » (compétence travaillée cycle 2,3,4).
                        </Text>

                    </Section>

                    <CTA linkTo="/quizz/ecrit-1/mixité-sexuée" />
                </Stack>

            </Box>
        </Box>
    );
}
