import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Egalité',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'égalité : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes enseignant d&apos;EPS dans un lycée. Lors d&apos;un conseil pédagogique, une réflexion est menée sur les conséquences qu&apos;engendrent le choix d&apos;options et les modalités d&apos;évaluation en termes d&apos;inégalités entre les élèves.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Conseil pédagogique</Text> : réunit enseignants et direction. Permet de coordonner les enseignements, de mener des réflexions sur la notation, la pédagogie.</Text>
          <Text><Text fontWeight="bold" as="span">Choix des options / lycée</Text> : LVE, matières facultatives (latin, section européenne, musique, sport…), options obligatoires à choisir en première et terminale.</Text>
          <Text><Text fontWeight="bold" as="span">Modalités d’évaluation</Text> : fréquence, type, barème.</Text>
          <Text><Text fontWeight="bold" as="span">Inégalités</Text> : sociales, de genre, de réussite, des chances. Différences, injustices.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> Le choix des options est socialement influencé.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> Les options choisies déterminent la future réussite des élèves.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> Les évaluations ne prennent pas suffisamment en compte les compétences initiales de chaque élève et leurs progrès. Inégalité des chances.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> Les modalités d’évaluations établissent des distinctions pouvant mener à des discriminations.</Text>
          <Text>L’ensemble des hypothèses est à considérer.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires :</Text>
          <Text>Egalite des chances / de réussite</Text>
          <Text>Esprit de justice</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Discriminations indirectes</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Mener des actions à l’échelle de ma discipline pour palier à une problématique concernant l’ensemble de la communauté éducative.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Se réunir avec l&apos;équipe EPS afin d&apos;analyser les résultats de nos élèves sur les deux dernières années et dresser des constats (ex : Garçons réussissent mieux que les filles, élèves en difficulté scolaire, sportifs externe à l&apos;EPS qui ont toujours les meilleurs notes…).</Text>
          <Text>Faire une analyse des caractéristiques des élèves présents dans chaque option, et faire le lien avec leur réussite scolaire (uniquement des bons élèves, CSP des parents…).</Text>
          <Text>Faire une proposition de réflexion sur l’évaluation par compétence.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Réaliser une présentation de l&apos;option sportive afin de la promouvoir auprès de tous. Insister sur l&apos;accessibilité pour tous les élèves. Réaliser un sondage pour connaitre les envies des APSA à pratiquer, et en tenir compte afin de toucher tous les publics.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Revoir les barèmes de notation ainsi que les modalités, pour aller vers une évaluation par compétence ou par capitalisation, qui se centrent essentiellement sur les progrès des élèves, que tout le monde ait les mêmes chances de réussite. A faire voter au Conseil d&apos;administration et à inscrire dans le projet d&apos;établissement pour l&apos;année suivante.</Text>
          <Text>En EPS, Réfléchir à une programmation variée, ne ciblant pas uniquement la compétition et l’affrontement, qui sont des motifs d’agir ne correspondant pas à tous les élèves, et impacte donc leur investissement et leurs apprentissages.</Text>
          <Text>Réaliser le journée des métiers pour faire intervenir des professionnels pouvant présenter leur parcours :</Text>
          <Text>Si certaines options sont genrées, déconstruire les stéréotypes par l&apos;intervention de professionnels du sexe opposé au stéréotype (femme maçon, maïeuticien…).</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
