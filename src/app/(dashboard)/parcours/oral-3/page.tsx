import Link from "next/link";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { subjects } from "./subjects";
import { subjects2 } from "./subjects2";
import type { IconType } from "react-icons";
import { useAuth } from "@/contexts/Auth";

/**
 * A single exam card.
 * Displays either an icon (preferred) or an image fallback.
 */
function ExamCard({
    id,
    name,
    icon,
    premium,
    isUserPro,
}: {
    id: string;
    name: string;
    icon?: IconType;
    premium: boolean;
    isUserPro: boolean;
}) {
    const blocked = premium && !isUserPro;

    return (
        <Card.Root
            role="group"
            borderWidth="1px"
            shadow="sm"
            rounded="lg"
            overflow="hidden"
            position="relative"
            _hover={{ shadow: "md", transform: "translateY(-2px)", transition: "all 0.15s" }}
        >
            <Flex
                align="center"
                justify="center"
                pt={8}
                pb={4}
                color={blocked ? "gray.400" : "blue.500"}
                _groupHover={{ color: blocked ? "gray.400" : "blue.600" }}
            >
                {icon && <Icon as={icon} boxSize={16} />}
            </Flex>

            <CardBody textAlign="center" px={4} pb={blocked ? 2 : 4}>
                <Heading as="h3" size="md">
                    {name}
                </Heading>
                {blocked && (
                    <Text mt={1} fontSize="sm" color="gray.500">
                        Contenu réservé aux membres&nbsp;Pro
                    </Text>
                )}
            </CardBody>

            <CardFooter justifyContent="center" py={4}>
                {blocked ? (
                    <Button asChild size="sm" variant="solid">
                        <Link href="/abonnement">
                            Passer à Pro
                        </Link>
                    </Button>
                ) : (
                    <Button
                        size="sm"
                        variant="outline"
                        asChild
                    >
                        <Link href={`/parcours/oral-3/${id}`}>
                            Voir plus
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card.Root>
    );
}

export default function Page() {
    const { pro } = useAuth();

    return (
        <Box px={{ base: 4, md: 8 }} py={8}>
            <Heading as="h1" size="xl" mb={2}>
                Oral&nbsp;3
            </Heading>
            <Text mb={8} fontSize="lg" color="gray.600">
                Choisissez un thème pour commencer votre préparation.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
                {subjects.map(({ id, name, icon, premium }) => (
                    <ExamCard
                        key={id}
                        id={id}
                        name={name}
                        icon={icon as IconType}
                        premium={premium}
                        isUserPro={pro}
                    />
                ))}
            </SimpleGrid>
            <Heading>Fiches de révision</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6} mt={4}>
                {subjects2.map(({ id, name, icon, premium }) => (
                    <ExamCard
                        key={id}
                        id={id}
                        name={name}
                        icon={icon as IconType}
                        premium={premium}
                        isUserPro={pro}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
}
