import {
    Button, Input,
    Text, Container, VStack, Heading,
    Box, HStack, Card, InputGroup
} from "@chakra-ui/react";

import { getAllOral } from "@/api/getAllOral";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import { Toaster, toaster } from "@/components/ui/toaster"

export default function Oral() {
    const [oral, setOral] = useState([]);
    const [searchText, setSearchText] = useState("");
    const router = useParams();

    useEffect(() => {
        getAllOral().then(data => setOral(data));
    }, []);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const goToRandomOral = () => {
        if (oral.length === 0) {
            toaster.create({
                title: "Aucun oral disponible",
                type: "warning",
                duration: 3000,
            });
            return;
        }

        const randomIndex = Math.floor(Math.random() * oral.length);
        const randomOral = oral[randomIndex];
        router.push(`/oral/${randomOral.id}`);
    };

    const filteredOral = searchText.trim()
        ? oral.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        )
        : oral;

    return (
        <Container maxW="container.lg" py={8}>
            <VStack gap={8} align="stretch">
                <Box textAlign="center">
                    <Heading as="h1" size="xl" mb={2}>Entraine-toi à l'Oral 3</Heading>
                    <Text fontSize="md" color="gray.600">
                        Nous enregistrerons jusqu'à les trois premières minutes de ton enregistrement.
                    </Text>
                </Box>
                <Toaster />

                <HStack gap={4} justify="space-between">
                    <Button colorScheme="blue" onClick={goToRandomOral}>
                        Aléatoire
                    </Button>

                    <InputGroup startElement={<FaSearch color="gray.400" />} maxW="md">
                        <Input
                            placeholder="Rechercher un oral"
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </InputGroup>
                </HStack>

                <VStack gap={4} align="stretch">
                    {filteredOral.map((item) => (
                        <Card.Root key={item.id} variant="outline" _hover={{ shadow: "md" }}
                            cursor="pointer" onClick={() => router.push(`/oral/${item.id}`)}>
                            <Card.Body>
                                <Heading size="md">{item.title}</Heading>
                            </Card.Body>
                        </Card.Root>
                    ))}
                </VStack>
            </VStack>
        </Container >
    );
}