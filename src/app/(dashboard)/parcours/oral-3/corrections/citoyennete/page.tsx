import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Citoyenneté',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur la citoyenneté : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
          Vous êtes professeur principal d&apos;une classe de 3ème, vous devez organiser l&apos;élection des délégués de classe. Personne ne propose sa candidature.
        </Text>
        <Text  mt={2}>
          Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Délégués :</Text> représentants de la classe</Text>
          <Text><Text fontWeight="bold" as="span">Classe de 3</Text><Text fontWeight="bold" as="span">ème</Text> : pas nouveau pour eux, déjà eux l’expérience de la fonction de délégué. Validation du S4C fin en cycle 4. Brevet.</Text>
          <Text><Text fontWeight="bold" as="span">Doit organiser</Text> : obligation d&apos;avoir élu les délégués avant la 7ème semaine après la rentrée</Text>
          <Text><Text fontWeight="bold" as="span">Prof Principal</Text> : réalise les heures de vie de classe, responsable de l&apos;élection de délégués</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les élèves pensent qu&apos;ils ne servent à rien, ou à faire des tâches secondaires (distribuer les papiers, effacer le tableau…) / mauvaise expérience les années précédentes.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> stress d&apos;exercer des responsabilités / penser être incompétent pour la tâche</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> Charge de travail trop importante étant donné qu&apos;il s&apos;agit de l&apos;année du brevet et d&apos;un premier choix d&apos;orientation</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> mauvais climat de classe qui engendre la peur de se présenter devant les autres ou de proposer sa candidature</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1), étant donné la précision de la classe de 3ème dans le sujet.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Citoyenneté</Text>
          <Text>Démocratie</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Climat scolaire</Text>
          <Text>Vivre-ensemble</Text>
          <Text>Réussite scolaire</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Montrer l’importance de la fonction pour convaincre et avoir des candidats alors que le rôle est parfois réduit à des tâches sans grand intérêt.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Brainstorming : pour savoir pourquoi ils ne veulent pas être délégués et ce qu’ils pensent être le rôle de ce dernier. Clarifier son rôle.</Text>
          <Text>Expliquer l’importance d’avoir un représentant et les conséquences s’il n’y en a pas.</Text>
          <Text>Montrer la plus-value personnel : avantage sur CV, validation des éléments du S4C pris en compte dans le brevet, confiance en soi, capacités à l’oral.</Text>
          <Text>Présenter les différents délégués : délégué de classe, éco-délégué.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Avec le CPE : sélectionner les anciens délégués qui ont eu des expériences positives et les faire intervenir dans les classes</Text>
          <Text>Créer une formation « d&apos;apprenti délégué » interne qui peut consister en petits ateliers pour apprendre à s&apos;exprimer, savoir écouter les demandes et les restituer (prise de notes), ne pas avoir de jugement et savoir garder les infos pour soi, présentation d&apos;outils, simulation de conseil de classe. Possibilité de faire appel à d’autres acteurs (Fédération Aroéven, SEMEA).</Text>
          <Text>Valoriser les actions des délégués dans le Parcours Citoyen.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme :</Text>
          <Text>La 6ème semaine après la rentrée, organiser la semaine de la démocratie scolaire pour proposer des actions en lien avec cette valeur. A organiser avec le CA.</Text>
          <Text>Développer différentes responsabilités à l’échelle de l’établissement (exemple : tutorat 3è- 6è).</Text>
          <Text>Anticiper l&apos;élection : sacraliser l&apos;élection à l&apos;échelle de l&apos;établissement : campagne de présentation, urne et isoloir. Proposer l&apos;action au CA de début d&apos;année.</Text>
          <Text>Intervention d’un maire, pour une conférence sur la démocratie.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
