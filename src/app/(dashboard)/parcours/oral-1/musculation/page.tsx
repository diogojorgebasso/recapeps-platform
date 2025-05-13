import { Box, Heading, Text, VStack, List, Separator , Flex, For, Stack, Table} from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Musculation',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur la musculation : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Musculation</Heading>
      </Flex>
      
      <VStack align="start" gap={4} mt={4} >
        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">Sommaire</Heading>
        </Box>
        <List.Root gap={2} pl={4} fontWeight="bold" maxW="600px"  borderRadius="lg"  >
          <List.Item>1. Définition et Enjeux de l&apos;APSA</List.Item>
          <List.Item>2. Vocabulaire spécifique</List.Item>
          <List.Item>3. Observables et conduites typiques</List.Item>
          <List.Item>4. Organisation d’un cycle – exemple</List.Item>
          <List.Item>5. Situation d&apos;apprenstissage</List.Item>
          <List.Item>6. Sécurité</List.Item>
          <List.Item>7. Autre</List.Item>
        </List.Root>
        
        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text px={3}>Activité physique ayant pour objectif premier l&apos;entretien ou le développement de la force musculaire, en relation avec différents mobiles : d&apos;esthétique, de santé ou d&apos;accompagnement de la pratique sportive. <br/>
        <Text fontStyle='italic' display="inline">Musculation en EPS</Text>, Stéphane Barbier, 2011 
        </Text>

        
        <Box>
          <Heading size="xl" fontWeight={"bold"} mb={4}>Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
          <List.Item><strong>Moteur : </strong>Gainage, amplitude motrice, trajets moteurs</List.Item>
            <List.Item><strong>Informationnel : </strong>Apprendre à se connaitre, prendre des infos sur soi, son corps</List.Item>
            <List.Item><strong>Sanitaire : </strong>Savoir s&apos;entrainer, s&apos;échauffer, atteindre des objectifs personnels</List.Item>
            <List.Item><strong>Cognitif : </strong>Connaitre les différents muscles de son corps et les exercices les sollicitant</List.Item>
            <List.Item><strong>Sécuritaire : </strong>Préserver sa sécurité et celles d&apos;autrui lors des exercices spécifiques  </List.Item>
          </List.Root>
        </Box>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>

        <List.Root gap={2} pl={4}>
          <List.Item><strong>Paramètres : </strong>Déterminent la charge de travail prévue (% de charge, répétition, rythme, série, temps de récup, forme de récup)</List.Item>
          <List.Item><strong>Résultantes : </strong>Valident une maitrise technique et permettent d’objectiver la production (placement, amplitude, trajet, équilibre, respiration)</List.Item>
          <List.Item><strong>Contraction excentrique : </strong>Le muscle s’étire et les points d’insertion musculaire s’éloignent</List.Item>
          <List.Item><strong>Contraction isométrique : </strong>Lorsque l’exercice se réalise sans mouvement (ex : gainage planche) </List.Item>
          <List.Item><strong>Contraction pliométrique : </strong>Dans tout geste sportif, la succession rapide de phase d’allongement et de rétrécissement des masses musculaires permet d’associer contraction excentrique et concentrique</List.Item>
          <List.Item><strong>Muscle agoniste/ antagoniste : </strong>L&apos;agoniste est le muscle qui se contracte alors que l&apos;antagoniste s’étire. Le muscule antagoniste muscle s’oppose au mouvement du muscle agoniste, c&apos;est-à-dire celui qui permet le mouvement</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Gestes: </Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Globaux : </strong>Mobilisant l’ensemble du corps</List.Item>
          <List.Item><strong>Segmentaire : </strong>Mobilisant une chaîne musculaire des membres sup/inf ou tronc</List.Item>
          <List.Item><strong>Articulaires : </strong>Mobilisant des muscles autour d’une articulation</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Observables:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Produire:</List.Item>
          <List.Root gap={2} pl={4}>
            <List.Item>Placement initial</List.Item>
            <List.Item>Actions, réalisations, techniques, trajet moteur </List.Item>
            <List.Item>Rapport à la charge</List.Item>
            <List.Item>Sécurité</List.Item>
          </List.Root>
          <List.Item>Concevoir:</List.Item>
          <List.Root gap={2} pl={4}>
            <List.Item>Thème et paramètres</List.Item>
            <List.Item>Connaissances</List.Item>
            <List.Item>Conception de séance</List.Item>
          </List.Root>
          <List.Item>Analyser/réguler</List.Item>
        </List.Root>
       
        <Stack gap="10">
            <Table.Root key={"lg"} size={"lg"}>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader ></Table.ColumnHeader>
                  <Table.ColumnHeader fontWeight={"bold"} textAlign="center">Profil 1 - débutant</Table.ColumnHeader>
                  <Table.ColumnHeader fontWeight={"bold"} textAlign="center">Profil 2 - initié</Table.ColumnHeader>
                  <Table.ColumnHeader fontWeight={"bold"} textAlign="center">Profil 3 – confirmé</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
  {/* 1e partie tableau montage */}
                <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Produire</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Placement initial</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>-	Dos creux <br/>
