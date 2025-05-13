import { Box, Heading, Text, VStack, List, Separator , Flex, For, Stack, Table} from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Relais-vitesse',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur le relais-vitesse : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Relais-vitesse</Heading>
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
          <List.Item>6. Autre</List.Item>

        </List.Root>
        
        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text px={3}>Faire parcourir au témoin une distance définie le plus rapidement possible, par une transmission de celui-ci par plusieurs coureurs.         </Text>

        
        <Box>
          <Heading size="xl" fontWeight={"bold"} mb={4}>Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
          <List.Item><strong>Social :</strong> Coopération, performance interdépendante</List.Item>
          <List.Item><strong>Affectif :</strong> Dépassement de soi, confiance</List.Item>
          <List.Item><strong>Moteur :</strong> Puissance musculaire, coordination, système cardio-vasculaire</List.Item>
          <List.Item><strong>Sanitaire :</strong> Savoir s&apos;échauffer, se préparer, s&apos;entrainer</List.Item>
          </List.Root>
        </Box>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Personnes :</strong> Starter, relayeur, donneur, receveur</List.Item>
          <List.Item><strong>Zones :</strong> Transmission (20m), zone d&apos;élan (10m max)</List.Item>
          <List.Item><strong>Motricité :</strong> Foulée (distance entre 2 appuis), poulaine</List.Item>
          <List.Item><strong>Phase d&apos;appui :</strong> Amortissement/réception, soutien, poussée/impulsion</List.Item>

        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Observables:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Passage du témoin :</strong> Temps, arrêt ou mouvement, vitesse, zone</List.Item>
          <List.Item><strong>Vitesse :</strong> Constante, accélération, altération, différence entre la somme des perfs individuelles et la perf collective</List.Item>
          <List.Item><strong>Positionnement des relayeurs  :</strong> Orientation du regard, des épaules, placement dans le couloir, position du bras</List.Item>
          <List.Item><strong>Course  :</strong> Cycle, segments libres, placement dans le couloir, foulée</List.Item>
          <List.Item><strong>Choix du signal :</strong> Visuel, sonore</List.Item>

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
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Contrôle</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Départ</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>-	Placement au milieu du couloir, pied sur la ligne ou loin derrière <br/>
-	Jambes tendues, très écartées<br/>
-	Méconnaissance des positions liées aux ordres du starters<br/>
-	Nombreux faux-départs ou mise en action tardive

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Se place d&apos;un côté du couloir plutôt aléatoirement <br/>
-	A intégré la ligne de départ comme limite<br/>
-	Connait la position à chaque ordre du starter mais commet parfois des erreurs (bras à l&apos;amble, talons posés, manque de flexion...)<br/>
-	Posture d&apos;attente efficace<br/>
-	Le pied avant se lève au départ

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Placé dans le bon couloir<br/>
-	Position efficace à chaque ordre du starter<br/>
-	Réaction rapide au signal<br/>
-	Poussée complète des jambes, alignement maintenu

</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Transmission</Text>
                    </Table.Cell>
                  <Table.Cell>
                      <Text>-	Ralentit à l’approche du relayeur et/ou change de couloir pour ne pas percuter son partenaire <br/>
-	Ne donne pas de signal <br/>
-	Court le bras tendus en avant<br/>
-	A l’amble <br/>
-	Transmission à l’arrêt ou grande perte de vitesse<br/>
-	Fait tomber le témoin<br/>
-	Poursuit sa course jusqu’à l’arrivée</Text>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Text >-	En mouvement mais avec ralentissement. La vitesse n’est pas conservée<br/>
-	Donne le top trop tôt ou trop tard<br/>
-	Manque de précision dans le geste de transmission<br/>
-	Court avec le bras en flexion jusqu’au signal<br/>
-	Tend le bras avant d’avoir donné le top ou avant que le bras du partenaire soit tendu

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Cherche à rester à vitesse maximale<br/>
-	La conservation de la vitesse acquise est réalisée<br/>
-	Reste du bon côté du couloir<br/>
-	Donne le top au bon moment<br/>
-	Donne le témoin d&apos;un geste rapide et précis 

