import { Box, Table } from "@chakra-ui/react"
import { CTA, HeaderNotes, Section, Sommaire } from "../formatter"

export default function SportScolaire() {
    return (
        <Box>
            <HeaderNotes
                title="Sport Scolaire"
                exam="Ecrit 1"
                item="Transmettre et adapter"
            />
            <Sommaire />
            <Section title="I. Acroche">
                Le sport scolaire est le trait d’union entre la culture sportive développée dans la société française et le milieu scolaire ⟶ pose le problème de l’orthodoxie scolaire au regard de la culture, les valeurs et des transformations associées.
                « La spécificité́ du sport scolaire tient à cette double situation, celle de l’ancrage dans le monde éducatif, celle de l’appartenance potentielle au monde sportif » (Delaplace, 1989).

            </Section>

            <Section title="II. Les enjeux du sport scolaire">
                <Table.Root>
                    {/* Cabeçalho */}
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>1918 - 1962</Table.ColumnHeader>
                            <Table.ColumnHeader>1962 - 1981</Table.ColumnHeader>
                            <Table.ColumnHeader>1981 - 2025</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>

                    {/* Corpo da tabela */}
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                L’AS a une place importante, elle gagne en renommée et en notoriété avec sa vision élitiste.
                            </Table.Cell>
                            <Table.Cell>
                                L’AS occupe à nouveau une place importante, mais son rôle est différent : il est plus éducatif et moins sportif. On a donc une place qui devient complémentaire à l’EPS.
                            </Table.Cell>
                            <Table.Cell>
                                L’AS trouve une place affirmée dans le projet d’établissement, et participe ainsi à la vie scolaire des élèves.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Freins au développement du sport scolaire : Critique des valeurs ludiques et de divertissement + accès réservé à l’élite.
                            </Table.Cell>
                            <Table.Cell>
                                L’AS en difficulté : trop cher par rapport au nombre de licenciés, ce qui entraîne une baisse d’effectif et une place qui tend à se retirer.
                            </Table.Cell>
                            <Table.Cell>
                                L’AS a du mal à recruter des élèves, sa place n’est pas la même selon les publics et les établissements, de même que son rôle, place toujours bancale.
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Section>
            <CTA linkTo="quizz/ecrit-1/sport-scolaire" />
        </Box>
    )
}