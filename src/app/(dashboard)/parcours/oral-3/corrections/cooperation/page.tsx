import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Coopération',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur la coopération : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
          Vous êtes enseignant d&apos;EPS dans un collège de centre-ville, durant votre leçon de badminton, plusieurs élèves parmi les plus compétents refusent de coacher leur binôme plus en difficulté et se regroupent pour faire un match entre eux.
        </Text>
        <Text  mt={2}>
          Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Centre-ville</Text> : ressources à disposition, plutôt scolaires, visent la réussite, peuvent être davantage individualiste pour être les meilleurs.</Text>
          <Text><Text fontWeight="bold" as="span">Badminton</Text> : les AFC 3 et 4 affirment la nécessité d’être « solidaires de ses partenaires », d’« observer et co-arbitrer ».</Text>
          <Text><Text fontWeight="bold" as="span">Plusieurs élèves</Text> : ils ont peut-être le même motif d’agir, ou alors nous avons un meneur et des suiveurs.</Text>
          <Text><Text fontWeight="bold" as="span">Plus compétents / plus en difficulté</Text> : différence de niveau moteur.</Text>
          <Text><Text fontWeight="bold" as="span">Se regroupent pour faire un match</Text> : privilégient le but de performance, le versant moteur, la comparaison sociale.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1</Text> : les élèves ne trouvent pas de sens dans les rôles sociaux, et préfèrent le versant moteur d’autant plus qu’ils se sentent compétents dans celui-ci.</Text>
          <Text><Text fontWeight="bold" as="span">H2</Text> : les élèves sont individualistes et ne veulent pas coopérer.</Text>
          <Text><Text fontWeight="bold" as="span">H3</Text> : les élèves compétents se considèrent supérieurs aux autres et libres de faire ce qui leur plait.</Text>
          <Text><Text fontWeight="bold" as="span">H4</Text> : Les élèves ne se sentent pas compétents dans le rôle de coach et se réfugient dans ce qu’ils maitrisent.</Text>
          <Text>Nous retiendrons prioritairement l’ensemble des hypothèses qui se rattachent aux mêmes valeurs.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires :</Text>
          <Text>Coopération</Text>
          <Text>Fraternité</Text>
          <Text>Solidarité</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Donner de l’attrait (sens / sentiment de compétence / valorisation) pour le rôle de coach alors que les élèves souhaitent pratiquer / sont individualiste.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Arrêter le match en cours et rappeler à l’ordre les élèves quant à leur tâche de travail. Faire un rassemblement collectif pour ré expliquer le rôle du coach et les attendus.</Text>
          <Text>Créer communauté d’intérêt entre élèves (Galichet, 1998) grâce à la ronde italienne par exemple (équipes de deux joueurs. Le moins compétent au niveau moteur commence le match, coaché par le plus compétent. Lorsque le premier arrive à 10 points, les plus compétents prennent le relais sur le terrain, en gardant le score des deux joueurs moins compétents) solidarité, sens au coaching, responsabilité</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Systématiser les rôles sociaux dans l’ensemble des situations et des APSA. Les clarifier et les formaliser à l’échelle de l’équipe EPS pour avoir une véritable continuité et du sens pour les élèves.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Développer la pédagogie coopérative au sein de l’équipe pédagogique : tutorat entre élèves dans les travaux de groupe, AP, TPE (au lycée)</Text>
          <Text>Autogestion de la classe (article Julien CONTU – Revue enseigner l’EPS n°283 – janvier 2021 – AEEPS)</Text>
          <Text>Mise en avant des compétences psychosociales en ayant formé les enseignants d&apos;un établissement (FIL : formation d&apos;initiative locale) : « savoir communiquer efficacement » ; « être habile dans les relations interpersonnelles » ; « avoir de l&apos;empathie et savoir gérer ses émotions »</Text>
          <Text>EPI autour du vivre-ensemble (EPS/EMC) avec la citoyenneté/fraternité en acte à travers partage des tâches, respect des règles, prise en compte des individualité (raid nature avec chaque jour un groupe responsable du repas / vaisselle / veillée…)</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
