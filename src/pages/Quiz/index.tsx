import { useEffect, useState } from "react";
import { getSubjects } from "@/api/getSubjects";
import { Subject } from "@/types/Subject";
import {
  Box,
  Card,
  Heading,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { Toaster, toaster } from "@/components/ui/toaster"

export default function Home() {
  const [subjects1, setSubjects1] = useState<Subject[]>([]);
  const [subjects2, setSubjects2] = useState<Subject[]>([]);

  useEffect(() => {
    const loadSubjects = async () => {
      const allSubjects = await getSubjects();
      console.log(allSubjects)
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
    <Box>
      <Toaster />

      <Box mb="12">
        <Heading size="xl" mb="4" color="blue.600">
          Écrit 1
        </Heading>
        <SimpleGrid minChildWidth="sm" gap="6">
          {subjects1.map(({ id, name, image, premium }) => (
            <ExamCard
              key={id}
              id={id}
              name={name}
              image={image}
              premium={premium}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading size="xl" mb="4" color="blue.600">
          Écrit 2
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="6">
          {subjects2.map(({ id, name, image, premium }) => (
            <ExamCard
              key={id}
              id={id}
              name={name}
              image={image}
              premium={premium}
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
  premium = false,
}: {
  id: string;
  name: string;
  image: string;
  premium?: boolean;
}) {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
      <Image src={image} alt={name} h="200px" w="full" />
      <Card.Body gap="2" p="4">
        <Card.Title>{name} {premium ? "🔒" : ""}</Card.Title>
      </Card.Body>
      <Card.Footer gap="2" p="4">
        <Button variant="solid" colorScheme="blue">
          <Link to={`/quiz/${id}`}>Voir plus</Link>
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
