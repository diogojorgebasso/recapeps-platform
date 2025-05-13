import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Laicité',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur la laicité : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes enseignant d&apos;EPS au collège dans une classe de 3ème. Au début d&apos;une séquence de natation, une élève de cette classe vient vous présenter un mot de ses parents indiquant que cette dernière ne pourra pratiquer cette activité pour des raisons religieuses.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Collège / 3</Text><Text fontWeight="bold" as="span">ème</Text> : période de transformations corporelles et psychologiques.</Text>
          <Text><Text fontWeight="bold" as="span">Natation</Text> : activité qui implique une tenue dévoilant le corps</Text>
          <Text><Text fontWeight="bold" as="span">Mot de ses parents</Text> : pas de justificatif médical. Pas forcément la volonté propre de l&apos;élève.</Text>
          <Text><Text fontWeight="bold" as="span">Une élève</Text> : une fille.</Text>
          <Text><Text fontWeight="bold" as="span">Raisons religieuses</Text> : certains croyances ou appropriations religieuses défendent une certaine pudeur du corps (des femmes) face aux regards des autres.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> l’élève ne souhaite pas se montrer en maillot de bain devant les autres en défendant que sa religion en le permet pas. 
<Text fontWeight="bold" as="span">H2</Text><Text fontWeight="bold" as="span"> :</Text> l’élève n’a pas envie de pratiquer la natation (peur d’être jugée, d’être incompétente…) et prétexte un motif religieux pour éviter cela.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> les parents de l’élève ne souhaitent pas qu’elle puisse être en maillot de bain à l’école.</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1), car la raison religieuse est clairement affirmée dans le sujet.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Laïcité</Text>
          <Text>Egalite</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Mixité</Text>
          <Text>Réussite</Text>
          <Text>Santé</Text>
          <Text>Sécurité</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Faire adhérer l&apos;élève/parents à la séquence de natation en déconstruisant les justifications personnelles de l&apos;élève et de sa famille.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Expliquer à mon élève pourquoi sa raison n’est pas valable :</Text>
          <Text>Obligation d&apos;assiduité (article L. 511-1 du Code de l&apos;éducation).</Text>
          <Text>Caractère laïque de l&apos;école : « un absentéisme sélectif pour des raisons religieuses ne saurait être accepté ».</Text>
          <Text>Seul un certificat établi par un médecin permet de déclarer une inaptitude physique de l’élève.</Text>
          <Text>Engager la discussion avec elle pour connaître la raison de ce certificat :</Text>
          <Text>Sur sa demande ou celle de ses parents ?</Text>
          <Text>Problème de tenue ? De mixité ? Elle ne sait pas nager  problème de sentiment d’incompétence ?</Text>
          <Text>Si l’élève refuse catégoriquement la pratique ou si elle n’a pas ses affaires, la faire assurer d’autres rôles de la pratique (chronométrer, coacher, observer…). Néanmoins, réaliser un signalement « fait établissement » en contactant au préalable la direction. Prendre contact directement après la leçon avec les parents.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Entretien avec les parents pour expliquer la non-validité de la demande. Appuyer également sur les raisons de sécurité de l’apprentissage de la natation (noyade).</Text>
          <Text>En amont de la séquence de natation : proposer un mail à la direction, concernant l&apos;obligation et l&apos;importance de la séquence de natation, que cette-dernière se chargera d&apos;envoyer aux parents (prévention, information).</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Journée de la laïcité le 09/12.</Text>
          <Text>Se référer aux « référents laïcités » pour avoir des solutions/interventions.</Text>
          <Text>Organiser un projet pédagogique qui nécessite un bon niveau de natation (ex : semaine au surf, journée au plan d’eau pour la pratique du paddle…) afin de faire diminuer le refus de pratiquer, et de motiver les élèves.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
