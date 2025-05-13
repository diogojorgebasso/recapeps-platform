import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Climat scolaire',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur le climat scolaire : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
}

const Page = () => {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <VStack align="start">
      <Box
        w={{ base: "90%", md: "70%", lg: "66%" }}
        border="5px solid"
        borderRadius="lg"
        p={{ base: 4, md: 6 }}
        boxShadow="md"
        textAlign="center"
        alignSelf={"center"}
        my={"4"}
      >
        <Text fontWeight="bold">Sujet vie scolaire</Text>
        <Text mt={4}>
        Vous êtes professeur d’EPS dans une cité scolaire péri-urbaine, où l’infirmière constate un mal-être croissant des élèves. Le proviseur demande à la communauté éducative de faire des propositions pour favoriser l’épanouissement de tous dans un environnement serein. 
        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Mal-être</Text> : sentiment général de malaise profond, vécu douloureux qui dure ; stress, souffrance psychologique.</Text>
          <Text><Text fontWeight="bold" as="span">Croissant </Text>: situation qui empire</Text>
          <Text><Text fontWeight="bold" as="span">Épanouissement / environnement serein</Text> : sentiment de plénitude, satisfaction au niveau physique, intellectuel, affectif, social.</Text>
          <Text><Text fontWeight="bold" as="span">Communauté éducative</Text> : ensemble des membres de l’école : direction, CPE, enseignants, AED, psyEN, personnel TOS, élèves, parents, infirmier.</Text>
          <Text><Text fontWeight="bold" as="span">Cité scolaire</Text> : collège et lycée, âges différents, parcours différents.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les élèves ne se sentent pas à leur place (filières dénigrées, orientation subie…).</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> la sécurité affective et physique n’est pas assurée (violences, harcèlement…).</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> le sentiment d’appartenance n’est pas assuré dans un si grand établissement.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> causes externes : contexte familial difficile, pression sur les résultats scolaires.</Text>
          <Text>Nous retiendrons prioritairement l’ensemble des hypothèses faisant référence au climat scolaire (H1 - H2 - H3), puisque le sujet laisse penser qu’une pluralité de causes amène à ce problème large et généralisé dans l’établissement.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1)</Text>
          <Text>Climat scolaire</Text>
          <Text>Santé</Text>
          <Text>Sécurité</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Fraternité</Text>
          <Text>Solidarité</Text>
          <Text>Citoyenneté</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Permettre l’épanouissement de tous dans un environnement ou le public est particulièrement hétérogène, et n’a ainsi pas les mêmes problématiques/aspirations.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Communiquer avec l’infirmière pour avoir plus de précision sur le type de mal-être</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Mesurer le climat scolaire grâce à l’indice de climat scolaire qui se traduit par un questionnaire anonyme ou les élèves doivent répondre aux questions selon une échelle de 1 à 4 à chaque fois  permet de cibler les catégories ou on retrouve majoritairement un problème</Text>
          <Text>voir si c’est plutôt au niveau des relations, de l’enseignement, de la sécurité, de l’environnement, du sentiment d’appartenance</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>En fonction des résultats du test de climat scolaire, adapter les solutions</Text>
          <Text>Relations : démarche de coopération entre pairs</Text>
          <Text>Apprentissage ; développer une pédagogie de la réussite</Text>
          <Text>Harcèlement : solliciter les référents harcèlement, la psyEN</Text>
          <Text>Mise en place du YAM, porté par le Centre National de Suicide et de recherche en Prévention de la santé mentale.</Text>
          <Text>Développer la pédagogie du projet pour engager les élèves de façon solidaire et avec des objectifs ambitieux.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
