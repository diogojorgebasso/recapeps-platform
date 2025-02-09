import { Box, Heading, Link, List, Text, VStack } from "@chakra-ui/react";

export default function PolitiqueConfidentialite() {
    return (
        <Box p={8} mx="auto" borderRadius="xl">
            <VStack align="start" gap={6}>
                <Heading as="h1" size="2xl" color="orange.600">
                    Politique de Confidentialité
                </Heading>
                <Text fontSize="lg" fontWeight="semibold">
                    En vigueur au 09/02/2025
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 1 - Introduction
                </Heading>
                <Text>
                    La présente Politique de Confidentialité vise à informer les utilisateurs de <strong>recapeps.fr</strong>(ci -
                    après le <strong>&quot;Site&quot;</strong>) de la manière dont sont collectées, utilisées et protégées leurs données
                    personnelles.Nous invitons l'Utilisateur à prendre connaissance de la présente politique de
                    confidentialité de manière régulière, celle - ci pouvant être amenée à changer.Nous nous
                    engageons à respecter la confidentialité et la protection des données conformément
                    au <strong>Règlement Général sur la Protection des Données(RGPD)</strong>.<br />
                    Par la suite, sont considérées comme données personnelles toute information permettant
                    d'identifier un Utilisateur.Il peut s'agir de ses noms et prénoms, âge, adresse postale ou
                    électronique, de sa localisation ou encore de son adresse IP(liste non - exhaustive)
                    Toute personne physique se connectant ou utilisant le Site reconnaît expressément avoir pris
                    connaissance de notre politique de confidentialité et de protection des données
                    personnelles.

                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 2 - Principes relatifs à la collecte et au traitement
                    des données personnelles
                </Heading>
                <Text>
                    Conformément à l'article 5 du Règlement européen 2016 / 679, les données à caractère
                    personnel sont:<br /><br />
                    <List.Root ps="5">
                        <List.Item>
                            Obtenues et traitées de manière parfaitement loyale et licite.
                        </List.Item>
                        <List.Item>
                            Enregistrées à des fins légitimes et strictement délimitées, adéquates, pertinentes et non excessives au regard du but animant le Site</List.Item>
                        <List.Item>Exactes et, si nécessaire tenues à jour.Toutes les mesures raisonnables doivent être
                            prises pour que les données à caractère personnel qui sont inexactes, eu égard aux
                            finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder.</List.Item>
                        <List.Item> Conservées sous une forme permettant l &#39;identification des personnes concernées.</List.Item>
                        <List.Item>Exploitées de manière précautionneuses afin d’assurer une sécurité appropriée des
                            données collectées et une confidentialité destinées à empêcher toute modification,
                            destruction, dommage ou communication à des tiers non autorisés.
                        </List.Item>
                    </List.Root>
                </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 3 - Données collectées
                </Heading>
                <Text>
                    Nous collectons différentes catégories de données pour le bon fonctionnement du Site:
                </Text>
                <List.Root as="ol">
                    <List.Item as="h3" fontWeight="bold"> Données fournies par l &#39; utilisateur</List.Item>
                    Lorsque vous créez un compte ou utilisez nos services, nous pouvons collecter: <br />
                    <List.Root ps="5">
                        <List.Item>Nom et prénom(si renseignés)</List.Item>
                        <List.Item>Adresse e - mail </List.Item>
                        <List.Item> Mot de passe(chiffré et non visible par nous)</List.Item>
                        <List.Item> Photo de profil(si renseignée)</List.Item>
                        <List.Item> Informations de paiement(via un prestataire sécurisé si vous souscrivez à un
                            abonnement)</List.Item>
                    </List.Root>
                    <List.Item as="h3" fontWeight="bold">
                        Données collectées automatiquement
                    </List.Item>
                    <Text>
                        Lors de votre utilisation du site, nous collectons automatiquement certaines informations
                        via <strong>Firebase(Google):</strong><br />
                        <List.Root ps="5">
                            <List.Item>
                                Adresse IP
                            </List.Item>
                            <List.Item>
                                Type de navigateur et appareil utilisé
                            </List.Item>
                            <List.Item>
                                Données de navigation(pages visitées, temps passé sur le site)
                            </List.Item>
                            <List.Item>
                                Données analytiques(via Firebase Analytics)
                            </List.Item>
                        </List.Root>
                    </Text>
                    <List.Item as="h3" fontWeight="bold">
                        Hébergement des données
                    </List.Item>
                    <Text>
                        Le site recapeps.fr est hébergé par: <br />
                        Firebase Hosting par Google <br />
                        Google LLC, 1600 Amphitheatre Parkway, Mountain View, California 94043 USA
                    </Text>
                </List.Root>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 4 – Finalité de la collecte

                </Heading>
                <Text>
                    L’ensemble des données récoltées(décrites dans l’article 3) ont pour but:<br />
                    <List.Root ps="5">
                        <List.Item>
                            De permettre la gestion du compte de l’Utilisateur et son accès au service</List.Item>
                        <List.Item>
                            D’améliorer le contenu et l’expérience de l’Utilisateur
                        </List.Item>
                        <List.Item>
                            D’adresser à l’Utilisateur des publications éventuelles à propos du Site
                        </List.Item>
                    </List.Root>
                    <br />
                    <Text>
                        La collecte et le traitement des données sont fondés sur différentes bases légales selon la
                        finalité poursuivie:
                    </Text>
                    <br />
                    <List.Root ps="5">
                        <List.Item>
                            L’exécution d’un contrat(gestion du compte Utilisateur et abonnement).
                        </List.Item>
                        <List.Item>
                            Le respect d’une obligation légale(conservation des transactions financières).
                        </List.Item>
                        <List.Item>Le consentement de l’Utilisateur(envoi de communications marketing et cookies
                            analytiques).
                        </List.Item>
                    </List.Root>
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 5 - Destinataire des données

                </Heading>
                <Text>
                    Les données collectées visent à améliorer l’expérience de l’utilisateur et ne seront en aucun
                    cas vendues ou louées à des tiers.<br />
                    Nous pouvons partager vos données uniquement dans les cas suivants:<br />
                </Text>
                <List.Root>
                    <List.Item><strong>Avec Firebase(Google) </strong>pour l’hébergement et l’analyse du site</List.Item>
                    <List.Item><strong>Avec un prestataire de paiement sécurisé </strong> pour la souscription à un abonnement</List.Item>
                    <List.Item><strong>Avec les autorités compétentes si requis par la loi ou une autorité judiciaire</strong></List.Item>.
                </List.Root>
                <Text>
                    Google Firebase agit comme un sous - traitant et n &#39;exploite pas commercialement les
                    données collectées.La politique de Google est disponible à l’adresse
                    suivante: <Link href="https://firebase.google.com/support/privacy">https://firebase.google.com/support/privacy</Link>
                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 6 – Stockage et sécurité

                </Heading>
                <Text>
                    Les données sont stockées sur les serveurs sécurisés de <strong>Google Firebase</strong>, qui peuvent être
                    situés en dehors de l'Union européenne(ex : États - Unis).
                    Google assure un niveau de protection conforme au RGPD, notamment via des clauses
                    contractuelles types et des mesures de sécurité avancées.
                    Des mesures techniques et organisationnelles sont en place pour protéger au mieux les
                    données des utilisateurs:
                    <List.Root ps="5">
                        <List.Item>Chiffrement des bases de données</List.Item>
                        <List.Item>Règles d’accès strictes à Firebase</List.Item>
                        <List.Item>Authentification sécurisée des utilisateurs</List.Item>
                    </List.Root>
                    Conformément à l’article 32, 8° de la loi n°78 - 17 du 6 janvier 2018 « relative à l &#39; informatique,
                    aux fichiers et aux libertés », les données personnelles ne seront conservées que pour la
                    durée nécessaire à la réalisation des finalités définies à l’article 4 de la Présente sur le Site
                    et ne dépassera pas en tout état de cause la durée de l’inscription sur le Site.<br />
                    Par conséquent, les données de compte utilisateurs seront gardées jusqu’à suppression du
                    compte utilisateur ou sur demande explicite de l’utilisateur, les données de paiement seront
                    conservées 5 ans conformément aux obligations comptables et les données analytiques
                    seront conservées pour une durée de 13 mois maximum.

                </Text>

                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 7 - Cookies et suivi

                </Heading>
                <Text>
                    Le Site utilise différents types de cookies afin d’assurer à l’Utilisateur une expérience
                    optimale.Ces cookies sont les suivants: <br />
                    <List.Root ps="5">
                        <List.Item>
                            Cookies de session: automatiquement supprimés à la fermeture de la page
                        </List.Item>
                        <List.Item>
                            Google Analytics: permettent d’analyser l’utilisation du Site.Google peut
                            communiquer ces informations à des tiers en cas d’obligation légale ou lorsque des
                            tiers traitent ces données pour le compte de Google, et ce dans le respect des
                            obligations légales en vigueur.Il faut noter que Google Analytics saisit les
                            informations de manière anonyme ce qui implique qu’aucune donnée analysée par
                            Google Analytics ne permette d’identifier directement l’Utilisateur.
                        </List.Item>
                    </List.Root>
                    L’Utilisateur peut gérer ses préférences en termes de cookies via la bannière de
                    consentement affichée lors de sa première visite ou en modifiant les paramètres de son
                    navigateur.
                </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 8 – Droits
                </Heading>
                <Text>
                    Conformément au RGPD, au règlement européen 2016 / 679 et à la Loi Informatique et
                    Liberté(Loi 78 - 17 du 6 janvier 1978), tout utilisateur dispose des droits suivants: <br />
                    <List.Root ps="5">
                        <List.Item>
                            Droit d’accès, rectification et effacement des données
                        </List.Item>
                        <List.Item>
                            Droit à la portabilité des données
                        </List.Item>
                        <List.Item>Droit à la limitation et à l’opposition du traitement des données</List.Item>
                        <List.Item>Droit de déterminer le sort des données après la mort</List.Item>
                        <List.Item>Droit de saisir l’autorité de contrôle compétente.</List.Item>
                    </List.Root>
                    L’Utilisateur peut exercer ces droits en nous contactant à <Link target="_blank" href="mailto:contact@recapeps.fr">contact@recapeps.fr</Link>. <br />

                    Il peut également recourir à la plateforme de règlement des litiges en ligne de l’UE: <Link target="_blank" href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</Link>.
                </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 9 - Acceptation

                </Heading>
                <Text>
                    L’Editeur du Site se réserve le droit de modifier cette Politique de Confidentialité.En cas de
                    modification majeure, il en informera tous les utilisateurs via email ou notification sur le site.
                    Les éventuelles modifications ne sauraient avoir d’incidence sur des achats antérieurement
                    effectués, lesquels restent soumis à la Politique en vigueur au moment de l’achat.<br />
                    L’Utilisateur reconnaît avoir lu la présente politique de confidentialité et de protection des
                    données et qu’il en saisit la teneur.Il accepte ainsi en connaissance de cause les termes et
                    conditions décrites dans la présente Politique
                </Text>
                <Heading as="h2" size="lg" mt={4} color="orange.500">
                    ARTICLE 10 - Contact
                </Heading>
                <Text>

                    Pour toute question sur cette Politique ou pour exercer vos droits, vous pouvez nous
                    contacter à l’adresse suivante: <Link target="_blank" href="mailto:contact@recapeps.fr">contact@recapeps.fr</Link> ou en adressant une demande écrite

                    claire, précise et justifiée accompagnée d’une copie de carte d’identité valide à l’adresse
                    suivante: 21 rue des Griottes, 68420 Voegtlinshoffen.
                </Text>
            </VStack>
        </Box >
    );
}