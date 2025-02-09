import {
  VStack, IconButton, Text, Group,
  AspectRatio
} from "@chakra-ui/react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { SidebarItems } from "./SidebarItems";
import { MenuRoot, MenuTrigger, MenuContent, MenuSeparator, MenuItem, MenuItemGroup } from "../ui/menu";
import { useState } from "react";
import {
  LuSparkles,
  LuBadge,
  LuBell,
  LuLogOut,
  LuUser,
  LuInbox,
  LuNotebookPen,
  LuListTodo
} from "react-icons/lu";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  PopoverTitle
} from "@/components/ui/popover"
import { FiBookOpen } from "react-icons/fi";
import {
  StepsCompletedContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/ui/steps"
import { useAuth } from "@/hooks/useAuth";
import { Avatar } from "../ui/avatar";
import { SimpleColorModeButton } from "../ui/color-mode";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogDescription,
  DialogActionTrigger
} from "@/components/ui/dialog"
import Logo from "../ui/logo-recapeps";

export default function SidebarDesktop() {
  const { currentUser, signOut, handleTourPreference } = useAuth();
  const [openPopover, setOpenPopover] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(true);
  const [currentStep, setCurrentStep] = useState<number>(0);


  const steps = [
    {
      title: "Profil",
      description: "Ici il y a ton profil, c’est ici que tu peux accéder à tes informations personnelles et te déconnecter du site",
    },
    {
      title: "Tableau de bord",
      description: "Là, tu trouveras un récapitulatif de tes derniers quiz une fois que tu auras commencé tes révisions, ça te permettra de suivre ta progression et de cibler tes points faibles.",
    },
    {
      title: "Fiches",
      description: "Mais avant de te lancer dans un quiz, lis la fiche de révision associé à chaque thème, elle te permettra de faire un résumé de toutes les connaissances dont tu auras besoin pour les différents écrits ",
    },
    {
      title: "Quiz",
      description: "Ça y est, tu viens de finir une fiche? Passe à un quiz pour vérifier que tu as bien compris le cours de manière ludique."
    },
    {
      title: "Flashcards",
      description: "Tu as des difficultés à retenir des informations? Les flashcards sont faites pour toi! Elles te permettront de réviser de manière plus ludique et plus efficace."
    },
    {
      title: "Contact",
      description: "Et voilà, maintenant que tu sais tout, tu peux commencer à explorer les différents thèmes et commencer tes révisions ! 🚀💥 Si tu as une question, n'hésites pas à nous contacter."
    }
  ];

  const handleOpenChange = (index: number, isOpen: boolean) => {
    setOpenPopover(isOpen ? index : null);
  };

  const startWizard = () => {
    setOpenDialog(false);
    setOpenPopover(0);
  };


  return (
    <>
      <DialogRoot role="alertdialog" open={openDialog} onOpenChange={(e) => setOpenDialog(e.open)} placement="top">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Salut !</DialogTitle>
          </DialogHeader>
          <DialogBody pt="4">
            <DialogDescription mb="4">
              Tu es prêt à démarrer tes révisions? Alors laisse moi te faire un petit tour du site pour que tu te repères plus facilement. Suis moi…
              <AspectRatio ratio={4 / 3}>
                <Logo />
              </AspectRatio>
            </DialogDescription>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button
                variant="outline"
                onClick={async () => {
                  await handleTourPreference(false);
                }}
              >
                Non, merci
              </Button>
            </DialogActionTrigger>
            <Button colorPalette="green" onClick={startWizard}>oui, bien sûr!</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
      <VStack
        as="nav"
        position="fixed"
        bg="orange.400"
        gap={4}
        borderRadius="0 0 16px 0"
        p={2}
        shadow="lg"
      >
        <PopoverRoot
          positioning={{ placement: "right" }}
          open={openPopover === 0}
          onOpenChange={(e) => handleOpenChange(0, e.open)}
          lazyMount
          unmountOnExit>
          <PopoverTrigger asChild>
            <MenuRoot positioning={{ placement: "right-end" }}>
              <MenuTrigger>
                <Avatar src={currentUser?.photoURL || "/avatar.svg"} name={currentUser?.displayName || "Étudiant"} mt="4" size="2xl" className="h-8 w-8 rounded-lg" />
              </MenuTrigger>

              <MenuContent className="min-w-56 rounded-lg" alignContent="end">
                <MenuItem value="checkout" asChild>
                  <Link to="/checkout">
                    <LuSparkles />
                    Passez à Recap'eps Pro
                  </Link>
                </MenuItem>
                <MenuSeparator />
                <MenuItemGroup>
                  <MenuItem value="profil" asChild>
                    <Link to="/profil">
                      <LuBadge />
                      Profil
                    </Link>
                  </MenuItem>
                  <MenuItem value="notifications" asChild>
                    <Link to="/profil">
                      <LuBell />
                      Notifications
                    </Link>
                  </MenuItem>
                </MenuItemGroup>
                <MenuSeparator />
                <MenuItem
                  value="log-out"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <LuLogOut />
                  Déconnexion
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <PopoverTitle fontWeight="medium">{steps[0].title}</PopoverTitle>
              <Text my="4">
                {steps[0].description}
              </Text>
              <StepsRoot defaultValue={1} count={3}>
                <StepsList>
                  <StepsItem index={0} icon={<LuUser />} />
                  <StepsItem index={1} icon={<LuInbox />} />
                  <StepsItem index={2} icon={<LuNotebookPen />} />
                  <StepsItem index={3} icon={<LuListTodo />} />
                  <StepsItem index={4} icon={<FiBookOpen />} />
                </StepsList>

                <Group>
                  <StepsPrevTrigger asChild>
                    <Button
                      onClick={() => {
                        if (currentStep > 0) {
                          console.log(currentStep)
                          setCurrentStep(currentStep - 1)
                          handleOpenChange(currentStep - 1, true)
                        }
                      }}
                      variant="outline" size="sm">
                      Retour
                    </Button>
                  </StepsPrevTrigger>
                  <StepsNextTrigger asChild>
                    <Button
                      onClick={() => {
                        setOpenPopover(currentStep + 1)
                        handleOpenChange(currentStep + 1, true)
                      }}
                      variant="outline" size="sm">
                      Suivant
                    </Button>
                  </StepsNextTrigger>
                </Group>
              </StepsRoot>
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>

        <VStack as="ul" gap="6" align="center" mt="4">
          {SidebarItems.map((item, index) => (
            <PopoverRoot
              key={index + 1}
              open={openPopover === index + 1}
              onOpenChange={(e) => handleOpenChange(index + 1, e.open)}
              lazyMount
              unmountOnExit>
              <PopoverTrigger>
                <Link target={item.target} to={item.path}>
                  <IconButton
                    as="li"
                    aria-label={item.label}
                    variant="ghost"
                    size="2xl"
                    color="white"
                    _hover={{ bg: "orange.500" }}
                  >{item.icon}</IconButton>
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <PopoverTitle fontWeight="medium">{steps[currentStep].title}</PopoverTitle>
                  <Text my="4">
                    {steps[currentStep].description}
                  </Text>
                  <StepsRoot step={currentStep} onStepChange={(e) => setCurrentStep(e.step)} count={5}>
                    <StepsList>
                      <StepsItem index={0} icon={<LuUser />} />
                      <StepsItem index={1} icon={<LuInbox />} />
                      <StepsItem index={2} icon={<LuNotebookPen />} />
                      <StepsItem index={3} icon={<LuListTodo />} />
                      <StepsItem index={4} icon={<FiBookOpen />} />
                    </StepsList>

                    <StepsCompletedContent>Allez va réviser maintenant!</StepsCompletedContent>

                    <Group>
                      <StepsPrevTrigger asChild>
                        <Button
                          onClick={() => {
                            if (currentStep > 0) {
                              setCurrentStep(currentStep - 1)
                              setOpenPopover(currentStep - 1)
                            }
                          }}
                          variant="outline" size="sm">
                          Retour
                        </Button>
                      </StepsPrevTrigger>
                      <StepsNextTrigger asChild>
                        <Button
                          onClick={() => {
                            setOpenPopover(currentStep + 1)
                            setCurrentStep(currentStep + 1)
                          }}
                          variant="outline" size="sm">
                          Suivant
                        </Button>
                      </StepsNextTrigger>
                    </Group>
                  </StepsRoot>
                </PopoverBody>
              </PopoverContent>
            </PopoverRoot>
          ))}
          <SimpleColorModeButton mb={5} />
        </VStack>
      </VStack>
    </>
  );
};