</Text>
                    </Table.Cell>
                  </Table.Row>


                    <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Receveur </Table.Cell>
                </Table.Row>

                <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Départ </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Placement aléatoire, souvent face au donneur <br/>
-	Tend le bras avant l’arrivée du donneur<br/>
-	Attend le témoin pour partir, ou part très lentement<br/>
-	Regard en arrière, jambes tendues
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Placement correct côté opposé au coureur<br/>
-	Appuis orientés vers l&apos;avant<br/>
-	Jambes semi-tendues, genoux fléchis<br/>
-	Tend le bras avant le top<br/>
-	Part parfois trop tard ou trop tôt<br/>
-	Ne part pas à pleine vitesse<br/>
-	Reste orienté vers l&apos;avant une fois parti, avec quelques contrôles brefs vers l&apos;arrière

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Départ en bascule dynamique, mise en action au passage du donneur à la marque <br/>
-	Attitude anticipatrice<br/>
-	Reste orienté vers l&apos;avant une fois pari<br/>
-	Cherche sa vitesse maximale

</Text>
                    </Table.Cell>
                  </Table.Row>





                  <Table.Row >
                  <Table.Cell fontWeight={"bold"}>
                  Transmission et course
                  </Table.Cell>
                    <Table.Cell>
                    <Text >-	Variable, souvent en début de zone, parfois en fin <br/>
-	Prise de marque non adaptée<br/>
-	Accélère une fois que le témoin est transmis <br/>
-	Fait tomber le témoin
 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Le bras bouge beaucoup, se désunit<br/>
-	Accélère davantage une fois le témoin en main<br/>
-	Transmission en milieu ou fin de zone, parfois hors zone
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Attend le top pour tendre le bras<br/>
-	Bras fixé et main placée<br/>
-	Transmission en fin de zone<br/>
-	Course reste placée pendant la transmission

 </Text>
                    </Table.Cell>
                  </Table.Row>

                  

                  
     

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Course des deux Relayeurs</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Création de vitesse  </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Part les pieds joints ou très écartés <br/>
-	Se tient droit, poids sur les talons 

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Position de départ non utilisée pour se propulser <br/>
-	Peu de déséquilibre <br/>
-	Pousse vers le haut


</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Positionnement efficace : jambes semi-fléchies <br/>
-	Oriente les poussées de manière rectiligne

</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Entretien de la vitesse </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Cycle postérieur <br/>
-	Genoux bas <br/>
-	Se penche énormément vers l’avant <br/>
-	Pas de coordination des segments libres <br/>
-	Talons au sol <br/>
-	Regard qui se perd


</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Cycle antérieur <br/>
-	Genoux à semi-hauteur <br/>
-	Déséquilibre avant <br/>
-	Légère coordination bras/jambes <br/>
-	Appuis légers <br/>
-	Regard orienté dans l’axe


</Text>

                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Cycle antérieur avec léger mouvement de griffer <br/>
-	Appuis dynamiques <br/>
-	Amène son appui sous le bassin<br/>
-	Alignement, reste droit <br/>
-	Genoux à hauteur de bassin <br/>
-	Regard devant soi


</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Finir la course </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >S&apos;arrête ou ralentit avant la ligne d’arrivée.

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Piétine légèrement avant de s’arrêter <br/>
-	Réduit sa vitesse progressivement avant la ligne

</Text>

                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Maintient sa vitesse jusqu’à la ligne d’arrivée <br/>
