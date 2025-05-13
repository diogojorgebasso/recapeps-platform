import { Box, Heading, Text, VStack, List, Separator , Flex, For, Stack, Table, Color} from "@chakra-ui/react";
import { IncrementalCacheKind } from "next/dist/server/response-cache";

import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Acrosport',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur l'acrosport : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage, exemple d’évaluation et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <Flex bg="#00A99D" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg">Acrosport</Heading>
      </Flex>
      
      <VStack align="start" gap={4} mt={4} >
        <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md" >Sommaire</Heading>
        </Box>
        <List.Root gap={2} pl={4} fontWeight="bold" maxW="600px"  borderRadius="lg"  >
          <List.Item>1. Définition et Enjeux de l&apos;APSA</List.Item>
          <List.Item>2. Vocabulaire spécifique</List.Item>
          <List.Item>3. Observables et conduites typiques</List.Item>
          <List.Item>4. Organisation d’un cycle – exemple</List.Item>
          <List.Item>5. Situation d&apos;apprentissage</List.Item>
          <List.Item>6. Exemple d&apos;évaluation</List.Item>
          <List.Item>7. Sécurité</List.Item>
        </List.Root>
        
        <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text fontStyle="italic" px={3}>
        « L&apos;acrosport consiste à réaliser un enchainement de figures collectives combinées à des éléments individuels. 
        Ces figures collectives à 2, 3, 4... sont constituées de maintiens, d&apos;équilibres ou de déséquilibres, de porters, de lancers avec ou sans rattraper des partenaires » 
        </Text>
        <Text>
  HUOT-MONETA & SOCIÉ, <Text fontStyle="italic" display="inline">L&apos;acrosport en milieu scolaire</Text>, 2000.
        </Text>

        
        <Box>
          <Heading size="xl" fontWeight={"bold"} mb="4">Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item><strong>Moteur :</strong> coordination des actions</List.Item>
            <List.Item><strong>Social :</strong> accepter le contact, assumer des rôles, respecter des règles,
             respecter le niveau de chacun, travailler avec tout le monde</List.Item>
            <List.Item><strong>Affectif :</strong> maitriser ses émotions pour se confronter au regard des autres, 
            proposer ses idées, prendre confiance, gérer le risque</List.Item>
            <List.Item><strong>Informationnels :</strong> savoir se repérer...</List.Item>
            <List.Item><strong>Artistique :</strong> apprécier des formes, rythmes, mouvements, assumer et mettre
             son corps en valeur dans le groupe, juger et apprécier une production</List.Item>
          </List.Root>
        </Box>

        <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md" >2. Vocabulaire spécifique</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Rôles :</strong> pareur, voltigeur, porteur...</List.Item>
          <List.Item><strong>Familles de pyramides :</strong> renversement, compensation de masse, empilement, dynamique, statique</List.Item>
          <List.Item><strong>Prises :</strong> contrôle réciproque des poignets, contrôle poings sur main, prise de main sur coude, 
          prise 4 mains, prise de main pour lancer ou franchissement</List.Item>
        </List.Root>

        <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md">3. Observables et conduites typiques</Heading>
        </Box>
        <Text px={3}><strong>Observables :</strong> Montage, démontage, figures, liaison, engagement (+ rôles : spectateur, juge, pareur, aide, chorégraphe)</Text>

       
        <Stack gap="10">
            <Table.Root key={"lg"} size={"lg"}>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader ></Table.ColumnHeader>
                  <Table.ColumnHeader fontWeight={"bold"} textAlign={"center"}>Profil 1 - débutant</Table.ColumnHeader>
                  <Table.ColumnHeader fontWeight={"bold"} textAlign={"center"}>Profil 2 - initié</Table.ColumnHeader>
                  <Table.ColumnHeader fontWeight={"bold"} textAlign={"center"}>Profil 3 – confirmé</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
  {/* 1e partie tableau montage */}
                <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Montage</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Voltigeur </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>Cherche des appuis solides sans se préoccuper du porteur <br/><br/></Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >- Prête attention au porteur dans le placement de ses appuis </Text>
                    <Text>- Qualité des saisies ou déplacement permet à la figure d’être exécutée en sécurité</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>Respect des placements sécuritaires et bonne qualité des saisies </Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Porteur</Text>
                    </Table.Cell>
                  <Table.Cell>
                      <Text>Subit le poids du voltigeur (fléchit les bras, segments non alignés) <br/><br/></Text>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Text >S’adapte aux variations d’équilibre du voltigeur </Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>Aide le voltigeur</Text>
                    </Table.Cell>
                  </Table.Row>

                    <Table.Row >
                    <Table.Cell>
                   <Text fontWeight={"bold"}>Deux acrobates</Text>
                    </Table.Cell>
                    <Table.Cell>
                   <Text>
                   Précipitation qui entraine de gros déséquilibres ou chutes</Text>
                    </Table.Cell>
                   
                    <Table.Cell>
                      <Text>Attentifs au montage, qui reste relativement long</Text>  
                    </Table.Cell>

                    <Table.Cell>
                      <Text>Bonne coordination</Text>
                    </Table.Cell>

                    </Table.Row>

                    {/* 2e partie tableau Figures */}

                    <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Figures</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}> </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Porteur essentiellement en quadrupédie  </Text>
                    <Text>-	Difficulté avec l’ATR, difficulté à perdre les repères de terrien</Text>
                    <Text >-	Manque de tonicité, de gainage, peu de verrouillage des coudes</Text>
                    <Text>-	Qualité d’exécution fait défaut : gestes parasites</Text>
                    <Text >-	Règles de sécurité partiellement respectées </Text>
                    <Text >-	Nombreuses chutes</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Porteur peut réduire le nombre d’appuis au sol</Text>
                    <Text>-	Gainage satisfaisant, Appui renversé essentiellement à partir du sol</Text>
                    <Text >-	Assez bonne maitrise des postures sécuritaires</Text>
                    <Text >-	Légers déséquilibres lors de l’exécution des figures statiques</Text>
                    <Text >-	Manque d’amplitude, de redressement</Text>
                    <Text >-	Les segments ne sont pas tendus et/ou bien placés</Text>
                    <Text>-	Les figures dynamiques manquent de fluidité, amplitude, coordination</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Bon gainage, maitrise de l’appui renversé  </Text>
                    <Text>-	Respect des placements sécuritaires et bonne qualité des saisies</Text>
                    <Text >-	Bonne maitrise d’exécution, y compris dans les figures dynamiques</Text>
                    <Text >-	Davantage de complexité des figures</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Démontage</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}> </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Précipitation qui entraine des gros déséquilibres ou chutes </Text>
                    <Text>-	Pas de planification, pas d’ordre pour le démontage</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Le contrôle et l’attention se relâche dès que la figure a été maintenue 3s</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Les voltigeurs descendent rapidement en cas de déséquilibre </Text>
                    <Text>-	Démontage rapide, esthétique et sécuritaire</Text>
                    </Table.Cell>
                  </Table.Row>


                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Liaisons</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}> </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Aucune anticipation </Text>
                    <Text>-	Arrêt entre les figures</Text>
                    <Text >-	Pas d’éléments de liaison</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Manque de fluidité entre les figures, elles restent juxtaposées</Text>
                    <Text>-	Liaisons essentiellement avec une motricité usuelle</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Fluidité de l’enchainement</Text>
                    <Text>-	Éléments de liaison gymniques ou chorégraphiquess</Text>
                    <Text >-	Utilisation de procédés de composition</Text>
                    <Text>-	Figure dynamique au service de la fluidité de la prestation</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Engagement (moteur, émotionnel, collectif, réflexif)</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}> </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Peur du ridicule </Text>
                    <Text>-	Les émotions prennent souvent le dessus (rires, paroles…)</Text>
                    <Text >-	Réticence à prendre des responsabilités au sein de la troupe</Text>
                    <Text>-	Manque de confiance entre les élèves</Text>
                    <Text >-	Engagement moteur et collectif limité</Text>
                    <Text >-	Engagement émotionnel absent </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Prise de responsabilités au sein de la troupe, mais difficulté à les assumer faute de connaissances suffisantes</Text>
                    <Text>-	Engagement moteur sécuritaire ou recherche d’exploit</Text>
                    <Text>-	Début d’engagement émotionnel</Text>
                    <Text >-	Engagement dans le projet collectif</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Chaque acrobate assume sa part de responsabilité au sein du groupe</Text>
                    <Text>-	Engagement moteur et émotionnels réels</Text>
                    <Text >-	Engagement réflexif dans le projet collectif </Text>
                    </Table.Cell>
                  </Table.Row>

              </Table.Body>
            </Table.Root>
        
      </Stack>





        <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md" >4. Organisation d’un cycle – exemple</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>L1 :</strong> Sécurité: placement autorisés pour le voltigeur, sécurité au montage et démontage</List.Item>
          <List.Item><strong>L2 :</strong> Figures par empilement</List.Item>
          <List.Item><strong>L3 :</strong> Figures par renversement</List.Item>
          <List.Item><strong>L4 :</strong> Figures par compensation de masse</List.Item>
          <List.Item><strong>L5 :</strong> Enchainement des figures et évaluation formative</List.Item>
          <List.Item><strong>L6 :</strong> Liaisons gymniques et artistiques pour relier les figures de manière fluide</List.Item>
          <List.Item><strong>L7-8 :</strong> Mettre sa création au service d’une intention (procédés de composition, émotions…)</List.Item>
          <List.Item><strong>L9 :</strong> Evaluation</List.Item>
        </List.Root>







        <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md" >5. Situations d&apos;apprentissage</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item><strong>Gainage et articulaire : </strong> araignée, brouette</List.Item>
            <List.Item><strong>Équilibre :</strong> la bouteille</List.Item>
            <List.Item><strong>Compensation :</strong> le squat à 2, s’asseoir dos à dos</List.Item>
            <List.Item><strong>Dynamique :</strong> saute-mouton</List.Item>
          </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d’élèves prenant du temps pour monter la figure,
           à des élèves s’organisant rapidement pour monter une figure rapidement de manière fluide:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item><strong>Manche 0 :</strong> réviser la figure maitrisée pendant 5 minutes</List.Item>
            <List.Item><strong>Manche 1 :</strong> 20 secondes pour monter la figure</List.Item>
            <List.Item><strong>Manche 2 :</strong> 10 secondes</List.Item>
            <List.Item><strong>Manche 3 :</strong> 5 secondes</List.Item>
          </List.Root>
          <Heading size="xl" fontWeight={"bold"}>Passer d’élèves juxtaposant les pyramides, 
            à des élèves liant leurs pyramides pour proposer un enchainement fluide:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item>Par deux, faire vivre les différents thèmes de liaison possibles :
               en miroir, se lier, s’aimanter, s’éloigner, tomber. 1 leader et 1 suiveur à chaque changement. </List.Item>
            <List.Item>Puis en musique, les élèves doivent se déplacer selon les verbes que dicte l’enseignant,
               en commençant par « lier » et finissant par « tomber »</List.Item>
            <List.Item>Puis sur cette base, possibilité de jouer sur les vitesses de liaison (lente, décalée, accélérée…)</List.Item>
          </List.Root>
          <Heading size="xl" fontWeight={"bold"}>Passer d’élèves qui hésitent et ne se souviennent plus de leur enchainement,
             à des élèves capables de mémoriser et d’enchainer l’ensemble de leurs figures:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item>5 paliers à atteindre</List.Item>
            <List.Item>5 minutes pour répéter la figure puis la présenter en 20s. SI réussi = 1er palier validé</List.Item>
            <List.Item>Puis 5 minutes pour préparer la deuxième. 40s pour présenter les deux</List.Item>
            <List.Item>5 minutes de préparation pour la 3ème. 60s pour présenter les 3</List.Item>
            <List.Item>Si raté lors de la présentation, on recommence le palier</List.Item>
            <List.Item>Le premier groupe à atteindre le palier 5 gagner</List.Item>
          </List.Root> 
          <Heading size="xl" fontWeight={"bold"}>Passer d’élèves qui posent leurs appuis sur des zones à risque à des élèves
             qui réalisent les figures en toute sécurité:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item>Faire valider 2 figures de chaque niveau devant un jury pour passer au suivant</List.Item>
            <List.Item>Jeu de l’oie en sécurité</List.Item>
          </List.Root> 
          <Heading size="xl" fontWeight={"bold"}>Passer d’élèves restant dans leur zone de confort,
             à des élèves qui complexifient leurs figures:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item><strong>Partie 1 :</strong> Le voltigeur retire un maximum 
            d’appui sur une figure imposée (bronze = je ne retire aucun appui, argent = je retire 1 appui, or = je retire 1 appui main et 1 appui pied)t</List.Item>
            <List.Item><strong>Partie 2 :</strong> Je prends de la hauteur
             (bronze = genoux du voltigeur au-dessus de 50cm du sol, argent = au-dessus de 1m ; or = au-dessus de 1,50m)</List.Item>
          </List.Root> 

          <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md" >6. Exemple d&apos;évaluation</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
        <List.Item>Exécution et sécurité des figures /4</List.Item>
        <List.Item>Difficulté /3</List.Item>
        <List.Item>Intentions et émotions /2</List.Item>
        <List.Item>Liaisons gymniques et acrobatiques /3</List.Item>
        <List.Item>Juge et spectateur /2</List.Item>
        <List.Item>Chorégraphe /2</List.Item>
        <List.Item>Aide et parade /2</List.Item>
        <List.Item>Progrès /2</List.Item>
          </List.Root>







        <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
          <Heading size="md" >7. Sécurité</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Sécurité active – doit être un fil rouge d’apprentissage:</Heading>
        <List.Root gap={2} pl={4}>
        <List.Item>
        Connaitre les points d&apos;appuis interdits et ceux autorisés
          <List.Root ps="5">
            <List.Item>Interdiction de poser les appuis dans les zones creuses (nique, milieu du dos, cervicales…)</List.Item>
            <List.Item>Poser les appuis au-dessus des zones solides (au-dessus des segments tendus)</List.Item>   
          </List.Root>
        </List.Item>
            <List.Item>Verrouiller les coudes</List.Item>
            <List.Item>Monter un appui après l’autre</List.Item>
            <List.Item>Ne pas sauter sur le porteur</List.Item>
            <List.Item>Démonter comme on est monté : un appui après l’autre, sans sauter</List.Item>
            <List.Item>Apprendre à être gainé, à placer son dos droit</List.Item>
            <List.Item>Être concentré</List.Item>
            <List.Item>Aider le voltigeur à descendre</List.Item>
            <List.Item>Aide et parade peuvent être sollicités à tout moment pour assurer ou renforcer la sécurité </List.Item>
          </List.Root>
          
        <Heading size="xl" fontWeight={"bold"}>Sécurité passive:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Tapis</List.Item>
            <List.Item>Espacement entre les groupes</List.Item>
            <List.Item>Prendre en compte les différences de poids des élèves</List.Item>
          </List.Root>

          <Box bg="#00A99D" p={3} borderRadius="lg" w="full">
            <Heading size="md" >7. Autre</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Tice:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Hudl Technique : observation des alignements</List.Item>
            <List.Item>Acro EPS : choix de figures, CR, montage, démontage</List.Item>
          </List.Root>
          
        </VStack>
    </Box>
  );
};


const styles = {
  Color: {
    turquoise: "#00A99D",
    orange: "#FF7F2A",

  }}