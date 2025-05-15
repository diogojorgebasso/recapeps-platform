import { Box, Heading, Text, VStack, List } from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Correction oral 3 CAPEPS – Egalité',
  description: "Prépare-toi efficacement à l'oral 3 du CAPEPS avec cette correction complète d’un sujet sur l'égalité : définition des mots clés, hypothèses explicatives, valeurs de la République, dilemme de l'enseignant et éléments de réponse.",
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
        Vous êtes professeur d&apos;EPS dans un collège, après avoir lu les résultats des filles et des garçons en EPS lors des dernières années, il s&apos;avère que la moyenne des garçons est supérieure à celle des filles d&apos;environ 2 points.        </Text>
        <Text  mt={2}>
        Comment analysez-vous cette situation et quelles solutions envisagez-vous ?
        </Text>
      </Box>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">Professeur</Text><Text fontWeight="bold" as="span"> d’EPS</Text> : prend appui sur les pratiques sportives (peuvent être sources de stéréotypes) ; met en jeu le corps ; barèmes parfois différenciés ; utilisation de formes de groupement (mixité ?).</Text>
          <Text><Text fontWeight="bold" as="span">Collège</Text> : la mixité devient difficile et se renforce au fur et à mesure des années ; période de transformations corporelles et développement de nouvelles aptitudes motrices.</Text>
          <Text><Text fontWeight="bold" as="span">Des dernières années</Text> : récurrence.</Text>
          <Text><Text fontWeight="bold" as="span">2 points</Text> : écart significatif.</Text>
          <Text><Text fontWeight="bold" as="span">Les résultats </Text>: en général, pas seulement dans ma classe, cas généralisé au collège.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Hypothèses explicatives découlant des définitions</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text><Text fontWeight="bold" as="span">H1 :</Text> La programmation est stéréotypée masculine, ce qui entraine plus de motivation chez les garçons (Cogérino, « Propos d’enseignant d’EP face à la mixité » , 2007).</Text>
          <Text><Text fontWeight="bold" as="span">H2 :</Text> Les élèves sont très conscients de ces connotations sexuées des pratiques (Fontayne, Sarrazin et Famose, 2001 ; Riemer et Visio, 2003 ; Wright, 1997) qui déterminent pour une part non négligeable leur envie de s’investir, leur motivation à l’égard des contenus d’enseignement.</Text>
          <Text><Text fontWeight="bold" as="span">H3 :</Text> les enseignants ne sont pas équitables dans la façon de noter les filles et les garçons.</Text>
          <Text><Text fontWeight="bold" as="span">H4 :</Text> les barèmes ne sont pas adaptés aux capacités des filles pour leur stade de développement moteur.</Text>
          <Text>Nous retiendrons l’ensemble des hypothèses, qui toutes font référence à des biais d’inégalités entre les filles et les garçons.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Valeurs de la république soulevées</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Prioritaires :</Text>
          <Text>Egalite</Text>
          <Text>Egalite des chances / de réussite</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Secondaires :</Text>
          <Text>Discrimination</Text>
          <Text>Esprit de justice</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Dilemme de l’enseignant</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text>Résoudre le souci d’inégalité de réussite des filles et des garçons, sans rehausser simplement les notes ou aller dans de la discrimination positive.</Text>
        </List.Root>
        <Box bg="teal.500" p="3" borderRadius="lg" w="full">
          <Heading size="md" >Éléments de réponses</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Court terme :</Text>
          <Text>Regarder les notes de cette année pour voir si c&apos;est encore le cas ; regarder chez ses collègues enseignants d&apos;EPS pour voir si cela est généralisé à la discipline et regarder dans quelles matières c&apos;est également le cas. Se mettre en lien avec le professeur principal de chaque classe pour cela.</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Moyen terme :</Text>
          <Text>Regarder les corrélations entre la programmation des activités et les notes des élèves (ex : filles meilleures notes en CA3 et pourtant on programme 80% de CA4  équitable ?)  En parler avec l&apos;équipe EPS et y réfléchir tous ensemble.</Text>
          <Text>Impliquer les élèves : faire un questionnaire anonyme mais dans lequel le sexe serait demandé, par rapport à la notation dans la discipline, mais aussi et surtout par rapport aux motivations des élèves (au niveau des APSA, des modes d’entrées, des questions libres pour exposer leur point de vue en général). (Lien avec équipe EPS).</Text>
          <Text>Discussion avec les élèves sur leurs représentations  but d’aller plus tard renverser les stéréotypes.</Text>
          <Text>Revoir le Projet EPS pour mettre au centre l’égalité des chances, la mixité…</Text>
          <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Long terme (cf. fiche « solution à long terme » pour plus de détail sur ces actions) :</Text>
          <Text>Revoir la programmation pour les années suivantes</Text>
          <Text>Adapter la notation pour qu’elle soit équitable si ce n’était pas le cas  aller vers une évaluation par compétences</Text>
          <Text>Trouver des modes d’entrée par le jeu ou le défi par exemple, dans les activités connotées pour emporter l’adhésion de certains ou limiter le refus des autres.</Text>
          <Text>Ex en gym : mode d’entrée par le défi ; mode d’entrée en double en badminton…</Text>
          <Text>Se référer aux référents égalité qui sont présents dans chaque établissement qui sont des relais pour lutter contre les stéréotypes  organiser une journée avec l&apos;équipe éducative où on se centrerais sur les stéréotypes pour les bousculer</Text>
          <Text>(journée égalité filles garçons le 8 mars)</Text>
          <Text>Proposer des créneaux UNSS non mixtes, ou avec des APSA correspondant davantage aux motivations des filles, afin de leur redonner confiance et les valoriser.</Text>
          <Text>Labellisation égalité filles-garçons.</Text>
          <Text>Mise en avant des femmes sportives dans le collège : à travers des affiches dans le gymnase (en lien avec professeur d&apos;Art-plastique.</Text>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Page;
