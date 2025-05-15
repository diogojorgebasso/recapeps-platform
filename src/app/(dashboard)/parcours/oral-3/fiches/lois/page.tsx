import { Box, Heading, Text, VStack, List, Flex } from "@chakra-ui/react";
const Page = () => {
  return (
    <Box p={5} maxW="3/4" mx="auto" boxShadow="md" >
      <Flex bg="teal.500" p={4} borderRadius="lg" align="center" justify="center">
        <Heading size="lg">Lois</Heading>
      </Flex>
      <VStack align="start" gap={4} mt={4}>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Handicap :</Text>
        <Text>La loi pour l&apos;égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées du 11 février 2005 affirme « le droit de tout élève en situation de handicap à accéder à l&apos;éducation ».</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Législation/délégués de classe : (Article R. 421-28 du Code de l’Éducation) :</Text>
        <Text>Élection avant la 7ème semaine.</Text>
        <Text>Vote pour un titulaire et son suppléant.</Text>
        <Text>Scrutin uninominal à 2 tours (à égalité, le plus jeune est élu).</Text>
        <Text>Un élève n&apos;ayant pas présenté sa candidature peut être élu, s&apos;il accepte.</Text>
        <Text>Fin d&apos;un mandat en cours d&apos;année (départ, démission) : élection d&apos;un nouveau représentant</Text>
        <Text>Inéligibilité d&apos;un candidat (BO n°34 du 22/09/2016) : un élève, même s&apos;il fait l&apos;objet d&apos;une sanction disciplinaire peut se présenter à l&apos;élection et cela n&apos;entraine pas sa destitution (il ne peut cependant plus siéger au conseil de discipline).</Text>
        <Text>Parité illégale : décision du Conseil d’Etat n°362280 du 7 mai 2013.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Discrimination - LOI n°2016-1547 du 18 novembre 2016 - art. 86 :</Text>
        <Text>« Constitue une discrimination toute distinction opérée entre les personnes physiques sur le fondement de leur origine, de leur sexe, de leur situation de famille, de leur grossesse, de leur apparence physique, de la particulière vulnérabilité résultant de leur situation économique, apparente ou connue de son auteur, de leur patronyme, de leur lieu de résidence, de leur état de santé, de leur perte d&apos;autonomie, de leur handicap, de leurs caractéristiques génétiques, de leurs mœurs, de leur orientation sexuelle, de leur identité de genre, de leur âge, de leurs opinions politiques, de leurs activités syndicales, de leur capacité à s&apos;exprimer dans une langue autre que le français, de leur appartenance ou de leur non-appartenance, vraie ou supposée, à une ethnie, une Nation, une prétendue race ou une religion déterminée ».</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Dignité - Article 16, Loi n°94-653 du 29 juillet 1994 :</Text>
        <Text>« La loi assure la primauté de la personne, interdit tout atteinte à la dignité de celle-ci et garantit le respect de l&apos;être humain dès le commencement de sa vie ».</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Assiduité. - Article 511-1 du code de l’éducation :</Text>
        <Text>Obligation d&apos;assiduité, d&apos;accomplir les travaux écrits et oraux, respecter les contenus des programmes.</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Liberté d’expression - Article 511-2 du code de l’éducation :</Text>
        <Text>« La liberté d&apos;expression est reconnue aux élèves mais ne peut pas porter atteinte aux activités d&apos;enseignement. Les élèves ne peuvent donc pas s&apos;opposer à un enseignement en raison de leurs propres convictions ».</Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Vestiaires - Texte du BO°32 du 9 septembre 2004 – 1.1.2 :</Text>
        <Text>« 1.1.2 Le cas particulier des vestiaires</Text>
        <Text>L&apos;éducation à la santé passe par l&apos;acquisition de <Text fontWeight="bold" as="span">comportements d&apos;hygiène</Text> nécessitant un minimum de soins corporels après l&apos;effort.</Text>
        <Text>La mixité des classes, la préservation de l&apos;intimité nécessitent des <Text fontWeight="bold" as="span">vestiaires séparés par sexe</Text>. Si ce n&apos;est pas le cas, il appartiendra à l&apos;enseignant d&apos;adopter la solution la mieux adaptée à la situation particulière.</Text>
        <Text>Il faut aussi prendre conscience que les vestiaires peuvent être le lieu de comportements agressifs, voire de maltraitance. <Text fontWeight="bold" as="span">C&apos;est afin d&apos;éviter toute dérive (chahut, rixe, élèves prenant du retard...) que l&apos;intervention de l&apos;enseignant à l&apos;intérieur du vestiaire peut s&apos;avérer indispensable. En effet, il est de sa responsabilité d&apos;assurer la sécurité de tous les élèves et de garantir les conditions d&apos;enseignement</Text><Text fontWeight="bold" as="span"> »</Text><Text fontWeight="bold" as="span">.</Text></Text>
        <Text fontWeight="bold" textDecoration="underline" mt="4" mb="2">Le décret n° 2019-909 du 30 août 2019 :</Text>
        <Text>« Permet à l&apos;autorité académique (DASEN) d&apos;inscrire un élève exclu définitivement de son établissement dans une classe relais, sans le consentement préalable de ses représentants légaux ».</Text>
      </VStack>
    </Box>
  );
};

export default Page;
