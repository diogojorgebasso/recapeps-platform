import {
  Box,
  Flex,
  Text,
  VStack,
  useDisclosure,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router";

import {
  LuChevronsDownUp,
  LuSparkles,
  LuBadge,
  LuBell,
  LuLogOut,
  LuListTodo,
  LuInbox,
  LuNotebookPen,
  LuBot,
} from "react-icons/lu";
import {
  FiBookOpen,
  FiMail,
  FiHelpCircle,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

import { MenuRoot, MenuTrigger, MenuContent, MenuSeparator, MenuItem, MenuItemGroup } from "../ui/menu";
import { useAuth } from "@/hooks/useAuth";
import { Avatar } from "../ui/avatar";
import { Tooltip } from "../ui/tooltip";
import { ColorModeButton } from "../ui/color-mode";
import { ReactElement } from "react";

// Depending on your setup, replace this with Chakra’s Collapse or your own Collapsible:
import { Collapsible } from "@chakra-ui/react"; // Or wherever you have Collapsible

// -------------- SidebarItem -------------- //
/**
 * Renders a single item in the sidebar.
 * - Displays icon, label (if `isSidebarOpen`), and optional children in a collapsible section.
 */
function SidebarItem({
  icon,
  label,
  redirectTo,
  children,
  isSidebarOpen,
}: {
  icon: ReactElement;
  label?: string;
  redirectTo: string;
  children?: ReactElement;
  isSidebarOpen: boolean;
}) {
  const { open, onToggle } = useDisclosure();

  const hasChildren = !!children;

  return (
    <Box w="100%">
      <Tooltip content={label} positioning={{ placement: "right-end" }}>
        <Link to={redirectTo}>
          <Flex
            alignContent="space-around"
            p="3"
            cursor="pointer"
            onClick={hasChildren ? onToggle : undefined}
            align="center"
          >
            {icon}
            {isSidebarOpen && (
              <>
                <Text ml="3" fontWeight="medium">
                  {label}
                </Text>
                <Box ml="auto">
                  {hasChildren && (open ? <FiChevronDown /> : <FiChevronRight />)}
                </Box>
              </>
            )}
          </Flex>
        </Link>
      </Tooltip>

      {/* Nested children (submenu) in a collapsible */}
      {hasChildren && isSidebarOpen && (
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
              />
              {children}
            </Flex>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </Box>
  );
}

// -------------- Main Sidebar -------------- //
/**
 * The main sidebar component.
 * It:
 * - Shows a logo and title (if `isSidebarOpen`).
 * - Renders several SidebarItems (with or without nested submenus).
 * - Has a user profile menu at the bottom, with sign-out logic.
 */
export default function Sidebar({
  path,
  isSidebarOpen,
}: {
  path: string[];
  isSidebarOpen: boolean;
}) {
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
      w={isSidebarOpen ? "250px" : "75px"} // or keep a fixed width if you prefer
    >
      {/* Logo Section */}
      <HStack p="5">
        <Box w="10">
          <Image src="/Logo.svg" alt="Logo Recapeps" />
        </Box>
        {isSidebarOpen && (
          <Text fontWeight="bold" ml="3" fontSize="lg">
            RECAP'EPS
          </Text>
        )}
      </HStack>

      {/* Menu Items */}
      <VStack align="start" gap="1" mt="4" px="2">
        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<LuInbox fill={path[0] === "dashboard" ? "orange" : "none"} />}
          label="Tableau de bord"
          redirectTo="dashboard"
        />

        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<LuListTodo fill={path[0] === "quizz" ? "orange" : "none"} />}
          label="Quizz"
          redirectTo="quizz"
        >
          <>
            <Link to="quizz/ecrit-1/expérimentations-pédagogiques">
              Exp. pédagogiques
            </Link>
            <Link to="quizz/ecrit-2/les-émotions">Les émotions</Link>
            <Link to="quizz/ecrit-1/mixité-sexuée">Mixité sexuée</Link>
          </>
        </SidebarItem>

        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<FiBookOpen fill={path[0] === "flashcards" ? "orange" : "none"} />}
          label="Flashcards"
          redirectTo="flashcards"
        >
          <Box>
            <Link to="quizz/ecrit-1/expérimentations-pédagogiques">
              Exp. pédagogiques
            </Link>
          </Box>
        </SidebarItem>

        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<LuBot fill={path[0] === "chatbot" ? "orange" : "none"} />}
          label="Chatbot"
          redirectTo="chatbot"
        />

        <SidebarItem
          isSidebarOpen={isSidebarOpen}
          icon={<LuNotebookPen fill={path[0] === "notes" ? "orange" : "none"} />}
          label="Fiches de révision"
          redirectTo="notes"
        />
      </VStack>

      <VStack align="start" mt="auto">
        <Flex p="3" align="start"
          gap={2} direction={isSidebarOpen ? "row" : "column"}>
          <SidebarItem isSidebarOpen={isSidebarOpen} icon={<FiHelpCircle />} redirectTo="suport" />
          <SidebarItem isSidebarOpen={isSidebarOpen} icon={<FiMail />} redirectTo="feedback" />
          <ColorModeButton />
        </Flex>


        <Flex p="3" borderColor="gray.200" w="full">
          <MenuRoot positioning={{ placement: "right-start" }}>
            <MenuTrigger>
              <HStack cursor="pointer" w="full">
                <Avatar src={photoURL} name={firstName} className="h-8 w-8 rounded-lg" />
                {isSidebarOpen && (
                  <>
                    <VStack align="start" gap="0" overflow="hidden">
                      <Text className="truncate font-semibold">{firstName}</Text>
                      <Text className="text-xs">{email}</Text>
                    </VStack>
                    <LuChevronsDownUp className="ml-auto size-4" />
                  </>
                )}
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
        </Flex>
      </VStack>
    </Flex>
  );
}