-	Mains très écartées ou trop serrées <br/>
-	Pieds très écartés  <br/>
-	Regard sur les pieds

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Dos droit, légèrement penché vers l’avant ou l’arrière <br/>
-	Pieds et mains légèrement trop serrés ou écartés<br/>
-	Regard le sol devant soi

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Dos droit <br/>
-	Écartement optimal des mains et des pieds <br/>
-	Regard devant soi

</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Actions</Text>
                    </Table.Cell>
                  <Table.Cell>
                      <Text>-	Amplitude incomplète <br/>
-	Trajet faux et non contrôlé pouvant être dangereux
</Text>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Text >-	Amplitude partiellement complète <br/>
-	Trajet non linéaire (barre qui penche) <br/>
-	Dégradation dans le temps

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Amplitude complète <br/>
-	Perte d’amplitude avec la fatigue<br/>
-	Trajet linéaire (montée de barre droite, dans l’axe)

</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Rapport à la charge</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>-	Crispation <br/>
-	Apnée <br/>
-	Ne termine pas la série OU termine sans aucun signe de fatigue avec une vitesse rapide <br/>
-	Phase de retour non-contrôle<br/>
-	Inadaptée au thème et à ses compétences


</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Rougeur <br/>
-	Essoufflement<br/>
-	Respiration présente mais parfois mal placée ou inversée<br/>
-	Vitesse qui se détériore


</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Rougeur <br/>
-	Essoufflement<br/>
-	Respiration adaptée à l’exercice<br/>
-	Rythme maintenu sur la série <br/>
-	Charges précises et optimales


</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Sécurité</Text>
                    </Table.Cell>
                  <Table.Cell>
                      <Text>A construire
</Text>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Text >Peut être maitrisée avec aide (si une fiche atelier est présente, binôme…)

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>Maitrisée quel que soit l’exercice

</Text>
                    </Table.Cell>
                  </Table.Row>


                    <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Concevoir</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell><strong>Thème et paramètres</strong>
                  </Table.Cell>
                    <Table.Cell>
                    <Text >-	Paramètres inadaptés : contenu incompatible avec le temps, inadapté aux ressources de l&apos;élève et/ou incohérent avec le thème de travail<br/>
-	Mobile personnel non défini ou incohérent avec le choix du thème d&apos;entraînement.

 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Choisi et modalités de séquence sont justifiés <br/>
-	Paramètres de travail sont cohérents avec le thème d&apos;entraînement grâce à l&apos;utilisation de supports ou par mimétisme, mais pas toujours adaptés aux ressources de l’élève.
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >Choisi et modalités de séquence sont justifiés de façon personnelle en référence au carnet d’entraînement et au vécu de l’élève.
 </Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell><strong>Connaissances</strong>
                  </Table.Cell>
                    <Table.Cell>
                    <Text >Méconnaissance (groupes Musculaires, ateliers).

 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>Groupes musculaires connus : localisation, fonction
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >Connaissance des principes de l&apos;entraînement (méthodes d&apos;entraînement, relation groupes musculaires/exercices...)
 </Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell><strong>Conception de séance</strong>
                  </Table.Cell>
                    <Table.Cell>
                    <Text >Planification du travail superficielle.
 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>
                    Conception prenant en compte le mobile personnel et les capacités de l&apos;élève.
                    </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >Planification complète :<br/>
