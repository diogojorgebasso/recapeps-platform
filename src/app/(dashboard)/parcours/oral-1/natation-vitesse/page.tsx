import { Box, Heading, Text, VStack, List, Separator , Flex, For, Stack, Table} from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Natation de vitesse',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur la natation de vitesse : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Natation de vitesse</Heading>
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
          <List.Item>7. Biomécanique</List.Item>
          <List.Item>8. Bonus</List.Item>
        </List.Root>
        
        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l&apos;APSA</Heading>
        </Box>
        <Text px={3}>
        Nager le plus rapidement possible en maintenant des actions propulsives, sur une distance délimitée, imposée par différentes formes de nage.
        </Text>

        
        <Box>
          <Heading size="xl" fontWeight={"bold"} mb={4}>Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item><strong>Sécuritaire :</strong> Se sauver en cas de noyade, s&apos;économiser, se déplacer rapidement en cas de danger</List.Item>
            <List.Item><strong>Moteur :</strong> Développer une motricité et respiration aquatique, et ses qualités physiques</List.Item>
            <List.Item><strong>Social :</strong> Principes hygiéniques, savoir s’échauffer et se préparer</List.Item>
          </List.Root>
        </Box>

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
          <List.Item><strong>Équilibre</strong></List.Item>
          <List.Item><strong>Respiration</strong></List.Item>
          <List.Item><strong>Propulsion</strong></List.Item>
          <List.Item><strong>Prise d’information</strong></List.Item>
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
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Equilibre</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>
                      -	Oblique lors du déplacement, et parfois horizontal <br/>
-	Se déséquilibre lors de la phase inspiratoire, relève la tête et arrête de battre des jambes : tangage<br/>
-	Lacets et roulis lors du déplacement<br/>
-	Pas de dissociation tête/tronc<br/>
-	Regard horizontal<br/>
-	Recherche des appuis de terrien
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Corps plutôt horizontal excepté lors de l’inspiration (corps oblique liée au manque de dissociation tête/tronc)<br/>
-	Quelques tangages, lacets <br/>
-	Roulis important en bloc (tête – ceinture scapulaire) 

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Corps profilé à l&apos;horizontal<br/>
-	Quelques passages à l&apos;oblique en raison d&apos;un battement de jambes insuffisant ou de phases inspiratoires trop longues<br/>
-	Quelques oscillations légères (manque de gainage, retour des bras désaxés)<br/>
-	Regard plutôt vertical et tête dans l&apos;axe du corps <br/>
-	Parties non nagées à optimiser (position hydrodynamique, reprise de nage…)


</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Respiration</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                      <Text>-	Inspiration longue, tête se relève de face
-	Expiration : apnée ou début d’expiration aquatique avec fin d’expiration dans l’eau
-	Inspiration et expiration par le nez
</Text>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Text >-	Inspiration de côté ou en extension, encore longue <br/>
-	Expiration retardée et incomplète<br/>
-	 Manque de coordination de la respiration et des actions motrices

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Inspiration brève et latérale<br/>
-	Expiration aquatique, parfois incomplète<br/>
-	Respiration volontaire par la bouche<br/>
-	Les structures respiratoires ne sont pas maintenues avec l’augmentation de la vitesse et de la distance

</Text>
                    </Table.Cell>
                  </Table.Row>


                    <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Propulsion </Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell fontWeight="bold">Bras </Table.Cell>
                    <Table.Cell>
                    <Text >-	Trajet moteur non construit : bras tendus, trajet court, non axé <br/>
-	Pas d’appui, appuis fuyants

 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Ce sont eux qui assurent uniquement la propulsion<br/>
-	Amplitude réduite car on nage en fréquence<br/>
-	Retour des bras tendus<br/>
-	Alternent entre phase de propulsion et de sustentation (lors de la respiration notamment)
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Assurent prioritairement la propulsion<br/>
-	Appuis correctement orientés<br/>
-	Retour de bras plutôt relâchés (coudes hauts) et peu désaxés ce qui réduit l’oscillation<br/>
-	Bonne amplitude : cherche loin devant et ramène jusqu’à la cuisse
 </Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell fontWeight="bold">Battements </Table.Cell>
                    <Table.Cell>
                    <Text >-	Irréguliers, s’arrêtent <br/>
-	Partent du genoux<br/>
-	Se sert des appuis solides (mur) pour se propulser


 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>Jambes tendues, battements inefficaces</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Aident à la propulsion (70% bras et 30% jambes) <br/>
-	Sont ré équilibrateurs

 </Text>
                    </Table.Cell>
                  </Table.Row>
                  
     

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Prise d’informations</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell/>
                    <Table.Cell>
                    <Text >-	Peu ou pas de prise d’infos visuelles sous l’eau : yeux souvent fermés <br/>
