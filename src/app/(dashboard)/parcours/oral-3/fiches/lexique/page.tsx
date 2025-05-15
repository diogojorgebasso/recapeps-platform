import { Box, Heading, Text, VStack, List, Flex } from "@chakra-ui/react";
const Page = () => {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md" >
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg">Lexique</Heading>
      </Flex>
      <Text my="4"><Text fontWeight="bold" as="span">Apprentissage coopératif</Text> : « enseignement en petits groupes avec des pratiques qui utilisent les interactions entre les élèves comme moyen d’atteindre des objectifs pédagogiques » (Johnson & Johnson, 1994).</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Citoyenneté</Text> : « la citoyenneté contemporaine a à voir avec les valeurs fondamentales que sont la démocratie, la liberté, la tolérance, la laïcité ; elle se veut active, vigilante, soucieuse du respect des droits de l&apos;homme dans le monde, de la défense des opprimés et de l&apos;expression de la solidarité. » (T. Bouguerra, La citoyenneté : sa définition, ses lieux et conditions d’exercice, 1999).</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Climat scolaire</Text> : « le climat scolaire renvoie à la qualité et au style de vie de l’école » - J. Cohen et al. (2009).</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Coopération</Text><Text fontWeight="bold" as="span"> </Text>: « action de participer (avec une ou plusieurs personnes) à une œuvre ou à une action commune » (CNRTL)</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Démocratie : </Text>Système politique, forme de gouvernement dans lequel la souveraineté émane du peuple (Larousse)</Text>
      <List.Root gap={2} pl={4}>
        <List.Item>Représentative : par l’intermédiaire de représentants</List.Item>
        <List.Item>Participative : les citoyens participent aux décisions politiques</List.Item>
      </List.Root>
      <Text my="4"><Text fontWeight="bold" as="span">Développement durable</Text><Text fontWeight="bold" as="span"> :</Text></Text>
      <Text my="4">« Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs », citation de Mme Gro Harlem Brundtland, Premier Ministre norvégien (1987).</Text>
      <Text my="4">3 piliers:</Text>
      <List.Root gap={2} pl={4}>
        <List.Item>Social : lutter contre les inégalités sociales du développement des sociétés</List.Item>
        <List.Item>Économie responsable : économie locale, arrêt de sous-payer une économie à l’autre bout du monde…</List.Item>
        <List.Item>Environnemental : écologie, gestion des ressources, réduction des déchets, réchauffement climatique…</List.Item>
      </List.Root>
      <Text my="4"><Text fontWeight="bold" as="span">Dignité</Text>: protéger ou respecter par rapport à l’humain {"⟹"} considérer l’individu en tant que humain/personne.</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Discrimination : </Text>Traiter une personne moins favorablement dans une situation comparable et en raison d’un critère interdit par la loi (Loi n°2016-1547 du 18/07/2016 – article 86).</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Egalite des chances : </Text>Faire en sorte que les individus disposent des mêmes chances, des mêmes opportunités de développement social, indépendamment de leur origine sociale ou ethnique, sexe, moyens financiers, lieu de naissance, conviction religieuse, handicap…</Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Esprit de justice : </Text>« Action d&apos;accorder à une personne ce qu&apos;elle demande et qu&apos;il est juste qu&apos;elle obtienne » (Littré).
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Fraternité</Text><Text fontWeight="bold" as="span"> </Text>: lien existant entre personnes considérés comme membres de la famille humaine.
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Inclusion</Text> : « Elle reconnaît que tous les élèves partagent la capacité d&apos;apprendre et de progresser et veille à la participation à la communauté éducative sans aucune distinction. » (ANDRÉ Amael & MARGAS Nicolas, L&apos;inclusion, Édition EPS, 2021).
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Intelligence collective</Text><Text fontWeight="bold" as="span"> :</Text> « capacité qui par la combinaison et la mise en interaction des connaissances, idées, opinion, questionnement, doutes de plusieurs personnes génère de la valeur et les valeurs peuvent être également de la performance ou un résultat, supérieur à ce qui serait obtenu par la simple addition des contributions de chaque individu » (Mack, 1997).
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Liberté d&apos;expression</Text><Text fontWeight="bold" as="span"> </Text>: « la liberté de recevoir ou de communiquer des informations ou des idées sans qu&apos;il puisse y avoir ingérence d&apos;autorités publiques et sans considération de frontière » (Convention européenne des droits de l&apos;homme, article 10).
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Mixité sexuelle : </Text>« Fait de dispenser un enseignement commun à un groupe de garçons et de filles dans le dessein de leur permettre de s&apos;approprier une culture commune, tout en reconnaissant la place et les caractéristiques de chacun » (V. Lamotte, Lexique de l&apos;enseignement de l&apos;EPS, 2005).
      </Text>
      <Text my="4"><Text fontWeight="bold" as="span">Mixité sociale : </Text>Coexistence dans un même espace de groupes sociaux aux caractéristiques différentes (Selod, 2004).</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Racisme : </Text>Attitude d&apos;hostilité systématique à l&apos;égard d&apos;une catégorie déterminée de personnes.</Text>
      <Text my="4"><Text fontWeight="bold" as="span">Respect : </Text>« Sentiment de considération envers quelqu&apos;un, et qui porte à le traiter avec des égards particuliers ; manifestations de ces égards »</Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Sécurité : </Text>État d&apos;esprit confiant et tranquille d&apos;une personne qui se croit, se sent à l&apos;abri du danger ; physique, affective et psychologique.
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Solidarité</Text><Text fontWeight="bold" as="span"> </Text>:  « responsabilité mutuelle qui s&apos;établit entre les membres d&apos;un groupe social » (CNRTL).
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Tolérance :</Text> « Attitude de quelqu&apos;un qui admet chez les autres des manières de penser et de vivre différentes des siennes propres » (Larousse).
      </Text>
      <Text my="4">
        <Text fontWeight="bold" as="span">Violence</Text> : La violence est définie comme étant « l&apos;utilisation intentionnelle de la force physique, de menaces à l&apos;encontre des autres ou de soi-même, contre un groupe ou une communauté, qui entraîne ou risque fortement d&apos;entraîner un traumatisme, des dommages psychologiques, des problèmes de développement ou un décès » (OMS).
      </Text>
    </Box>
  );
};

export default Page;
