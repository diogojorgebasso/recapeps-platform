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
        Vous êtes prof d’EPS dans un collège. Lors de votre séquence de demi-fond vous remarquez que certains élèves ont, pour boire, des boissons énergisantes.         </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Collège</Text> : période d’affirmation identitaire, regard des autres important.</Text>
          <Text><Text fontWeight="bold" as="span">Demi-fond</Text> : activité ou les élèves transpirent et doivent s’hydrater régulièrement. APSA de performance.</Text>
          <Text><Text fontWeight="bold" as="span">Certains élèves</Text> : plusieurs, ce n’est pas un cas isolé.</Text>
          <Text><Text fontWeight="bold" as="span">Boissons énergisantes</Text> : boisson contenant des stimulants à haute dose (caféine notamment), destinées à redonner de l’énergie.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les élèves veulent se distinguer des autres.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> les élèves veulent transgresser les règles (boissons énergisantes interdites depuis 2008 dans les établissements scolaires).</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> Les élèves pensent qu’ils vont être plus performants en demi-fond.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> il s’agit d’une boisson promue sur les réseaux par des influenceurs / effet de mode.</Text>
          <Text>Nous retiendrons l’ensemble des hypothèses, qui soulèvent la même problématique de fond.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires :</Text>
          <Text>Santé</Text>
          <Text>Respect du règlement</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Faire comprendre aux élèves qu’il n’est pas permis de boire des boissons énergisantes au collège, en ne mettant pas seulement un interdit, mais en éduquant aux enjeux de santé.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Retirer les boissons aux élèves et leur faire un rappel au règlement.</Text>
          <Text>Expliquer les raisons de l’interdiction et les effets des boissons énergisantes sur la santé.</Text>
          <Text>En fin de leçon, expliquer les bons gestes à tenir en termes d’alimentation et d’hydratation, avant, pendant et après la leçon de demi-fond.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Rédiger un mail en concertation avec l’équipe EPS, à faire valider et envoyer par la direction. Mail au parents (car il s’agit de collégiens, les achats de boissons se font probablement par les parents) rappelant l’interdiction des boissons énergisantes à l’école, et faire de la prévention sur celles-ci.</Text>
          <Text>Projet interdisciplinaire en lien avec l’enseignante de SVT sur le lien entre dépense énergétique et consommation de sucre/caféine sur la déshydratation.</Text>
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
