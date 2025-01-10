import {
    Box,
    Heading,
    Table,
    Text,
} from "@chakra-ui/react";

import { HeaderNotes, Section, Sommaire } from "../formatter";

export default function mixiteSexuee() {
    return (
        <Box>
            <HeaderNotes
                title="Mixité sexuée"
                exam="Écrit 1"
                item="Transmettre et adapter"
                gradientFrom="blue.500"
                gradientTo="red.400"
            />
            <Sommaire />

            <Box maxW="4xl" mx="auto" mt={8} gap={12}>
                <Section title="Accroches" bgColor="blue.100">
                    <Text mb={2}>
                        « Tant que l'école restera indifférente aux différences des élèves,
                        beaucoup d'élèves resteront indifférents à l'école ».
                        <Text as="span" fontStyle="italic">
                            (L. Legrand, Pour un collège démocratique, La documentation
                            française, 1982)
                        </Text>
                    </Text>
                    <Text mb={2}>
                        « Les écoles, les collèges et les lycées contribuent à favoriser la
                        mixité et l’égalité entre les hommes et les femmes »
                        <Text as="span" fontStyle="italic">
                            (Article 5 de la loi Fillon du 23 mai 2008)
                        </Text>
                    </Text>
                    <Text>
                        “La poursuite de la promotion de l’égalité entre les filles et les
                        garçons sera également au cœur de notre action.”
                        <Text as="span" fontStyle="italic">
                            (Circulaire de rentrée 2024, “Ne laisser aucun élève au bord du
                            chemin”).
                        </Text>
                    </Text>
                </Section>

                <Section title="II. Définitions" bgColor="blue.200">
                    <Heading size="sm" mt={4}>
                        Mixité
                    </Heading>
                    <Text color="pink.600">
                        « Fait de dispenser un enseignement commun à un groupe de garçons et
                        de filles dans le but de leur permettre de s’approprier une culture
                        commune tout en reconnaissant la place et les caractéristiques de
                        chacun »
                        <Text as="span" fontStyle="italic">
                            (Lamotte, PUF 2005).
                        </Text>
                    </Text>
                    <Text>
                        « Le fait d’éduquer les filles et les garçons ensemble »
                        <Text as="span" fontStyle="italic">
                            (Thierry Terret, Cogérino, Pratiques et représentations de la
                            mixité en EPS, Paris, Editions Revue EPS de 2006).
                        </Text>
                    </Text>
                    <Heading size="sm" mt={4}>
                        Genre
                    </Heading>
                    <Text>
                        « Ensemble des formes d’expression sociales de la féminité et de la
                        masculinité et l’ensemble des signes, des symboles qui dénotent une
                        appartenance identitaire et fondent un type de relation entre les
                        sexes ou au sein de chacun des sexes »
                        <Text as="span" fontStyle="italic">
                            (JSM, Sports et genre, Vol 1, 2005).
                        </Text>
                    </Text>
                    <Text>
                        Renvoie aux rôles qui y sont associés, déterminés
                        <Text as="span" fontStyle="italic">
                            (Bourdieu).
                        </Text>
                    </Text>
                </Section>

                <Section title="III - Proposition de plan" bgColor="blue.200">
                    <Box overflowX="auto" border="1px" borderColor="gray.300" rounded="md">
                        <Table.Root variant="outline" colorScheme="gray">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader color="pink.600" textAlign="center">
                                        1918 - 1959
                                    </Table.ColumnHeader>
                                    <Table.ColumnHeader color="pink.600" textAlign="center">
                                        1959 - 1985
                                    </Table.ColumnHeader>
                                    <Table.ColumnHeader color="pink.600" textAlign="center">
                                        1985 - 2025
                                    </Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        Séparation des Filles et des Garçons, en terme spatial, de
                                        contenu, de méthodes
                                    </Table.Cell>
                                    <Table.Cell>
                                        Avènement de la mixité scolaire, qui reste peu appliquée sur
                                        le terrain
                                    </Table.Cell>
                                    <Table.Cell>
                                        La mixité est établie à l’école et en EPS
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Un début de coéducation tend à s’installer</Table.Cell>
                                    <Table.Cell>
                                        Certains novateurs en faveur de la mixité et de l’égalité
                                        des sexes vont agir en ce sens à l’école et en EPS
                                    </Table.Cell>
                                    <Table.Cell>
                                        La mixité installée n’induit pas une égalité entre les
                                        sexes
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Root>
                    </Box>
                </Section>
            </Box>
        </Box>
    );
}
