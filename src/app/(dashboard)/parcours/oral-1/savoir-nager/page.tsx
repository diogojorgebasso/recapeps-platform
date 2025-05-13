import { Box, Heading, Text, VStack, List, Separator, Flex, For, Stack, Table } from "@chakra-ui/react";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Savoir nager',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur le savoir nager : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Savoir nager: Attestation du Savoir nager en Sécurité (ASNS)
        </Heading>
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
          <List.Item>5. Situations d&apos;apprentissage</List.Item>
          <List.Item>6. Sécurité</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text px={3}>
          Le savoir-nager vise à l’apprentissage des techniques de bases de la natation afin de leur permettre, avant tout de se sauver, en se déplaçant, flottant, se signalant.

        </Text>



        <Heading size="xl" fontWeight={"bold"}>Parcours à réaliser en continuité, sans reprise d&apos;appuis au bord du bassin et sans lunettes:</Heading>
        <List.Root gap={2} pl={4} listStyleType='decimal'>
          <List.Item>A partir du bord de la piscine, entrer dans l&apos;eau en chute arrière</List.Item>
          <List.Item>Se déplacer sur une distance de 3,5 mètres en direction d&apos;un obstacle </List.Item>
          <List.Item>Franchir en immersion complète l&apos;obstacle sur une distance de 1,5 mètre </List.Item>
          <List.Item>Se déplacer sur le ventre sur une distance de 15 mètres   </List.Item>
          <List.Item>Au cours de ce déplacement, au signal sonore, réaliser un surplace vertical pendant 15 secondes puis reprendre le déplacement pour terminer la distance des 15 mètres </List.Item>
          <List.Item>Faire demi-tour sans reprise d&apos;appuis et passer d&apos;une position ventrale à une position dorsale </List.Item>
          <List.Item>Se déplacer sur le dos sur une distance de 15 mètres </List.Item>
          <List.Item>Au cours de ce déplacement, au signal sonore réaliser un surplace en position horizontale dorsale pendant 15 secondes, puis reprendre le déplacement pour terminer la distance des 15 mètres </List.Item>
          <List.Item>Se retourner sur le ventre pour franchir à nouveau l&apos;obstacle en immersion complète </List.Item>
          <List.Item>Se déplacer sur le ventre pour revenir au point de départ</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"} mb="4">Enjeux:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Préoccupation de santé sociale :</strong> La noyade est la première cause de mortalité par accident de la vie courante chez les moins de 25 ans en France</List.Item>
          <List.Item><strong>Sécuritaire :</strong> Se sauver, s&apos;équilibrer en cas de chute dans l&apos;eau</List.Item>
          <List.Item><strong>Moteur :</strong> Motricité aquatique, poussées solides, respiration</List.Item>
          <List.Item><strong>Affectif :</strong> Vaincre la peur du grand bain, de l&apos;eau   </List.Item>
          <List.Item><strong>Culturel :</strong> Connaitre les règles hygiéniques de la piscine, connaitre les risques concernant les noyades   </List.Item>

        </List.Root>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>

        <List.Root gap={2} pl={4}>
          <List.Item><strong>Déséquilibre : </strong>Tangage, roulis (le roulis est positif SI maitrisé), lacet</List.Item>
          <List.Item><strong>Cycle de nage : </strong>Une action complète du bras droit et du bras gauche</List.Item>
          <List.Item><strong>Amplitude de nage (m/cycle) : </strong>Distance parcourue lors d&apos;un cycle de bras</List.Item>
          <List.Item><strong>Fréquence de nage (cycle/min) : </strong>Nombre de cycle réalisés par unité de temps</List.Item>

        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Observables:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Respiration  </strong></List.Item>
          <List.Item><strong>Équilibration  </strong></List.Item>
          <List.Item><strong>Propulsion  </strong></List.Item>
          <List.Item><strong>Prise d’informations – mise en projet </strong></List.Item>
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
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Équilibration</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell />

                <Table.Cell>
                  <Text>-	Corps qui s&apos;équilibre à la verticale, recherche des appuis de terrien <br />
                    -	Tête verticale, qui se redresse vers l&apos;avant<br />
                    -	Regard vertical <br />
                    -	Effet de la pesanteur<br />
                    -	Peut être maintenu ponctuellement avec une aide<br />

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Équilibre oblique <br />
                    -	Le nageur subit le redressement progressif de son corps <br />
                    -	Peut être maintenu brièvement sans aide, ou plus longuement avec une aide

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Corps profilé à l&apos;horizontal <br />
                    -	Tête dans l&apos;axe du corps<br />
                    -	Plus d&apos;appuis plantaires<br />
                    -	Regard vertical


                  </Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Respiration </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell />
                <Table.Cell>
                  <Text >-	Automatiquement par le nez <br />
                    -	Ne souffle pas dans l&apos;eau, bloque sa respiration = expiration passive <br />
                    -	Inspiration longue <br />
                    -	Tête à la verticale <br />
                    -	Apnée courte

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Expiration dans l&apos;eau mais non complète<br />
                    -	Inspiration sur le côté<br />
                    -	Irrégulière<br />
                    -	Apnée inspiratoire
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Respiration volontaire par la bouche<br />
                    -	Inspiration brève<br />
                    -	Expiration longue <br />
                    -	Tête à l&apos;horizontale<br />
                    -	Tous les trois temps

                  </Text>
                </Table.Cell>
              </Table.Row>




              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Propulsion</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell />
                <Table.Cell>
                  <Text >-	Appuis fuyants <br />
                    -	Se fait grâce à des appuis solides (sol, mur)
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Partagée entre recherche de progression et maintien des voies aériennes en surface<br />
                    -	Orientation des appuis obliques par rapport au sens de déplacement<br />
                    -	Devient sustentatrice à l&apos;approche d&apos;un obstacle

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Assurée par des mouvements amples<br />
                    -	Coordination qui laisse apparaitre des trous moteurs (temps morts, inspiration qui s&apos;allonge)<br />
                    -	Se dégrade avec la fatigue<br />
                    -	Mobilise la tête pour cherche un objet

                  </Text>
                </Table.Cell>
              </Table.Row>


              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Prise d&apos;information – mise en projet</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>
                  <Text fontWeight={"bold"}> </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text >-	Guidé par ses émotions (peur) : choisit un parcours où il peut trouver rapidement des appuis solides <br />
                    -	Choisit un déplacement qui ne perturbe que succinctement sa respiration ou son équilibre

                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text>-	Pise d&apos;information essentiellement visuelle<br />
                    -	Choisit un projet qui limite les perturbations de son équilibre<br />
                    -	Se connait peu et risque de s&apos;engager sans un parcours qu&apos;il n&apos;arrive pas à finir


                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text >-	Identifie les obstacles à franchir dès le départ, anticipation<br />
                    -	Utilise les repères pris pendant la séquences (distances parcourues, abandons…)<br />
                    -	Identifie les indicateurs externes de « risque » (profondeur, poids d’un objet, distance à parcourir…)<br />
                    -	Termine son parcours


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
          <List.Item><strong>L1 :</strong>Evaluation diagnostique – formation de groupes différents</List.Item>
          <List.Item><strong>L2 :</strong> S’immerger sous l’eau</List.Item>
          <List.Item><strong>L3 :</strong> Construire l’horizontalité en surface (corps flottant). </List.Item>
          <List.Item><strong>L4 :</strong> Maintenir l’horizontalité en déplacement</List.Item>
          <List.Item><strong>L5 :</strong> Construire sa respiration aquatique, se déplacer horizontalement (corps projectile)</List.Item>
          <List.Item><strong>L6 :</strong> Se déplacer sur le ventre et le dos avec des membres propulseurs (corps) / enchainer deux actions </List.Item>
          <List.Item><strong>L7 :</strong> Chuter et enchainer un déplacement</List.Item>
          <List.Item><strong>L8 :</strong> Enchainer le plus d’actions possibles</List.Item>
          <List.Item><strong>L9 :</strong> Test du savoir nager </List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>

        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>La locomotive : se déplacer selon diverses consignes</List.Item>
          <List.Item>Les évadés : se déplacer le plus rapidement possible selon des images donnés (ex : le sol est rempli de laser, ne pas toucher la sol)</List.Item>
          <List.Item>Petits poissons venez : pour s’immerger  </List.Item>
        </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui garde la tête hors de l&apos;eau à un élève qui accepte de l&apos;immerger:
        </Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : Un élève qui s&apos;immerge, un qui lui montre un numéro avec ses doigts </List.Item>
          <List.Item>SA2 : En compétition chercher la maximum d’objets sous l’eau en un temps défini </List.Item>
          <List.Item>SA3 : Descendre le long de la perche</List.Item>
          <List.Item>SA4 : Traverser sous des lignes d’eau / passer dans des anneaux lestés sous l’eau</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Passer d’un élève qui a une position oblique à un élève capable de maintenir la position horizontale sur et sous l’eau:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : S’allonger sur le ventre en tenant le rebord. Puis en battant des jambes </List.Item>
          <List.Item>SA2 : Un élève se met sur le dos en position horizontal, en tenant 2 frites. Un autre élève le déplace en tirant les frites (petit bain).  </List.Item>
          <List.Item>SA3 : Dans un petit bain, en poussant contre le mur en coulée ou poussée, être le premier à arriver à atteindre l’objet mis en place par l’enseignant</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight="bold">Passer d’un élève qui avance peu (faible amplitude des trajets moteurs, appuis fuyants, pas de battement) à un élève qui se propulse sur l’eau :</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>SA1 : Observateur coach avec l’outil vidéo pour mettre en lien la perception et la réalisation</List.Item>
          <List.Item>SA2 : Nager les poings fermés puis mains à plat; nager juste avec les bras puis avec les bras et les jambes ⟹ s&apos;aider des ressentis pour comprendre et s&apos;améliorer</List.Item>
        </List.Root>



        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Sécurité</Heading>
        </Box>
        <Text>Pour les dispositifs et classes à faibles effectifs ou dédoublées, le regroupement de classes sur des séances communes peut être envisagé en constituant un seul groupe-classe.</Text>
        <Text>Cette attestation, délivrée par le directeur de l&apos;école ou le chef d&apos;établissement, est signée par le professeur des écoles et un professionnel agréé à l&apos;école primaire, ou par le professeur d&apos;éducation physique et sportive au collège ou au lycée. Elle permet l&apos;accès aux activités aquatiques dans le cadre des accueils collectifs de mineurs (article A. 322-3-1 du Code du sport).</Text>
        <Text>La hauteur du bord à l&apos;entrée dans l&apos;eau doit être comprise entre 0 et 80 cm. Au-delà, le départ peut être réalisé sur le côté du bassin ou depuis l&apos;une des marches de l&apos;échelle. La profondeur doit être au minimum de 1,50 m du côté du départ. Le parcours doit être réalisé tout au long à au moins 1 mètre d&apos;un bord latéral du bassin ou de tout appui solide.<br />
          + toutes les règles de la natation qui s&apos;appliquent également en savoir-nager </Text>
      </VStack>
    </Box>


  );
};