-	Charges de travail adaptées aux capacités de l&apos;élève et au thème d&apos;entraînement. <br/>
-	Prise en compte de l&apos;analyse des séances précédentes

 </Text>
                    </Table.Cell>
                  </Table.Row>
                  
     

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Analyser/Réguler</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                    <Text>
                      - Bilan sommaire ou inexistant. <br />
                      - Aucune régulation entre les séries<br />
                      - Absence de perspectives.
                    </Text>
                  </Table.Cell>

                  <Table.Cell>
                    <Text>
                      - Bilan global et vague.<br />
                      - Justifications évasives portant sur le résultat et le ressenti général et sommaire (&quot;séance difficile&quot;, &quot;séance facile&quot;).<br />
                      - Perspectives et modifications proposées très superficielles (ex : &quot;j&apos;augmenterai les charges&quot;) et choix de paramètres inappropriés
                    </Text>
                  </Table.Cell>

                  <Table.Cell>
                    <Text>
                      - Bilan complet<br />
                      - Justifications par des connaissances générales de l&apos;entraînement.<br />
                      - Analyse faisant apparaître des liens entre le prévu et le réalisé. Prise en compte dans l&apos;analyse du ressenti et des connaissances de l&apos;entraînement.<br />
                      - Différents analyseurs sont pris en compte (physiologiques, psychologiques, musculaire, nerveux)<br />
                      - Régulations proposées et perspectives évoquées pour la séance prochaine permettant d’optimiser la charge de travail.
                    </Text>
                  </Table.Cell>
                </Table.Row>
  
              </Table.Body>
            </Table.Root>
      </Stack>





        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">4. Organisation d’un cycle – exemple</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>L1-L2 :</strong> Sécurité et placement, sans charge ou avec charge légère </List.Item>
          <List.Item><strong>L3 :</strong> Identifier sensations et ressentis pour qualifier une charge (légère, modérée, lourde)</List.Item>
          <List.Item><strong>L4 :</strong> Découverte d’un thème d’entrainement – personnalisation des charges de travail</List.Item>
          <List.Item><strong>L5 :</strong> Découverte d’un autre thème d’entrainement –identifier les différences de ressentis par rapport au 1er thème </List.Item>
          <List.Item><strong>L6 :</strong> Modification de paramètres d’entrainement pour entrer dans les ressentis visés </List.Item>
          <List.Item><strong>L7 :</strong> Tester un projet d’entrainement et le réguler </List.Item>
          <List.Item><strong>L8 :</strong> Ajuster son projet d’entrainement </List.Item>
          <List.Item><strong>L9 :</strong> Evaluation </List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>
        
        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Circuit type CrossFit</List.Item>
            <List.Item>Tabata</List.Item>
            <List.Item>Circuit avec 2 exercices de chaque type : cardio – membres sup – membres inf – abdos </List.Item>
            <List.Item>Coach / coaché : sécurité  </List.Item>
          </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui réalise des mauvais choix de paramètres d&apos;entrainement à un élève qui conçoit un entrainement adapté à son thème et ses ressources:
        </Heading>
        <Text>Partir du minimum dans le thème et augmenter paramètre par paramètre selon une grille donnée par le prof par mobile </Text>

          <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui réalise des mouvements peu sécuritaires à un élève qui agit en toute sécurité:</Heading>
          <Text>Observateur / pratiquant : réaliser l’exercice. Obligation de valider 2 séries en sécurité avant de charger. </Text>

         <Heading size="xl" fontWeight="bold">Passer d&apos;un élève qui réalise ses séries en apnée à un élève qui place sa respiration:</Heading>
              <List.Root gap={2} pl={4}>
                <List.Item>Observateur respiration</List.Item>
                <List.Item>Série 1 en apnée et série 2 en plaçant sa respiration: analyse des ressentis </List.Item>
              </List.Root>

          <Heading size="xl" fontWeight="bold">Passer d&apos;un élève qui reste dans sa zone de confort à un élève qui individualise ses charges pour correspondre à ses capacités:</Heading>
              <Text>Le Max 3 (implique ++ les observateurs, permet de travailler sur les ressentis) </Text>

            <Heading size="xl" fontWeight="bold">Possibilité d’organisation des SA:</Heading>
              <List.Root gap={2} pl={4}>
                <List.Item>SA1 : pratiquant et observateur</List.Item>
                <List.Item>SA2 : SA qui permet de corriger ce que l’observateur à observer  </List.Item>
                <Box h="4" />
                <List.Item>SA1 : ressenti sur 1 thème imposé</List.Item>
                <List.Item>SA2 : faire un contraste avec la SA1 en imposant un autre thème pour voir la différence de ressentir  </List.Item>
              </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Sécurité</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Placement:</Heading>
          <List.Root gap={2} pl={4}>
              <List.Item>Dos droit</List.Item>
              <List.Item>Verrouillage des articulations</List.Item>
              <List.Item>Placement du bassin : antéversion ou rétroversion </List.Item>
              <List.Item>Alignement segmentaire</List.Item>
              <List.Item>Pareur</List.Item>
              <List.Item>Équilibre de la barre</List.Item>
              <List.Item>Sécurités (papillon) sur les barres </List.Item>

          </List.Root>


          <Box bg="teal.500" p={3} borderRadius="lg" w="full">
            <Heading size="md" color="white">7. Autre</Heading>
          </Box>

          <Heading size="xl" fontWeight={"bold"}>Numérique:</Heading>
            <Text>&quot;Paint&quot; pour voir les alignements.</Text>
            <Text>Application &quot;video delay&quot; : revoir son mouvement en décalage, comme un miroir avec delai<br/>
            ⟹ Permet de mettre l&apos;outil sur trépied et de ne pas y toucher (la tablette ne va pas trainer au milieu des charges). Rien n&apos;est enregistré. </Text>
        
        </VStack>
    </Box>

    
  );
};


