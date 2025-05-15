import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Inclusion et harcèlement',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'inclusion et le harcèlement : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes professeur principal dans un LP, vous apprenez par un parent que son fils subit depuis la rentrée un harcèlement du fait de son handicap par un groupe d&apos;élèves de votre classe.
        </Text>
            <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" fontWeight="bold">Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">LP</Text> : souvent des petites, classes, non mixtes, ou tous les élèves ont le même projet professionnel. Souvent peu de diversité au sein des classes.</Text>
          <Text><Text fontWeight="bold" as="span">Professeur principal</Text> : référent de la classe et principal interlocuteur des parents en cas de souci</Text>
          <Text><Text fontWeight="bold" as="span">Harcèlement</Text> : violences répétées</Text>
          <Text><Text fontWeight="bold" as="span">Handicap</Text> : différence physique, motrice ou cognitive, peut avoir des aménagements particuliers</Text>
          <Text><Text fontWeight="bold" as="span">Groupe d&apos;élèves</Text> : plusieurs élèves non identifiées</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" fontWeight="bold">Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les élèves ont des appréhensions / préjugés / stéréotypes quant au handicap de leur camarade.</Text>
          <Text><Text fontWeight="bold" as="span">H2</Text><Text fontWeight="bold" as="span"> :</Text> les élèves sont jaloux des aménagements (1/3 temps, moins de devoirs…) dont cet élève dispose.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> les élèves ne savent pas comment se comporter face au handicap.</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1).</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" fontWeight="bold">Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Inclusion</Text>
          <Text>Violences</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Climat scolaire</Text>
          <Text>Fraternité</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" fontWeight="bold">Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>L&apos;enseignant doit trouver un moyen pour inclure l&apos;élève en situation de handicap, alors qu&apos;il n&apos;est même pas intégré, et même rejeté.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" fontWeight="bold">Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Rassurer les parents et se positionner comme acteur pour prendre la situation en main et agir rapidement.</Text>
          <Text>Proposer des solutions de soutien pour l’enfant s’il en éprouve le besoin (numéro 3020, psyEN)</Text>
          <Text>Avertir la direction et les responsables du programme pHARe.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Mettre en place, avec les personnels membres du programme pHARe la méthode de préoccupation partagée.</Text>
          <Text>Organiser en vie de classe (professeur principal) une séance de sensibilisation à l’école inclusive, avec l’aide du site « école-inclusive » et des ressources Éduscol.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Intervention d’une association telle que l’APAJH pour une sensibilisation</Text>
          <Text>Organiser lors de la semaine des différences, ou de la journée internationale des personnes handicapées, des enseignements en lien avec ce thème. En EPS nous pourrions proposer du sport adapté (volley-assis), en SVT étudier le fonctionnement du système neurologique et des déficiences, organiser un débat sur les discriminations en EMC…</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
