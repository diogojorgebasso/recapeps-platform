import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Harcèlement',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur le harcèlement : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes professeur d’EPS dans un collège rural. Vous constatez qu’un élève de 6ème est l’objet de moqueries régulières et qu’il ne va pas dans les vestiaires. En l’interrogeant, il vous dit qu’on l’y bouscule et qu’on lui cache ou vole ses affaires.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Moqueries</Text> régulières, bouscule, cache/vole affaires : comportement violents et récurrents</Text>
          <Text><Text fontWeight="bold" as="span">Collège rural</Text> : petits établissement, les élèves se connaissent tous</Text>
          <Text><Text fontWeight="bold" as="span">6è</Text> : nouveau au collège, pas forcément de connaissance des faits qui peuvent être répréhensibles, pas encore eu de sensibilisation au harcèlement</Text>
          <Text><Text fontWeight="bold" as="span">Vestiaire</Text> : endroit à l’abri du regard direct du professeur</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> l’élève n’est pas bon en EPS et subit du harcèlement dans cette discipline seulement.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> les vestiaires sont partagés et les plus grands (3èmes) ne font pas attention aux plus petits.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> quelques élèves embêtent l’élève en question, et le reste de la classe agit en suiveurs ou ne réagissent pas.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> l’élève refuse de se changer devant les autres et prétexte d’autres excuses.</Text>
          <Text>Nous retiendrons prioritairement l’ensemble des hypothèses faisant référence au harcèlement (H1, H2, H3).</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Violence - harcèlement</Text>
          <Text>Citoyenneté</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Fraternité</Text>
          <Text>Climat scolaire</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Agir pour faire cesser le harcèlement sans aggraver la situation ou stigmatiser l’élève dans ce collège rural.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Approfondir la discussion avec l’élève s’il est coopératif, afin de savoir si des personnes spécifiques sont moteurs de ces violences. Chercher à savoir si cela est spécifique à l’EPS ou non.</Text>
          <Text>Mettre des mots sur la situation (harcèlement), l’informer de la gravité de la situation, et le rassurer en lui disant que la situation va être suivi et cesser.</Text>
          <Text>Lui donner des billes à court terme s’il se sent mal : numéro 30 20, psyEN.</Text>
          <Text>Prévenir les personnels du programme pHARe afin d’envisager un suivi des élèves concernés. Mettre en place la méthode de préoccupation partagée.</Text>
          <Text>Se mettre en lien avec la famille</Text>
          <Text>Prévenir la direction, la psyEN.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Former des ambassadeurs pHARe.</Text>
          <Text>Faire de la prévention dans le collège par des affiches, des débats philosophiques. Faire de la prévention auprès des parents sur le repérage des signes de harcèlement chez leur enfant, et les moyens de se faire aider.</Text>
          <Text>Organiser avec le collège la journée internationale de lutte contre la violence et le harcèlement en milieu scolaire (ex en EPS : travail autour de la chanson « petite Émilie » en danse/acrosport).</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Demander une formation des personnels sur le repérage et le traitement des situations de harcèlement.</Text>
          <Text>Formation des personnes ressources pHAre.</Text>
          <Text>Participer aux actions nationales avec sa classe (prix « non au harcèlement »).</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
