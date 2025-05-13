import { Box, Heading, Text, VStack, List, Separator , Flex, For, Stack, Table} from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Lutte',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur la lutte : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Lutte</Heading>
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
        La lutte est un sport de combat où deux adversaires s&apos;affrontent en utilisant des techniques de prises, de projections et des finales, avec pour objectif de maîtriser l&apos;autre, de le mettre au sol et de marquer des points. 

        </Text>

        
        <Box>
          <Heading size="xl" fontWeight={"bold"} mb="4">Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item><strong>Moteur :</strong> répertoire technique, utiliser les forces, transfert de poids du corps, préhensions, quadrupédie, souplesse, agilité, force</List.Item>
            <List.Item><strong>Cognitif :</strong> percevoir par le toucher, anticipation, comprendre les couples de force</List.Item>
            <List.Item><strong>Social :</strong> respect de l’intégrité physique, maitriser ses émotions, respecter les règles, accepter le contact  </List.Item>
          </List.Root>
        </Box>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>



        <Heading size="xl" fontWeight={"bold"}>Formes de corps:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Décalage :</strong> bloquer une ou deux jambes de l’adversaire pour le déséquilibrer</List.Item>
          <List.Item><strong>Hanché :</strong> mouvement puissant de hanches pour soulever son adversaire et le faire tomber</List.Item>
          <List.Item><strong>Passage dessous :</strong> se faufiler sous son adversaire pour le contrôler et le renverser</List.Item>
        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Les contrôles / ramassements:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Contrôle bras dessus/dessous :</strong> un bras sous l&apos;aisselle, l&apos;autre entoure par-dessus le bras libre de l&apos;adversaire</List.Item>
          <List.Item><strong>Contrôle bras et tête :</strong> un bras autour de la tête, l&apos;autre qui contrôle un bras</List.Item>
          <List.Item><strong>Contrôle sur un bras :</strong> saisir l’un des deux bras de l’adversaire</List.Item>
          <List.Item><strong>Ramassement sur une jambe :</strong> saisir l’une des deux jambes pour le déséquilibrer</List.Item>

        </List.Root>

        <Heading size="xl" fontWeight={"bold"}>Les finales: </Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>A cheval : </strong>sur le ventre ou dos de l’adversaire, avec les jambes de chaque côté</List.Item>
          <List.Item><strong>Costale bras-tête : </strong>l&apos;élève contrôle la tête et un bras de l&apos;adversaire, souvent en verrouillant l&apos;un de ses bras sous celui de l&apos;adversaire, et avec une pression sur la tête</List.Item>
          <List.Item><strong>Latérale : </strong>l&apos;élève se place sur le côté de l&apos;adversaire, souvent avec une main sous la tête et l&apos;autre sur le torse ou l&apos;épaule, en exerçant une pression avec son torse pour l&apos;empêcher de se relever ou de tourner</List.Item>
          <List.Item><strong>Jambe : </strong>bloquer les deux jambes de l&apos;adversaire entre ses cuisses pour réduire da possibilité de bouger</List.Item>

        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Observables:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Contrôle : </strong>Distance, déplacement, qualité des saisies</List.Item>
          <List.Item><strong>Déséquilibre : </strong></List.Item>
          <List.Item><strong>Action : </strong>Forme de corps, efficacité et sécurité</List.Item>
          <List.Item><strong>Immobilisation : </strong>Finale et points</List.Item>
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
                    </Table.Cell>
                    <Table.Cell>
                      <Text>-	Grande distance entre les lutteurs <br/>
-	Passif, ne va pas au contact<br/>
-	Pose les mains sur l’adversaire mais reste sur la retenue


</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Distance réduite <br/>
-	Se repoussent mutuellement<br/>
-	Saisit l’adversaire solidement sans l’intention de le déséquilibrer et le faire chuter 

</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Bonne distance <br/>
-	Ne lâche pas le contact <br/>
-	Saisit l’adversaire solidement 


</Text>
                    </Table.Cell>
                  </Table.Row>

                    <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Déséquilibre </Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell/>
                    <Table.Cell>
                    <Text >Ne cherche pas le déséquilibre adverse car il fuit ou est passif
 </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>Cherche uniquement à pousser sans prendre en compte d’autres techniques pour déséquilibrer l’adversaire</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Utilise les couples de force <br/>
-	Utilise des formes de corps variées

 </Text>
                    </Table.Cell>
                  </Table.Row>

                  
     

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Action</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Forme de corps  </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >Peu d’action ou actions sans intentions</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>- Une forme de corps (souvent le décalage) principalement utilisée indépendamment de la situation ou l’adversaire <br/>
-	Manque d’adaptation permettant à l’adversaire d’anticiper et de résister
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Utilise le décalage, hanché ou passage dessous de façon pertinente dépendant de la situation <br/>
-	Prend en compte ses points forts et les points faibles adverses dans le choix de ses actions <br/>
-	Efficacité traduite par une chute fréquente de l&apos;adversaire
</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Sécurité </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Chute en regardant derrière lui <br/>
-	Pose les mains avant de chuter <br/>
-	Ne maintient pas sa tête 
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Accepte de chuter mais se précipite sans ses actions <br/>
-	Des erreurs de saisies peuvent faire mal à l’adversaire <br/>
-	Projection de l’adversaire sans réel contrôle
</Text>

                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Contrôle sa chute <br/>
