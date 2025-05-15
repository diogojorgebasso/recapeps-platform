import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function CultureCorporellePage() {
    return (
        <Box flex="1" p={6}>
            <Heading as="h1" size="2xl" mb={6}>
                Culture Corporelle
            </Heading>

            <VStack align="start" gap={6}>
                <Box id="accroche">
                    <Heading as="h2" size="lg" mb={2}>I. Accroche</Heading>
                    <Text>
                        L’éducation des corps en EP est « Mise en œuvre des moyens propres à assurer la formation et le développement d’un être humain, cela dans le but d’intégrer et intérioriser la culture propre à un groupe » (Pierre Arnaud, 1991).
                    </Text>
                    <Text mt={2}>
                        L’éducation des corps a donc toute sa légitimité à l’école (transmission d’une culture physique) ET cette culture évolue selon les périodes.
                    </Text>
                    <Text mt={2}>
                        - Quel patrimoine corporel est jugé digne d’être enseigné ?<br />
                        - Les valeurs transmises sont-elles en phase avec les normes scolaires ?<br />
                        - APSA VS sport en EPS
                    </Text>
                </Box>

                <Box id="definitions">
                    <Heading as="h2" size="lg" mb={2}>II. Définitions</Heading>
                    <Heading as="h3" size="md" mb={2}>Corps</Heading>
                    <Text>
                        David Le Breton distingue deux dimensions :
                        - Le corps physique (Körper) : apparence, postures, gestes.
                        - Le corps vécu (Leib) : perception mentale, symbolique.
                    </Text>
                    <Text mt={2}>
                        « Le corps est le symbole dont use une société pour parler de ses fantasmes » – Michel Bernard (1973).
                    </Text>
                    <Heading as="h3" size="md" mt={4} mb={2}>Culture</Heading>
                    <Text>
                        « Ensemble des comportements, institutions, idéologies et symboles construits par l’homme » – Tylor (1871).
                    </Text>
                </Box>

                <Box id="problematique">
                    <Heading as="h2" size="lg" mb={2}>III. Problématique et plan</Heading>
                    <Text>
                        L’éducation physique suit la culture corporelle de la société. L’évolution est passée d’un contrôle direct par l’enseignant à une approche centrée sur l’élève.
                    </Text>
                    <Text mt={2}>
                        Trois grandes périodes :
                        - 1918-1959 : hygiène, santé, patriotisme
                        - 1959-1981 : performance, sportivisation
                        - 1981-2025 : autonomie, citoyenneté
                    </Text>
                </Box>

                <Box id="plan-detaille">
                    <Heading as="h2" size="lg" mb={2}>IV. Plan détaillé et contenu</Heading>
                    <Heading as="h3" size="md" mb={2}>1918 - 1959 : Culture hygiénique</Heading>
                    <Text>
                        Contexte post-guerre, discours hygiéniste, contrôle des corps, inégalités de genre.
                    </Text>
                    <Text mt={2}>
                        Exemples : Brevet Sportif Populaire, IO 1941 et 1945, pédagogie directive.
                    </Text>
                    <Heading as="h3" size="md" mt={4} mb={2}>1962 - 1981 : Corps performant</Heading>
                    <Text>
                        Référence au sport, compétitions, évaluation chiffrée. Filles vs garçons : programmes différenciés.
                    </Text>
                    <Heading as="h3" size="md" mt={4} mb={2}>1981 - 2025 : Corps pluriel</Heading>
                    <Text>
                        Prise en compte de la personnalité, autonomie, citoyenneté. IO 1985, 1986, 1988, programmes lycée 2000-2019.
                    </Text>
                </Box>

                <Box id="conclusion">
                    <Heading as="h2" size="lg" mb={2}>V. Conclusion</Heading>
                    <Text>
                        L’EPS évolue d’un contrôle strict des corps vers un accompagnement de l’autonomie et de la responsabilisation des élèves dans une logique de projet et de citoyenneté.
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}
