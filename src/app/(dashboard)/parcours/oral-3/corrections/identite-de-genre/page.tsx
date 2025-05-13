import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Identité de genre',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'identité de genre : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes professeur(e) d’Éducation Physique et Sportive dans un lycée général de centre-ville. Une élève en transition vous demande en cours d’année la possibilité de se changer dans les vestiaires des garçons.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Lycée général</Text> :  fin d’adolescence.</Text>
          <Text><Text fontWeight="bold" as="span">Centre-ville</Text> : élèves pouvant être assez au fait et ouverts sur les questions de genre.</Text>
          <Text>Une élève en transition : fille en transition pour être garçon. Changement de genre / sexe.</Text>
          <Text><Text fontWeight="bold" as="span">En cours d’année</Text> : demande qui va impacter l’organisation mise en place depuis le début d’année. Changement visible pour les élèves.</Text>
          <Text><Text fontWeight="bold" as="span">Vestiaire</Text> : lieu où les élèves se changent. Lieu ou la sécurité affective de tous doit être assurée.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> l’élève avance dans sa transition et ne sent plus à l’aise de se changer dans les vestiaires ne correspondant plus à son genre.</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> l’élève assume sa transition et ose faire cette demande auprès du professeur.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> les filles de la classe ne veulent plus que cet(te) élève se change dans les vestiaire car elle transitionne pour être garçon.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> certains garçons ont mis la pression à cette fille pour qu’elle se change avec eux sous prétexte qu’elle ne serait pas un « vrai garçon » sinon.</Text>
          <Text>Nous retiendrons prioritairement la première hypothèse (H1), mais les autres ne sont pas à négliger, et nécessitent d’être tout de même intégrée à la réponse.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires (pour H1) :</Text>
          <Text>Identité de genre</Text>
          <Text>Sécurité affective</Text>
          <Text>Santé mentale</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Tolérance</Text>
          <Text>Bienveillance</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Réussir à assurer la sécurité affective de cette élève, sans compromettre celle des autres élèves de la classe qui seront forcément impacté de la situation.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Engager le dialogue avec l’élève. Si elle formule cette demande, nous estimons qu’elle est à l’aise d’en parler. Si ce n’est pas le cas, ne pas insister.</Text>
          <Text>Lui expliquer que ce n’est pas une décision qui peut se faire aussi spontanément. Les vestiaires à l’école sont non mixtes et nous devons nous tenir au sexe officiel de l’élève. Ici, l’élève est « en transition », nous ne savons pas si son sexe est déjà changé officiellement (documents d’identité).</Text>
          <Text>De plus, expliquer l’impact que cela peut avoir sur les autres, ainsi que sur elle. Sans explication ou prévention à la classe, le risque serait d’être rejetée, dévisagée ou insultée dans les vestiaires des garçons. De même qu’il faut assurer sa sécurité, il faut assurer celle des autres.</Text>
          <Text>Rediriger l’élève vers l’infirmier ou la psyEN, qui pourront avoir davantage d’informations « confidentielles » telles que l’avancée de la transition, le genre et sexe officiel…et ainsi aider dans la décision.</Text>
          <Text>Savoir si la demande est due à un mal être ou à une simple préférence (cela peut changer les solutions mises en œuvre).</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Faire remonter l’information à la direction, et se réunir avec celle-ci et la psyEN, infirmier afin de réfléchir à une solution.</Text>
          <Text>Proposer une solution à l’élève pour se changer à part si elle exprime un mal-être : se changer dans un autre vestiaire, dans les toilettes, un peu après tout le monde, venir déjà habillée…</Text>
          <Text>Faire un sondage anonyme auprès des élèves de la classe sur des questions de genre / sexe / orientations, sans citer la personne, et y glisser la question des vestiaires pour avoir une vision d’ensemble de la classe.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Organiser des actions d’informations / prévention lors de la Journée internationale de la visibilité transgenre le 31 mars.</Text>
          <Text>Si l’école en lien avec le médecin de l’élève décide qu’il est possible pour elle de changer de vestiaire, après en avoir discuté avec les élèves, réaliser une lettre d’information à faire signer par les élèves de la classe et leur parents, avec la possibilité de prendre contact avec l’enseignant en cas de question / doute / refus.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
