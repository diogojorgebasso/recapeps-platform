import { Box, Heading, Text, VStack, List, Separator , Flex, For, Stack, Table} from "@chakra-ui/react";
import type { Metadata } from 'next' 
export const metadata: Metadata = {
  title: 'Fiche de révision de l’oral 1 du CAPEPS - Arts du cirque',
  description: "Révise efficacement l’oral 1 du CAPEPS avec notre fiche synthétique sur les arts du cirque : Définition et enjeux de l’APSA, vocabulaire spécifique, observables et conduites typiques, exemple d’organisation d’un cycle, situation d’apprentissage et sécurité.",
}

export default function Page() {
  return (
    <Box p={5} maxW="3/4" mx="auto"  boxShadow="md">
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg" color="white">Arts du cirque</Heading>
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
        </List.Root>
        
        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md">1. Définition et Enjeux de l’APSA</Heading>
        </Box>
        <Text px={3}>
        Activité́ de représentation à caractère spectaculaire, esthétique, ludique et 
        expressive pratiquée seul ou à plusieurs utilisant les domaines suivants : 
        jonglerie, acrobatie au sol, équilibre et voltige. Ces activités de prouesse et d’expression visent à 
        déclencher l’émotion du spectateur.
        </Text>
        <Text>
        Les Arts du cirque à l’école, <Text fontStyle="italic" display="inline">Équipe départementale EPS des Landes</Text>, Janvier 2015.
        </Text>

        
        <Box>
          <Heading size="xl" fontWeight={"bold"} mb="4">Enjeux:</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item>Développer les possibilités motrices et expressives de l’élève</List.Item>
            <List.Item>Favoriser l’accès à la culture et l’ouverture d’esprit </List.Item>
            <List.Item>Ouvrir le regard du spectateur sur les œuvres artistiques de son temps </List.Item>
            <List.Item>Développer des savoirs liés à la vie socio-affective : 
              écoute de soi, des autres, affirmation de sa présence au monde, acceptation des autres, tolérance </List.Item>
            <List.Item>Vivre 3 expériences différentes et complémentaires à travers 
              l’exploration des « rôles sociaux » : danseur/circassien, spectateur, chorégraphe </List.Item>
              <List.Item>Développer la créativité</List.Item>
          </List.Root>
        </Box>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">2. Vocabulaire spécifique</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>Personnes :</strong> circassien, acteur, spectateur, troupe</List.Item>
          <List.Item><strong>Espace d’évolution  :</strong> scène</List.Item>
          <List.Item><strong>Représentation :</strong> numéro</List.Item>


        </List.Root>

        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">3. Observables et conduites typiques</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Dimension collective, la mise en scène:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Lisibilité : structure, espace, organisation</List.Item>
            <List.Item>Engagement artistique</List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Dimension individuelle et collective, la virtuosité:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Variété des formes proposées</List.Item>
            <List.Item>Prise de risque</List.Item>
            <List.Item>Maitrise</List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Dimension individuelle, interprétation:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>État de scène</List.Item>
            <List.Item>Motricité expressive</List.Item>
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
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Dimension collective</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Lisibilité </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>- Début et fin difficilement identifiables</Text>
                      <Text>- L’espace central est essentiellement utilisé</Text>
                      <Text>- Temps morts nombreux </Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Début et fin marquées de façon caricaturale (souvent : tout le monde meurt) </Text>
                    <Text>-	La largeur ou la profondeur est exploitée, sans réelle réflexion</Text>
                    <Text>-	Les élèves savent ce qu&apos;ils doivent faire, avec parfois des hésitations</Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>-	Début et fin marquées et construites</Text>
                      <Text>-	L’utilisation de l’espace permet de mettre en valeur les ≠ éléments</Text>
                      <Text>-	L&apos;organisation est précise et rend fluide la succession des éléments</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Engagement artistique</Text>
                    </Table.Cell>
                  <Table.Cell>
                      <Text>Le thème est difficilement identifiable, ou identifiable à partir d’un élément exagéré ou répétitif </Text>
                    </Table.Cell>
                    
                    <Table.Cell>
                    <Text >Les personnages permettent d&apos;évoquer un univers simple  </Text>
                    </Table.Cell>

                    <Table.Cell>
                      <Text>Les éléments techniques, les personnes et l’espace sont choisis et organisés pour évoquer un univers original </Text>
                    </Table.Cell>
                  </Table.Row>


                    {/* 2e partie tableau Figures */}

                    <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Dimension individuelle et collective</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}> Variété des formes proposées</Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Une famille est sur-représentée, souvent le jonglage </Text>
                    <Text>-	S’appuie sur des figures simples</Text>
                    <Text >-	Pas ou un seul procédé de composition utilisé de manière répétitive</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Plusieurs familles sont présentes</Text>
                    <Text>-	S’approprie des figures pour créer des formes ou leur donner du sens</Text>
                    <Text >-	Un ou deux procédés de composition utilisé</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Toutes les familles sont investies </Text>
                    <Text>-	Figures et agencements variés</Text>
                    <Text >-	Figures inédites et originales</Text>
                    <Text >-	Procédés de composition variés qui enrichissent la proposition</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Prise de risque</Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Peu de prise de risque</Text>
                    <Text>-	Répertoire simple </Text>
                    <Text >-	Prise de risque trop importante et non maitrisée</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Ose, parfois trop peu ou trop par rapport à son niveau</Text>
                    <Text>-	1 ou 2 éléments risqué dans le numéro</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Formes originales et périlleuses </Text>
                    <Text>-	Ose en jouant sur la difficulté, la singularité, la complexification ou la combinaison de figures ou disciplines</Text>
                    <Text >-	Prise de risque adaptée</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Maitrise</Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Maitrise d’éléments simples</Text>
                    <Text>-	Enchainements courts</Text>
                    <Text >-	Chutes d’objets fréquentes</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Quelques éléments complexes apparaissent</Text>
                    <Text>-	Enchainements parfois hésitants</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Enchainements complexes maitrisés </Text>
                    <Text>-	Enchainements fluides grâce à la précision des gestes, trajets, trajectoires, équilibres</Text>
                    
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                  <Table.Cell colSpan={4} textAlign="center" fontWeight={"bold"}>Dimension individuelle</Table.Cell>
                </Table.Row>
                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>État de scène </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Pas de jeu d’acteur </Text>
                    <Text>-	Ses émotions l’emportent sur le processus d’interprétation</Text>
                    <Text >-	Volonté de faire rire ses camarades sans que cela soit l’objectif de son thème</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Engagement soutenu, pouvant cependant être perturbé par une erreur, une hésitation ou une émotion (rire, gène…)</Text>
                    <Text>-	Regarde parfois le public</Text>
                    <Text >-	Reflète son personnage dans la gestuelle plus qu’une incarnation</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Concentré et disponible tout au long du numéro</Text>
                    <Text>-	Engagé dans son rôle</Text>
                    <Text >-	Regard soutenu</Text>
                    <Text >-	Intention réelle de transmettre une émotion</Text>
                    <Text >-	Incarne son personnage à la perfection (gestes, expression faciales…)</Text>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row >
                  <Table.Cell>
                      <Text fontWeight={"bold"}>Motricité expressive </Text>
                    </Table.Cell>
                    <Table.Cell>
                    <Text >-	Personnage ou thème défini par une caractéristique identifiable par des rappels réguliers</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text>-	Personnage clairement identifiable à divers moments du numéro, notamment par des gestes</Text>
                    <Text>-	Expression faciale reste faible</Text>
                    <Text>-	Gestes stéréotypés (mime) encore présents dans le numéro</Text>
                    </Table.Cell>

                    <Table.Cell>
                    <Text >-	Interprétation par les gestes, postures, intention </Text>
                    <Text>-	Personnage se retrouve lors des éléments techniques également</Text>
                    <Text >-	Expression faciale correspondant à l’histoire est omniprésente</Text>
                    </Table.Cell>
                  </Table.Row>
                 
              </Table.Body>
            </Table.Root>
      </Stack>





        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">4. Organisation d’un cycle – exemple</Heading>
        </Box>
        <List.Root gap={2} pl={4}>
          <List.Item><strong>L1 :</strong> Expression : entrée par le jeu d’acteur</List.Item>
          <List.Item><strong>L2 :</strong> Expression et découverte de la jonglerie</List.Item>
          <List.Item><strong>L3 :</strong> Expression et découverte de l’équilibre </List.Item>
          <List.Item><strong>L4 :</strong> Expression et approfondissement jonglerie et équilibre – passing machine</List.Item>
          <List.Item><strong>L5 :</strong> Expression – détournement d’objets</List.Item>
          <List.Item><strong>L6 :</strong> Création de numéro – entrer et sortir de scène avec un « effet waouh »</List.Item>
          <List.Item><strong>L7 :</strong> Création de liaisons artistiques autour d’inducteurs se rapportant au thème choisi</List.Item>
          <List.Item><strong>L8 :</strong> Fluidifier l’enchainement et l’adapter selon le retour des spectateurs</List.Item>
          <List.Item><strong>L9 :</strong> Évaluation </List.Item>
        </List.Root>







        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">5. Situations d&apos;apprentissage</Heading>
        </Box>

        <Heading size="xl" fontWeight={"bold"}>Échauffement:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Totem prénoms : oser s’engager tous ensemble dans une motricité expressive<br/>
            Chacun réalise son propre « totem », c’est-à-dire deux ou trois mouvements qui le représente. Puis on se met en cercle et le premier montre son totem. Tout le monde le reproduit, puis le deuxième montre son totem. Etc...</List.Item>
            <List.Item>Le jeu des actions (marcher puis se cacher/ tomber/ramper…)</List.Item>
            <List.Item>Histoire racontée par l’enseignant, que les élèves doivent mimer/interpréter</List.Item>
          </List.Root>
        
        <Heading size="xl" fontWeight={"bold"}>Passer d’élèves qui réalisent de nombreuses chutes d’objets à des élèves qui maitrisent des mouvements de plus en plus complexes:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Carré magique et carré d’entrainement : le prof montre un mouvement (ex : jonglage colonne). L’élève à 1 minute pour s’entrainer, puis 30secondes à tenir dans le carré magique. S’il fait tomber la balle durant les 30s, il va dans le carré d’entrainement et ne marque pas de points</List.Item>
            <List.Item>Travail en binôme (coach élève) avec une fiche personnelle que le coach remplit pour valider un niveau, avant de passer au suivant </List.Item>
          </List.Root>
        <Heading size="xl" fontWeight={"bold"}>Passer d’élèves qui réalisent une figure peu originale à des élèves
           qui utilisent les procédés de composition pour varier le mouvement:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Machine à jongler (3 tours de 4 actions, à réaliser avec un procédé/paramètre du mouvement 
              imposé : canon, vitesse différée, hauteurs…)</List.Item>
            <List.Item>Phrase collective : transformer avec un ou plusieurs procédés de composition</List.Item>
            <List.Item>Inventer un maximum de figures : sur une figure maitrisée simple (ex : brouette/tour Eiffel) personnaliser grâce à un ou des inducteur (ajouter un voltigeur ; bouger ; ajouter un objet…) et la montrer au prof. Réaliser 10 figures, et retenir les deux meilleures. </List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Passer d’élèves hésitants avec un numéro peu lisible
             à des élèves capables de composer et mettre en œuvre un numéro:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Structure imposée : 20 minutes pour créer un numéro à partir d’une structure précise. Ex du scénario miss France : statue des miss de départ : Entrée lente les uns après les autres, 1 figure de jonglage synchronisée devant le jury, jeu d’acteur au choix, 2 figures accro au choix, 1 photo de fin lors de la remise des récompenses</List.Item>
              <List.Item>Proposer une fiche de mise en projet : entrée, figure 1, liaison, passing machine…</List.Item>
            </List.Root>
         


        <Box bg="teal.500" p={3} borderRadius="lg" w="full">
          <Heading size="md" color="white">6. Sécurité</Heading>
        </Box>
        <Heading size="xl" fontWeight={"bold"}>Sécurité passive:</Heading>
        <Text>Tapis, pas de chaussettes sur les objets (rolla-bolla, boule d’équilibre)</Text>
          
        <Heading size="xl" fontWeight={"bold"}>Sécurité active:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Savoir se préparer</List.Item>
            <List.Item>Savoir s’équilibrer</List.Item>
            <List.Item>Savoir chuter</List.Item>
            <List.Item>Savoir aider/parer</List.Item>
          </List.Root>

          <Heading size="xl" fontWeight={"bold"}>Sécurité affective:</Heading>
        <List.Root gap={2} pl={4}>
            <List.Item>Considération positive des représentations</List.Item>
            <List.Item>Nombre de spectateurs</List.Item>
            <List.Item>Travail en petits groupes</List.Item>
            <List.Item>Implication de l’enseignant qui lui aussi joue le jeu </List.Item>
          </List.Root>

          <Box bg="teal.500" p={3} borderRadius="lg" w="full">
            <Heading size="md" color="white">7. Autre</Heading>
          </Box>
          <Heading size="xl" fontWeight={"bold"}>Trois étapes de la démarche de création:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Exploration</List.Item>
              <List.Item>Structuration</List.Item>
              <List.Item>Réinvestissement ou transposition</List.Item>
            </List.Root>
          <Heading size="xl" fontWeight={"bold"}>Différents modes d’entrée:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Par les objets</List.Item>
              <List.Item>Par des inducteurs : verbes d&apos;action, mots, lieux, sentiments, œuvre d&apos;art, geste…</List.Item>
              <List.Item>Par les relations aux autres : jeux en cercle, ligne avec toute la classe, duos…</List.Item>
              <List.Item>Par les jeux : 1,2,3 soleil, béret, téléphone arabe…</List.Item>
              <List.Item>Par les accessoires et matériel : bancs, corde, échelle…</List.Item>
              <List.Item>Par la musique </List.Item>
            </List.Root>
            
          <Heading size="xl" fontWeight={"bold"}>Paramètres du mouvement:</Heading>
            <List.Root gap={2} pl={4}>
              <List.Item>Temps : métrique et non-métrique</List.Item>
              <List.Item>Espace : direction, orientation, niveau, trajet, trace</List.Item>
              <List.Item>Energie : poids, temps, flux</List.Item>
              <List.Item>Corps</List.Item>
              <List.Item>Relation : spatiale, temporelle, contact, regard </List.Item>
            </List.Root>
        
        </VStack>
    </Box>

    
  );
};


