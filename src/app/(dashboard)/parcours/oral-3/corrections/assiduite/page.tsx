import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Assiduité',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'assiduité : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        <Text fontWeight="bold">Sujet disciplinaire</Text>
        <Text mt={4}>
          Vous êtes professeur d&apos;EPS en lycée, le jour de l&apos;évaluation d&apos;un cycle de danse, une élève de seconde refuse catégoriquement de présenter sa chorégraphie avec son groupe devant toute la classe.
        </Text>
        <Text  mt={2}>
          Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Évaluation de fin de cycle</Text> : obligatoire, donne lieu à une note</Text>
          <Text><Text fontWeight="bold" as="span">Lycée</Text> : notes importantes pour l&apos;orientation / période de construction identitaire</Text>
          <Text><Text fontWeight="bold" as="span">Une élève</Text> : fille</Text>
          <Text><Text fontWeight="bold" as="span">Refuse catégoriquement </Text>: opposition totale</Text>
          <Text><Text fontWeight="bold" as="span">Danse / chorégraphie </Text>: activité de représentation, de mise en avant du corps. Représentation devant un public imposé dans les textes.</Text>
          <Text><Text fontWeight="bold" as="span">Devant toute la classe </Text>: grand groupe de spectateurs</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> l’élève craint le regard des autres.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> l’élève se sent incompétente / peur d’avoir une mauvaise note.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> l’élève est cible de moqueries, ne se sent pas à l’aise dans la classe.</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1). L’activité de représentation que constitue la danse pose fréquemment la peur de se montrer devant les autres.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaire (pour H1) :</Text>
          <Text>Assiduité scolaire</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Climat de classe</Text>
          <Text>Réussite scolaire</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Faire appliquer le principe d’assiduité et les programmes scolaires, tout en ne braquant pas encore plus l’élève en question.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Communication : prendre l’élève à part pour discuter et comprendre la raison du refus.</Text>
          <Text>Expliquer l’obligation d’assiduité.</Text>
          <Text>Proposer une alternative : présenter la chorégraphie devant l’enseignant.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Préventif : Mettre en place dès le début de séquence et à chaque leçon, un moment de représentation devant un public, d’abord restreint (un camarade), puis de plus en plus important (un groupe, la demi-classe, la classe…).</Text>
          <Text>Apprendre à la classe à faire un retour constructif et non pas une critique, pour effacer la peur du jugement.</Text>
          <Text>Proposer un moyen juste d’évaluation si le cas se présente : présenter la chorégraphie devant toute la classe est bonifié.</Text>
          <Text>Se mettre en relation avec d’autres enseignants (musique, théâtre…) pour proposer une progressivité et continuité dans les représentations devant les autres.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Mener un projet artistique et culturel en lien avec une compagnie de danse. L’objectif serait de présenter en fin d’année une chorégraphie de danse, sur scène, avec des artistes professionnels. L’idée d’avoir un objectif de représentation de toute la classe dans un projet ambitieux pourrait davantage motiver les élèves à se présenter devant un public.</Text>
          <Text>Mener en lien avec la psyEN des ateliers sur la confiance en soi.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
