import { Box, Heading, Text, VStack, List, Separator , Flex, For, Stack, Table} from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Step',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur le step : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Step</Heading>
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
        <Text px={3}>
        Activité de production de forme dont le but est de produire un enchaînement de pas et de mouvements de bras, codifiés ou non à une intensité et un niveau de coordination que l’élève doit gérer au regard de son projet et de ses ressources personnelles. (Formation Professionnelle Continu, Académie de la Réunion, CA5) 
        </Text>

        
        <Box>
          <Heading size="xl" fontWeight={"bold"} mb="4">Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item>Pratiquer en toute sécurité</List.Item>
            <List.Item>Savoir s&apos;entrainer</List.Item>
            <List.Item>Se connaitre</List.Item>
            <List.Item>Développer la coordination, synchronisation  </List.Item>
          </List.Root>
        </Box>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>

        <List.Root gap={2} pl={4}>
          <List.Item><strong>Amplitude :</strong> flexion et extension complète dans les mouvements de bras ou jambes, grandissement du corps </List.Item>
          <List.Item><strong>Bloc :</strong> 4 phrases = 4x8 temps = 32 temps</List.Item>
          <List.Item><strong>Phrase :</strong> 8 temps </List.Item>
          <List.Item><strong>BPM :</strong> tempo de la musique</List.Item>
          <List.Item><strong>Continuité :</strong> enchainement sans hésitation, rupture de rythme ou arrêt </List.Item>
          <List.Item><strong>FC :</strong> nombre de pulsation cardiaque par minute</List.Item>
          <List.Item><strong>Pas complexe :</strong> pas de base associée à une rotation, contre-temps, changement de direction, croisement </List.Item>
          <List.Item><strong>Bras complexe :</strong> bras dissociés gauche/droite, dans le temps ou dans les plans</List.Item>
          <List.Item><strong>Ressentis :</strong> musculaires, respiratoires, psychologiques et cognitifs</List.Item>
        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Observables:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Production : </strong>Distance, déplacement, qualité des saisies</List.Item>
          <List.Root ps='5'>
            <List.Item>Rythme et intensité</List.Item>
            <List.Item>Organisation motrice : coordination</List.Item>
            <List.Item>Mémorisation </List.Item>
            <List.Item>Synchronisation</List.Item>
          </List.Root>
          <List.Item><strong>Conception : </strong></List.Item>
          <List.Item><strong>Régulation : </strong>Forme de corps, efficacité et sécurité</List.Item>
          <List.Item><strong>Coopération : </strong>Finale et points</List.Item>
          <List.Item><strong>(Sécurité) : </strong>Finale et points</List.Item>
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
                      <Text fontWeight={"bold"}>Rythme - intensité</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>-	Uniformité, monotonie des pas <br/>
-	Pas simples réalisés de face<br/>
-	Absence d’utilisation des bras<br/>
-	Arrêts fréquents dans la réalisation motrice<br/>
-	Manque de tonicité<br/>
-	Peu ou pas de paramètres utilisés.

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Enchaînement de plusieurs blocs.  <br/>
-	Difficultés parfois à tenir la totalité des séries avec la fatigue <br/>
-	Paramètres utilisés : Qqs mouvements de bras ou hauteur du step


</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Réalise des séries complètes avec respect de la séquence d&apos;entraînement (séries, récup)<br/>
-	Enchaînement de plusieurs blocs<br/>
-	Impulsions

</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Organisation motrice</Text>
                    </Table.Cell>
                  <Table.Cell>
                      <Text>-	Déséquilibres, corps rigide <br/>
-	Pose du pied en percussion (tape), pas toujours sécuritaire<br/>
-	Mouvements hésitants, timides et sans amplitudev
-	Centre de gravité vers l’arrièrev
-	Regard orienté vers le sol<br/>
-	Respiration aléatoire, bloquée
</Text>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Text >-	Pose du pied sur le step pas toujours en entier<br/>
-	Amplitude des mouvements : mouvements peu amples, mouvements souvent étriqués.<br/>
-	Corps aligné mais la posture se dégrade en fin de séries.<br/>
-	Regard orienté vers ses pieds ou vers son voisin

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Posture dynamique<br/>
-	Pose du pied dynamique (pied actif, « rebond »)<br/>
-	Utilisation et placement des brasv
-	Regard à l’horizontale.<br/>
-	Posture qui reste dynamique malgré les répétitions et la durée de l’effort. Légère dégradation de la posture en toute fin de série.<br/>
-	Amplitude des mouvements

</Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
        
                    <Table.Cell fontWeight="bold">
                    Mémorisation et synchronisation
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Centré sur la reproduction des pas. <br/>
-	Difficulté de mémorisation pour l&apos;enchaînement des pas.<br/>
-	Décalage avec le tempo de la musique<br/>
-	Suit ses camarades, retard
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Élève concentré, enchaînement des pas réalisés sans temps morts en continu, qqs légères hésitations avec la fatigue. <br/>
-	L’enchaînement est assez fluide hormis qqs ruptures isolées.<br/>
-	Décalage par rapport au tempo de la musique, souvent en retard
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Connaît les blocs, les temps d&apos;effort et de récupération (savoir s&apos;entrainer) <br/>
-	Pratiquement aucun arrêt.<br/>
-	Mouvements calés sur le tempo de la musique<br/>
-	Paramètres utilisés : Hauteur du step, utilisation des bras, Relevé de la FC, impulsions, pas complexes

 </Text>
                    </Table.Cell>
                  </Table.Row>



                    <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Concevoir </Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell/>
                    <Table.Cell>
                    <Text >-	Paramètres non adaptés <br/>
-	Les choix sont peu adaptés aux ressources et au thème choisi.

 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Le thème choisi est justifié de façon personnelle<br/>
-	Les modalités des séquences sont justifiées<br/>
-	Le choix des paramètres se fait par mimétisme et n’est pas toujours adapté aux ressources du candidat.
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Le thème choisi est justifié de façon personnelle et prend appui sur le carnet d&apos;entraînement <br/>
-	Les modalités des séquences sont adaptées et justifiées<br/>
-	Le choix des paramètres se fait en fonction du vécu du candidat. <br/>
-	Le carnet d&apos;entraînement est présent et cohérent.


 </Text>
                    </Table.Cell>
                  </Table.Row>

                  
     

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Analyser/Réguler </Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell/>
    
                    <Table.Cell>
                    <Text >-	Aucune régulation d’une série à l’autre. <br/>
-	Paramètres inconnus
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Quelques régulations ponctuelles d’une série à l’autre. Choix de paramètres inappropriés <br/>
-	Ressentis sommaires

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Comporte des éléments de ressentis précis en fonction de différents analyseurs (cardio-respiratoire, psychologique et musculaire) <br/>
-	Des perspectives sont évoquées au niveau de l’adaptation de la charge de travail

</Text>
                    </Table.Cell>
                  </Table.Row>


                <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Coopérer</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell/>
                    <Table.Cell>
                    <Text >-	Agit seul pour lui-même, peu d’interactions avec les autres <br/>
-	Suit le travail du groupe de façon détachée

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	S’engage dans un rôle de partenaire de façon ponctuelle <br/>
-	Observe de façon globale sans percevoir les éléments saillants de la pratique.


