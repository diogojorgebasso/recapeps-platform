import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Racisme',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur le racisme : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes prof d’EPS dans un collège en REP+ dans lequel se retrouvent des élèves issus d’origine très variées. A l’issue d’un cycle d’une APSA issue du CA4, les élèves de la classe de 4ème vous demandent d’organiser un tournoi à partir d’équipes composées d’origine ethnique identique.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">REP +</Text> : stéréotypes culturels et religieux ancrés, élèves d’origines variées</Text>
          <Text><Text fontWeight="bold" as="span">Classe de 4</Text><Text fontWeight="bold" as="span">ème</Text> : élèves en pleine construction identitaire</Text>
          <Text><Text fontWeight="bold" as="span">Les élèves</Text> : le pluriel utilisé témoigne d’un consensus dans la classe</Text>
          <Text><Text fontWeight="bold" as="span">CA4 </Text>: fait référence à une activité de confrontation</Text>
          <Text><Text fontWeight="bold" as="span">Ethnie </Text>: groupe de personne partageant une même culture, histoire. Originaires d’une même région/pays.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> Les élèves veulent s’opposer par groupe ethnique pour les hiérarchiser.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> Les élèves n’ont pas conscience du problème et proposent une solution de simplicité dans la gestion des équipes.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> Des clans sont présents dans la classe selon les origines et les élèves ne souhaitent pas se mélanger à d’autres personnes au sein des équipes.</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1).  La volonté d’une majorité de la classe, ainsi que la précision du CA4 concernant une activité d’opposition, laisse penser que la priorité sur ce sujet était l’opposition entre différentes origines pour établir une supériorité/infériorité.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Discrimination</Text>
          <Text>Racisme</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Respect</Text>
          <Text>Fraternité</Text>
          <Text>Climat scolaire</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>L’enseignant va devoir faire comprendre aux élèves que l’origine ethnique n’est pas un motif de distinction possible entre les élèves, tout en proposant un autre moyen de distinction afin de former les équipes.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Prendre position de façon négative en expliquant le problème de ces propos aux élèves.</Text>
          <Text>Questionner sur la notion de racisme / discrimination. Questionner pour voir si les propos ont été dits de façon irréfléchie ou dans un but volontaire de hiérarchisation des élèves selon leurs origines.</Text>
          <Text>Faire proposer aux élèves un autre moyen de former les équipes.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>En fin de leçon, se mettre en relation avec le professeur principal pour voir si des propos racistes ou discriminatoires ont déjà été présents dans cette classe.</Text>
          <Text>Alerter la hiérarchie (principal du collège) pour établir un « fait établissement » afin de signaliser des faits préoccupants.</Text>
          <Text>Saisir le formulaire en ligne « valeurs de la République » pour être accompagné dans les solutions à mettre en œuvre.</Text>
          <Text>Mener un débat philosophique en vie de classe avec la classe de 4è sur le thème des discriminations / racisme.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Inscription du collège dans le projet Ethic’action</Text>
          <Text>Intervention de SOS racisme.</Text>
          <Text>Proposer en conseil d’administration de préparer la « semaine d’éducation et d’actions contre le racisme et l’antisémitisme » qui a lieu la semaine du 21 mars. 
Proposer que chaque discipline inscrive une action en lien avec le thème. Exemple en EPS : étude de cas des athlètes qui ont participé à la lutte contre le racisme et les discriminations : Jesse Owens, Mohammed Ali, LeBron James…</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