-	Décélère progressivement après avoir franchi la ligne

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
          <List.Item><strong>L1 :</strong> Evaluation diagnostique : compréhension de l’épreuve, prise de perf individuelle.</List.Item>
          <List.Item><strong>L2 :</strong> Départ réactif :  se positionner, réagir à un signal</List.Item>
          <List.Item><strong>L3 :</strong> Travail de la transmission du témoin- prise de marque </List.Item>
          <List.Item><strong>L4 :</strong> Travail de la transmission du témoin – type de transmission – partir au bon moment</List.Item>
          <List.Item><strong>L5 :</strong> Améliorer son temps de course individuel pour améliorer le collectif </List.Item>
          <List.Item><strong>L6-L7 :</strong> Planifier et réaliser un projet de course pour atteindre sa meilleure performance</List.Item>
          <List.Item><strong>L8 :</strong> Affiner la transmission pour être plus efficace à deux que seul</List.Item>
          <List.Item><strong>L9 :</strong> Evaluation  </List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>
        
        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>La chenille : faire amener le + rapidement le témoin en tête de chenille sans se retourner</List.Item>
            <List.Item>Temps de réaction, partir le + vite au signal sonore</List.Item>
            <List.Item>Foulées : ateliers défis, faire le moins d’appuis possibles, lattes de + en plus espacées… </List.Item>
          </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui attend le témoin à un élève qui s&apos;élance avant d&apos;avoir le témoin en main:
          
        </Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>SA1 : le relais ovale : vision sur le relayé </List.Item>
            <List.Item>SA2 : le « chat-souris » (Llobet, 2013), touche-épaule </List.Item>
            <List.Item>SA3 : double signal sonore, le 1er à la marque, puis un hop </List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Passer d&apos;élèves qui se rentrent dedans ou ralentissent car ils ne sont pas bien placés dans le couloir, à des élèves qui se transmettent efficacement le témoin en décalage:</Heading>
          <List.Root gap={2} pl={4}>
        <List.Item>
        SA1 : deux pour un:      </List.Item>
            <List.Root ps="5">
            <List.Item>1 : S’élancer ensemble à vitesse réduite et se passer le témoin dans la zone</List.Item>
            <List.Item>2 : S’élancer ensemble et accélérer dans la zone de transmission</List.Item>
            <List.Item>3 : Le receveur part à la marque</List.Item>

          </List.Root>
        </List.Root>

         <Heading size="xl" fontWeight="bold">Passer d&apos;élèves qui transmettent le témoin en ralentissant à des élèves qui se transmettent le témoin à pleine vitesse:</Heading>
         <List.Root ps="5">
            <List.Item>SA1 : courir l’un derrière l’autre pour se transmettre le témoin dans la zone</List.Item>
            <List.Item>SA2 : 2 VS 1 et 1 : un coureur réalise la course en entier pendant que dans le couloir à côté, un binôme effectue un relais. But : le relais doit aller plus vite que le coureur seul</List.Item>

          </List.Root>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Autre</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Passage du témoin:</Heading>
        <Text>La prise française : « the up sweep technique » :</Text>
          <List.Root gap={2} pl={4}>
              <List.Item>Le receveur a le bras allongé vers l’arrière. Il a la paume de la main tournée vers l’arrière et la main bien ouverte, pouce écarté des autres doigts.</List.Item>
              <List.Item>Le donneur transmet le témoin par un mouvement de bas en haut.</List.Item>
          </List.Root>
          <Text>La prise américaine : the « down sweep technique » :</Text>
          <List.Root gap={2} pl={4}>
              <List.Item>Lorsqu’ils sont presque au même niveau, le donneur passe le témoin par un mouvement allant de haut en bas. Le receveur tourne la paume de sa main vers le ciel.</List.Item>
          </List.Root>
          
        <Heading size="xl" fontWeight={"bold"}>Filière énergétique:</Heading>
        <Text>Anaérobie alactique:</Text>
        <List.Root gap={2} pl={4}>
            <List.Item>Effort intensité élevée</List.Item>
            <List.Item>Faible capacité</List.Item>
            <List.Item>6 à 14 secondes</List.Item>
            <List.Item>Temps de récupération nécessaire : 10m = 1min (Pradet)</List.Item>

          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Distance:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>40-50m en 6ème-5ème</List.Item>
          <List.Item>60-80m en 4ème- 3ème</List.Item>
          <List.Item>Zone de transmission entre 10, 15 et 20m</List.Item>
        </List.Root>

         
        </VStack>
    </Box>

    
  );
};