</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	S’engage dans son rôle de partenaire d&apos;entraînement et de coach. <br/>
-	Observe avec attention et dans l’intention d’apporter des conseils.
</Text>
                    </Table.Cell>
                  </Table.Row>
                 
              </Table.Body>
            </Table.Root>
      </Stack>

      <Text fontWeight="bold">A retenir sur la vidéo :</Text>
      <List.Root>
        <List.Item>Plus il y a de propulsion bras (au-dessus de la ligne des épaules) – cardio – plus la chorégraphie permet le développement de la puissance aérobie     
        </List.Item>
        <List.Item>Plus il y a des bras (asymétrique – décalé – utilisation des mains), des orientations variées, plus la chorégraphie est à dominante « créativité » (thème 3)</List.Item>
        <List.Item> Regarder les paramètres utilisés : hauteur du step, leste, impulsion (ski), pompes</List.Item>
      </List.Root>





        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">4. Organisation d’un cycle – exemple</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>L1 :</strong> Découverte de l’activité </List.Item>
          <List.Item><strong>L2-3 :</strong> Etablir des liens cause/effet entre ses sensations et la FC pour une meilleure connaissance de soi / construction de pas simples, intensité élevée au départ puis jouer sur des paramètres de complexification ou simplification</List.Item>
          <List.Item><strong>L4 :</strong> Découverte de différents thèmes d’entrainement et de leurs paramètres </List.Item>
          <List.Item><strong>L5 :</strong> Définir son projet et son thème d’entrainement. Création d’un enchainement</List.Item>
          <List.Item><strong>L6-7 :</strong> Planifier et réguler son projet grâce à des paramètres pour entrer dans son thème d’entrainement </List.Item>
          <List.Item><strong>L8 :</strong> Evaluation</List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>
        
        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Mémorisation : dans ma valise</List.Item>
            <List.Item>Enchainement au sol </List.Item>
            <List.Item>Suivre un enchainement simple sur musique qui varie  </List.Item>
            <List.Item>Synchronisation musique - Marche sur 8 temps / arrêt sur 8 temps</List.Item>
          </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui se perd dans l&apos;enchainement à un élève capable d&apos;exécuter un enchainement mémorisé:
          
        </Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Texte à trou : faire l’enchainement en recopiant le prof et continuer quand il s’arrête </List.Item>
            <List.Item>Chacun apprend 1 pas à son partenaire parmi 4 pas déjà appris. A prends le pas 1. 4 répétitions. B apprend le pas 1+2. 4 répétitions…jusqu’à ce que les 4 pas soient appris. Puis les élèves exécutent l’enchainement, avec un observateur chacun. Fiche d’observation. 1 maitre du tempo désigné parmi les 4 élèves. </List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui est décalé du tempo/camarades à un élève synchronisé avec la musique et les autres:</Heading>
          <List.Root gap={2} pl={4}>
        <List.Item>
        Taper dans ses mains les temps
        <List.Item>Réaliser un enchainement avec son camarade en même temps main dans la main / à côté / en face</List.Item>
        </List.Item>
        <List.Item>Le cercle des pas (aussi pour mémorisation)</List.Item>
        </List.Root>

         <Heading size="xl" fontWeight="bold">Passer d&apos;un élève qui a une FC en décalage avec son mobile, à un élève qui se régule pour que sa FC soit dans la fourchette attendue / Passer d&apos;un élève qui a peu de repères sur lui-même à un élève qui sait construire et analyser son entrainement selon ses capacités:</Heading>
              <List.Root gap={2} pl={4}>
                <List.Item>Série 1 : ajouter 1 paramètre. Série 2 : 2 paramètres Série 3, 3 paramètres. Analyse de la FC entre chaque série. </List.Item>
                </List.Root>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Sécurité</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Sécurité active:</Heading>
          <List.Root gap={2} pl={4}>
              <List.Item>Pied entier sur le step </List.Item>
              <List.Item>Pas de descente vers l’avant (25% en + du poids)</List.Item>
              <List.Item>Amortir la descente – pointe/talon </List.Item>
              <List.Item>Dos placé (rétroversé) et jambes semi-fléchies </List.Item>
              <List.Item>Éviter les sauts step/sol (poids du corps x4) </List.Item>


          </List.Root>
          
        <Heading size="xl" fontWeight={"bold"}>Sécurité passive:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Chaussures obligatoires</List.Item>
            <List.Item>2m entre chaque step</List.Item>
            <List.Item>Vérifier les tampons sous les steps</List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Surpoids:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Ne pas surélever le step</List.Item>
          <List.Item>Peu d’impulsion</List.Item>
          <List.Item>Éviter les rotations rapides </List.Item>
          </List.Root>

          <Box bg="teal.500" p={3} borderRadius="lg" w="full">
            <Heading size="md" color="white">7. Autre</Heading>
          </Box>
          <Heading size="xl" fontWeight={"bold"}>FCmax:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Garçon : 220 – âge</List.Item>
              <List.Item>Fille : 226 – âge</List.Item>
            </List.Root>

          <Heading size="xl" fontWeight={"bold"}>FC de réserve:</Heading>
            <Text>FCR = FCM-FCrepos</Text>

          <Heading size="xl" fontWeight={"bold"}>FC d’entrainement (fréquence cible) d’après Karvonen:</Heading>
            <Text>FC au repos + (FCmax – FC repos) * (% de l’intensité du travail choisi)</Text>

            <Heading size="xl" fontWeight={"bold"}>Numérique:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Carnet d’entrainement numérique (Tomaszower)</List.Item>
          <List.Item>FC en direct, cardiofréquencemètre – courbe à exploiter – Polar Team</List.Item>
          </List.Root>
            
          <Heading size="xl" fontWeight={"bold"}>Si problème de mémorisation:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Diminuer le nombre de blocs</List.Item>
              <List.Item>Réchappe = revenir aux pas de base jusqu&apos;à ce qu&apos;on raccroche à la chorée</List.Item>
            </List.Root>

            <Heading size="xl" fontWeight={"bold"}>Si problème de latéralisation (souvent pour élèves à BEP):</Heading>
            <Text>Foulard à une cheville permet qu&apos;il se repère plus facilement</Text>
        
        </VStack>
    </Box>

    
  );
};


