import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Inclusion',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'inclusion : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes enseignant d’EPS dans un collège périurbain. Lors du conseil de classe d’une classe de 6ème ordinaire, le représentant des parents se plaint de l’inclusion d’élèves d’ULIS et de SEGPA au motif que cela ralentirait les apprentissages de leurs enfants.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Conseil de classe / représentant des parents</Text> : plainte commune à plusieurs parents, qui a été réfléchie depuis un moment jusqu’au conseil de classe. Volonté que cela résonne fortement, à un moment où enseignants et direction sont présents.</Text>
          <Text><Text fontWeight="bold" as="span">Inclusion d’élèves ULIS et SEGPA</Text> : élèves à BEP ; Se plaint de tous ces élèves, stigmatisation, on les met tous dans le même panier, et ne se plaint d’aucun autre élèves « ordinaire » qui pourrait également avoir des difficultés.</Text>
          <Text><Text fontWeight="bold" as="span">Ralentir les apprentissages</Text> : pose le constat que, selon les parents, tout le monde devrait apprendre à la même vitesse.</Text>
          <Text><Text fontWeight="bold" as="span">Collège périurbain / 6èmes</Text> : première année de collège. Rassemble des écoles de plusieurs villages.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les parents / élèves ne connaissent pas bien les dispositifs inclusifs que l’école propose, ce qui mène à des stéréotypes et inquiétudes.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> les parents ne tolèrent pas la différence. 
<Text fontWeight="bold" as="span">H3 :</Text> les parents s’inquiètent que les bases des apprentissages de leurs enfants ne soient pas pas acquises à cause d’élèves moins rapides.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> l’enseignant ralentit effectivement les apprentissages pour se consacrer aux élèves à BEP.</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1), du fait que la classe de 6ème soit précisée, ainsi que le collège périurbain (entrée au collège, nouveaux dispositifs qui n’existaient peut-être pas dans les primaires de villages).</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Inclusion</Text>
          <Text>Droit à l’éducation</Text>
          <Text>Tolérance</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Bienveillance</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Faire comprendre aux parents que la présence des élèves ULIS et SEGPA ne retarde en rien les apprentissages de leurs enfant, alors que ces derniers peuvent effectivement apprendre moins vite que les autres, pouvant s’apparenter d’un point de vue extérieur à un frein à l’avancement dans les programmes.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Montrer aux parents que l’avancée dans le programme a été réalisée comme prévu. Chaque enseignant peut témoigner.</Text>
          <Text>Dialoguer pour savoir sur quels faits les parents se basent pour tenir une plainte comme celle-ci.</Text>
          <Text>Rappeler le principe de l’école inclusive, et les valeurs remises en cause dans cette plainte.</Text>
          <Text>Expliquer les dispositifs SEGPA et ULIS aux parents.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Proposer au professeur principal ou à un enseignant volontaire de réaliser une présentation des différents dispositifs aux élèves, en lien avec le coordinateur ULIS/SEGPA. Déconstruire les stéréotypes et répondre aux questions des élèves.</Text>
          <Text>Renforcer les expériences positives et de tutorat en EPS. Favoriser la bienveillance et la communication. Si les élèves sont bienveillants entre eux et vivent des expériences positives avec des élèves à BEP, il y a plus de chance pour qu’ils partagent ces expériences positives avec leurs parents, qui verront à leur tour les bienfaits de l’inclusion (empathie, communication, adaptation…).</Text>
          <Text>Réaliser des bilans d’avancée trimestriel dans les matières, et les présenter au conseil de classe, afin de rassurer les parents.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Inscrire l’école inclusive comme axe prioritaire du projet d’établissement, dans un établissement qui accueille visiblement de nombreuses classes avec des élèves à BEP.. Cela se traduirait par l’utilisation de pédagogie universelle, des moments d’inclusion inversée, des projets de classe innovants et inclusifs.</Text>
          <Text>Semaine de la différence à organiser à l’échelle de l’établissement : interventions d’associations, travail spécifiques par matière (handisport, chanson « l’effet de masse » en éducation musicale…).</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
