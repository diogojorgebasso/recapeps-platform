import { Box, Heading, Text, VStack, List, Flex } from "@chakra-ui/react";
const Page = () => {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md" >
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg">Valeurs de la République</Heading>
      </Flex>
      <VStack align="start" gap={4} mt={4}>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Démocratie :</Text>
        <Text>Système politique, forme de gouvernement dans lequel la souveraineté émane du peuple (Larousse).</Text>
        <Text>« Gouvernement du peuple, par le peuple et pour le peuple » (A. Lincoln).</Text>
        <Text>Les citoyen sont acteur, à la source du pouvoir.</Text>
        <Text>Démocratie représentative : les citoyens expriment leur volontés par l’intermédiaire de représentants élus.( délégués de classe).</Text>
        <Text>Démocratie participative : Ensemble des dispositifs, politiques, démarches qui visent à associer les citoyens au processus de décision politique.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Citoyenneté :</Text>
        <Text>Citoyen : dispose dans une communauté politique donnée, de tous ses droits civils et politiques, notamment le droit de vote.</Text>
        <Text>Implique des droits : libertés individuelles (conscience, expression, justice…), droits politiques, droits des enfants.</Text>
        <Text>Implique des devoirs : respecter les lois, participer aux dépenses collectives, défense de la société.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Coopération :</Text>
        <Text>Action de participer à un projet commun.</Text>
        <Text>Capacité à collaborer.</Text>
        <Text>Nécessite confiance et coopération  climat scolaire.</Text>
        <Text>Entraide : soutien mutuel (à fait ses preuves dans des systèmes éducatifs pays nordiques).</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Discrimination :</Text>
        <Text>Traiter une personne moins favorablement dans une situation comparable et en raison d’un critère interdit par la loi.</Text>
        <Text>Directe = personne est traitée d’une manière moins favorable qu’une autre (en raison de son sexe, religion, race, âge, conviction, identité/orientation sexuelle…).</Text>
        <Text>Indirecte = critère neutre en apparence, mais susceptible d’entrainer une désavantage particulier pour des personnes par rapport à d’autres (ex = barème EPS).</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Egalite :</Text>
        <Text>Absence de toute discrimination.</Text>
        <Text>Donner les mêmes droits, chances, devoirs à chacun.</Text>
        <Text>Egalite des sexes, des chances, de réussite…</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Esprit de justice :</Text>
        <Text>« Action d’accorder à une personne ce qu’elle demande et qu’il est juste qu’elle obtienne » (Littré).</Text>
        <Text>« Principe moral qui exige le respect du droit et de l’équité » (Larousse).</Text>
        <Text>Viser pour chacun les mêmes chances  doit corriger les inégalités de départ (donner plus à ceux qui ont le moins).</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Fraternité :</Text>
        <Text>« Lien de solidarité qui devrait unir tous les membres de la famille humaine, sentiment de ce lien » (Larousse).</Text>
        <Text>Dans un sens plus restrictif : « lien qui existe entre les personnes appartenant à la même organisation, qui participent au même idéal » (Larousse).</Text>
        <Text>Valeur morale et non juridique : reconnaitre dans tout autre homme un autre soi-même, malgré les différences, les oppositions, les conflits.</Text>
        <Text>Empathie l’échelle individuelle.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Inclusion :</Text>
        <Text>Un élève « inclus » grandit dans un environnement « normal » et prend pleinement et activement part à la vie de l’école pour expérimenter les formes de reconnaissance qui fondent l’appartenance à la communauté scolaire et, plus généralement, à la société » (Farrell, 2000).</Text>
        <Text>L’école « reconnait que tous les enfants partagent la capacité d’apprendre et de progresser » (école inclusive, eduscol.education).</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Laïcité :</Text>
        <Text>La laïcité est un principe de liberté, liberté de croire ou de ne pas croire. Elle est au fondement de notre société et de notre école qui doit préserver les élèves de tout prosélytisme idéologique, économique et religieux. (La laïcité à l’école, ministère de l’Éducation nationale, de l’enseignement supérieur et de la recherche).</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Respect :</Text>
        <Text>Sentiment de considération envers quelqu’un.</Text>
        <Text>Le respect rare s’il n’est pas réciproque.</Text>
        <Text>Reconnaitre quelqu’un légitime dans sa fonction.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Sécurité :</Text>
        <Text>État d’esprit confiant et serein d’une personne qui se sent à l’abri du danger.</Text>
        <Text>Situation tranquille qui résulte de l’absence réelle de danger.</Text>
        <Text>Physique, affective, psychologique.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Solidarité :</Text>
        <Text>« Rapport existant entre des personnes qui, ayant une communauté d’intérêts, sont liées les unes aux autres » (Larousse).</Text>
        <Text>Responsabilité, dépendance réciproque : les problèmes des uns concernent l’ensemble du groupe.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Tolérance :</Text>
        <Text>« Attitude de quelqu’un qui admet chez les autres des manières de penser et de vivre différentes des siennes propres » (Larousse).</Text>
        <Text>Faire preuve d’ouverture d’esprit et d’acceptation.</Text>
      </VStack>
    </Box>
  );
};

export default Page;
