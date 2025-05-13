import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Sécurité',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur la sécurité : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes professeur d&apos;EPS dans un collège, un élève de 4ème entre régulièrement en conflit avec les adultes de l&apos;établissement. Une équipe éducative se réunit afin d&apos;envisager des solutions pour réguler le comportement impulsif de cet élève.  
        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Collège/4</Text><Text fontWeight="bold" as="span">ème</Text> : Période d’adolescence, élève en pleine construction de soi, affirmation de son caractère, quête d’identité.</Text>
          <Text><Text fontWeight="bold" as="span">Régulièrement en conflit avec les adultes</Text> : ce n&apos;est un fait isolé, c&apos;est répétitif. Entre en conflit uniquement avec les adultes, pas avec ses camarades  ne se comporte pas comme ça avec tout le monde, seulement avec un public visé.</Text>
          <Text><Text fontWeight="bold" as="span">Impulsif</Text> : s’énerve rapidement, ne maitrise pas ses émotions.</Text>
          <Text><Text fontWeight="bold" as="span">Équipe éducative / solutions</Text> : actions à réaliser à l’échelle du collège, solutions concrètes attendues.</Text>
          <Text><Text fontWeight="bold" as="span">Réguler </Text>: ajuster, tempérer.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> L’élève a des soucis et recherche de l’attention de la part des adultes sans savoir comment le manifester autrement.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> L’élève est en période de crise adolescente et ne parvient plus à maitriser ses émotions.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> l’élève cherche à se rebeller et teste les personnes détenant l’autorité.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> il s’agit de son mode de fonctionnement habituel pour exprimer ses émotions (famille en conflit…).</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1), étant donné que l&apos;élève teste uniquement les adultes, et que le comportement est décrit comme impulsif et pas agressif ou provoquant.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Sécurité (affective pour l’élève/ physique pour les enseignants)</Text>
          <Text>Violence</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Climat scolaire</Text>
          <Text>Respect</Text>
          <Text>Vivre-ensemble</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Je dois réussir à mener des actions pour aider cet élève à davantage maitriser ses émotions, tout en sachant que cet élève est en conflit avec les adultes de l&apos;établissement dont je fais partie.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Proposer à cet élève de choisir un enseignant avec lequel il se sent un peu plus à l’aise (avec accord de tous lors de la réunion), afin de lui permettre d’engager une discussion pour savoir si un problème sous-jacent se cache Et/ou psyEN pour proposer un suivi.</Text>
          <Text>Aider l’élève à reconnaitre ses émotions et à les verbaliser.</Text>
          <Text>Aider les élèves à identifier les moments de tension avant le décrochage.</Text>
          <Text>Permettre et donner une « porte de sortie » : faire un signe défini à l&apos;enseignant, ou une phrase simple, et avoir le droit de s&apos;isoler quelques minutes à condition de revenir pour engager la discussion avec l&apos;adulte.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Développer le travail autour des émotions dans le collège</Text>
          <Text>Proposer en UNSS du yoga ou de la relaxation afin permettre aux élèves de prendre conscience de leurs émotions et de les évacuer.</Text>
          <Text>Apprendre à verbaliser (vocabulaire) ses émotions en français…</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Demander une formation sur le développement des compétences psychosociales.</Text>
          <Text>Proposer une intervention sur l&apos;éloquence (par l&apos;Atelier de la langue française) qui permet de développer l&apos;art oratoire. ( permettre à l’élève d&apos;apprendre à s&apos;exprimer de façon correcte et claire à l&apos;oral).</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
