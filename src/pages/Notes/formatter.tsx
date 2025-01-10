import { Box, Heading, Link, List, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";
import { useSectionContext } from "@/hooks/useSection";

interface HeaderProps {
    title: string;
    exam: string;
    item: string;
    gradientFrom: string;
    gradientTo: string;
}

export function HeaderNotes({ title, exam, item, gradientFrom, gradientTo }: HeaderProps) {
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
    bgColor: string;
}

export function Section({ title, children, bgColor }: SectionProps) {
    const { registerSection } = useSectionContext();
    const sectionRef = useRef<HTMLDivElement>(null);

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
            <Box color="gray.700">
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
