import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Coeducation',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur la coéducation : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes enseignant d’EPS dans un collège REP +. Il apparaît que peu de parents viennent à la réunion de rentrée présentant l’année de 6ème. Le chef d’établissement sollicite l’équipe éducative et pédagogique afin de développer des liens permettant une réelle co-éducation.
        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Collège</Text><Text fontWeight="bold" as="span"> REP+</Text> : Accueille des élèves issus de famille rencontrant des difficultés sociales, parents de CSP défavorisés ; difficultés scolaires fréquentes.</Text>
          <Text><Text fontWeight="bold" as="span">Réunion de pré-rentrée 6</Text><Text fontWeight="bold" as="span">ème</Text> : Entrée au collège, moment important pour la suite de la scolarité ; Présentation d’informations importantes, fonctionnement, nouveautés.</Text>
          <Text><Text fontWeight="bold" as="span">Chef d’établissement et équipe éducative</Text> : personnels qui vont assurer la scolarité et le suivi durant les quatre années collège.</Text>
          <Text><Text fontWeight="bold" as="span">Développer des liens permettant une réelle co-éducation</Text> : « Relation entre éducateurs dits « premiers », que sont les parents, et éducateurs professionnels qui œuvrent en parallèle » (Rayna & Rubio, 2010)</Text>
          <Text>Augmenter les liens = rencontres, suivi par médias, donner la parole… faire en sorte que les parents s’impliquent dans la scolarité de leur enfants.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text><Text fontWeight="bold" as="span"> Manque de capacité</Text> : ne comprennent pas le fonctionnement des rencontres, ne sont pas disponibles aux horaires de réunions, ne maitrisent pas suffisamment la langue française pour pouvoir échanger, ne savent pas à qui s’adresser en cas de problème…</Text>
          <Text><Text fontWeight="bold" as="span">H2 : Ne réalisent pas l’importance de leur rôle</Text> : reconnaissent la compétence des enseignants et ont confiance en eux, pensent que c’est la scolarité de leur enfant résulte de leur entière responsabilité</Text>
          <Text><Text fontWeight="bold" as="span">H3 : Sentiment d’impuissance</Text> : sont conscient des difficultés de leur enfants et des inégalités de l’école, et tentent de se retirer de tout ça pour préserver leur dignité</Text>
          <Text>Nous répondrons en traitant l’ensemble des hypothèses qui représentent toutes un frein à la co-éducation. De plus, un grand nombre de parents étant absent, des raisons diverses sont assurément en cause.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires :</Text>
          <Text>Coéducation</Text>
          <Text>Coopération</Text>
          <Text>Collaboration</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Réussite</Text>
          <Text>Confiance</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Je dois réussir à tisser des liens entre les parents et l’école, alors que ces derniers semblent démissionnaires dès la première rentrée de collège, et ainsi que le contact risque d’être compliqué à établir s’ils ne sont jamais présents.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">A l’échelle de ma discipline</Text>
          <Text>Un projet de remise en forme parents-enfants</Text>
          <Text>Une fois par semaine, invitation des élèves et parents volontaires à un cours de remise en forme  permet d’échanger avec les familles de manière informelle</Text>
          <Text>Aucune compétence n’est attendue de la part des parents</Text>
          <Text>Créer une dynamise d’établissement et permet de faire venir les parents dans le collège.</Text>
          <Text>Permet de proposer une première forme d’accompagnement des parents, sans nécessiter de compétence particulière, mais pour favoriser un sentiment d’appartenance et de considération  seront surement plus aptes à venir discuter, à s’intéresser à ce qu’il se passe dans l’établissement et à la scolarité de leurs enfants.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Sur le moyen terme</Text>
          <Text>Utiliser la « Malette des parents » qui est un outil reposant sur 3 moments clefs de la scolarité : CP, 6ème et 3ème. Ici, on est sur un des moments clefs puisqu’on se trouve en 6ème. Le principe est de faire comprendre aux parents le SS et le déroulement des apprentissages, à travers notamment des ateliers débats.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Au niveau transversal</Text>
          <Text>Inscrire la coéducation comme un axe du projet d’établissement, et proposer un dispositif de soutien à la parentalité afin de pouvoir le mettre en œuvre. Par exemple le CLAS, dispositif essentiellement centré sur l’aide aux devoirs, mais aussi encouragement à la lecture (fréquentation des médiathèques) ; Implication des parents sollicitée par contractualisation écrite ou orale (élaboration d’outils de liaison, organisation de rencontres…).</Text>
          <Text>OEPRE « ouvrir l’école aux parents pour la réussite des enfants ».</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
