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
        <Text fontWeight="bold">Sujet disciplinaire</Text>
        <Text mt={4}>
        Vous êtes enseignant d&apos;EPS en collège. Un élève vous présente un mot dans le carnet de correspondance : « Mon enfant ne se pratiquera pas en acrosport ni toute activité dangereuse, merci de votre compréhension »        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Un élève</Text> : garçon</Text>
          <Text><Text fontWeight="bold" as="span">Carnet de correspondance</Text> : moyen de liaison entre famille et enseignant</Text>
          <Text><Text fontWeight="bold" as="span">Mon enfant</Text> : demande formulée par les parents</Text>
          <Text><Text fontWeight="bold" as="span">Ne pratiquera pas</Text> : refus d&apos;une activité scolaire</Text>
          <Text><Text fontWeight="bold" as="span">Acrosport </Text>: CA3, domaine artistique. Activité acrobatique. Activité avec le plus d’accidents en EPS.</Text>
          <Text><Text fontWeight="bold" as="span">Activité dangereuse </Text>: prise de risque, blessures</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> les parents ont une mauvaise vision de l&apos;activité, ou l&apos;élève en question s&apos;est déjà blessé dans l&apos;activité, engendrant la peur des parents</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> l&apos;élève ne veut pas pratiquer une activité artistique, et a décrit celle-ci à ses parents comme une activité dangereuse</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> les parents sont surprotecteurs</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1).</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Sécurité</Text>
          <Text>Assiduité</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Egalite</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Rassurer l&apos;élève et les parents quant à l&apos;activité acrosport, tout en admettant que les principes sécuritaires sont prioritaires et primordiaux dans l&apos;activité, qui peut présenter des risques s&apos;ils ne sont pas respectés.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Communication : demander à l’élève les raisons de ce mot, chercher à savoir si la peur vient de l’élève ou des parents.</Text>
          <Text>Appliquer le principe d’assiduité : l’élève présentant le mot va pratiquer.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Appeler ou inviter les parents afin de communiquer autour de la demande. Expliquer qu&apos;elle ne peut pas être acceptée. Présenter l&apos;activité acrosport et communiquer autour de la notion de danger. Savoir si l&apos;élève s&apos;est blessé ultérieurement dans l&apos;activité, et savoir s&apos;il y a des précautions particulière à prendre.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur <Text fontWeight="bold" as="span">ces actions</Text>) :</Text>
          <Text>Démonstration des « sports à risque » (escalade, acrosport, arts du cirque…) lors de la journée portes ouvertes.</Text>
          <Text>Lors de la journée d’accueil des CM2 au collège, faire pratiquer l’escalade aux CM2 avec les collégiens qui assurent, afin de donner goût aux pratiques « à risques », tout en montrant qu’elles ont pratiquées en toute sécurité.</Text>
          <Text>Intervention de sportifs de haut-niveau sur le thème Risque/sécurité, grâce à la <Text fontWeight="bold" as="span">plateforme </Text><Text fontWeight="bold" as="span">Wechamp</Text></Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
