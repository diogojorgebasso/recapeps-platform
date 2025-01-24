import { useEffect, useState } from "react";
import { Box, Text, Heading, Table } from "@chakra-ui/react";
import { HeaderNotes, Section, Sommaire, CTA } from "./formatter";
import { getBlogPage } from "@/api/getBlogPage";
import { useParams } from "react-router";

export default function DynamicPage() {
    const { subject } = useParams();
    const [pageData, setPageData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPage() {
            try {
                if (subject) {
                    const data = await getBlogPage(subject);
                    setPageData(data);
                } else {
                    setError("Subject is not defined.");
                }
            } catch (err) {
                setError("Erro ao carregar a página.");
            } finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [subject]);

    if (loading) return <Box>Chargement...</Box>;
    if (error) return <Box color="red.500">{error}</Box>;
    if (!pageData) return <Box>Page non trouvé.</Box>;

    return (
        <Box p={4}>
            {/* Header */}
            <HeaderNotes
                title={pageData.title}
                exam={pageData.exam}
                item={pageData.item}
            />

            {/* Sommaire */}
            <Sommaire />

            {/* Sections */}
            {pageData.content.sections.map((section: any, index: number) => (
                <Section key={index} title={section.title}>
                    {/* Renderiza conteúdo da seção */}
                    {section.content.map((item: any, contentIndex: number) => {
                        if (item.points) {
                            return (
                                <Box key={contentIndex} mb={4}>
                                    {item.heading && (
                                        <Heading as="h3" size="md" mb={2}>
                                            {item.heading}
                                        </Heading>
                                    )}
                                    <Box as="ul" gap={2}>
                                        {item.points.map((point: string, pointIndex: number) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </Box>
                                    {item.text && (
                                        <Text mt={2}>
                                            {item.text}{" "}
                                            {item.citation && (
                                                <Text as="span" fontStyle="italic">
                                                    ({item.citation})
                                                </Text>
                                            )}
                                        </Text>
                                    )}
                                </Box>
                            );
                        } else if (item.text && item.citation) {
                            // Renderiza texto com citação
                            return (
                                <Text key={contentIndex} mb={4}>
                                    {item.text}{" "}
                                    <Text as="span" fontStyle="italic">
                                        ({item.citation})
                                    </Text>
                                </Text>
                            );
                        } else if (item.text) {
                            // Renderiza texto simples
                            return (
                                <Text key={contentIndex} mb={4}>
                                    {item.text}
                                </Text>
                            );
                        }
                        return null;
                    })}

                    {/* Renderiza tabela, se existir */}
                    {section.table && (
                        <Table.Root mt={4}>
                            <Table.Header>
                                <Table.Row>
                                    {section.table.headers.map((header: string, idx: number) => (
                                        <Table.ColumnHeader key={idx}>{header}</Table.ColumnHeader>
                                    ))}
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {section.table.rows.map((row: { [key: string]: string }, rowIndex: number) => (
                                    <Table.Row key={rowIndex}>
                                        {Object.values(row).map((cell: string, cellIndex: number) => (
                                            <Table.Cell key={cellIndex}>{cell}</Table.Cell>
                                        ))}
                                    </Table.Row>
                                ))}
                            </Table.Body>
                            <Table.Footer>
                                <Table.Row>
                                    <Table.Cell colSpan={section.table.headers.length}>
                                        <Text textAlign="center" fontStyle="italic">
                                            {section.table.footer || "Table Example"}
                                        </Text>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Footer>
                        </Table.Root>
                    )}
                </Section>
            ))}

            {/* Call To Action */}
            <CTA linkTo={pageData.ctaLink} />
        </Box>
    );
}
