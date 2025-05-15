import { Box, Heading, Text, VStack, List, Separator, Flex, For, Stack, Table } from "@chakra-ui/react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Escalade',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur l'escalade' : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Escalade</Heading>
      </Flex>

      <VStack align="start" gap={4} mt={4}>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">Sommaire</Heading>
        </Box>
        <List.Root gap={2} pl={4} fontWeight="bold" maxW="600px" borderRadius="lg"  >
          <List.Item>1. Définition et Enjeux de l’APSA</List.Item>
          <List.Item>2. Vocabulaire spécifique</List.Item>
          <List.Item>3. Observables et conduites typiques</List.Item>
          <List.Item>4. Situation d&apos;apprenstissage</List.Item>
          <List.Item>5. Sécurité</List.Item>
          <List.Item>6. Exemple d&apos;évaluation</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text>
          Grimper consiste à réaliser un itinéraire sur une paroi rocheuse ou artificielle, grâce à diverses prises, afin d’atteindre le sommet.
        </Text>
        <Heading size="xl" fontWeight="bold" mb="4">Enjeux :</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Apprendre à l’élève à se projeter</List.Item>
          <List.Item>Permettre à l&apos;élève de construire sa sécurité et celle des autres</List.Item>
          <List.Item>Faire acquérir à l&apos;élève un répertoire gestuel permettant le déplacement dans la verticalité</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Type de voie :</strong> vertical, dalle, dévers, dièdre, surplomb, traversée</List.Item>
          <List.Item><strong>Prises main :</strong> inversée, crochetante, pince, plat, réglette, bac, boule...</List.Item>
          <List.Item><strong>Prises pieds :</strong> graton, bossette, fissure</List.Item>
          <List.Item><strong>Saisies pieds :</strong> appui pointe, carre externe/interne, crochetage talon</List.Item>
          <List.Item><strong>Mouvements :</strong> pivot, lolotte, changement de pied/main, pied-main, jeté...</List.Item>
          <List.Item><strong>Matériel :</strong> descendeur, baudrier, longe dynamique, grigri, dégaine, mousqueton</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item>Mise en oeuvre de la sécurité</List.Item>
          <List.Item>Prise d&apos;informations pour identifier les éléments pertinents </List.Item>
          <List.Item>Prise de décisions pour choisir/Concevoir l&apos;itinéraire </List.Item>
          <List.Item>Organisation motrice pour réaliser l’action </List.Item>
          <List.Item>Connaissances sur soi </List.Item>
          <List.Item>Communication </List.Item>
        </List.Root>

        <Stack gap="10">
          <Table.Root key={"lg"} size={"lg"}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader ></Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={"bold"} textAlign="center">Profil 1 - débutant: tracteur-bras</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={"bold"} textAlign="center">Profil 2 - initié: pousseur-jambe</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={"bold"} textAlign="center">Profil 3 – confirmé: équilibriste</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/* 1e partie tableau montage */}
              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Mise en oeuvre de la sécurité</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell />
                <Table.Cell />

                <Table.Cell>La sécurité est indispensable en escalade. <br />
                  Tant qu’il n’y a pas de maîtrise de l’encordage et de l’assurage, il n’y a pas de grimpeurs ! <br />
                  Un élève ne peut pas faire des erreurs « de temps en temps ». Tous les élèves doivent être maitres de leur sécurité et de celle des autres.

                </Table.Cell>

                <Table.Cell />
              </Table.Row>

              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Prise d’informations et de décisions</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Lecture de la voie</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >- Pas de lecture de voie <br />
                    - Regard devant soi et vers le bas uniquement<br />
                    - Aucune anticipation sur l’itinéraire.<br />
                    -	Cherche toujours à monter jusqu’à la fin de la voie ou l’abandon.

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Pas de lecture préalable <br />
                    -	Regard plus large, incluant la gauche et la droite proche.<br />
                    -	Lecture du mouvement suivant uniquement : pas d’anticipation de la suite de l’itinéraire.<br />
                    -	S’arrête quelques fois dans la voie car il est épuisé, ou pour lire le mouvement suivant.
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Lecture préalable sommaire. <br />
                    -	Regard attentif dans un champ large<br />
                    -	Est attentif au type de préhension.<br />
                    -	Lecture de plusieurs mouvements à partir de positions de moindre effort (PME). <br />
                    -	Alterne phases de prise d’informations (immobile) et phases de progression.

                  </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Organisation motrice </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Posture générale</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >- Face-au-mur  <br />
                    - Mouvements saccadés de type « montée d’échelle » <br />
                    -	Etoile de mer : grimpe en tirant sur les bras et pieds qui restent en bas <br />
                    -	Pieds sont posés tardivement sur la plante <br />
                    -	Mouvements saccadés de type « montée d’échelle »
                  </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text>-	Face-au-mur <br />
                    -	Les pieds montent pour pouvoir pousser <br />
                    -	Début de transfert du poids du bassin <br />
                    -	Changements de mains ponctuels<br />
                    -	Positionnement de profil rare mais existant

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Adaptée : face au mur, de profil, en « opposition », croisés de mains ou de pieds... <br />
                    - Mouvements posés, précis

                  </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Utilisation des bras</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Crispés : dépense énergétique importante <br />
                    Conséquence: le buste est collé à la paroi et la tête est bloquée.

                  </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text>-	Fléchis (car le bassin est plus haut : les jambes poussent) <br />
                    -	Il ne cherche pas à s’économiser<br />
                    Conséquence: fatigue des bras


                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Tractent pour s’élever, puis reviennent en position tendue lors de phases de lecture pour s’économiser <br />
                    -	Ne sont pas forcément moteurs du mouvements, arrivent en complément des jambes



                  </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Utilisation des jambes</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Inexistant <br />
                    -	Les pieds se posent sans regarder, « grattent », « tâtonnent »<br />
                    -	Souvent posés au niveau de la plante<br />
                    -	Restent à droite et à gauche du CG



                  </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text>-	Motrices <br />
                    -	Pose de pied sur la pointe <br />
                    -	Tâtonnement des pieds.



                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Sont motrices et équilibratrices <br />
                    -	Les forces transmises ont toutes les directions et permettent d’exploiter différentes préhensions<br />
                    -	Les pieds se posent sur la pointe en carre interne, mais aussi externe, voir en crochetage talon

                  </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Tyoe de préhensions</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Bac <br />
                    -	Grosses prises


                  </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text>Prises crochetante horizontales et obliques, bac, boules, colonnes.

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text > Variées: verticales, inversées, réglettes, plats...


                  </Text>
                </Table.Cell>
              </Table.Row>



              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Équilibre</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >- Déséquilibres fréquents ou absence de progression. <br />
                    - Le grimpeur ne cherche pas une position d’équilibre avant de lâcher une main ou un pied. <br />
                    - La projection du CG reste globalement au milieu des pieds. <br />
                    - Peu de souplesse.


                  </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text>- Déséquilibres fréquents. <br />
                    - Le grimpeur ne cherche pas systématiquement l’équilibre avant de lâcher une main ou un pied. <br />
                    - Le bassin se place plus souvent à l’aplomb des appuis. <br />
                    - Le CG se déplace latéralement (le grimpeur « charge » un pied ou l’autre), jusqu’aux appuis, mais sans les dépasser. <br />
                    - Souplesse relative des jambes.


                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >- L’équilibre toujours maintenu permet de réaliser des mouvements calmes et économes. <br />
                    - Le bassin se déplace latéralement et peut également pivoter. <br />
                    - Le CG se déplace latéralement au-delà̀ des appuis, l’équilibre est obtenu par des forces compensatoires <br />
                    - Souplesse des jambes, du bassin et du buste.



                  </Text>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Communication </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Assureur - grimpeur</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >
                    Manifestations de peur et de stress.
                  </Text>


                </Table.Cell>

                <Table.Cell>
                  <Text>Fréquente : demande du « mou », du « séchage », averti. </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text >Épurée : averti son assureur lorsque c’est nécessaire (« Fais gaffe, là ! »).
                  </Text>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Connaissance sur soi </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Emotions</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >
                    Refuse l’éventualité de la chute: peu d’engagement.
                  </Text>


                </Table.Cell>

                <Table.Cell>
                  <Text>Accepte l’idée d’une chute anticipée, en moulinette.  </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text >Accepte l’idée d’une chute « dans le mouvement », en moulinette comme en tête.
                  </Text>
                </Table.Cell>
              </Table.Row>

              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}>Analyse de son activité</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >
                    Ne connait pas son niveau.
                  </Text>


                </Table.Cell>

                <Table.Cell>
                  <Text>Est capable de situer son niveau en termes de cotation. </Text>

                </Table.Cell>

                <Table.Cell>
                  <Text >Est capable de situer son niveau en termes de cotation, de style de grimpe et peut exprimer ses points forts et ses points faibles.
                  </Text>
                </Table.Cell>
              </Table.Row>


            </Table.Body>
          </Table.Root>
        </Stack>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">4. Situations d’apprentissage</Heading>
        </Box>
        <Heading size="lg" fontWeight="bold">Passer d’un élève tracteur avec ses bras à pousseur avec ses jambes:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : 1 main 2 pieds (pas de mouvement de main sans bouger les 2 pieds)</List.Item>
          <List.Item>SA2 : Monter avec un minimum de prises main touchées</List.Item>
          <List.Item>SA3 : Monter avec les 2 mains attachées avec une corde passant dans le ponter / Main droite reliée main gauche / 2 mains reliées aux 2 pieds opposés</List.Item>
        </List.Root>

        <Heading size="lg" fontWeight="bold">Passer d’un élève qui grimpe uniquement sur un axe vertical à un élève capable d’exploiter les différents axes pour progresser – mettre en place un projet de déplacement pour grimper efficacement avec des axes varié:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : Prises interdites (choix contraint)</List.Item>
          <List.Item>SA2 : réaliser une traversée sous la corde disposée par l’enseignant: adapter son déplacement et s’adapter à ≠ prises</List.Item>
          <List.Item>SA3 : PME – à chaque dégaine, les élèves doivent retirer au moins 1 ou 2 appuis et tenir 10 secondes</List.Item>
          <List.Item>SA4 : 1 minute de lecture de voie – annoncer son projet de nombre de mouvements au juges – réaliser la voie – But d&apos;atteindre son projet de mouvement prévu</List.Item>
        </List.Root>

        <Heading size="lg" fontWeight="bold">Passer d’un élève qui exploite différents axes de progression à un élève qui utilise une gestuelle de façon efficiente:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : Lecture de voie : entourer sur une fiche ou numérique les prises que l’on souhaite prendre. Lors de la grimpe, 10 points par prise utilisée, et -1 par prise estimée mais non touchée</List.Item>
          <List.Item>SA2 : Tournois de point technique. Avant chaque voie, l&apos;élève choisi 3 points techniques qu&apos;il devra réaliser à chaque dégaine (décolle toi, assis-talon, changement main/pieds, pied-main, grenouille, crochet-talon). Posture validée par le juge = 1 point</List.Item>

        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Sécurité (Circulaire du 19 Avril 2017)</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item>
            Les programmes des lycées sont guidés par des niveaux de compétence à atteindre. Ces niveaux font référence à une pratique en moulinette au niveau 3 et ouvrent la possibilité́ de pratiquer l&apos;escalade en tête aux niveaux 4 et 5 de compétence.
          </List.Item>
          <List.Item>
            Les différentes zones de travail sont délimitées (échauffement, travail, observation, repos)
          </List.Item>
          <List.Item>
            Les encordements sur le ou les pontets du baudrier enfilé de façon conforme sont vérifiés systématiquement par le professeur pour démarrer la voie
          </List.Item>
          <List.Item>
            Les vérifications mutuelles entre élèves (grimpeur / assureur) doivent être systématiques. À ce titre, l&apos;usage d&apos;un co-contrôle doit être installé dès la première leçon pour devenir systématique et permanent. Le professeur finalise cette première étape par une ultime vérification visuelle et tactile réalisée par ses soins avant toute autorisation de grimper.</List.Item>
          <List.Item>
            Double nœud de « huit » complété par un nœud d&apos;arrêt. Le nœud de « huit » doit être compacté et confectionné le plus près possible du ou des pontets
          </List.Item>
          <List.Item>
            Dans le cas d&apos;un assurage en moulinette, la modalité d&apos;ascension doit permettre d&apos;éviter tout retour au sol. Ce dispositif peut être un nœud de sécurité (corde nouée en double par un nœud simple appelé « queue de vache ») en dessous du système frein de l&apos;assureur et à proximité de celui-ci, dès que les mains du grimpeur dépassent 4 mètres environ. Ce dispositif ou tout autre dispositif mis en place empêchant le retour au sol doit être contrôlé par l&apos;enseignant.
          </List.Item>
          <List.Item>
            La signalisation des couloirs de grimpe doit impliquer un code couleur (alternance de cordes de couleur différente par exemple) entre les différentes voies et cordes en place.
          </List.Item>
          <List.Item>
            Le professeur doit porter un baudrier, équipé d&apos;une longe, d&apos;une ou deux dégaines, et d&apos;un système frein afin de pouvoir intervenir rapidement en tout point du mur ou pour porter assistance à un élève.
          </List.Item>
          <List.Item>
            Quand un différentiel de poids supérieur à dix kilogrammes subsiste, il convient de le neutraliser par une vrille de corde en moulinette (une vrille pour 10 kilogrammes d&apos;écart). Pour l&apos;escalade en tête, ce différentiel de poids ne peut être compensé et interdit donc la pratique en tête de cordée de l&apos;élève le plus lourd.
          </List.Item>
          <List.Item>
            En tête, l&apos;usage de départs de voies avec deux dégaines pré-mousquetonnées doit permettre d&apos;éviter les retours au sol du grimpeur quand les premiers mousquetonnages s&apos;avèrent délicats.
          </List.Item>

        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Exemple d’évaluation</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item>Motricité du grimpeur /5</List.Item>
          <List.Item>Cotation et difficulté de la voie /3</List.Item>
          <List.Item>Planifier et réaliser un projet adapté /2</List.Item>
          <List.Item>S&apos;équiper et assurer /4</List.Item>
          <List.Item>Lecture de voie /2</List.Item>
          <List.Item>Coopérer /2 (conseil, vérification, communication)</List.Item>
          <List.Item>Investissement et progrès /2</List.Item>
        </List.Root>
      </VStack>
    </Box>



  );
};


