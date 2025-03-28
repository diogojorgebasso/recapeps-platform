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
  Text
} from "@chakra-ui/react";
import { Link } from "react-router";
import { Toaster, toaster } from "@/components/ui/toaster"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useSubscription } from "@/hooks/useSubscription";

export default function Home() {
  const [subjects1, setSubjects1] = useState<Subject[]>([]);
  const [subjects2, setSubjects2] = useState<Subject[]>([]);
  const { isSubscribed } = useSubscription();

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
    <Box>
      <Toaster />

      <Box mb="12">
        <Heading size="xl" color="blue.600">
          Écrit 1
        </Heading>
        <Text mb="4" fontWeight="bold" >Confronte toi à différents niveaux de difficulté pour évaluer et approfondir tes connaissances.</Text>
        <SimpleGrid minChildWidth="sm" gap="6">
          {subjects1.map(({ id, name, image, premium }) => (
            <ExamCard
              key={id}
              id={id}
              name={name}
              image={image}
              premium={premium}
              isUserPremium={isSubscribed}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading size="xl" color="blue.600">
          Écrit 2
        </Heading>
        <Text mb="4" fontWeight="bold" >Teste immédiatement tes connaissances pour t’assurer d’avoir bien assimilé les concepts clés.</Text>
        <SimpleGrid columns={[1, 2, 3]} gap="6">
          {subjects2.map(({ id, name, image, premium }) => (
            <ExamCard
              key={id}
              id={id}
              name={name}
              image={image}
              premium={premium}
              isUserPremium={isSubscribed}
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
  premium,
  isUserPremium
}: {
  id: string;
  name: string;
  image: string;
  premium: boolean;
  isUserPremium: boolean;
}) {
  if (isUserPremium) {
    return (
      <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
        <Image src={image} alt={name} h="200px" w="full" />
        <Card.Body gap="2" p="4">
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Footer gap="2" p="4">
          <Button variant="solid" colorPalette="orange.500">
            <Link to={`/quiz/${id}`}>Voir plus</Link>
          </Button>
        </Card.Footer>
      </Card.Root>
    );
  }
  else {
    return (
      <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
        <Image src={image} alt={name} h="200px" w="full" />
        <Card.Body gap="2" p="4">
          <Card.Title>{name} {premium ? "🔒" : ""}</Card.Title>
        </Card.Body>
        <Card.Footer gap="2" p="4">
          {premium ?
            <DialogRoot>
              <DialogTrigger asChild>
                <Button size="sm">
                  Voir plus
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Passer à Recap’eps pro?</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <p>
                    Tu apprécies le contenu que nous te proposons mais tu restes sur ta faim? Tu  aimerai accéder à tout le contenu que nous t’avons concocté? Alors n’hésite plus et passe à Recap’eps pro ! 🎯
                  </p>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Non, merci</Button>
                  </DialogActionTrigger>
                  <Button variant="solid">
                    <Link to="/checkout">Oui par pitié</Link>
                  </Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
            :
            <Button variant="solid" colorPalette="orange.500">
              <Link to={`/quiz/${id}`}>Voir plus</Link>
            </Button>}
        </Card.Footer>
      </Card.Root>
    );
  }
}
