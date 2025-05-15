import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Autonomie',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'autonomie : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Les enseignants d’une équipe pédagogique se plaignent du manque d’autonomie de plusieurs classes de 4èmes. Les élèves sont passifs, oublient fréquemment leurs rendus et leurs affaires.   
        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Équipe pédagogique</Text> : rôle de fixer des objectifs d’apprentissages, de faire le point sur les compétences visées.</Text>
          <Text><Text fontWeight="bold" as="span">Plusieurs classes</Text> : cas généralisé.</Text>
          <Text><Text fontWeight="bold" as="span">4èmes</Text> : les élèves ont passé la moitié du collège, prennent en maturité, doivent atteindre les objectifs du socle d’ici une année, doivent avoir acquis des méthodologie d’apprentissage et d’organisation pour le lycée.</Text>
          <Text><Text fontWeight="bold" as="span">Passifs</Text> : se laissent portés, ne sont pas acteurs de leurs apprentissages.</Text>
          <Text><Text fontWeight="bold" as="span">Oublis</Text> : manque d’organisation ou de prise de responsabilité.</Text>
          <Text><Text fontWeight="bold" as="span">Autonomie</Text> : être indépendant, savoir s’occuper de soi et de son travail sans l’aide de quelqu’un d’autre, assumer des rôles et des responsabilités, prendre des initiatives.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les élèves sont portés par les adultes (enseignants, parents) et n’ont pas encore pris conscience de la nécessité d’acquérir de l’autonomie.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> les élèves sont décrocheurs.</Text>
          <Text><Text fontWeight="bold" as="span">H3</Text><Text fontWeight="bold" as="span"> :</Text> les élèves manquent de méthode et d’organisation dans leur travail.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> les élèves ne trouvent pas de sens dans ce qu’ils font.</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1).</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Autonomie</Text>
          <Text>Responsabilité</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Réussite scolaire et personnelle</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Réussir à faire acquérir de l’autonomie aux élèves dans des actions qui ne se déroulent pas uniquement au sein de l’école (préparer ses affaires…).</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Niveau disciplinaire :</Text>
          <Text>Développer les rôles sociaux d’arbitrage, de coaching afin d’amener les élèves à prendre des décisions et se responsabiliser par rapport aux autres.</Text>
          <Text>Développer des méthodes et des routines pour amener à des moments d’autonomie complète : échauffement par exemple. Créer en équipe EPS une progression sur les années (ex : 6ème échauffement guidé, 5ème échauffement en petits groupes, 4ème un élève fait l’échauffement pour la classe, 3ème échauffement individuel en autonomie totale).</Text>
          <Text>Valoriser les rôles de jeune coach, jeune arbitre à l’UNSS.</Text>
          <Text>Faire organiser des évènements par les membres de l’AS.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Niveau interdisciplinaire :</Text>
          <Text>Créer une classe collaborative (cf fiche solution à long terme).</Text>
          <Text>Initier des projets interdisciplinaires où les élèves devront assumer des responsabilités (ex : raid nature ou chaque jour un groupe est responsable des repas, de la vaisselle, des activités du soir…)</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Niveau établissement (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Valoriser et inciter les élèves à devenir membres du CVC.</Text>
          <Text>Responsabiliser les élèves en les impliquant dans les projets de subventions du FSE.</Text>
          <Text>Développer le tutorat inter-classes.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
