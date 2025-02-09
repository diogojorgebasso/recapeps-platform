import { Box, VStack, Heading, Text, Link, List } from "@chakra-ui/react";

export default function MentionsLegales() {
    return (
        <Box p={8} mx="auto" borderRadius="xl">
            <VStack align="start" gap={6}>
                <Heading as="h1" size="2xl" color="orange.600">
                    CONDITIONS GÉNÉRALES DE VENTE
                </Heading>
                <Text fontSize="lg" fontWeight="semibold">
                    En vigueur au 05/02/2025
                </Text>

                <Text>
                    Les présentes Conditions Générales de Vente (ci-après « CGV ») sont proposées par
                    Corentin FELDER (ci-après l’<strong>“Editeur”</strong>), entrepreneur individuel immatriculé sous le
                    numéro SIREN 940609894 (ci-après l’<strong>“Entreprise”</strong>), domicilié 21 rue des Griottes, 68420
                    Voegtlinshoffen, France. Ces CGV régissent exclusivement la relation entre l’Editeur
                    exploitant le site <strong>recapeps.fr</strong>(ci-après le <strong>"Site"</strong>), et toute personne physique ou morale
                    procédant à un achat sur le Site, ci-après dénommée « le Client ».
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 1 – OBJET
                </Heading>
                <Text>
                    Les présentes CGV définissent les droits et obligations des parties dans le cadre de la vente en
                    ligne des services proposés par le Site. Elles régissent les étapes nécessaires à la finalisation
                    de tout achat sur le Site. Toute commande passée sur le Site implique l’adhésion sans réserve du
                    Client aux présentes CGV.
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 2 – SERVICES
                </Heading>
                <Text>
                    Le Site propose des services numériques sous forme d’abonnements permettant l’accès à
                    du contenu pédagogique exclusif. Ces services peuvent être mis à jour ou modifiés à tout
                    moment par l’Editeur. Les caractéristiques essentielles des services sont détaillées sur les
                    pages dédiées du Site. Le Client est tenu de les lire avant tout achat.
                </Text>
                <Text>
                    Certains services peuvent être proposés sous forme d’abonnement mensuel ou annuel avec
                    reconduction automatique. Le Client peut annuler son abonnement à tout moment via son
                    espace personnel ou en envoyant un courriel à <Link target="_blank" href="mailto:contact@recapeps.fr">contact@recapeps.fr</Link>. Un mail de
                    confirmation sera alors envoyé au Client. Toute période entamée reste due et aucun
                    remboursement ne sera effectué sauf exception prévue par la loi.
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 3 – PRIX ET PAIEMENT
                </Heading>
                <Text>
                    Les prix indiqués sur le Site sont en euros (€) hors taxes (HT). Le Site se réserve le droit de
                    modifier ses tarifs à tout moment mais le prix appliqué au Client sera celui en vigueur au
                    moment de l’enregistrement de la commande.
                </Text>
                <Text>
                    Le règlement s’effectue en ligne par carte bancaire via le prestataire de paiement sécurisé
                    Stripe. Les données bancaires ne sont ni stockées, ni accessibles par le Site.
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 4 – COMMANDE
                </Heading>
                <Text>
                    Pour souscrire à un service, le Client doit :
                </Text>
                <List.Root as="ol" ps="5">
                    <List.Item>Sélectionner le service souhaité</List.Item>
                    <List.Item>Créer un compte ou se connecter</List.Item>
                    <List.Item>Valider la commande après avoir vérifié son contenu</List.Item>
                    <List.Item>Effectuer le paiement via la plateforme sécurisée <strong>Stripe</strong> </List.Item>
                </List.Root>

                <Text>
                    Toute commande effectuée sur le site suppose l’adhésion aux présentes CGV. Toute
                    confirmation de commande entraîne nécessairement l’adhésion pleine et entière aux
                    présentes Conditions, sans exception ni réserve. L’ensemble des données fournies et la
                    confirmation enregistrée vaudront comme preuve de la transaction. Le Client déclare en
                    avoir parfaite connaissance. La confirmation de commande vaudra pour signature et
                    acceptation des opérations effectuées. Suite au paiement via la plateforme sécurisée,
                    l’Utilisateur recevra un e-mail de confirmation sur l’adresse renseignée dans son profil
                    utilisateur.
                </Text>
                <Text>
                    L’Editeur se réserve le droit d’annuler ou de refuser toute commande pour quelque raison
                    que ce soit, et plus particulièrement, en cas de litige de paiement, suspicion de fraude ou
                    non-respect des présentes CGV.
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 5 – PAIEMENT
                </Heading>
                <Text>
                    Le fait de valider la commande par le Client implique pour lui l&#39;obligation de payer le prix
                    indiqué. Le règlement des achats du Client s&#39;effectue par carte bancaire grâce au système
                    sécurisé Stripe.
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 6 – DROIT DE RÉTRACTATION
                </Heading>
                <Text>
                    Conformément à l’article L.221-28 du Code de la consommation, le droit de rétractation ne
                    s’applique pas aux contenus numériques fournis immédiatement après achat et accessibles
                    en ligne. En validant sa commande, le Client reconnaît donc expressément renoncer à son
                    droit de rétractation.
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 7 – RESPONSABILITÉ
                </Heading>
                <Text>
                    Le Site s’engage à fournir des services conformes à leur description et à la législation en
                    vigueur, mais ne peut être tenu responsable en cas de :
                </Text>
                <List.Root ps="5">
                    <List.Item>Panne ou indisponibilité temporaire du service</List.Item>
                    <List.Item>Perte de données causée par une mauvaise utilisation du service</List.Item>
                    <List.Item>Dommages indirects liés à l’utilisation du Site</List.Item>
                    <List.Item>Circonstance exceptionnelle ou cas de force majeure</List.Item>
                </List.Root>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 8 – DONNÉES PERSONNELLES
                </Heading>
                <Text>
                    Les données personnelles collectées sont traitées conformément à notre <strong>Politique de
                        Confidentialité.</strong>
                </Text>
                <Text>Conformément au RGPD, au règlement européen 2016/679 et à la Loi Informatique et Liberté (Loi 78-17 du 6 janvier 1978), tout utilisateur dispose des droits suivants :</Text>
                <List.Root ps="5">
                    <List.Item>Droit d’accès, rectification et effacement des données</List.Item>
                    <List.Item>Droit à la portabilité des données</List.Item>
                    <List.Item>Droit à la limitation et à l’opposition du traitement des données</List.Item>
                    <List.Item>Droit de déterminer le sort des données après la mort</List.Item>
                    <List.Item>Droit de saisir l’autorité de contrôle compétente.</List.Item>
                </List.Root>
                <Text>
                    L’Utilisateur peut exercer ces droits en nous contactant à  <Link target="_blank" href="mailto:contact@recapeps.fr">contact@recapeps.fr</Link>.
                </Text>
                <Text>Nous l’invitons également à consulter le site cnil.fr pour plus d’informations sur ses droits. </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 9 – PROPRIÉTÉ INTELLECTUELLE
                </Heading>
                <Text>
                    Tous les éléments du Site sont et restent la propriété exclusive de l’Editeur. Nul n’est autorisé
                    à reproduire, exploiter, rediffuser ou utiliser à quelque titre que ce soit, même partiellement,
                    des éléments du Site, quel que soit leur format. Tout lien simple ou par hypertexte vers le site
                    recapeps.fr est autorisé sous réserve qu’il ne porte pas atteinte aux intérêts et à l’image du
                    Site ou de l’Editeur. Toutefois, l&#39;Editeur se réserve le droit de demander la suppression d’un
                    lien qu’il jugerait inapproprié.
                </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 10 – LITIGE
                </Heading>
                <Text>
                    Pour toute réclamation, merci de contacter l’Editeur directement à l’adresse suivante : <Link target="_blank" href="mailto:contact@recapeps.fr">contact@recapeps.fr</Link>.
                </Text>
                <Text>Le Client est informé qu’il peut en tout état de cause faire appel à un médiateur conventionnel de la consommation, après des instance de médiation sectorielles existantes ou à tout autre mode alternatif de règlement des différends comme la conciliation en cas de contestation.</Text>
                <Text>Le Client est également informé qu’il peut s’il le souhaite recourir à la plateforme européenne de Règlement en Ligne des Litiges : <Link href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=FR">https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=FR</Link> </Text>
                <Text>Tous les litiges entre le Client et le vendeur qui n’auraient pas fait l’objet d’un règlement amiable ou par médiation, seront soumis aux tribunaux compétents dans les conditions de droit commun. </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 11 – DROIT APPLICABLE - LANGUE
                </Heading>
                <Text>
                    La langue du présent contrat est la langue française. Les présentes conditions de vente sont
                    soumises à la loi française. En cas de litige, les tribunaux français seront les seuls compétents.
                </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 12 – MODIFICATION DES CGV
                </Heading>
                <Text>
                    L’Editeur se réserve le droit de modifier les présentes CGV à tout moment. Les modifications
                    seront opposables aux Clients après leur mise en ligne.
                </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 13 – CONTACT
                </Heading>
                <Text>
                    Pour toute question relative aux CGV, le Client peut contacter directement l’Editeur à
                    l’adresse suivante : <Link target="_blank" href="mailto:contact@recapeps.fr">contact@recapeps.fr</Link>.
                </Text>
            </VStack>
        </Box>
    );
}
