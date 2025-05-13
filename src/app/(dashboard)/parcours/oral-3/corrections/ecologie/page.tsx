import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Ecologie',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'écologie : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes professeur(e) d’Éducation Physique et Sportive dans un LP. Alors que vous passez dans la cour, vous remarquez des élèves qui jettent au sol des mouchoirs en papier et leurs bouteilles en plastique.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">LP</Text> : élèves en fin de scolarité, qui sont en en parallèle de l’école dans la vie active. Élèves fréquemment en opposition au système scolaire et aux règles de l’école.</Text>
          <Text><Text fontWeight="bold" as="span">Dans la cour</Text> : lieu où l’ensemble des personnels peuvent intervenir. Lieu placé sous la surveillance des AED.</Text>
          <Text><Text fontWeight="bold" as="span">Mouchoirs et bouteille</Text> : déchets.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 : </Text>les élèves se débarrassent de leur déchet n’importe où sans prendre conscience de leur geste</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> les élèves veulent provoquer les enseignants / se mettre en rupture avec les règles de vivre-ensemble</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> le lycée ne met pas à disposition de poubelles dans les espaces extérieurs.</Text>
          <Text>Nous retiendrons prioritairement les deux premières hypothèse, plus probables.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Écologie / développement durable</Text>
          <Text>Respect (des lieux, de la nature, de l’environnement, des adultes qui vont nettoyer, des autres)</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Citoyenneté</Text>
          <Text>Responsabilité</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Faire intégrer les gestes écologique à long terme aux élèves, à des élèves qui vont bientôt quitter l’école.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Reprendre les élèves, leur demander de ramasser leurs papiers et de les jeter dans une poubelle.</Text>
          <Text>Signaler cet incident aux AED de surveillance de la cour, afin qu’ils y soient attentifs.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Organiser une réunion avec les éco-délégués afin de faire trouver aux élèves des solutions à cette problématique.</Text>
          <Text>A discuter et faire voter en CA : Mettre en place un roulement de nettoyage de la cour par les élèves.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Inscrire l’établissement dans la démarche de labellisation E3D, et mener des actions en ce sens par l’ensemble de la communauté éducative (à discuter et faire voter en CA) :</Text>
          <Text>Créer un système de tri</Text>
          <Text>Eco défis (consommer le moins d’électricité possible sur une semaine, ne pas dépasser 5kg de gaspillage à la cantine…)</Text>
          <Text>Réaliser des projets : séquence de plogging (jogging et ramassage de déchets).</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
