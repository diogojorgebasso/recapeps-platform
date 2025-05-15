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
        Vous êtes professeur d’EPS en LP. Vous constatez, avec vos collègues d&apos;EPS, que certains élèves sont régulièrement absents, inaptes ou oublient leurs affaires lors de vos cours.    
        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">LP</Text> : difficultés scolaires fréquentes ; veulent s’engager rapidement dans le milieu professionnel ; pas forcément d’attrait pour l’école.</Text>
          <Text><Text fontWeight="bold" as="span">Collègues d’EPS</Text> <Text fontWeight="bold" as="span">/ certains élèves</Text> : cas généralisé.</Text>
          <Text><Text fontWeight="bold" as="span">Absents, inaptes, oublient leurs affaires</Text> : comportements d’évitement de l’école ou de la discipline.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> Économique : manque de moyens pour le matériel demandé en EPS (raquette, chaussures…), travail à côté des cours qui ne leur permet pas d’assurer les deux</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> Affective : pas de motivation pour l’école, subissent des discriminations, mal-être, ennui…</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> Cognitive : ne trouvent pas de sens dans les leçons, ne comprennent pas pourquoi un cours de danse va les aider dans leur bac pro carrosserie par exemple.</Text>
          <Text>Nous retiendrons prioritairement la troisième hypothèse (H3), étant donné le contexte du sujet.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H3) :</Text>
          <Text>Obligation d’instruction</Text>
          <Text>Assiduité</Text>
          <Text>Respect (du règlement)</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Citoyenneté</Text>
          <Text>Climat scolaire</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Faire en sorte que les élèves soient assidus et motivés pour venir à l’école, alors que ces derniers veulent accéder rapidement à la vie professionnelle et ne sont pas intéressés par les cours.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Aller voir les collègues hors EPS pour voir si le cas est généralisé ou spécifique à l’EPS</Text>
          <Text>Comme cela concerne beaucoup d’élèves, je proposerai en heure de vie de classe de laisser les élèves s’exprimer sur leur impressions à l’école : ce qui les dérange, ce qui leur plait, ce qu’ils attendent des enseignants…</Text>
          <Text>Je proposerais un test sur l’espace numérique de l’école afin d’évaluer les indicateurs de désengagement scolaire ou non chez chacun. Le test sera transmis sur l’espace numérique afin que les élèves absents puissent le réaliser également</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Réflexion en équipe pour proposer aux élèves décrocheurs une solution de raccrochage :</Text>
          <Text>Lycée des Possibles</Text>
          <Text>Classe/atelier/internat tremplins.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Trouver des solutions avec l’équipe pédagogique pour prévenir le décrochage scolaire. Car il s’agit d’un processus long et qui s’accumule.</Text>
          <Text>Revoir le projet établissement pour mettre un axe sur l’engagement des élèves dans les apprentissages. Pour cela, mettre en place des solutions concrètes :</Text>
          <Text>Évaluation par compétences / par capitalisation : pour voir ses progrès</Text>
          <Text>Note d’investissement citoyen (être à l’heure, avoir ses affaires…)</Text>
          <Text>Mener des projets concrets et transversaux entre la discipline et la voie professionnelle.</Text>
          <Text>Instaurer un système de mentorat sur les années lycée avec une personne ressource employée dans la voie professionnelle visée par l’élève.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
