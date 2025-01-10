import { useEffect, useState } from "react";
import { fetchSubjects } from "@/api/getQuizzesFromFirebase";
import { Subject } from "@/types/Quizz";
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
import { SearchIcon } from "lucide-react";
import { Link } from "react-router";
import { Rating } from "@/components/ui/rating";

export default function Home() {
  const [subjects1, setSubjects1] = useState<Subject[]>([]);
  const [subjects2, setSubjects2] = useState<Subject[]>([]);

  useEffect(() => {
    const loadSubjects = async () => {
      const allSubjects = await fetchSubjects("ecrit-1");
      setSubjects1(allSubjects);
      const allSubjects2 = await fetchSubjects("ecrit-2");
      setSubjects2(allSubjects2);
    };
    loadSubjects();
  }, []);

  return (
    <Box minH="100vh" py="8" px="6">
      {/* Barra de busca */}
      <VStack gap="6" textAlign="center" mb="12">
        <Heading size="2xl" color="blue.500">
          Recherchez un sujet, un examen ou un domaine d'étude.
        </Heading>
        <InputGroup flex="1" endElement={<SearchIcon size="24" />}>
          <Input placeholder="Tapez votre recherche ici..." />
        </InputGroup>
      </VStack>

      {/* Cards de Écrit 1 */}
      <Box mb="12">
        <Heading size="xl" mb="4" color="blue.600">
          Écrit 1
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="6">
          {subjects1.map((subject) => (
            <ExamCard
              key={subject.id}
              link={`/quizz/ecrit-1/${subject.id}`}
              title={subject.name}
              image={subject.image}
              description={subject.description}
              note={subject.note} // Substitua com a nota ou outra métrica do `subject`
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Cards de Écrit 2 */}
      <Box>
        <Heading size="xl" mb="4" color="blue.600">
          Écrit 2
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="6">
          {subjects2.map((subject) => (
            <ExamCard
              key={subject.id}
              link={`/quizz/ecrit-2/${subject.id}`}
              title={subject.name}
              image="/placeholder.jpg" // Adicione uma imagem padrão ou use subject.image se disponível
              description="Description indisponible pour le moment."
              note={4} // Substitua com a nota ou outra métrica do `subject`
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

// Componente de card para os exames
function ExamCard({
  title,
  image,
  description,
  note,
  link,
}: {
  title: string;
  image: string;
  description: string;
  note: number;
  link: string;
}) {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
      <Image src={image} alt={title} h="200px" w="full" />
      <Card.Body gap="2" p="4">
        <Card.Title>{title}</Card.Title>
        <Rating allowHalf readOnly defaultValue={note} size="md" />
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2" p="4">
        <Button variant="solid" colorScheme="blue">
          <Link to={link}>Voir plus</Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
