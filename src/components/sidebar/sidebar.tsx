import {
  Box,
  Flex,
  Text,
  VStack,
  useDisclosure,
  MenuTrigger,
  MenuItem,
  Collapsible,
  HStack,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router";

import { LuChevronsDownUp, LuSparkles, LuBadge, LuBell, LuLogOut, LuListTodo, LuInbox, LuNotebookPen, LuBot } from "react-icons/lu";

import { MenuContent, MenuRoot, MenuSeparator, MenuItemGroup } from "../ui/menu";
import {
  FiBookOpen,
  FiMail,
  FiHelpCircle,
  FiChevronDown,
  FiChevronRight
} from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import { Avatar } from "../ui/avatar";
import { ReactElement } from "react";
import { Tooltip } from "../ui/tooltip";
import { ColorModeButton } from "../ui/color-mode";

const SidebarItem = ({ icon, label, redirectTo, children, isSidebarOpen
}: {
  icon: ReactElement, label?: string, redirectTo: string, children?: ReactElement, isSidebarOpen: boolean;
}) => {
  const { open, onToggle } = useDisclosure();
  return (
    <Box w="100%">
      <Tooltip content={label} positioning={{ placement: "right-end" }}>
        <Link to={redirectTo}>
          <Flex
            alignContent="space-around"
            p="3"
            cursor="pointer"
            onClick={onToggle}
            align="center"
          >
            {icon}
            {isSidebarOpen &&
              <>
                <Text ml="3" fontWeight="medium">
                  {label}
                </Text>
                <Box ml="auto">
                  {children && (open ? <FiChevronDown /> : <FiChevronRight />)}
                </Box>
              </>
            }
          </Flex>
        </Link>
      </Tooltip>
      {children && isSidebarOpen && (
        <Collapsible.Root open={open}>
          <Collapsible.Content>
            <Flex
              direction="column"
              align="start"
              gap="2"
              pl="4"
              py="2"
              borderLeft="2px"
              borderColor="gray.200"
              position="relative"
            >
              <Box
                position="absolute"
                left="4"
                top="0"
                bottom="0"
                borderLeft="2px solid"
                borderColor="gray.200"
              ></Box>
              {children}
            </Flex>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </Box>
  );
};

export default function Sidebar({ path, isSidebarOpen }: { path: string[], isSidebarOpen: boolean }) {
  const { email, firstName, photoURL, signOut } = useAuth();
  return (
    <Flex
      transition="0.3s ease-in-out"
      direction="column"
      as="nav"
      minH="100vh"
      borderRight="1px"
      borderColor="gray.200"
      boxShadow="md"
    >
      <HStack p="5" >
        <Box w="10">
          <Image src="/Logo.svg" alt="Logo Recapeps" />
        </Box>
        {isSidebarOpen &&
          <Text fontWeight="bold" ml="3" fontSize="lg">
            RECAP'EPS
          </Text>
        }
      </HStack>

      {/* Menu Items */}
      <VStack align="start" gap="1" mt="4" px="2">
        {isSidebarOpen &&
          <Text px="3" fontSize="sm" color="gray.500" fontWeight="semibold">
            Platform
          </Text>
        }
        <SidebarItem isSidebarOpen={isSidebarOpen} icon={<LuInbox fill={path[0] === "dashboard" ? "orange" : "none"} />} label="Tableau de bord" redirectTo="dashboard" />

        <SidebarItem isSidebarOpen={isSidebarOpen} icon={<LuListTodo fill={path[0] === "quizz" ? "orange" : "none"} />} label="Quizz" redirectTo="quizz">
          <>
            <Link to="quizz/ecrit-1/expérimentations-pédagogiques">
              Exp. pédagogiques
            </Link>
            <Link to="quizz/ecrit-2/les-émotions">
              Les émotions
            </Link>
            <Link to="quizz/ecrit-1/mixité-sexuée">
              Mixité sexuée
            </Link>
          </>
        </SidebarItem>

        <SidebarItem isSidebarOpen={isSidebarOpen} icon={<FiBookOpen fill={path[0] === "flashcards" ? "orange" : "none"} />} label="Flashcards" redirectTo="flashcards" >
          <Link to="quizz/ecrit-1/expérimentations-pédagogiques">
            Exp. pédagogiques
          </Link>
        </SidebarItem>
        <SidebarItem isSidebarOpen={isSidebarOpen} icon={<LuBot fill={path[0] === "chatbot" ? "orange" : "none"} />} label="Chatbot" redirectTo="chatbot" />
        <SidebarItem isSidebarOpen={isSidebarOpen} icon={<LuNotebookPen fill={path[0] === "notes" ? "orange" : "none"} />} label="Fiches de révision" redirectTo="notes" />

      </VStack>

      {/* User Profile */}
      <VStack align="start" mt="auto">
        <HStack>
          <SidebarItem isSidebarOpen={isSidebarOpen} icon={<FiHelpCircle />} redirectTo="suport" />
          <SidebarItem isSidebarOpen={isSidebarOpen} icon={<FiMail />} redirectTo="feedback" />
          <ColorModeButton />
        </HStack>
        <Flex p="3" borderColor="gray.200">
          <MenuRoot positioning={{ placement: "right-start" }}>
            <MenuTrigger>
              <HStack cursor="pointer">
                <Avatar src={photoURL} name={firstName} className="h-8 w-8 rounded-lg" />
                {isSidebarOpen &&
                  <>
                    <VStack align="start" gap="0">
                      <Text className="truncate font-semibold">{firstName}</Text>
                      <Text className="text-xs">{email}</Text>
                    </VStack>
                    <LuChevronsDownUp className="ml-auto size-4" />
                  </>
                }
              </HStack>
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
              <MenuItem value="log-out" onClick={signOut}>
                <LuLogOut />
                Log out
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Flex>
      </VStack>
    </Flex >
  );
};