-	Prise d’information hors de l’eau lors de l’inspiration longue
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Repères proprioceptifs et kinesthésiques encore peu développés qui ne permettent pas une adaptation de la nage <br/>
-	Commence à utiliser l’espace et infos visuelles (ligne de fond, drapeaux)

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Utilise les infos latérales pour s&apos;orienter <br/>
-	Utilise l&apos;espace et infos visuelles (ligne de fond, drapeaux)<br/>
-	Ressens (infos proprioceptives) et utilise de plus en plus les résistances du milieu<br/>
-	Anticipe ses actions grâce à sa prise d&apos;info sur soi et sur l&apos;environnement<br/>
-	Gère sa dépense énergétique grâce à ses ressentis et sensations


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
          <List.Item><strong>L1 :</strong> Evaluation diagnostique - repérer le niveau des élèves, groupes de niveau</List.Item>
          <List.Item><strong>L2 :</strong> Construire des repères sensoriels</List.Item>
          <List.Item><strong>L3 :</strong> Construire le corps projectile (coulée, plongeon) </List.Item>
          <List.Item><strong>L4 :</strong> Construire des actions propulsives</List.Item>
          <List.Item><strong>L5 :</strong> Améliorer la propulsion par une respiration aquatique</List.Item>
          <List.Item><strong>L6 :</strong> Construire des actions propulsives continues et efficaces</List.Item>
          <List.Item><strong>L7 :</strong> Adapter son engagement moteur à la distance à parcourir</List.Item>
          <List.Item><strong>L8 :</strong> Optimiser les parties non nagées. Réaliser son projet de nage </List.Item>
          <List.Item><strong>L9 :</strong> Evaluation </List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>

        <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui respire de face à un élève qui respire latéralement:
          
        </Heading>
        <Text>Sur 25m, un observateur note « + » ou « - » quand la respiration est frontale ou latérale</Text>
        <List.Root gap={2} pl={4}>
            <List.Item><strong>Niveau 1 :</strong> planche et un bras le long du corps </List.Item>
            <List.Item><strong>Niveau 2 :</strong> planche, retour de bras aérien</List.Item>
            <List.Item><strong>Niveau 3 :</strong> Pullboy, crawl normal, respirer tous les 3 coups</List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Passer d&apos;un élève qui mouline avec une fréquence élevée et peu d&apos;amplitude, à un élève qui augmente son amplitude pour se propulser plus efficacement:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item>Sur 25m, diminuer le nombre de coups de bras et le temps (observateur- chronométreur)</List.Item>
            
        <List.Item>Faire la plus grande distance avec un nombre de coups de bras imposé (ex : aller le plus loin possible avec 5/10 coups de bras)</List.Item>
        </List.Root>

         <Heading size="xl" fontWeight="bold">Passer d&apos;un élève qui réalise des actions motrices aléatoires sans en ressentir les effets, à un élève qui développe des ressentis proprioceptifs et kinesthésiques pour construire des actions propulsives:</Heading>
              <List.Root gap={2} pl={4}>
                <List.Item>1x25m chronométré (diagnostique)</List.Item>
                <List.Item>3x25m en se focalisant sur le travail des mains : </List.Item>
                <List.Root ps="5">
                  <List.Item>Poings fermés</List.Item>
                  <List.Item>Mains avec les doigts écartés</List.Item>
                  <List.Item>Avec plaquettes </List.Item>
                </List.Root>
                <List.Item>2x25m « sentir et maintenir les actions mains »
                <List.Root ps="5">
                  <List.Item>Bras sur la planche, avancer avec les battements</List.Item>
                  <List.Item>Avec palmes</List.Item>
                </List.Root>
                </List.Item>
                <List.Item>1x25m chronométré, avec but de « maintenir les actions bras et jambes »: voir les progrès de temps </List.Item>              
              </List.Root>

          <Heading size="xl" fontWeight="bold">Passer d&apos;un élève qui se redresse vite lors de la coulée et s&apos;arrête avant de reprendre la nage, à un élève qui utilisé la coulée ventrale pour profiter de la glisse et vitesse de départ, grâce au corps profilé:</Heading>
          <Text>Aller le plus loin possible grâce à une poussée contre le mur (plots de perf sur le côté):</Text>
              <List.Root gap={2} pl={4}>
                <List.Item>Pousser et rester indéformable jusqu’au besoin de respirer</List.Item>
                <List.Item>Pousser, glisser et battre des jambes</List.Item>   
                <List.Item>Pousser, glisser et battre des jambes puis 2 mouvements de bras</List.Item>               
              </List.Root>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Sécurité (BO n°34 du 12 octobre 2017)</Heading>
        </Box>
          <List.Root gap={2} pl={4}>
              <List.Item>Surveillance de la baignade par des personnes qualifiées obligatoire. Celles-ci ne peuvent pas endosser des activités d’enseignement</List.Item>
              <List.Item>Minimum 5m2 d’eau pour chaque collégien ou lycée</List.Item>
              <List.Root ps="5" >
                <List.Item>
                Une ligne de 25m fait 25*2,5m = 62,5m2 soit 12 élèves max
                </List.Item>
                <List.Item>
                Une ligne de 50m fait 50*2,5m = 125m2 soit 25 élèves max
                </List.Item>
              </List.Root>
              <List.Item>Accès facile à au moins une des bordure du bassin </List.Item>
              <List.Item>Possibilité d’être accompagné par un intervenant professionnel agréé par l’EN, ou intervenant bénévole soumis à un agrément préalable délivré par l’IA-Dasen </List.Item>
              <List.Item>Obligation de vérifier si les élèves possèdent l’ASSN avant de faire un cycle de natation </List.Item>

          </List.Root>
          
       
          <Box bg="teal.500" p={3} borderRadius="lg" w="full">
            <Heading size="md" color="white">7. Biomécanique</Heading>
          </Box>
          <Heading size="xl" fontWeight={"bold"}>Surface du maitre couple:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Projection du corps dans un plan vertical </List.Item>
              <List.Item>Plus elle est grande, plus il y aura de résistance à l’avancement</List.Item>
            </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Profilation du corps:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>R = K*S*V2</List.Item>
            </List.Root>
            <Text>R = résistante à l&apos;avancement</Text>
            <Text>K = coefficient de forme</Text>
            <Text>S = surface du maitre couple</Text>
            <Text>V = vitesse du nageur</Text>

            <Heading size="xl" fontWeight={"bold"}>Cycle de nage:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Appui : la main arrive à la surface de l’eau</List.Item>
          <List.Item>Traction : la main entre dans l’eau, le nageur tracte l’eau vers l’arrière</List.Item>
          <List.Item>Poussée : la main vient pousser vers l’arrière jusqu’à la cuisse</List.Item>
          <List.Item>Dégagé : la main ressort de l’eau</List.Item>
          <List.Item>Retour : la main et le coude sortent de l’eau pour revenir en phase d’appui</List.Item>
          </List.Root>
            
          <Heading size="xl" fontWeight={"bold"}>Vitesse de nage:</Heading>
            <Text>Distance parcourue / temps = amplitude*fréquence</Text>
          <Heading size="xl" fontWeight={"bold"}>Fréquence de nage:</Heading>
            <Text>Nombre de cycle/temps</Text>
          <Heading size="xl" fontWeight={"bold"}>Indice de verger, 1998:</Heading>
            <Text>Temps au 25 + nombre de cycles: + il est faible plus l’élève est efficace</Text>

            <Heading size="xl" fontWeight={"bold"}>La nage au carré, Legrand 2001:</Heading>
            <Text>Rapport entre nombre de coups de bras et amplitude<br/>
