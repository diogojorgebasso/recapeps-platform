import { Box, Heading, Text, VStack, List, Flex, Link } from "@chakra-ui/react";
const Page = () => {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md" >

      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg">Solutions long terme détaillées</Heading>
      </Flex>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="enfance">Sommaire</Heading>
      </Box>


      <VStack align="start" gap={3} mt={4}>
        <Link href="#sante" transition="opacity 0.2s" _hover={{ opacity: 0.7 }} fontWeight="bold">1. Santé </Link>
        <Link href="#cooperation" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>2. Coopération – Responsabilité - Autonomie</Link>
        <Link href="#egalite" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>3. Égalité Filles garçons </Link>
        <Link href="#developpement" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>4. Développement durable </Link>
        <Link href="#securite" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>5. Sécurité - Natation – Savoir nager </Link>
        <Link href="#confiance" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>6. Confiance en soi – décrochage scolaire </Link>
        <Link href="#relations" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>7. Coopération – relations enseignants/élèves/élèves – citoyenneté - autonomie </Link>
        <Link href="#coeducation" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>8. Coéducation </Link>
        <Link href="#ouverture" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>9. Ouverture culturelle – Acceptation de l’autre </Link>
        <Link href="#laicite" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>10. Laïcité </Link>
        <Link href="#harcelement" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>11. Journée nationale contre le harcèlement </Link>
        <Link href="#education" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>12. Éducation artistique et culturelle </Link>
        <Link href="#handicapes" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>13. Journée internationale des personnes handicapées – 3 décembre </Link>
        <Link href="#homo" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>14. Journée internationale de lutte contre l’homo/trans/bi phobie – 17 mai / Journée internationale de visibilité transgenre – 31 mars </Link>
        <Link href="#sex" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>15. Journée internationale de la santé sexuelle – 4 septembre </Link>
        <Link href="#numerique" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>16. Numérique – addiction </Link>
        <Link href="#etranger" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>17. Implication parents étranger </Link>
        <Link href="#sportifs" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>18. Intervention conférenciers sportifs HN – risque, confiance en soi, handicap, égalité… </Link>
        <Link href="#sosracisme" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>19. Racisme – SOS racisme </Link>
        <Link href="#racisme" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>20. Racisme, sexisme, inclusion, homophobie – Prix Ethic’action </Link>
        <Link href="#alcool" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>21. Alcool </Link>
        <Link href="#psc1" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>22. Santé/sécurité – PSC1 </Link>
        <Link href="#enfance" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>23. Enfance en danger - 20 Novembre : journée internationale des droits de l’enfant </Link>
        <Link href="#amnesty" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>24. Amnesty international : intervention sur les droits humains </Link>
        <Link href="#croyances" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>25. Sciences et croyances – éducation aux médias et à l’information – CLEMI (centre de liaison de l’enseignement et des médias d’information) </Link>
        <Link href="#sciences" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>26. Sciences </Link>
        <Link href="#egalitehf" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>27. Egalite hommes-femmes – Centre Nationale d’Information sur les Droits des Femmes et des Familles CNIDFF </Link>
        <Link href="#eloquence" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>28. Éloquence (culture / citoyenneté) – Atelier de la langue française </Link>
        <Link href="#phare" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>29. Programme phare (PHARE : un programme de lutte contre le harcèlement à l’école, education.gouv) </Link>
        <Link href="#ambassadeur" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>30. Devenir ambassadeur au collège (fait partie du programme phARE) </Link>
        <Link href="#referents" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>31. Référents égalité </Link>
        <Link href="#formation" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>32. Formation continue des personnels </Link>
        <Link href="#malette" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>33. Malette des parents </Link>
        <Link href="#methode" fontWeight="bold" transition="opacity 0.2s" _hover={{ opacity: 0.7 }}>34. Méthode de préoccupation partagée adaptation méthode suédoise Pikas (conférence BELLON – réseau Canopé 2021)</Link>



      </VStack>



      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="sante" >1. Santé</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Les parcours du cœur :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>La FF Cardiologie se propose d’être un appui pour les établissements scolaire dans le cadre de l’éducation à la santé par l’intermédiaire de l’action « Parcours du cœur scolaire », qui a un agrément rectoral.</List.Item>
        <List.Item>Slogan : <Text fontWeight="bold" as="span">0, 5, 60</Text> = 0 cigarettes, 5 fruits et légumes par jour, 60 minutes d’AP.</List.Item>
        <List.Item>Projet interdisciplinaire sur l’année à inscrire dans le projet d’établissement</List.Item>
        <List.Item>EPS : savoir s’entrainer, se préparer</List.Item>
        <List.Item>Maths : conséquences graphiques du tabagisme</List.Item>
        <List.Item>Français : textes autour du bien-être</List.Item>
        <List.Item>Chaque discipline peut faire élaborer des ressources qui seront présentées le jour J (math : présentation de menus équilibrés en lien avec calculs mathématiques, français : vidéo réalisée par les élèves…).</List.Item>
        <List.Item><Text fontWeight="bold" as="span">Le jour J : messages de préventions diffusés, qui ont été créés par les élèves tout au long de l’année + parcours d’activité physique (qqs km de marche, CO, ateliers pensés et animés par les élèves…) </Text><Text fontWeight="bold" as="span"></Text><Text fontWeight="bold" as="span"> évènement festif et convivial</Text><Text fontWeight="bold" as="span">.</Text></List.Item>
        <List.Item>La FFC fournit des guide d’animation d’ateliers, des banderoles, des goodies, des affiches (gestes qui sauvent, tabac…).</List.Item>
        <List.Item>Projet qui s’anticipe dès la fin de l’année scolaire pour l’année suivante.</List.Item>
        <List.Item>Nécessite l’implication de nombreux membres de la communauté éducative, mais aussi de partenaires extérieurs.</List.Item>
        <List.Item>Possibilité d’étendre le projet à plusieurs établissements de la commune, dans ce cas l’inspection de l’EN de la circonscription peut être sollicité par le conseiller pédagogique, sous couvert de l’inspecteur et en collaboration avec les équipes éducatives et le service des sports de la ville.</List.Item>
        <List.Item>Possibilité de faire ce projet en lien avec les CM2-6ème (solliciter conseil école-collège).</List.Item>
        <List.Item>Fait partie du Parcours santé.</List.Item>
        <List.Item>Sollicite le CESCE.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="cooperation" >2. Coopération – Responsabilité - Autonomie</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Autogestion de classe :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Chaque début de leçon, l’enseignant dresse un tableau des rôles à endosser. Chaque élève peut venir s’inscrire sur le rôle souhaité. Pas deux fois de suite le même rôle,et priorité à ceux n’ayant pas eu de rôle la leçon précédente. Ces rôles font partie de l’évaluation.</Text>
        <List.Item>Gestionnaire de l’échauffement cardio (proposer 5 exercices de cardio) ;</List.Item>
        <List.Item>Gestionnaire du temps (vérifie le temps de l’échauffement) ;</List.Item>
        <List.Item>Gestionnaire de la mobilisation articulaire ;</List.Item>
        <List.Item>Gestionnaire de l’échauffement spécifique ;</List.Item>
        <List.Item>Gestionnaire du calme (3 cartons, qu’il doit justifier quand il le présente) …</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="egalite" >3. Égalité Filles garçons</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Labellisation égalité filles-garçons :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>L&apos;obtention du label est une démarche volontaire, progressive et qui s&apos;inscrit dans le temps.</Text>
        <Text>Ses trois principaux objectifs sont :</Text>
        <List.Item>La création d&apos;une culture du respect ;</List.Item>
        <List.Item>La lutte contre toutes les formes de violences sexistes et sexuelles ;</List.Item>
        <List.Item>La lutte contre les stéréotypes de genre et l&apos;accès pour toutes et tous à une orientation moins genrée.</List.Item>
        <Text>Le label propose 3 niveaux de déclinaison de cette démarche :</Text>
        <List.Item>Le niveau 1 reconnaît un engagement de l&apos;établissement scolaire</List.Item>
        <List.Item>Le niveau 2 marque l&apos;approfondissement de la démarche</List.Item>
        <List.Item>Le niveau 3 atteste d&apos;une expertise partagée par l&apos;ensemble de la communauté éducative.</List.Item>
        <Text>Les niveaux 1 et 2 de labellisation relèvent de l&apos;académie, le niveau 3 est du ressort national. Les <Text fontWeight="bold" as="span">résultats de la campagne annuelle de labellisation sont publiés à l&apos;occasion de la semaine de l&apos;égalité, organisée autour du 8 mars, journée internationale des droits des femmes</Text>.</Text>
        <Text>Les établissements qui le souhaitent sollicitent l&apos;obtention du label auprès des autorités académiques et adressent leur dossier de candidature à la personne chargée de mission académique pour l&apos;égalité filles-garçons, ainsi qu&apos;à la personne référente au niveau départemental le cas échéant.</Text>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Pour cela, la proposer un nouvel axe égalité F/G dans le projet établissement peut s’avérer bénéfique. Pour cela, il faut :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Faire un diagnostic du projet en cours grâce à un bilan et une évaluation ;</List.Item>
        <List.Item>Demander au chef d’établissement la réalisation d’un conseil pédagogique afin de proposer une actualisation du projet d’établissement ;</List.Item>
        <List.Item>Lors du conseil pédagogique, proposer le nouvel axe, et s’il est accepté, Établir des objectifs généraux et opérationnels en lien avec cet axe ;</List.Item>
        <List.Item>Faire voter cet axe au conseil d’administration.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Former les enseignants :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Les Plan Académiques de Formation proposent dans leur grande majorité, des formations à l’égalité filles-garçons.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Semaine de l’égalité, semaine du 8 mars :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Art pla : réalisation d’une fresque/graffiti géant sur le thème égalité F/G ;</List.Item>
        <List.Item>Histoire / CDI : renommer les salles de classes avec le nom de femmes qui ont contribué à la défense des droits des femmes dans l’Histoire</List.Item>
        <List.Item>+ réalisation d’affiche avec le nom et les principales actions réalisées ;</List.Item>
        <List.Item>CVC/CVL + référent égalité + partenaire organisent la journée</List.Item>
        <List.Item>Quizz avec lot à gagner, sur les inventions révolutionnaires des femmes</List.Item>
        <List.Item>Intervention d’Hommes/femmes avec métiers stéréotypés (ex : homme sage-femme, femme maçon, sportives HN…)</List.Item>
        <List.Item>Cérémonie de résultat de la labellisation</List.Item>
        <List.Item>Temps débat/réflexion sur l’amélioration de l’égalité H/F à l’école.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Parrainage entre femmes du monde professionnel et filles au Lycée pour les inspirer et se projeter dans un avenir professionnel, par l’association Capital Filles :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Dispositif de mentorat qui met en relation une marraine Capital Filles avec une élève de terminale scolarisée dans un des 103 lycées partenaires sélectionnés par le rectorat, issus de 25 académies.</List.Item>
        <List.Item>Rôle de la marraine : guider dans les démarches liées à l’orientation, partager son expérience, faire découvrir le monde pro, aide à prendre confiance en elle et en son projet d’orientation.</List.Item>
        <List.Item>« Rendez-vous des possibles » : 1 après-midi, regroupement de toutes les filleules et des marraines, pour faire des ateliers de pratique, témoignages, intervenants d’études supérieures…</List.Item>
        <Text>Autres partenaires :</Text>
        <List.Item>Référent égalité filles-garçons. 1 ou 2 personnes dans chaque académie.</List.Item>
        <List.Item>Association « Planning familial ».</List.Item>
        <Text>L&apos;association<Text fontWeight="bold" as="span"> </Text>« Le Planning Familial » a pour mission : (Les missions du planning familial, planning-familial.org)</Text>
        <Text>D’assurer, en partenariat avec les personnels de l’EN des séances d&apos;information et d&apos;éducation à la sexualité dans les établissements scolaires.</Text>
        <Text>De développer au sein des établissements scolaires des programmes de prévention des violences sexistes et sexuelles en travaillant la problématique des rapports filles - garçons en partenariat avec les équipes éducatives, les personnels sociaux et de santé et plus largement les personnels impliqués au sein des établissements scolaires ;</Text>
        <Text>Accueillir et informer sur les thèmes de la sexualité, de la contraception, de l&apos;interruption volontaire de grossesse, sur les infections sexuellement transmissibles (IST) en relais des interventions en milieu scolaire</Text>
        <Text>Proposer des consultations gynécologiques, prescriptions de contraceptifs, orientation, entretien et suivi au sujet de l&apos;interruption volontaire de grossesse et de la prévention des IST ;</Text>
        <Text>Proposer des formations sur les questions de genre et de sexualité, aux professionnels du milieu sanitaire, social, et éducatif.</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="developpement">4. Développement durable</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Prix éco-délégué</List.Item>
        <List.Item>Label E3D</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Favoriser l’apprentissage du vélo pour en faire un mode de déplacement actif, autonome, régulier :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Principe :</Text>
        <List.Item>Projet partenarial ;</List.Item>
        <List.Item>Municipalité : aménage voies de circulation cycliste ;</List.Item>
        <List.Item>Comité départemental : Animations sportives, dont apprentissage du vélo ;</List.Item>
        <List.Item>École : Savoir Rouler à Vélo SARV ;</List.Item>
        <List.Item>Mobilisation d’apprentissages scolaires en EPS et EMC : hygiène de vie, effort, comportement éthique et responsable (parcours citoyen) ;</List.Item>
        <List.Item>Enrichir relation école/familles : principe de co-éducation sur l’autonomie, responsabilisation, connaissance de sécurité routière.</List.Item>
        <Text>OU au lycée</Text>
        <Text>EPI :</Text>
        <List.Item>Géographie : travail sur la carte, les échelles, les distances des étapes ;</List.Item>
        <List.Item>SVT : nutrition ;</List.Item>
        <List.Item>Enseignement professionnel : recherche d’hébergement, prise de contact, s’informer sur les incontournables à voir dans les villes traversées ;</List.Item>
        <List.Item>Cheffe d’établissement qui a trouvé les financements ;</List.Item>
        <List.Item>Collaboration avec le club de cyclisme ;</List.Item>
        <List.Item>Récupération de vélos inutilisés dans un lycée voisin ;</List.Item>
        <List.Item>7 enseignants mobilisés, dont 6 à vélo et 1 conducteur de camion balai + logistique ;</List.Item>
        <List.Item>Camping tous les soirs : prévoir repas, tentes… ;</List.Item>
        <List.Item>Réunions avec les parents préparées par les élèves (pwp…) ;</List.Item>
        <List.Item>Apprentissage du vélo pour ceux qui ne savent pas ne faire à l’AS.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="securite" >5. Sécurité - Natation – Savoir nager</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Projet final :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Classe entière avec ensemble de l’équipe éducative ;</List.Item>
        <List.Item>Départ en bateau pour aller vers des ilots dégagés en marée basse ;</List.Item>
        <List.Item>Sécurité : délimiter un espace identifiable par les élèves, 1 adulte pour 4 élèves ;</List.Item>
        <List.Item>Tenue : combinaison néoprène (favorise la flottaison), palmes, masque, tuba ;</List.Item>
        <List.Item>Travail avec un club de plongée pour être en adéquation avec les textes règlementaires concernant la sécurité et pour des raisons logistiques ;</List.Item>
        <List.Item>Les élèves se déplacent pendant 1h sur zone, en groupe, avec possibilité de reprendre pied si nécessaire ;</List.Item>
        <List.Item>Aventure collective authentique avec les camarades et enseignants, qui génère du plaisir ;</List.Item>
        <List.Item>Ressenti d’émotions collectives fortes.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="confiance">6. Confiance en soi – décrochage scolaire</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Le mentorat :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Le mentorat permet à des élèves d&apos;être pris en charge individuellement et pendant toute l’année, par un étudiant ou une étudiante. Ce mentor accompagne l’élève pour l&apos;aider à acquérir une meilleure confiance en lui, l&apos;ouvrir au monde culturel, et ressusciter le goût des apprentissages :</Text>
        <List.Item>Temps de rencontre avec le mentor et l’élève 1 ou 2h / semaine</List.Item>
        <List.Item>Discussions, aide aux devoirs, jeux…</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Organisation :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Sollicitation des Référents décrochage ;</List.Item>
        <List.Item>Sollicitation du GPDS : proposition du mentorat ;</List.Item>
        <List.Item>Partenariat avec des écoles supérieures ambitieuses OU lycée si collège ;</List.Item>
        <List.Item>Mobilisation des parents et élèves : présentation du projet, inscription, temps de rencontre étudiant / parent / élève.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="relations">7. Coopération – relations enseignants/élèves/élèves – citoyenneté - autonomie</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Classe coopérative :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>L’élève est considéré comme citoyen et acteur de son apprentissage. L’enseignant n’est pas la seule source du savoir, ce n’est pas uniquement sa classe, mais la classe de tous les élèves ;</List.Item>
        <List.Item>L’enseignant apporte en début d’année un fonctionnement initial, puis guide, encourage, évalue le travail, se rend disponible auprès des familles pour leur expliquer ce qu’il se passe en classe.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Différents outils de la classe coopérative :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item><Text fontWeight="bold" as="span">Plan de travail</Text> : le travail à effectuer durant la séquence est écrit dessus. Tout le monde a le même plan, mais chacun peut organiser son travail comme il le souhaite, à son rythme  autonomie, réussite.</List.Item>
        <List.Item><Text fontWeight="bold" as="span">Conseil coopératif</Text> : organisé par les élèves (avec 1 président, 1 secrétaire, un gardien du temps, un ordre du jour) : lieu de propositions et d’écoute, de prise de décision sur divers sujets (règles de la classe, entraide, conflits…).</List.Item>
        <List.Item><Text fontWeight="bold" as="span">Marché des connaissances </Text>: les élèves échangent leurs connaissances particulières à un autre groupe d’élève (basket, tricot…).</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Organisation :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Conseil pédagogique  conseil d’administration ;</List.Item>
        <List.Item>Enseignants coordonnateur du projet ;</List.Item>
        <List.Item>Présentation aux élèves et aux parents.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="coeducation">8. Coéducation</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >La semaine des parents :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Accueil des parents d’élèves avec ateliers animés par différents intervenants :</List.Item>
        <List.Item>Présentation des acteurs et dispositifs du collège : direction</List.Item>
        <List.Item>Demi-pension et aides financières : Gestionnaire</List.Item>
        <List.Item>Outils ressources pour les parents : documentaliste</List.Item>
        <List.Item>Outils/espaces numériques : enseignant référent TICE</List.Item>
        <List.Item>Accompagner le jeune : GPDS</List.Item>
        <List.Item>Partenaires culturels : présentation de projets ambitieux</List.Item>
        <List.Item>Comité départementaux, partenaires associatifs : présentation des dispositifs de soutien à la parentalité comme la CLAS (contrat local d’accompagnement à la scolarité).</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="ouverture" >9. Ouverture culturelle – Acceptation de l’autre</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Journée culturelle :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Organisation : Demander la mise en place lors du conseil d’administration.</Text>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Objectif pédagogique :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Ouverture d’esprit et ouverture culture. Reconnaitre et accepter les différences entre les uns et les autres.</Text>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Acteurs de ce projet :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Membres du CA pour la prise de décision ;</List.Item>
        <List.Item>Tous les enseignant de l’établissement, devant adapter leurs cours sur la journée ;</List.Item>
        <List.Item>Élèves, parents d’élève (confection de plats traditionnels, aide pour le choix.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Déroulement :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Les enseignant organisent chacun leur enseignement sur le thème de la culture, par exemple :</List.Item>
        <List.Item>Français : travail sur les différentes poésies</List.Item>
        <List.Item>EPS : jeux traditionnels de différents pays</List.Item>
        <List.Item>Histoire : les grands conflits culturels</List.Item>
        <List.Item>Musique : les styles de musique selon les pays</List.Item>
        <List.Item>Art-plastique : confection d’affiches représentant le pays choisi</List.Item>
        <List.Item>Les élèves sont invités à venir habiller dans une tenue traditionnelle. Point de vigilance : respect de la laïcité, pas de signe religieux.</List.Item>
        <List.Item>Les élèves sont amenés à ramener différents plats, (fruit, gâteaux, boisson…) provenant de leur pays d’origine  La journée se solderait par un gouter ou toutes les choses ramenées par les élèves seraient mises sur des tables dans la cour. Les affiches confectionnées en art plastiques seraient posées à côté de chaque « plat » pour que les élèves puissent faire le lien entre ce qu’il mange et le pays. Les parents volontaires seraient également invités à ce goûter.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="laicite">10. Laïcité</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Journée Laïcité le 9 décembre :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Tous les enseignements de la journée organisés autour du thème de la laïcité :</List.Item>
        <List.Item>Histoire : origine de la laïcité, comparaison autres pays</List.Item>
        <List.Item>EPS : escape game autour mots de la charte de la laïcité</List.Item>
        <List.Item>Art-pla : création d’affiches, photos</List.Item>
        <List.Item>Intervention de membres de la Réserve citoyenne de l’éducation nationale pour organiser des temps de débats, de fact-checking, de témoignages.</List.Item>
        <List.Item>Intervention de l’association « Solidarité Laïque », agréée par le MEN</List.Item>
        <List.Item>Intervention directe : conférence, débats (liberté d’expression, caricatures…)</List.Item>
        <List.Item>Intervention indirecte : Propose des outils pédagogiques comme des plateaux de jeux, des panneaux d’expositions</List.Item>
        <List.Item>Présentation du prix « Tous unis dans la laïcité » (projet collectif qui consiste à réaliser un support de communication illustrant un ou plusieurs article de la charte de la laïcité à l’école. Transmission avant fin mars. Jury académique (parents, élèves, membres de l’EN, partenaires…) qui sélectionne les lauréats. Cérémonie de remise des prix par le recteur académique.</List.Item>
        <List.Item>Appui du référent académique laïcité.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Faire intervenir un réserviste :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Lorsqu&apos;un enseignant ou un personnel éducatif (CPE ou autres) souhaite bénéficier d&apos;un appui particulier (témoignage, éclairage technique dans une discipline, etc.) dans le cadre d&apos;un projet pédagogique :</Text>
        <List.Item>Il se rend sur son portail Arena pour effectuer une recherche parmi les différents profils de réservistes ;</List.Item>
        <List.Item>Il sélectionne le profil qui correspond le mieux à son projet et contacte le réserviste</List.Item>
        <List.Item>Il s&apos;assure de l&apos;accord préalable de son directeur d&apos;école ou de son chef d&apos;établissement avant l&apos;intervention du réserviste.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="harcelement" >11. Journée nationale contre le harcèlement</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <Text><Text fontWeight="bold" as="span">La journée nationale de lutte contre le harcèlement scolaire se déroule chaque année le premier jeudi qui suit les vacances scolaires de la Toussaint.</Text></Text>
        <List.Item><Text fontWeight="bold" as="span">Chaque discipline travaille autour du harcèlement dans la journée. En plus, chaque classe bénéficie d’un moment avec des intervenants extérieurs</Text></List.Item>
        <List.Item>Partenariat avec la MAE (mutuelle d’assurance scolaire), agréée par le MEN, mène des interventions pour sensibiliser autour de de diverses thématiques dont le harcèlement et le cyberharcèlement :</List.Item>
        <List.Item>Propose des travail en ateliers autour de diverses questions sur le harcèlement</List.Item>
        <List.Item>Propose des outils comme son Jeu de l’Oie sur le harcèlement pour sensibiliser les élèves et leur apprendre à se positionner, qu’ils soient victimes, auteurs ou témoins</List.Item>
        <List.Item>Chaque discipline travail autour de la thématique :</List.Item>
        <List.Item>EPS : témoignage de sportifs de haut-niveau (Clarisse agbégnénou, Antoine Dupont, Christophe Lemaitre…) qui ont été harcelés au collège et/ou luttent contre cela = modèles pour les élèves</List.Item>
        <List.Item>Art-pla : mur « non au harcèlement »</List.Item>
        <List.Item>EMC : droit des enfants, sanctions pénales harcèlement</List.Item>
        <List.Item>Technologie : sensibilisation au cyber-harcèlement…</List.Item>
        <List.Item>Intervention du CVC/CVL qui peut présenter le prix « Non au harcèlement » :</List.Item>
        <List.Item>Affiche ou vidéo sur la lutte contre le harcèlement</List.Item>
        <List.Item>Jury académique soutenu par la MAE, puis jury national</List.Item>
        <List.Item>Prix nationaux remus par le MEN et le président de la MAE à l’occasion d’une cérémonie officielle</List.Item>
        <List.Item>Mention spéciale « valeur du sport » pour 2024</List.Item>
        <List.Item>Intervention des élèves ambassadeurs phARE de l’année passée pour présenter leur rôle, les projets effectués, les plus-values.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Mettre en place le dispositif Ambassadeurs dans mon collège :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>L’accord préalable du chef d’établissement pour la mise en place du projet est nécessaire ; il pourra s’appuyer sur le Conseil de la vie collégienne (CVC) ou le comité d’éducation à la santé et à la citoyenneté pour soutenir l’action des ambassadeurs.</List.Item>
        <List.Item>Dans le même temps, ce projet aura été soumis au vote du CA . Les adultes volontaires, professeurs, CPE, infirmière, agents, assistants d’éducation, etc., sont associés au projet afin de devenir référents et facilitateurs de cette action.</List.Item>
        <List.Item>La mise en place du dispositif est conditionnée à l’obligation de former les élèves ainsi que les adultes référents investis dans ce projet. La formation pourra être organisée au niveau du rectorat, comme pour les ambassadeurs lycéens, au sein d’un bassin ou au sein de l’établissement avec l’aide des référents harcèlement académiques et départementaux.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="education">12. Éducation artistique et culturelle</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>ADAGE est la plateforme numérique de l’EN dédiée à la généralisation de l’EAC. Au service des équipes pédagogiques, les ressources en ligne ADAGE aident à concevoir des projets en partenariat avec des structures culturelles dans l’objectif du 100% EAC, pour que tous les élèves bénéficient d’un égal accès à la culture.</List.Item>
        <List.Item>Part collective du Pass Culture exclusivement dédiée au financement d’activités d’EAC effectuées en groupe et encadrées par les prof (spectacles, concerts, rencontres, conférences, expositions, visites…).</List.Item>
        <List.Item>Les DAAC (délégations académiques à l’éducation artistique et à l’action culturelle au sein des rectorats) accompagnent les équipes péda et éducatives dans l’élaboration de leur projets, notamment dans l’utilisation de la part collective du Pass Culture.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="handicapes">13. Journée internationale des personnes handicapées – 3 décembre</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <Text>Mobilisation de l’ensemble de la communauté éducative autour d’une journée de sensibilisation au handicap :</Text>
        <List.Item>Chaque discipline adapte ses leçons</List.Item>
        <List.Item>EMC : débat sur le respect d’autrui et valeurs de la république</List.Item>
        <List.Item>EPS : programmation d’activités handisport</List.Item>
        <List.Item>Français : champ lexical des ressentis autour de la question du handicap</List.Item>
        <List.Item>Ressource Éduscol « Cap école inclusive » : propose des petites vidéos de sensibilisation à destination des élèves, afin de mieux comprendre les handicaps dont peuvent souffrir leurs camarades.</List.Item>
        <List.Item>Intervention de partenaires : l’APAJH (association pour adultes et jeunes handicapés)</List.Item>
        <List.Item>But de l’assoc : faire avancer la réflexion et assurer à chacun un égal accès aux droits (dont le droit à l’école)</List.Item>
        <List.Item>A signé une convention-cadre le 10/01/2020 avec le ministre de l’EN pour favoriser la scolarisation des personnes en situation de handicap</List.Item>
        <List.Item>Propose des outils pour que chaque enseignant puisse se saisir de la question de l’école pour tous, et ouvrir un débat dans sa classe : affiches, fiches pratiques pour mener une séance de sensibilisation</List.Item>
        <List.Item>« Drôle de compagnie »</List.Item>
        <List.Item>Association créatrice de spectacles autour du handicap et de la différence</List.Item>
        <List.Item>Entre 1 et 10 séances</List.Item>
        <List.Item>1ère séance en classe avec 1 personne handicapée et 1 valide qui viennent témoigner, sensibiliser</List.Item>
        <List.Item>2ème : expérimenter le handicap : apprendre la LSF, manier un fauteuil…</List.Item>
        <List.Item>Puis invitation à venir voir un spectacle de la compagnie (troupe qui regroupe artiste valides et handicapés, autour de la thématique du handicap) = temps fort pour les élèves</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="homo" >14. Journée internationale de lutte contre l’homo/trans/bi phobie – 17 mai / Journée internationale de visibilité transgenre – 31 mars</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Donner de la visibilité à la campagne « Ici, on peut être soi » lancée par le MEN le 17 mai 2023</List.Item>
        <List.Item>Campagne d’affichage</List.Item>
        <List.Item>Mise à disposition d’un guide d’accompagnement pour les personnels</List.Item>
        <List.Item>Service d’écoute et d’aide à distance</List.Item>
        <List.Item>Intervention de l’association agréée par le MEN SOS homophobie</List.Item>
        <List.Item>A des équipes d’intervention en milieu scolaire (IMS)</List.Item>
        <List.Item>Rappel des définitions, films pédagogiques avec échanges, échanges sur les idées reçues, législation, questions anonymes pour déconstruire les tabous</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="sex">15. Journée internationale de la santé sexuelle – 4 septembre</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>But : mise en lumière des aspects fondamentaux de la santé sexuelle, promouvoir l’éducation à la sexualité, sensibiliser à l’importance des droits sexuels de tous.</List.Item>
        <List.Item>Intervention du Planning Familial.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" ><Text fontWeight="bold" as="span">L&apos;association</Text> « Le Planning Familial » a pour mission :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>D’assurer, en partenariat avec les personnels de l’EN des séances d&apos;information et d&apos;éducation à la sexualité dans les établissements scolaires ;</Text>
        <Text>De développer au sein des établissements scolaires des programmes de prévention des violences sexistes et sexuelles en travaillant la problématique des rapports filles - garçons en partenariat avec les équipes éducatives, les personnels sociaux et de santé et plus largement les personnels impliqués au sein des établissements scolaires ;</Text>
        <Text>Accueillir et informer sur les thèmes de la sexualité, de la contraception, de l&apos;interruption volontaire de grossesse, sur les infections sexuellement transmissibles (IST) en relais des interventions en milieu scolaire ;</Text>
        <Text>Proposer des consultations gynécologiques, prescriptions de contraceptifs, orientation, entretien et suivi au sujet de l&apos;interruption volontaire de grossesse et de la prévention des IST ;</Text>
        <Text>Proposer des formations sur les questions de genre et de sexualité, aux professionnels du milieu sanitaire, social, et éducatif</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="numerique" >16. Numérique – addiction</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Association e-enfance – 3018 :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Agréée par le Ministère de l’EN.</Text>
        <Text>Reconnue d’utilité publique, l’Association e-Enfance / 3018 est le précurseur depuis 19 ans dans la protection de l’Enfance sur internet et l’éducation à la citoyenneté numérique.</Text>
        <Text>Intervention d’une journée, 2h dans chaque classe</Text>
        <Text>Sur le harcèlement et les violences numériques</Text>
        <Text>Sur les usages du numérique</Text>
        <Text>Collégiens : « mieux comprendre pour mieux utiliser ».</Text>
        <Text>Lycéens : « de la dopamine à l’addiction ».</Text>
        <Text>Professionnels : 2 à 4h : pour comprendre les usages numériques des jeunes pour vous accompagner dans vos missions quotidienne et votre rôle de prévention.</Text>
        <Text>Parents : 2h, comprendre les usages numériques des enfants et identifier les menaces et les opportunités d’internet pour mieux accompagner son enfant.</Text>
        <Text>Comment prévoir une intervention :</Text>
        <Text>Autorisation du chef d’établissement</Text>
        <Text>Remplir la demande en ligne avec</Text>
        <Text>Informations sur l’établissement</Text>
        <Text>Référent du projet</Text>
        <Text>Gestionnaire</Text>
        <Text>Planification des interventions : nombre de classes, niveaux</Text>
        <Text>Type d’intervention</Text>
        <Text>Application 3018 : mettre fin au harcèlement en ligne</Text>
        <Text>Mise en relation directe par un tchat ou téléphone d’un professionnel du 3018</Text>
        <Text>Stockage des preuves du harcèlement prévu</Text>
        <Text>Auto-évaluation « suis-je harcelé » pour encourager la victime à demander de l’aide</Text>
        <Text>Accès rapide à des fiches conseil sur le cyber harcèlement et harcèlement scolaire pour s’informer sur ses droits et savoir comment réagir</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="etranger">17. Implication parents étranger</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >OEPRE = opération « ouvrir l’école aux parents pour la réussite des parents » :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Vise à favoriser l&apos;intégration des parents d&apos;élèves, primo-arrivants, immigrés ou étrangers hors Union européenne, volontaires, en les impliquant notamment dans la scolarité de leur enfant (circulaire 2017).</List.Item>
        <List.Item>Les formations ont pour objectif de permettre :</List.Item>
        <List.Item>L&apos;acquisition du français (comprendre, parler, lire et écrire)</List.Item>
        <List.Item>La connaissance des valeurs de la République et leur mise en œuvre dans la société française</List.Item>
        <List.Item>La connaissance du fonctionnement et des attentes de l&apos;École vis-à-vis des élèves et des parents.</List.Item>
        <List.Item>Formation entre 60 et 120h annuelle, sur des créneaux pouvant accueillir le plus de monde.</List.Item>
        <List.Item>Assurée majoritairement par des enseignants, formés à l’enseignement du français comme langue seconde.</List.Item>
        <List.Item>Chef d’établissement qui fait une demande au recteur.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="sportifs" >18. Intervention conférenciers sportifs HN – risque, confiance en soi, handicap, égalité…</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Plateforme Wechamp :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Regroupe un ensemble de sportifs de HN conférenciers, selon le thème que l’on souhaite aborder.</List.Item>
        <List.Item>Exemple de thème et d’intervenants :</List.Item>
        <List.Item>Gestion de conflit : Tony Chapron (arbitre international français)</List.Item>
        <List.Item>Handicap : Philippe Croizon (traversée de la manche à la nage)</List.Item>
        <List.Item>Leadership : Marc Lièvremont (champion de France rugby)</List.Item>
        <List.Item>Risque/sécurité : Elisabeth Revol (1ère femme à réaliser l’ascension de 3 sommets en 16j en solitaire et sans oxygène)</List.Item>
        <List.Item>Dépassement de soi/motivation/esprit d’équipe : Vincent Collet (entraineur de l’équipe de France de Basket-ball)</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="sosracisme">19. Racisme – SOS racisme</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Ciné débat, conférences, ateliers d’écriture, slam.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="racisme">20. Racisme, sexisme, inclusion, homophobie – Prix Ethic’action</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Créé par l’UNSS avec le parrainage du Sénat, le prix national « Ethic’Action » récompense les projets menés dans le champ de l&apos;éthique sportive, de l’éco-responsabilité et de la « santé bien-être » par les élèves des établissements du second degré au sein de leur association sportive.</List.Item>
        <List.Item>Projet à présenter en vidéo.</List.Item>
        <List.Item>Les lauréats reçoivent un chèque de 300 euros pour l’AS. Sont invités au Sénat à Paris pour la remise du trophée.</List.Item>
        <List.Item>Cette cérémonie rassemble des personnalités politiques, des partenaires du Prix et du sport scolaire, ainsi que des sportifs de haut niveau ambassadeurs de l’UNSS.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="alcool" >21. Alcool</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Dry january CESCE.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="psc1">22. Santé/sécurité – PSC1</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>La formation aux premiers secours est obligatoire. Cela réponde à des exigences éducatives de sécurité civile et de santé publique.</List.Item>
        <List.Item>Afin de mettre en place ces formations adéquates, les CE peuvent s&apos;appuyer tout d&apos;abord sur les personnels de leur établissement - formateur en prévention et secours civiques (PSC), formateur sauveteur secouriste du travail (SST), formateur aux premiers secours (PS), formateurs académiques en secourisme identifiés par le chargé académique du dossier secourisme (CADS) - ainsi que sur les associations agréées ou organismes publics habilités à délivrer l&apos;unité d&apos;enseignement PSC1.</List.Item>
        <List.Item>Les chefs d&apos;établissement s&apos;assurent de la mise en place dans leur collège d&apos;une formation à la prévention et secours civiques de niveau 1 (PSC1) ou au moins d&apos;un module de deux heures aux gestes qui sauvent (GQS).</List.Item>
        <List.Item>Les chargés académiques du dossier secourisme accompagnent les chefs d&apos;établissement pour la mise en œuvre de cette formation. Les formateurs aux GQS sont soit des formateurs en PSC, soit des formateurs SST, soit des formateurs PS, à jour de formation continue dans tous les cas.
          - Les formateurs académiques sont chargés de la réalisation d&apos;actions de formation auprès des élèves.
          - Des partenariats contribuent au développement de la sensibilisation et formation aux premiers secours. Ils font l’objet de conventions nationales</List.Item>
        <List.Item>Fédération Française de Sauvetage et de Secourisme, la Croix-Rouge ou encore les pompiers.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="enfance">23. Enfance en danger - 20 Novembre : journée internationale des droits de l’enfant</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Débat réglé à partir du film Allo 119 (réalisé par le GIP Enfance en Danger, dure 13 minutes).</List.Item>
        <List.Item>Travail autour de la CIDE (convention internationale des droits de l’enfant), qui fait partie des connaissances inscrites dans le socle commun.</List.Item>
        <List.Item>Découverte du SNATED : service national d’accueil téléphonique de l’enfance en danger.</List.Item>
        <List.Item>Intervention de l’association <Text fontWeight="bold" as="span">Enfance et Partage</Text><Text fontWeight="bold" as="span"> : </Text></List.Item>
        <List.Item>Agréée organisme éducatif complémentaire d’enseignement public par le ministère de l’Éducation Nationale depuis 2007 ;</List.Item>
        <List.Item>Intervention dans les établissements scolaires de la maternelle au lycée</List.Item>
        <List.Item>Propose des actions de sensibilisation aux situations à risques et les moyens de se protéger, l’aide de notre « KIT de prévention ». Cette mallette pédagogique est constituée de protocoles de fiches et d’outils d’animation, adaptés à chaque âge ;</List.Item>
        <List.Item>Depuis 2015 un outil de sensibilisation aux questions de maltraitance a été créé à destination des professionnels de l’enfance (enseignants…) ;</List.Item>
        <List.Item>Cet outil support P.R.E.S.A. (Prévenir, Repérer, Écouter, Signaler, Agir) a été élaboré à partir du guide « Agir contre la maltraitance » conçu par Enfance et Partage : il donne la définition de la maltraitance, identifie les différents types de maltraitance ainsi que les signaux d’alerte, il informe sur les circuits administratifs et judiciaires, les niveaux et outils d’intervention et de signalement.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="amnesty">24. Amnesty international : intervention sur les droits humains</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Bénéficie des agréments l’éducation nationale, et de l’éducation populaire, jeunesse et sports pour mener des actions qui visent à faire évoluer les comportements.</List.Item>
        <List.Item>Propose des documents pédagogiques (ateliers, quizz…) en ligne.</List.Item>
        <List.Item>Propose des interventions en milieu scolaire sur l’EDH (éducation aux droits humains) de manière large ou sur un thème spécifique (laïcité, liberté d’expression, discriminations, droits sexuels…).</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="croyances" >25. Sciences et croyances – éducation aux médias et à l’information – CLEMI (centre de liaison de l’enseignement et des médias d’information)</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Education aux médias et à l’information EMI renforcée depuis 2015.</List.Item>
        <List.Item>Semaine de la presse et des médias – mars.</List.Item>
        <List.Item>Propose des FIL aux enseignants qui veulent s’engager dans cette démarche</List.Item>
        <List.Item>Propose des activités :</List.Item>
        <List.Item>Classe d’investigation pour construire un contenu journalistique</List.Item>
        <List.Item>Ateliers Declic’critique pour analyser les contenus des médias</List.Item>
        <List.Item>Création d’un journal scolaire (papier, numérique ou webradio)</List.Item>
        <List.Item>Vikacadémie pour contribuer à l’encyclopédie collaborative Wikimédia</List.Item>
        <List.Item>Graine de reporter scientifique : mener l’enquête sur les grands enjeux environnementaux liées à l’Océan et au climat, et en réaliser un reportage vidéo. En lien avec la fondation Tara Océan. Visio conférence avec un chercheur en direct, suivi d’échanges avec lui. Possibilité de lui envoyer des questions au fur et à mesure de l’avancement du projet.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="sciences" >26. Sciences</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >La main à la pâte – fête de la science :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Une semaine au mois d’octobre.</List.Item>
        <List.Item>Rencontre entre enseignants chercheurs, scientifiques.</List.Item>
        <List.Item>Fondation « La main à la pâte » qui met à disposition des enseignants des ressources pour la classe et la formation, ainsi que des aides variées pour mener des activités et des projets de science et techno en primaire et au collège</List.Item>
        <List.Item>La main à la pâte propose également le dispositif Partenaires scientifiques pour la classe, qui rapproche des scientifiques (étudiants, chercheurs, ingénieurs…) et des classe sur plusieurs séances.</List.Item>
        <List.Item>Contacter directement l’IEN ou le conseiller pédagogique de circonscription en charge des sciences.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="egalitehf">27. Egalite hommes-femmes – Centre Nationale d’Information sur les Droits des Femmes et des Familles CNIDFF</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Association agréée.</List.Item>
        <List.Item>Actions d’information individuelles auprès de femmes et familles, mais aussi actions d’information collectives auprès d’élèves et d’équipes éducatives dans les établissements scolaires.</List.Item>
        <List.Item>Actions qui ont pour but de favoriser le respect de l’égalité entre F etG, de favoriser la diversification des choix d’orientation et de lutter contre les discriminations sexistes, notamment en promouvant l’histoire des femmes.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="eloquence">28. Éloquence (culture / citoyenneté) – Atelier de la langue française</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Agréé par le MEN. En lien avec le Pass Culture.</List.Item>
        <List.Item>Manuel « l’essentiel de l’éloquence ».</List.Item>
        <List.Item>Atelier « la classe des orateurs » :</List.Item>
        <List.Item>Initiation de 2 à 6h sur les fondamentaux de la rhétorique</List.Item>
        <List.Item>Apprentissage des codes de l’art oratoire, découverte des sujets citoyens, préparation et mise en vois du discours, développement d’une réflexion critique, défense d’un point de vue en argumentant</List.Item>
        <List.Item>Atelier « parole de jeunes » :</List.Item>
        <List.Item>Vise à perfectionner les capacités de prise de parole en public, appliquée aux champs de l’éducation à la citoyenneté</List.Item>
        <List.Item>6h</List.Item>
        <List.Item>Atelier « l’art en procès » :</List.Item>
        <List.Item>Vise à perfectionner les capacités de prise de parole en public, appliquée au domaine de l’art et de la culture</List.Item>
        <List.Item>6h</List.Item>
        <List.Item>Organisation d’un procès fictif ou historique, depuis la remise du dossier d’instruction jusqu’à l’énoncé de la sentence</List.Item>
        <List.Item>Enjeu de faire réfléchir sur la liberté artistique, et rencontrer des professionnels du droit et de la culture</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="phare" >29. Programme phare (PHARE : un programme de lutte contre le harcèlement à l’école, education.gouv).</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Principe :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Un plan de prévention du harcèlement à destination des écoles et des collèges généralisé à tous les établissements et les écoles à la rentrée 2021. Obligatoire depuis la rentrée 2022.</Text>
        <Text>Il est fondé autour de 8 piliers :</Text>
        <List.Item>Mesurer le climat scolaire ;</List.Item>
        <List.Item>Prévenir les phénomènes de harcèlement ;</List.Item>
        <List.Item>Former une communauté protectrice de pro et de personnels pour les élèves ;</List.Item>
        <List.Item>Intervenir efficacement sur les situations en harcèlement ;</List.Item>
        <List.Item>Associer les parents et les partenaires, et communiquer sur le programme ;</List.Item>
        <List.Item>Mobiliser les instances de démocratie scolaire (CVC, CVL) et le comité d’éducation à la santé, citoyenneté et environnement ;</List.Item>
        <List.Item>Suivre l’impact des actions ;</List.Item>
        <List.Item>Mettre à disposition une plateforme dédiée aux ressources.</List.Item>
        <Text>Les établissement, qui, après 2 ans de mise en œuvre, souhaitent encore approfondir le travail sur le climat scolaire, pourront passer au niveau « pHARE 2 » pour les 3 années suivantes. Ce niveau de labellisation est plus exigeant et inclut la passation d’une enquête locale de climat scolaire.</Text>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >En pratique, cela correspond à :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>La formation d’une communauté protectrice autour des élèves : 5 personnels ressource (minimum) par collège et par circonscription du 1er degré sont formés à leur prise en charge des situations de harcèlement via la méthode de préoccupation partagée.</List.Item>
        <List.Item>La rédaction et la mise en œuvre d’un protocole de pris en charge des situations de harcèlement.</List.Item>
        <List.Item>10h d’apprentissage par an, du CP à la 3ème, consacré à la prévention du harcèlement et au développement des compétences psychosociales des élèves.</List.Item>
        <List.Item>La sensibilisation des familles et des personnels.</List.Item>
        <List.Item>La formation d’élève ambassadeurs dans les collèges.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Temps forts de ce programme :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Journée nationale de lutte contre le harcèlement.</List.Item>
        <List.Item>Prix Non au harcèlement.</List.Item>
        <List.Item>Le Safer Internet Day.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Personnes ressources du programme pHARe :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>8 journées de formation consacrées au repérage et à la prise en charge des situations de harcèlement et de cyberharcèlement, échelonnées sur 2 ans.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Plateforme digitale du programme. Elle regroupe :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Les contenus éducatifs destinés aux ambassadeurs collégiens, élèves du CP à la 3ème et aux adultes ;</List.Item>
        <List.Item>Les outils de suivi pour les chefs d’établissement, directeurs, IEN, superviseurs académiques.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="ambassadeur" >30. Devenir ambassadeur au collège (fait partie du programme phARE)</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Rôle :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Interventions dans les collèges et les écoles pour sensibiliser au harcèlement ;</List.Item>
        <List.Item>Sensibilise ses camarades, repère les signes de harcèlement et en parle, conduit un projet pour mobiliser l’ensemble de la communauté éducative, porte les valeurs de l’école de la confiance.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Qui ?</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Élèves volontaires issus de ≠ niveaux, en privilégiant des élèves de chaque classes ;</List.Item>
        <List.Item>Le chef d’établissement doit donner son accord pour la mise en place du projet, et peut s’appuyer sur le CVC ou CESC pour soutenir l’action des ambassadeurs.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Organisation :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Les élèves volontaires et adultes référents sont formés au niveau du rectorat, d’un bassin ou au sein de l’établissement à l’aide des référents académiques et départementaux.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Idées de projets :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <List.Item>Participation au concours « non au harcèlement » ;</List.Item>
        <List.Item>Proposer un temps d’échange avec les parents sur la thématique ;</List.Item>
        <List.Item>Faire connaitre à ses camarades les ≠ numéros dédiés : 3020, 3018 ;</List.Item>
        <List.Item>Diffuser des messages de prévention par le journal du collège ou l’ENT.</List.Item>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="referents">31. Référents égalité</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Principe :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>La <Text fontWeight="bold" as="span">convention interministérielle pour l&apos;égalité entre les filles et les garçons, les femmes et les hommes dans le système éducatif (2019-2024)</Text> désigne comme objectif prioritaire une approche globale de l&apos;éducation à l&apos;égalité.
          Pour cela, l’ensemble de la communauté éducative est formé à la déconstruction des préjugés et à la prévention du harcèlement et des violences sexistes et sexuelles.</Text>
        <Text>De plus, <Text fontWeight="bold" as="span">chaque établissement du 2</Text><Text fontWeight="bold" as="span">nd</Text><Text fontWeight="bold" as="span"> degré nomme un ou plusieurs référents égalités</Text><Text fontWeight="bold" as="span">.</Text></Text>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Rôle :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Leur rôle consiste à diffuser une culture de l’égalité au sein de l’école :</Text>
        <List.Item>La mise en œuvre d’actions éducatives pour sensibiliser les élèves ;</List.Item>
        <List.Item>La diffusion d’information et la formation équipes éducatives ;</List.Item>
        <List.Item>La mobilisation à l’occasion du 25 novembre, Journée internationale pour l’élimination de la violence à l’égard des femmes et du 8 mars, Journée internationale des droits des femmes ;</List.Item>
        <List.Item>Le développement d&apos;actions partenariales avec les associations promouvant l’égalité entre les filles et les garçons.</List.Item>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Objectifs :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Encourager un climat scolaire sain ;</Text>
        <Text>Assurer un cadre protecteur – sans comportement ni violences sexistes ;</Text>
        <Text>Favoriser la mixité et l’égalité en matière d’orientation.</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="formation" >32. Formation continue des personnels</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >C’est quoi ?</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Il s’agit d’un droit, qui vise à doter les agents des compétences professionnelles indispensables à une constante adaptation aux évolutions du système éducatif et à l&apos;accompagnement des élèves.</Text>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Organisation :</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Une offre de formation à l&apos;échelle de l&apos;académie est proposée, en fonction des priorités nationales déclinées dans le PNF en fonction des problématiques en enjeux locaux.</Text>
        <Text>Les enseignants candidatent aux actions de formation qui les intéressent et/ou sont choisis pour y participer.</Text>
        <Text>La demande de formation doit tout de même passer par voie hiérarchique pour avis. Elle fait ensuite objet d&apos;un accord écrit entre l&apos;enseignant et l&apos;administration.</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="malette">33. Malette des parents</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >C&apos;est quoi ?</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Un site internet dédié aux parents et aux professionnels de l&apos;éducation. Sur cet espace, sont proposés des conseils, des ressources et des outils</Text>
        <Text>On retrouve divers thèmes comme les évaluations, le système éducatif, les aides financières, le numérique, les programmes, l&apos;égalité, le harcèlement, les devoirs, l&apos;orientation, le handicap, les représentants des parents…</Text>
      </List.Root>
      <Text fontWeight="bold" textDecoration="underline" >Objectif</Text>
      <List.Root gap={2} pl={4} my={4} >
        <Text>Permettre aux parents de mieux comprendre les enjeux de l&apos;école et pour renforcer le lien entre les ≠ acteurs de la réussite scolaire de chaque enfant</Text>
      </List.Root>
      <Box bg="teal.500" p="3" borderRadius="lg" w="full" mt={4} >
        <Heading size="md" id="methode">34. Méthode de préoccupation partagée adaptation méthode suédoise Pikas (conférence BELLON – réseau Canopé 2021)</Heading>
      </Box>
      <List.Root gap={2} pl={4} my={4}>
        <List.Item>Méthode visant à réduire le harcèlement en impliquant les harceleurs.</List.Item>
        <List.Item>Les élèves recherchent par eux-mêmes par une issue pacifique au conflits</List.Item>
        <List.Item>Entretien discrets menés par une « équipe ressource » auprès de la cible (victime), de la famille, des intimidateurs. Les entretiens sont réguliers afin de voir si des évolutions sont remarquées.</List.Item>
        <List.Item>Méthode non adaptée pour des situations de violence physique, racket…</List.Item>
      </List.Root>
    </Box>
  );
};

export default Page;
