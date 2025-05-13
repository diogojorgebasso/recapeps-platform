import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Sécurité',
  description: "Prépare-toi efficacement à l&apos;oral 3 du CAPEPS avec cette correction complète d&apos;un sujet sur la sécurité : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l&apos;enseignant et éléments de réponse.",
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
          Vous êtes enseignant d&apos;EPS dans un lycée de centre-ville. Lors d&apos;un cours de natation, vous constatez qu&apos;un élève a de nombreuses ecchymoses et qu&apos;il se scarifie.
        </Text>
        <Text mt={2}>
          Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full">
        <Heading size="md">Définitions</Heading>
      </Box>
      <List.Root gap={2} pl={4}>
        <Text>
          <Text fontWeight="bold" as="span">Natation</Text> : tenue laissant dévoiler certaines parties du corps non visibles habituellement (par les autres élèves, enseignants…).
        </Text>
        <Text>
          <Text fontWeight="bold" as="span">Nombreuses ecchymoses</Text> : symboles de violence physique.
        </Text>
        <Text>
          <Text fontWeight="bold" as="span">Scarifie</Text> : violence infligée à soi-même pour combattre des souffrances psychiques.
        </Text>
        <Text>
          <Text fontWeight="bold" as="span">Lycée</Text> : peut caractériser une période de mal-être chez les adolescents.
        </Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full">
        <Heading size="md">Hypothèses explicatives découlant des définitions</Heading>
      </Box>
      <List.Root gap={2} pl={4}>
        <Text>
          <Text fontWeight="bold" as="span">H1 :</Text> l&apos;élève subit des violences physiques à l&apos;école ou à la maison.
        </Text>
        <Text>
          <Text fontWeight="bold" as="span">H2 :</Text> l&apos;élève traverse une période de mal-être profond qui l&apos;amène à se faire violence lui-même.
        </Text>
        <Text>
          <Text fontWeight="bold" as="span">H3 :</Text> L&apos;élève a besoin de faire remarquer physiquement un mal-être dont il n&apos;arrive pas à parler et attend qu&apos;on lui tende la main.
        </Text>
        <Text>Nous retiendrons prioritairement la première hypothèse (H1).</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full">
        <Heading size="md">Valeurs de la république soulevées</Heading>
      </Box>
      <List.Root gap={2} pl={4}>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
        <Text>Sécurité</Text>
        <Text>Santé</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
        <Text>Intégrité</Text>
        <Text>Solidarité</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full">
        <Heading size="md">Dilemme de l&apos;enseignant</Heading>
      </Box>
      <List.Root gap={2} pl={4}>
        <Text>
          L&apos;enseignant doit réagir et agir sans pour autant aggraver le mal-être de l&apos;élève, ni entrer dans son espace confidentiel s&apos;il ne le souhaite pas.
        </Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full">
        <Heading size="md">Éléments de réponses</Heading>
      </Box>
      <List.Root gap={2} pl={4}>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
        <Text>Ne pas se précipiter directement et devant les autres élèves : laisser dérouler la leçon et agir normalement avec l&apos;ensemble des élèves.</Text>
        <Text>Prendre l&apos;élève à part et discrètement en fin de leçon afin d&apos;essayer d&apos;engager une discussion</Text>
        <Text>
          Si l&apos;élève coopère : communiquer de façon bienveillante, écouter et poser des questions si on voit que l&apos;élève a besoin d&apos;en parler, et si on se sent apte à le faire.
        </Text>
        <Text>
          Si l&apos;élève se braque : ne pas insister, mais proposer son écoute à un autre moment s&apos;il le souhaite.
        </Text>
        <Text>
          Dans tous les cas : informer l&apos;élève (et si possible au début de l&apos;échange) que je vais relayer les informations afin qu&apos;il puisse être aidé au mieux. Lui donner des contacts utiles : psyEN, 31 14 numéro national de prévention du suicide.
        </Text>
        <Text>
          Dès la fin de la leçon : prendre contact avec la direction du collège pour transmettre les informations vues, ou communiquées par l&apos;élève.
        </Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
        <Text>
          S&apos;il s&apos;avère que les violences sont internes à l&apos;école : mise en place du programme pHARe, se mettre en lien avec les référents académiques. Sanctions disciplinaires pour les agresseurs en cas de violences physiques (ecchymoses).
        </Text>
        <Text>
          S&apos;il s&apos;avère que les violences sont externes à l&apos;école (famille) : l&apos;enseignant ou la direction (ou les deux ensemble) effectue un signalement (priorité !), par téléphone ou en ligne.
        </Text>
        <Text>Le numéro 119 peut aider dans les démarches concernant l&apos;enfance en danger.</Text>
        <Text>Assurer un suivi de l&apos;élève par la psyEN, ou par un adulte de l&apos;école à qui l&apos;élève se confie aisément.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
        <Text>Demander une formation à l&apos;échelle de l&apos;établissement sur le repérage des « enfants en danger » et les conduites à tenir.</Text>
        <Text>Prévention lors de la Journée internationale des droits de l&apos;enfant.</Text>
      </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
