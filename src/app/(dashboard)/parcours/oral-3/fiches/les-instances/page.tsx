import { Box, Heading, Text, VStack, List, Flex } from "@chakra-ui/react";
const Page = () => {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md" >
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg">Les Instances</Heading>
      </Flex>
      <VStack align="start" gap={4} mt={4}>
        <Text><Text fontWeight="bold" as="span">(Cf. Collège et lycée – Fonctionnement de l’établissement, service-public.fr)</Text></Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Conseil de classe :</Text>
        <Text>Qui ?  Les professeurs de la classe, le conseiller principal d&apos;éducation (CPE), le conseiller d&apos;orientation-psychologue, 2 délégués des élèves, 2 délégués de parents d&apos;élèves, et, lorsqu&apos;ils ont eu à connaître du cas personnel d&apos;élève(s) de la classe, du médecin scolaire, de l&apos;assistant social ou de l&apos;infirmier.</Text>
        <Text>But : Faire le bilan trimestriel ou semestriel d’une classe.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Le Conseil d&apos;administration :</Text>
        <Text>Présidé par le chef d&apos;établissement</Text>
        <Text>Adopte les grandes décisions concernant l&apos;ensemble de l&apos;établissement telles que : le projet d&apos;établissement, le budget et le compte financier, le règlement intérieur, le plan de prévention de la violence.</Text>
        <Text>Il valide également : les orientations relatives à la conduite du dialogue avec les parents d&apos;élèves, le programme de l&apos;AS, la programmation et les modalités de financement des voyages scolaires, les conventions et contrats avec des partenaires.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Le comité d&apos;éducation à la santé et à la citoyenneté :</Text>
        <Text>Réunit, sous la présidence du chef d&apos;établissement, les personnels d&apos;éducation, sociaux et de santé de l&apos;établissement et des représentants des personnels enseignants, des parents et des élèves, les représentants de la commune et de la collectivité territoriale de rattachement au sein de ce conseil.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Le conseil des délégués pour la vie lycéenne :</Text>
        <Text>Qui ?  Dix lycéens élus pour deux ans par l&apos;ensemble des élèves de l&apos;établissement.</Text>
        <Text>But ;</Text>
        <Text>Formule des propositions sur la formation des représentants des élèves et les conditions d&apos;utilisation des fonds lycéens.</Text>
        <Text>Il est obligatoirement consulté :  Sur les questions relatives aux principes généraux de l&apos;organisation des études, sur les modalités générales de l&apos;organisation du travail personnel, Sur la santé, l&apos;hygiène et la sécurité, sur l&apos;aménagement des espaces destinés à la vie lycéenne et sur l&apos;organisation des activités sportives, culturelles et périscolaires.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Le Conseil de la vie collégienne :</Text>
        <Text>But :  Instance d&apos;échanges et de dialogue entre les élèves et les autres membres de la communauté éducative.</Text>
        <Text>Qui ? Le chef d&apos;établissement qui préside, 1 représentant des personnels enseignants, au moins un représentant des personnels de l&apos;établissement, au moins un représentant des parents d&apos;élèves, des représentants élèves.</Text>
        <Text>CVC peut faire des propositions sur les sujets suivants :</Text>
        <Text>Organisation de la scolarité et du temps scolaire</Text>
        <Text>Élaboration du projet d&apos;établissement et du règlement intérieur</Text>
        <Text>Équipements, restauration et internat</Text>
        <Text>Organisation du travail personnel et accompagnement des élèves</Text>
        <Text>Échanges linguistiques et culturels</Text>
        <Text>Bien-être des élèves, climat scolaire et promotion des pratiques participatives</Text>
        <Text>Mise en œuvre du parcours d&apos;éducation artistique et culturelle, du parcours citoyen, du parcours &quot;Avenir&quot; et du parcours éducatif de santé</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">L&apos;assemblée générale des délégués des élèves :</Text>
        <Text>L&apos;ensemble des délégués des élèves est réuni en assemblée générale sous la présidence du chef d&apos;établissement au moins deux fois par an.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Conseil école-collège :</Text>
        <Text>But : Renforcer la continuité pédagogique entre le premier et le second degré</Text>
        <Text>Qui ? Principal du collège ou son adjoint ; l&apos;inspecteur de l&apos;EN charger de la circonscription du 1er degré ; personnels désignés par le principal du collège sur proposition du conseil pédagogique du collège ; membres du conseil des maitres de chacune des écoles du secteur de recrutement du collège</Text>
        <Text>Présidé conjointement par le principal du collège et l&apos;inspecteur de l&apos;éducation nationale chargé de la circonscription</Text>
        <Text>Se réunit au moins deux fois par an et établit son programme d&apos;actions pour l&apos;année scolaire suivante ainsi qu&apos;un bilan de ses réalisations.</Text>
        <Text>Programme d&apos;action soumis à l&apos;accord du conseil d&apos;administration du collège et du conseil d&apos;école de chaque école concernée</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Équipe pédagogique :</Text>
        <Text>Qui ? Enseignants (y compris adjoints ou remplaçants), directeur, membres du réseau d&apos;aide aux élèves en difficultés</Text>
        <Text>But : Facilitent la concertation des enseignants sur les projets d&apos;établissement et la coordination des méthodes pédagogiques</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Équipe éducative :</Text>
        <Text>Qui ? Toutes les personnes chargées de l&apos;éducation d&apos;un élève : directeur, enseignants, parents, éventuellement le médecin, infirmière scolaire, assistant social, éducateurs, élèves…</Text>
        <Text>Il appartient au directeur de décider de réunir l&apos;équipe éducative.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">IA-IPR :</Text>
        <Text>Jugent la qualité pédagogique du travail des enseignants.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Équipe mobile de sécurité :</Text>
        <Text>Intervient pour soutenir les personnels/élèves à la suite de problèmes variés (ex : agression dans l&apos;établissement…).</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Conseil départemental :</Text>
        <Text>Gèrent les collèges</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Conseil régional :</Text>
        <Text>Gèrent les LGT et LP</Text>
      </VStack>
    </Box>
  );
};

export default Page;
