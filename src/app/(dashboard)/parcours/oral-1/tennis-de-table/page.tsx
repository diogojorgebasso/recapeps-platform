import { Box, Heading, Text, VStack, List, Separator, Flex, For, Stack, Table } from "@chakra-ui/react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Tennis de table',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur le tennis de table : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg">Tennis de table</Heading>
      </Flex>

      <VStack align="start" gap={4} mt={4} >
        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">Sommaire</Heading>
        </Box>
        <List.Root gap={2} pl={4} fontWeight="bold" maxW="600px" borderRadius="lg"  >
          <List.Item>1. Définition et Enjeux de l&apos;APSA</List.Item>
          <List.Item>2. Observables et conduites typiques</List.Item>
          <List.Item>3. Organisation d&apos;un cycle – exemple</List.Item>
          <List.Item>4. Situation d&apos;apprentissage</List.Item>
          <List.Item>5. Sécurité</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text px={3}>
          Affrontement duel médié par une balle, qui se réalise dans un rapport de force où chaque individu doit, en une même frappe de balle, défendre son camp et attaquer le camp adverse.
        </Text>


        <Box>
          <Heading size="xl" fontWeight={"bold"} mb={"4"}>Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item><strong>Moteur :</strong> adaptations motrices, types de frappes</List.Item>
            <List.Item><strong>Informationnel :</strong> trajectoires, points forts/faibles adverses</List.Item>
            <List.Item><strong>Affectif :</strong> pression temporelle, affrontement</List.Item>
            <List.Item><strong>Culturel :</strong> sport en expansion depuis les JO de paris 2024  </List.Item>
          </List.Root>
        </Box>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Observables:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Type d’action sur la balle </List.Item>
          <List.Item>Trajectoires</List.Item>
          <List.Item>Déplacement/ placement</List.Item>
          <List.Item>Prise d’information</List.Item>
          <List.Item>Intention</List.Item>
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
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Types d’action sur la balle</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell />
                <Table.Cell>
                  <Text>-	Action de pousser ou de soulever par un geste souvent en piston <br />
                    -	Joue uniquement en “poussette”<br />
                    -	De nombreuses balles ne sont pas frappées<br />
                    -	Joue tout en explosivité, sans contrôle, avec une balle qui arrive rarement sur la table
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Amélioration des actions de frapper <br />
                    -	Joue uniquement en Coup droit ou en Revers

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Prises variées et adaptées (revers/coup droit) <br />
                    -	Différentiation et enchaînement des actions de frapper et de frotter (par-dessus et par dessous la balle) = mettre des effets <br />

                  </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Placement et déplacement du corps </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell />
                <Table.Cell>
                  <Text >-	Le corps est droit, l’élève peu mobile voire immobile et il se déplace toujours en retard par rapport à la balle <br />
                    -	L’élève se colle à la table<br />
                    -	Joue à l’amble, les deux épaules face à la table (sans rotation des épaules)

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	L’élève est plus fléchi sur les jambes et effectue des déplacements latéraux courts <br />
                    -	Encore proche de la table
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Éloigné de la table <br />
                    -	Combinaison des déplacements latéraux, courts et longs<br />
                    -	Vitesse des déplacements {"->"} déplacements dynamiques, réaction rapide<br />
                    -	Choix d’une distance de jeu préférentielle par rapport à la table

                  </Text>
                </Table.Cell>
              </Table.Row>




              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Zone de renvoi</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell />
                <Table.Cell>
                  <Text >-	Difficulté à renvoyer la balle sur la table <br />
                    -	Axe central <br />
                    -	Joue dans une seule direction
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Différentiation des zones latérales de la table <br />
                    -	Exploitation de placements stratégiques (la diagonale revers, le ventre pongiste)

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Toute la surface de la demi-table adverse (dans les dimensions droite/gauche et avant/arrière) est exploitée <br />
                    -	Amélioration de la précision des placements de balle

                  </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Trajectoires de balle</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}> </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	En cloche, vitesse peu élevée, pas ou peu d’effet <br />
                    -	Trajectoires aléatoires et hautes : renvoi pour se sécuriser plutôt que de créer une rupture <br />
                    -	L’élève ne construit pas des trajectoires variées

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>Les trajectoires “s’applatissent”, notamment tendues lors des frappes de balles

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >Les trajectoires se diversifient (déformation de la trajectoire après le rebond) avec la production de rotations de balle

                  </Text>
                </Table.Cell>
              </Table.Row>



              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Prise d’information</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}> </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	L&apos;élève ne reconnaît pas une balle favorable <br />
                    -	Élève dans la réaction plutôt que l&apos;action <br />
                    -	Prise d&apos;information tardive : l&apos;élève réagit après que la balle ait passé le filet (élève se précipite sur la table, se déséquilibre vers l&apos;arrière)<br />
                    -	Difficulté à objectiver ses points forts et ses points faibles
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	L&apos;élève reconnaît et prend l&apos;initiative sur une balle favorable <br />
                    -	L&apos;élève connaît ses points forts et ses points faibles

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Prise d&apos;information rapide, et reconnaissance des principes d&apos;efficacité (balle haute, trajectoire…) pour fonder un schéma tactique efficace contre l&apos;adversaire <br />
                    -	L&apos;élève identifie ses points forts et ses points faibles, mais aussi ceux de son adversaire


                  </Text>
                </Table.Cell>
              </Table.Row>




              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Intention tactique</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}> </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Renvoyer la balle sur la ½ table adverse <br />
                    -	Marquer des points en espérant la faute adverse <br />
                    -	Essaye de maintenir l’échange sans rupture



                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Effectue des changements de rythme grâce à des frappes sur des balles faciles <br />
                    -	Déséquilibrer l&apos;adversaire (sur le plan spatial) afin d’obtenir une balle favorable sur laquelle l’élève conclura le point grâce à une frappe <br />
                    -	Marquer des points en provoquant la faute adverse grâce à des balles frappées et/ou placées


                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Intention de rompre l&apos;échange dès le service <br />
                    -	Prise d&apos;initiative afin de pouvoir placer son coup fort <br />
                    -	Lutte contre la prise d&apos;initiative adverse


                  </Text>
                </Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table.Root>
        </Stack>





        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Organisation d’un cycle – exemple</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>L1 :</strong> Evaluation diagnostique / règlement.</List.Item>
          <List.Item><strong>L2 :</strong> Servir règlementairement. </List.Item>
          <List.Item><strong>L3 :</strong> Assurer un échange sur la table.  </List.Item>
          <List.Item><strong>L4 :</strong> Jouer placé. </List.Item>
          <List.Item><strong>L5 :</strong> Jouer vite. </List.Item>
          <List.Item><strong>L6 :</strong> Jouer fort. </List.Item>
          <List.Item><strong>L7 :</strong> Analyser les points forts et faibles adverses pour jouer stratégique. </List.Item>
          <List.Item><strong>L8 :</strong> Rompre le plus rapidement possible à partir du service. </List.Item>
          <List.Item><strong>L9 :</strong> Evaluation</List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">4. Situations d&apos;apprentissage</Heading>
        </Box>

        <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui construit son point tardivement à un élève qui construit son point dès le service:

        </Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : Viser une coupelle/feuille dans les coins au service, répétition. </List.Item>
          <List.Item>SA2 : Match à thème. 3 points si le point est marqué dans les deux première touches de celui qui sert. </List.Item>
          <List.Item>SA3 : Service avec retard défensif (l&apos;adversaire se place de l&apos;un côté ou l&apos;autre de la table, à 1m du bord de la table). </List.Item>
          <List.Item>SA4 : La balle à 6 points. Elle perd 1 point dès que le défenseur la touche. Le joueur gagne le nombre de points que possède la balle au moment ou le point est marqué. </List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui renvoie toutes les balles au centre de la table à un élève qui varie ses trajectoires:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : Plot à éviter, zone morte.</List.Item>
          <List.Item>SA2 : Feuille à viser, zone dangereuse. </List.Item>
          <List.Item>SA3 : Analyse zones jouées/points marqués avec un observateur / coach.  </List.Item>
          <List.Item>SA4 : Point bonus dans une zone préférentielle (après analyse adversaire).</List.Item>
        </List.Root>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Autre</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Matériel pédagogique:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Sur-filet :</strong> pour des trajectoires plus basses / tendues</List.Item>
          <List.Item><strong>Ballon de baudruche :</strong> pour les tout débutants ou EBEP, afin de ralentir le jeu. </List.Item>
          <List.Item><strong>Double table :</strong> assembler deux table pour une plus grande surface de jeu.  </List.Item>
        </List.Root>





      </VStack>
    </Box>


  );
};


