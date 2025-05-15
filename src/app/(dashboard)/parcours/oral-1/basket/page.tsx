import { Box, Heading, Text, VStack, List, Separator, Flex, For, Stack, Table } from "@chakra-ui/react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Basket',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur le basket : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Basket</Heading>
      </Flex>

      <VStack align="start" gap={4} mt={4} >
        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">Sommaire</Heading>
        </Box>
        <List.Root gap={2} pl={4} fontWeight="bold" maxW="600px" borderRadius="lg"  >
          <List.Item>1. Définition et Enjeux de l&apos;APSA</List.Item>
          <List.Item>2. Vocabulaire spécifique</List.Item>
          <List.Item>3. Observables et conduites typiques</List.Item>
          <List.Item>4. Organisation d’un cycle – exemple</List.Item>
          <List.Item>5. Situation d&apos;apprentissage</List.Item>
          <List.Item>6. Règlement et Sécurité</List.Item>
          <List.Item>7. Autre</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text px={3}>
          Le basket-ball est un sport collectif où cinq joueurs s&apos;affrontent afin de marquer des points en lançant le ballon dans un panier.
        </Text>


        <Box>
          <Heading size="xl" fontWeight={"bold"} mb="4">Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item><strong>Moteur :</strong> manipulation de balle, dextérité, adresse</List.Item>
            <List.Item><strong>Perceptif :</strong> situation instable et complexe, se décentrer du ballon</List.Item>
            <List.Item><strong>Citoyen :</strong> règlement à respecter et faire respecter </List.Item>
            <List.Item><strong>Physiologique :</strong> endurance, anaérobie alactique, gérer son effort, détente</List.Item>
            <List.Item><strong>Affectif :</strong> gérer le pression temporelle, des joueurs, assumer ses décisions</List.Item>
          </List.Root>
        </Box>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Contre :</strong> déviation pour empêcher que le ballon ne rentre dans le panier</List.Item>
          <List.Item><strong>Défense en individuelle :</strong> chaque joueur s’occupe d’un joueur adverse</List.Item>
          <List.Item><strong>Défense en zone :</strong> chaque joueur s’occupe de couvrir une zone de jeu</List.Item>
          <List.Item><strong>Entre-deux :</strong> méthode de mise ou remise en jeu du ballon par lancer du ballon en l’air, entre deux joueurs</List.Item>
          <List.Item><strong>Ecran :</strong> lorsqu’un joueur se place devant son adversaire pour bloquer son chemin, le gêner</List.Item>
          <List.Item><strong>Interception :</strong> prendre le ballon à son adversaire</List.Item>
          <List.Item><strong>Meneur :</strong> celui qui monte la balle à travers le terrain et distribue le jeu </List.Item>
          <List.Item><strong>Passage en force :</strong> faute commise par un attaquant qui bouscule un défenseur statique</List.Item>
          <List.Item><strong>Rebond :</strong> récupérer le ballon après un tir non marqué, avant qu’il ne touche le sol</List.Item>
          <List.Item><strong>Raquette :</strong> zone du terrain rectangulaire située sous chaque panier, dans laquelle les joueurs ne peuvent rester plus de 3s sans intervenir dans le jeu </List.Item>
          <List.Item><strong>Retour en zone :</strong> faute lorsque l’équipe retourne dans sa moitié de terrain après avoir franchi la ligne médiane</List.Item>
          <List.Item><strong>Shoot :</strong> tir</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Observables:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Organisation collective attaque / défense</List.Item>
          <List.Item>Organisation individuelle PB / NPB (Porteur de Balle/Non Porteur de Balle)</List.Item>
          <List.Item>Motricité générale</List.Item>
          <List.Item>Prise d&apos;information et de décision</List.Item>
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
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Organisation collective</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Attaque </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>-	Effet grappe</Text>
                  <Text>-	Jeu groupé et non écarté</Text>
                  <Text>-	Appels de balle peu décisive</Text>
                  <Text>-	Élève se met hors de distance de passe ou ne s’implique pas dans le jeu</Text>
                  <Text>-	Pas de démarquage</Text>
                  <Text>-	Se débarrasse de la balle</Text>
                  <Text>-	Pas de progression vers la cible </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Montée de balle vers l’avant en respectant les couloirs (au moins deux couloirs utilisés): les élèves s’organisent par rapport à la cible à atteindre et à l’espace. </Text>
                  <Text>-	Montée en trottinant, voire en courant </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Construction du jeu demi-terrain: les élèves s’organisent par rapport à la cible, à l’espace et aux partenaires </Text>
                  <Text>-	Alternance jeu demi- terrain et jeu rapide </Text>
                  <Text>-	Écartement dans le jeu</Text>
                </Table.Cell>
              </Table.Row>

              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Défense</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>-	Marche pour revenir défendre</Text>
                  <Text>-	Se met hors distance pour bloquer l’attaque </Text>
                  <Text>-	Ne se reconnait pas défenseur</Text>
                  <Text>-	Passif, dans la zone arrière</Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Remontent en trottinant</Text>
                  <Text >-	Défendent sur un joueur </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text>-	Défense tout terrain (récupérer vite la balle) ou repli défense demi-terrain (protéger la cible)</Text>
                  <Text>-	Se reconnait attaquant/défenseur</Text>

                </Table.Cell>
              </Table.Row>



              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Organisation individuelle</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>PB</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Beaucoup de balles perdues en raison de mauvais choix ou de choix précipites (« se débarrassent du ballon »).  </Text>
                  <Text>-	De nombreux échecs aux tirs car la situation favorable de marque n’est pas construite.</Text>
                  <Text >-	Reste sur place une fois le ballon dans les mains </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Moins de pertes de balles, choix plus ou moins opportuns entre dribbles/passes/tirs.. </Text>
                  <Text>-	Zone favorable de marque proche du panier </Text>
                  <Text >-	Acquisition du pied de pivot</Text>
                  <Text >-	SFM est en cours d’acquisition ou stabilisée </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Stabilisation de l’action de pivoter (triple menace)  </Text>
                  <Text>-	Zone favorable de marque s’agrandit </Text>
                </Table.Cell>
              </Table.Row>

              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>NPB</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Se démarquent vers le ballon : pas de prise en compte de l’espace, des partenaires et des adversaires.</Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Course vers l’avant dans les différents couloirs: s’organisent par rapport à la cible et l’espace </Text>
                  <Text>-	Se démarquent en appui du PB</Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Les élèves s’espacent dans les 3 couloirs lors de la montée de balle </Text>
                  <Text>-	Démarquage en appui et en soutien (lorsque le PB est en difficulté) </Text>
                  <Text >-	Se démarquent par rapport aux partenaires et à l’espace. </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Motricité </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}></Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Le dribble pose un problème </Text>
                  <Text >-	Dribble à deux mains </Text>
                  <Text >-	Passes données et reçues non maitrisées </Text>
                  <Text >-	Passes en cloche </Text>
                  <Text >-	Balles perdues </Text>
                  <Text >-	Tirs en dehors de la cible  </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text>-	Dribble en avançant à faible allure maitrisé</Text>
                  <Text>-	Passes généralement en cloche </Text>
                  <Text >-	Quelques pertes de ballon</Text>
                  <Text >-	Le tir touche la planche</Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Dribble et avance rapidement</Text>
                  <Text>-	Passes tendues et en cloche maitrisées</Text>
                  <Text >-	Perte de ballon rare</Text>
                  <Text >-	Les tirs touchent le rectangle, et rentrent fréquemment</Text>                    </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Décision </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}></Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >
                    -	Reste sur place une fois le ballon dans les mains. <br />
                    -	Ne sait pas s&apos;il doit passer ou avancer<br />
                    -	Hésitant<br />
                    -	N&apos;ose pas se démarquer/recevoir/tirer<br />
                  </Text>


                </Table.Cell>

                <Table.Cell>
                  <Text>-	Début de prise en compte des adversaires pour faire le choix</Text>

                </Table.Cell>

                <Table.Cell>
                  <Text >-	Choix plus rapides de tirs/passes/dribbles en fonction du placement adverse. <br />
                    -	Reconnait un couloir de jeu direct pour avancer<br />
                    -	Se démarque pour recevoir<br />
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
          <List.Item><strong>L1 :</strong> Evaluation diagnostique / Règlement / manipulation du ballon</List.Item>
          <List.Item><strong>L2 :</strong> Apprentissage des fondamentaux : dribble / passe / tir</List.Item>
          <List.Item><strong>L3 :</strong> Se détacher du ballon </List.Item>
          <List.Item><strong>L4 :</strong> Choisir entre monter ou passer</List.Item>
          <List.Item><strong>L5 :</strong> Evaluation formative</List.Item>
          <List.Item><strong>L6 :</strong> S’organiser rapidement en contre-attaque</List.Item>
          <List.Item><strong>L7 :</strong> Choisir entre défense individuelle ou défense en zone</List.Item>
          <List.Item><strong>L8 :</strong> Préparer et mettre en œuvre un projet de jeu</List.Item>
          <List.Item><strong>L9 :</strong> Evaluation</List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>

        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Par vague : dribble et gammes</List.Item>
          <List.Item>Un suiveur (NPB) et un meneur (PB) : au HOP, ils échangent de rôle / protéger le ballon / aller dans une zone…</List.Item>
          <List.Item>Parcours de motricité avec dribble : slalom, tir…</List.Item>
          <List.Item>Relais : dribble, demi-tour au plot, passe au suivant</List.Item>
        </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d’élèves attaquants qui restent derrière le défenseur à des élèves qui se démarquent pour recevoir la passe:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Attaque défense en surnombre </List.Item>
          <List.Item>Passe à 10 avec statistiques</List.Item>
          <List.Item>Zones sur le côté : zone bonus : SI on recoit la balle dans cette zone = inattaquable + 1 point</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Passer d’élèves qui atteignent rarement la ZFM et jouent en grappe des élèves qui s’organisent collectivement et individuellement pour faire progresser la balle vers la cible:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>3 zones successives avec 1 défenseur par zone. LE but est pour les 3 attaquants de franchir les zones jusqu’à la dernière (Zone 1 = 1 point, 2 = 10 points, 3 = 100 points) </List.Item>
          <List.Item>Jokers sur les côtés ou dans un couloir latéral </List.Item>
          <List.Item>Attaque défense en surnombre avec couloirs. Si pas de défenseur dans mon couloir = je fonce et je tir / si défenseur dans mon couloir = je passe</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Passer d’un élève qui tente sans cesse des shoots alors qu’il se trouve loin du panier, à un élève qui tire dans une SFM:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Match avec 2 cartouches par élèves (= 2 possibilités de tir seulement) </List.Item>
          <List.Item>Points bonifiés si tir dans ZFM </List.Item>
        </List.Root>



        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Règlement et Sécurité</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Règlement essentiel:</Heading>

        <List.Root gap={2} pl={4}>
          <List.Item>Pas de contact</List.Item>
          <List.Item>Pas de marcher : 2 pas max sans dribbler</List.Item>
          <List.Item>
            Reprise de dribble : interdiction de dribbler une seconde fois. Obligation de passer la balle. Droit de pivoter sur un pied.
          </List.Item>
          <List.Item>
            3 secondes « zones » : le joueur qui entre dans la raquette et la ligne des lancers ne possède que 3s pour tirer. Ne concerne que les attaquants
          </List.Item>
          <List.Item>5 secondes « remise en jeu »</List.Item>
          <List.Item>
            8 secondes « ligne médiane » : les joueurs ont 8s pour pouvoir franchir la ligne médiane après une remise en jeu dans le terrain adverse
          </List.Item>
          <List.Item>24 secondes « shoot »</List.Item>
          <List.Item>
            Retour en zone : lorsque le joueur franchit la ligne médiane, le ballon ne peut revenir derrière cette ligne
          </List.Item>
          <List.Item>
            Il y a sortie quand la balle sort ou qu’un joueur a un pied sur la ligne
          </List.Item>

        </List.Root>



        <Heading size="xl" fontWeight={"bold"}>Règles à mettre en place selon le niveau de jeu (Davantage pour des lycéens ou section sportive):</Heading>

        <List.Root gap={2} pl={4}>
          <List.Item>3 secondes « zones » : le joueur qui entre dans la raquette et la ligne des lancers ne possède que 3s pour tirer. Ne concerne que les attaquants</List.Item>
          <List.Item>5 secondes « remise en jeu »</List.Item>
          <List.Item>
            8 secondes « ligne médiane » : les joueurs ont 8s pour pouvoir franchir la ligne médiane après une remise en jeu dans le terrain adverse
          </List.Item>
          <List.Item>
            24 secondes « shoot » : 24 secondes pour tirer à partir de la prise de possession du ballon</List.Item>
        </List.Root>








        <Heading size="xl" fontWeight={"bold"}>Panier:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>1 point : lancer franc</List.Item>
          <List.Item>2 points : tir à l’intérieur de la raquettes</List.Item>
          <List.Item>3 points : tir à l’extérieur de la ligne des 3 points (6,75m du panier)</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Un lancer franc:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Pénalité accordée à un joueur victime d’une faute au moment d’un tir ou après la cinquième faute d’équipe. </List.Item>
          <List.Item>Si la faute a lieu lors d’un tir à 2 points non marqué, le joueur ayant subi la faute dispose de deux lancer francs. </List.Item>
          <List.Item>Si la faute a lieu lors d’un tir à 3 points non marqué, le joueur ayant subi la faute dispose de trois lancer francs. Si le joueur subit une faute mais marque le panier, il dispose d’un lancer franc unique.</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Hauteur règlementaire panier:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>3m05 </List.Item>
          <List.Item>2m60 junior </List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Taille ballon:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Taille 5 : 7 à 10 ans</List.Item>
          <List.Item>Taille 6 : 11 à 13 ans</List.Item>
          <List.Item>Taille 7 : + de 14 ans</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">7. Autre</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Variables pédagogique tir:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Toucher la planche = 1 point   </List.Item>
          <List.Item>Toucher le rectangle = 10 points       </List.Item>
          <List.Item>Balle qui rentre = 100 points.        </List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Proposer des grilles statistiques avec des indicateurs simples:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Passes réussies / balles perdues</List.Item>
          <List.Item>Accès à la zone de marque / balles perdues</List.Item>
          <List.Item>Interception / balles perdues / fautes provoquées</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Numérique :</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>
            Ce qu&apos;on peut regarder quand on analyse une vidéo en basket:
            <List.Root ps="5">
              <List.Item>Nombre de passes</List.Item>
              <List.Item>Main(s) utilisée(s) pour le dribble</List.Item>
              <List.Item>
                Regarder quand est-ce que l&apos;élève lève la tête (seulement quand il arrête de dribbler ? En même temps que le dribble ?)
              </List.Item>
              <List.Item>Situation favorable de marque ou non</List.Item>
              <List.Item>Choix : tir, passe</List.Item>
              <List.Item>Démarquage</List.Item>
              <List.Item>Trajet : direct au panier ou non</List.Item>
              <List.Item>Utilisation des couloirs de jeu</List.Item>
              <List.Item>Engagement : déplacements, vitesse, gestion de l’effort</List.Item>
              <List.Item>Arbitre : positionnement, activité</List.Item>
              <List.Item>Présence de coach</List.Item>

            </List.Root>
          </List.Item>
          <List.Item>
            Une situation favorable de marque dépend de:
            <List.Root ps="5">
              <List.Item>Placement des défenseurs</List.Item>
              <List.Item>Placement des élèves par rapport au panier </List.Item>
              <List.Item>Capacités de l’attaquant  </List.Item>
            </List.Root>
          </List.Item>
        </List.Root>

      </VStack>
    </Box>


  );
};


