import { Box, Heading, Link, List, Text, VStack, Center, Button } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";
import { useSectionContext } from "@/hooks/useSection";
import { Link as LinkNavegation } from "react-router";

interface HeaderProps {
    title: string;
    exam: string;
    item: string;
    gradientFrom?: string;
    gradientTo?: string;
}

export function HeaderNotes({ title, exam, item, gradientFrom = "blue.500", gradientTo = "red.400" }: HeaderProps) {
    return (
        <Box
            bgGradient="to-r" gradientFrom={gradientFrom} gradientTo={gradientTo}
            color="white"
            p={6}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Box>
                <Heading size="lg" fontWeight="bold">
                    {title}
                </Heading>
                <Text>Epreuve : {exam}</Text>
                <Text>ITEM: {item} </Text>
            </Box>
        </Box>
    );
}

interface SectionProps {
    title: string;
    children: ReactNode;
    bgColor?: string;
}

export function Section({ title, children, bgColor = "blue.400" }: SectionProps) {
    const { registerSection } = useSectionContext();
    const sectionRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        registerSection(title, title, sectionRef);
    }, []);

    return (
        <Box as="section" ref={sectionRef} p={4} rounded="lg" shadow="md" id={title}>
            <Heading
                as="h2"
                bg={bgColor}
                fontSize="xl"
                fontWeight="bold"
                mb={4}
                p={2}
                rounded="md"
            >
                {title}
            </Heading>
            <Box>
                {children}
            </Box>
        </Box>
    );
}

export function Sommaire() {
    const { sections } = useSectionContext();

    console.log(sections)
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box as="nav" p={4} bg="gray.100" rounded="md" shadow="sm">
            <Heading as="h3" fontSize="lg" mb={4}>
                Sommaire
            </Heading>
            <List.Root m={0} p={0}>
                {sections.map(({ id, title, ref }) => (
                    <List.Item key={id} mb={2}>
                        <Link onClick={() => scrollToSection(ref)}>
                            {title}
                        </Link>
                    </List.Item>
                ))}
            </List.Root>
        </Box>
    );
}

export function CTA({ linkTo }: { linkTo: string }) {
    return (
        <Center p="4">
            <VStack gap="6" textAlign="center">
                <Heading as="h1" size="2xl" >
                    🌟 Prêt à tester vos connaissances ? 🌟
                </Heading>
                <Text fontSize="lg" >
                    Vous avez lu le matériel avec attention, et c'est maintenant le moment idéal pour passer à l'action ! 💡 Faites notre{" "}
                    <Text as="span" fontWeight="bold" color="blue.600">
                        quiz interactif
                    </Text>{" "}
                    pour mettre à l’épreuve ce que vous avez appris.
                </Text>
                <Box>
                    <Text fontSize="md" mb="4">
                        🎯 <strong>Pourquoi essayer ?</strong>
                    </Text>
                    <VStack align="start" gap="2" pl="6" >
                        <Text>✔️ Vérifiez votre compréhension.</Text>
                        <Text>✔️ Identifiez vos points forts et les notions à approfondir.</Text>
                        <Text>✔️ Amusez-vous tout en apprenant !</Text>
                    </VStack>
                </Box>
                <Text fontSize="lg">
                    👉{" "}
                    <Text as="span" fontWeight="bold" color="blue.600">
                        Un défi rapide et ludique vous attend !
                    </Text>{" "}
                    Alors, êtes-vous prêt à relever le défi ?
                </Text>
                <Button asChild colorScheme="blue" size="lg">
                    <LinkNavegation to={linkTo}>Faire le Quizz</LinkNavegation>
                </Button>
            </VStack>
        </Center>)
}