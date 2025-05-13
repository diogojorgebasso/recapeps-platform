import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Santé',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur la santé : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes professeur(e) d’Éducation Physique et Sportive dans un collège REP+. Depuis quelques semaines, vous constatez que vos élèves consomment des chips et des sodas en guise de goûter après les cours d’EPS.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Collège REP+</Text> : élèves issus de familles avec parents de CSP défavorisées.</Text>
          <Text><Text fontWeight="bold" as="span">Quelques semaines / vos élèves</Text> : habitude qui s’installe et se diffuse.</Text>
          <Text><Text fontWeight="bold" as="span">Chips et sodas</Text> : aliments gras et sucrés.</Text>
          <Text><Text fontWeight="bold" as="span">Après les cours d’EPS</Text> : une fois l’activité physique terminée. Discipline qui éduque de façon prioritaire à la santé.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les élèves suivent un effet de groupe.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> les élèves ont faim après l’activité physique et mangent des aliments qui semblent les caler.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> les parents des enfants leur achètent ce type de gouter car ils sont peu onéreux.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> les enfants mangent ce qu’ils aiment sans se préoccuper de l’aspect sanitaire ou nutritif.</Text>
          <Text>Nous retiendrons l’ensemble des hypothèses, qui soulèvent la même problématique de fond.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires :</Text>
          <Text>Santé</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Faire comprendre aux élèves l’importance de satisfaire ses besoins nutritifs par des aliments sains, tout en prenant en compte que l’achat de leur goûter ne vient pas forcément d’eux-mêmes mais des parents.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>En début de leçon, faire un débat sur les besoins nutritifs du corps, puis questionner les élèves sur les aliments à consommer avant / après une activité physique et sportive. Sensibiliser aux enjeux de santé.</Text>
          <Text>Proposer aux élèves des alternatives aux sodas et aux chips, qui restent dans leurs goûts (ex : de l’eau avec un peu de sirop et un gâteau fait maison).</Text>
          <Text>Faire remonter ces informations au CESCE et à la direction, qui peut prendre des mesures d’interdiction de certaines consommations (sodas).</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Avec l’équipe EPS, faire un devus et faire voter au CA l’installation de fontaines à eau et l’achat d’une « gourde du collège » pour les élèves.</Text>
          <Text>Demander une sensibilisation à la nutrition par l’infirmier scolaire.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Proposer au CA d’entrer dans la démarche de labélisation « école promotrice de santé » : mener des actions avec l’ensemble de la communauté sur toute l’année en lien avec la santé</Text>
          <Text>Exemple : prévention par l’infirmier scolaire ; éducation à l’alimentation et au goût par les personnels de restauration ; mettre en place un réveil musculaire dans la cour par le CVC…</Text>
          <Text>Réaliser un projet de santé comme « les Parcours du cœur » avec le CESCE, dans le cadre du Parcours Santé.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
