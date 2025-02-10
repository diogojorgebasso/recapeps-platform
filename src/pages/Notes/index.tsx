import { useEffect, useState } from "react";
import { getNotes } from "@/api/getSubjects";
import { SubjectNote } from "@/types/Subject";
import {
    Box,
    Card,
    Heading,
    SimpleGrid,
    Image,
    Button,
    Link
} from "@chakra-ui/react";
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
import { addQuestionsToFirestore } from "@/api/boilerPlateQuizzes";

export default function Home() {
    const [subjects1, setSubjects1] = useState<SubjectNote[]>([]);
    const [subjects2, setSubjects2] = useState<SubjectNote[]>([]);
    const { isSubscribed } = useSubscription();
    useEffect(() => {
        const loadSubjects = async () => {
            const allSubjects = await getNotes();
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
                <Button onClick={addQuestionsToFirestore}>Add Quiz</Button>
                <SimpleGrid columns={[1, 2, 3]} gap="6">
                    {subjects1.map(({ id, name, image, premium, link }) => (
                        <ExamCard
                            key={id}
                            name={name}
                            image={image}
                            premium={premium}
                            isUserPremium={isSubscribed}
                            vers={link}
                        />
                    ))}
                </SimpleGrid>
            </Box>

            <Box>
                <Heading size="xl" mb="4" color="blue.600">
                    Écrit 2
                </Heading>
                <SimpleGrid columns={[1, 2, 3]} gap="6">
                    {subjects2.map(({ id, name, image, premium, link }) => (
                        <ExamCard
                            key={id}
                            name={name}
                            image={image}
                            premium={premium}
                            isUserPremium={isSubscribed}
                            vers={link}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Box >
    );
}


function ExamCard({
    name,
    image,
    premium,
    isUserPremium,
    vers
}: {
    name: string;
    image: string;
    premium: boolean;
    isUserPremium: boolean;
    vers: string;
}) {
    if (isUserPremium) {
        return (
            <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
                <Image src={image} alt={name} maxH="200px" w="100%" />
                <Card.Body gap="2" p="4">
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Footer gap="2" p="4">
                    <Button variant="solid" colorScheme="blue" asChild>
                        <a target="_blank" href={vers}>Voir plus</a>
                    </Button>
                </Card.Footer>
            </Card.Root>
        );
    }
    else {
        return (
            <Card.Root maxW="sm" overflow="hidden" borderWidth="1px" borderRadius="lg" shadow="md">
                <Image src={image} alt={name} />
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
                                    <DialogTitle>Passer à Recap’eps pro?
                                    </DialogTitle>
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
                                    <Button>
                                        <Link href="/checkout">Oui par pitié</Link>
                                    </Button>
                                </DialogFooter>
                                <DialogCloseTrigger />
                            </DialogContent>
                        </DialogRoot>
                        :
                        <Button variant="solid" colorScheme="blue" asChild>
                            <a target="_blank" href={vers}>Voir plus</a>
                        </Button>}
                </Card.Footer>
            </Card.Root>
        );
    }
}
