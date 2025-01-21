import { useEffect, useState } from "react";
import { getSubjects } from "@/api/getSubjects";
import { Subject } from "@/types/Subject";
import {
  Box,
  Card,
  Heading,
  SimpleGrid,
  VStack,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import { Toaster, toaster } from "@/components/ui/toaster"

export default function Home() {
  const [subjects1, setSubjects1] = useState<Subject[]>([]);
  const [subjects2, setSubjects2] = useState<Subject[]>([]);

  useEffect(() => {
    const loadSubjects = async () => {
      const allSubjects = await getSubjects();
      setSubjects1(allSubjects.filter((subject) => subject.evaluation === 1));
      setSubjects2(allSubjects.filter((subject) => subject.evaluation === 2));
      if (allSubjects.length == 0) {
        toaster.create({
          title: "Erreur innatendue",
          description: "Nous rencontrons des difficultés avec notre serveur, veuillez recharger la page",
          type: "error"
        })
      }
    }
    loadSubjects();

  }, []);


  return (
    <Box minH="100vh" py="8" px="6">
      <Toaster />
      <VStack gap="6" textAlign="center" mb="12">
        <Heading size="2xl" color="blue.500">
          Recherchez un sujet, un examen ou un domaine d'étude.
        </Heading>
        <InputGroup flex="1" endElement={<FaSearch size="24" />}>
          <Input placeholder="Tapez votre recherche ici..." />
        </InputGroup>
      </VStack>

      <Box mb="12">
        <Heading size="xl" mb="4" color="blue.600">
          Écrit 1
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="6">
          {subjects1.map(({ id, name, image }) => (
            <ExamCard
              key={id}
              id={id}
              name={name}
              image={image}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading size="xl" mb="4" color="blue.600">
          Écrit 2
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="6">
          {subjects2.map(({ id, name, image }) => (
            <ExamCard
              key={id}
              id={id}
              name={name}
              image={image}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box >
  );
}

function ExamCard({
  id,
  name,
  image,
}: {
  id: string;
  name: string;
  image: string;
}) {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
      <Image src={image} alt={name} h="200px" w="full" />
      <Card.Body gap="2" p="4">
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Footer gap="2" p="4">
        <Button variant="solid" colorScheme="blue">
          <Link to={`/quizz/${id}`}>Voir plus</Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