-	Contrôle la chute de l’adversaire
</Text>
                    </Table.Cell>
                  </Table.Row>

                <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Immobilisation</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}> </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Reste dos à plat sans chercher à sortir de cette position <br/>
-	Pas de riposte <br/>
-	L’adversaire se relève rapidement <br/>
-	Aucun points marqué durant le combat
</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Tente d’immobiliser l’adversaire au sol et mettant toute sa force sur celui-ci <br/>
-	Technique d’immobilisation/forme de finale rarement mise en œuvre, ce qui entraine des difficultés à immobiliser 2s l’adversaire <br/>
-	Points marqués par des mises en danger et contrôle arrière

</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Immobilise l&apos;adversaire au sol avec la forme de finale la plus pertinente selon la situation <br/>
-	Se libère rapidement des contrôles adversaire <br/>
-	Tourne les épaules et le bassin pour passer sur le ventre <br/>
-	Revient vite à plat ventre lorsqu&apos;il tombe <br/>
-	Points grâce aux tombés, mise en danger et contrôle arrière

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
          <List.Item><strong>L1 :</strong> Entrée dans l’activité par le ludisme / accepter de rompre son espace intime / évaluation diagnostique</List.Item>
          <List.Item><strong>L2 :</strong> Construire le permis de chuter et faire chuter / routine d’échauffement et règlementation</List.Item>
          <List.Item><strong>L3 :</strong> Découvrir les couples de forces par l’expérimentation. Trouver et partager deux moyens de faire chuter.  </List.Item>
          <List.Item><strong>L4 :</strong> Immobiliser son adversaire. </List.Item>
          <List.Item><strong>L5 :</strong> Développer différentes formes de corps (décalage, hanché, passage en arrière)</List.Item>
          <List.Item><strong>L6 :</strong> Evaluation formative avec observables destinés à progresser</List.Item>
          <List.Item><strong>L7 :</strong> Adapter la forme de corps et la finale à la situation</List.Item>
          <List.Item><strong>L8 :</strong> Analyser ses points forts et points faibles adverses</List.Item>
          <List.Item><strong>L9 :</strong> Evaluation</List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>
        
        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Déplacements sous contraintes</List.Item>
            <List.Item>La télécommande : l’élève suit la main de l’enseignant : en haut = saut / avant = chute avant / côté = chute latérale…</List.Item>
            <List.Item>Jeux : le trésor, la tortue </List.Item>
            <List.Item>Résiste/tombe : par deux, un élève est en situation de déséquilibre avec un partenaire qui le retient. Le partenaire s’enlève et l’élève doit chuter. Possibilité de le faire à l’arrêt, en mouvement, avec une chute prévue ou incertaine… </List.Item>
          </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d’élèves qui n’osent pas entrer dans l’espace de l’autre à des élèves qui acceptent le contact avec les adversaires:
          
        </Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>L’épervier-lutteur : les poules doivent traverser la barrière de renards. Les renards marquent des points si : 1 pt = toucher une poule / 10 : je bloque en respectant le contrôle imposé (ceinture, saisir un bras, saisir une jambe) / 100 : je fais tomber en respectant le contrôle / 1000 : je fais tomber et j’immobiliser </List.Item>
            <List.Item>Combat de coq : en déplacement accroupis, les élèves doivent se pousser pour se faire tomber </List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Passer d’élèves qui poussent uniquement à des élèves qui comprennent les notions de force:</Heading>
          <List.Root gap={2} pl={4}>
        <List.Item>
        L&apos;ours et le chasseur : le chasseur doit faire sortir l&apos;ours de sa tanière
          <List.Root ps="5">
            <List.Item>Manche 1 : l’ours a uniquement le droit de pousser. Le chasseur peut tirer ou pousser</List.Item>
            <List.Item>Manche 2 : l&apos;ours à le droit de tirer le chasseur dans sa tanière</List.Item>   
          </List.Root>
        <List.Item>Trouver le plus de manière possible de retourner l’adversaire dans un temps imparti</List.Item>
        </List.Item>
        </List.Root>

         <Heading size="xl" fontWeight="bold">Passer d’élèves qui repoussent l’adversaire plutôt que le saisir à des élèves qui saisissent l’adversaire pour le contrôler:</Heading>
              <List.Root gap={2} pl={4}>
                <List.Item>SA1 : saisie tête-bras. En coopération, faire tomber l’adversaire. Puis semi-opposition et opposition</List.Item>
                <List.Item>SA2 - l&apos;unijambiste : contrôle jambe : coopération, semi-opposition, opposition</List.Item>
                <List.Item>SA3 – les zones à traverser : en contrôle jambe, faire tomber le défenseur dans la zone la plus proche. Le défenseur doit tenir en équilibre jusqu&apos;à la zone la plus éloignée</List.Item>              
              </List.Root>

          <Heading size="xl" fontWeight="bold">Passer d’élèves qui arrêtent leur action après la chute à des élèves qui immobilisent leur adversaire au sol:</Heading>
              <List.Root gap={2} pl={4}>
                <List.Item>Manche 1 : le défenseur commence sur le dos, l’attaquant doit le maintenir au sol</List.Item>
                <List.Item>Manche 2 : départ à genoux, l&apos;attaquant doit amener le plus rapidement le défenseur qui se laisse faire au sol, selon la finale demandée par l’enseignant</List.Item>   
                <List.Item>Manche 3 : départ à genoux, comme la manche 2 mais en opposition</List.Item>               
              </List.Root>


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Sécurité</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>3 règles d’or en lutte (Vincent Rusquet, AEEPS 2017):</Heading>
          <List.Root gap={2} pl={4}>
              <List.Item>Ne pas faire mal</List.Item>
              <List.Item>Ne pas se faire mal</List.Item>
              <List.Item>Ne pas se laisser faire mal </List.Item>
          </List.Root>
          
        <Heading size="xl" fontWeight={"bold"}>Les fautes et interdits en lutte (Rusquet, AEEPS 2017):</Heading>
        <Text>Les arbitres stoppent le combat s’ils repèrent ces 3 actions dangereuses : </Text>
        <List.Root gap={2} pl={4}>
            <List.Item>Saisie de la tête seule avec les deux bras : risque au niveau des cervicales</List.Item>
            <List.Item>Attaquer tête dans le ventre : risque cervicales</List.Item>
            <List.Item>Articulation forcée, clef de bras : risque de luxation</List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Construire le permis de chuter et de faire chuter vers l’avant et l’arrière, seul et en coopération:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Chuter vers l&apos;arrière:</List.Item>
          <List.Root gap={2} pl={4}>
            <List.Item>Taper les mains avec le sol</List.Item>
            <List.Item>Rouler sur le dos en boule</List.Item>
            <List.Item>Menton collé au torse</List.Item>
          </List.Root>
          <List.Item>Chuter vers l&apos;avant:</List.Item>
          <List.Root gap={2} pl={4}>
            <List.Item>Prendre contact en 3 temps : genoux, mains, torse</List.Item>
          </List.Root>
          <List.Item>Nombre de spectateurs</List.Item>
          <List.Root gap={2} pl={4}>
            <List.Item>Accompagner l&apos;adversaire vers le sol</List.Item>
          </List.Root>
            
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Tenue:</Heading>
        <Text>Les arbitres stoppent le combat s’ils repèrent ces 3 actions dangereuses : </Text>
        <List.Root gap={2} pl={4}>
            <List.Item>Retirer les lunettes</List.Item>
            <List.Item>Pas de bijoux</List.Item>
          </List.Root>

          <Box bg="teal.500" p={3} borderRadius="lg" w="full">
            <Heading size="md" color="white">7. Autre</Heading>
          </Box>
          <Heading size="xl" fontWeight={"bold"}>Principes d’efficacité/d’action:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Produire une force plus importante que l’adversaire</List.Item>
              <List.Item>S&apos;effacer et tirer, utiliser la force du pousseur en le tirant pour le faire chuter</List.Item>
              <List.Item>Supprimer un ou plusieurs appuis pour déséquilibrer son adversaire et pousser</List.Item>
            </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Surface de combat (milieu fédéral):</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>12x12m</List.Item>
              <List.Item>Rond central = 1m</List.Item>
              <List.Item>Surface centrale = 7m</List.Item>
              <List.Item>Zone de passivité</List.Item>
            </List.Root>

            <Heading size="xl" fontWeight={"bold"}>Différentes formes de lutte:</Heading>
        <List.Root gap={2} pl={4}>
          <List.Item>Au sol ou à mi-hauteur:</List.Item>
          <List.Root gap={2} pl={4}>
            <List.Item>Intégrer l’ensemble des notions de sécurité, règlementation…sans provoquer de danger pour les élèves</List.Item>
            <List.Item>Moins de danger sur la chute car le CG est plus bas</List.Item>
            <List.Item>Rassure les élèves</List.Item>
          </List.Root>
          <List.Item>Debout:</List.Item>
          <List.Root gap={2} pl={4}>
            <List.Item>A partir du moment où les élèves chutent toujours en toute sécurité en lutte à mi-hauteur. L&apos;enseignant à confiance en ses élèves. Dépend du public rencontré. </List.Item>
            <List.Item>Intégrer la notion de déplacement, décalade, passage dans le dos…</List.Item>
          </List.Root>
          </List.Root>
        
        </VStack>
    </Box>

    
  );
};