On parle de carré caractéristique<br/>
Le but est de rapprocher le nombre de coups de bras du nombre de secondes<br/>
Ex faire 50 coups de bras en 50 secondes
</Text>
            <Heading size="xl" fontWeight={"bold"}>Indice de gestion, potdevin 2000:</Heading> 
            <Text>Se calcule sur 100m d’affilé.</Text>
<Text>(Nombre de cycle de bras du 1er 50 + nombre cycle bras 2ème 50) x nombre de cycle au 2ème 50 
Plus il est faible, plus le nageur est capable de tenir son amplitude et donc de réguler son allure 
            </Text>
            <Text>Plus il est faible, plus le nageur est capable de tenir son amplitude et donc de réguler son allure</Text>
            <Heading size="xl" fontWeight={"bold"}>Indice de nage Costill en 1985:</Heading>
            <Text>V*A ⟹ témoigne du faible coup énergétique et donc de l&apos;expertise (intéressant pour élèves de 1ère/terminale)<br/>
            L&apos;eau est 800x plus dense que l&apos;air: plus on oppose de force plus elle va résister (3ème loi de Newton) <br/> 
            L&apos;eau me porte: je peux m&apos;allonger dessus quelques instants = phénomène de portance</Text>

            <Box bg="teal.500" p={3} borderRadius="lg" w="full">
            <Heading size="md" color="white">8. Bonus</Heading>
          </Box>
          <Heading size="xl" fontWeight={"bold"}>Temps moyen sur 50m (Pelayo et Rozier, 1998):</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>6ème : 60s </List.Item>
              <List.Item>4ème : 51,4s</List.Item>
            </List.Root>
            <Text>Dans une épreuve individuelle de 4 nages, l’ordre des nages est obligatoirement le suivant : papillon, dos, brasse, nage libre (crawl). Dans un relais 4 nages, l’ordre des nages est obligatoirement le suivant : dos, brasse, papillon, nage libre </Text>

          <Heading size="xl" fontWeight={"bold"}>Départ de course:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Coup de sifflet court = appeler les nageurs près du plot</List.Item>
              <List.Item>Coup de sifflet long = autorise les nageurs à monter sur le plot</List.Item>
              <List.Item>Lève la main = donne le signal au starter de commencer les ordres</List.Item>
              <List.Item>« A vos marques » = les nageurs se placent et s&apos;immobilisent</List.Item>
              <List.Item>Siffle » = départ</List.Item>
            </List.Root>

        
        </VStack>
    </Box>

    
  );
};


