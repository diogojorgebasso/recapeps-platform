import {
  Box,
  Flex,
  Text,
  VStack,
  useDisclosure,
  MenuTrigger,
  MenuItem,
  Collapsible
} from "@chakra-ui/react";
import { Link } from "react-router";
import { LuChevronsDownUp, LuSparkles, LuBadge, LuBell, LuLogOut } from "react-icons/lu";

import { MenuContent, MenuRoot, MenuSeparator, MenuItemGroup } from "../ui/menu";
import {
  FiGrid,
  FiBook,
  FiMessageSquare,
  FiUser,
  FiTool,
  FiMail,
  FiHelpCircle,
  FiChevronsDown
} from "react-icons/fi";
import { Image } from "@chakra-ui/react";
import { useAuth } from "@/hooks/useAuth";
import { Avatar } from "../ui/avatar";
import { ReactElement } from "react";

const SidebarItem = ({ icon, label, children }: { icon: ReactElement, label: string, children?: ReactElement }) => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box w="100%">
      <Flex
        align="center"
        p="3"
        cursor="pointer"
        _hover={{ bg: "gray.100" }}
        onClick={onToggle}
      >
        {icon}
        <Text ml="3" fontWeight="medium">
          {label}
        </Text>
        {children && <FiChevronsDown />}
      </Flex>
      {children && (
        <Collapsible.Root open={open}>
          <Collapsible.Content>
            <VStack
              align="start"
              gap="2"
              pl="8"
              bg="gray.50"
              py="2"
              borderLeft="2px"
              borderColor="gray.200"
            >
              {children}
            </VStack>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </Box>
  );
};

const Sidebar = () => {
  const { email, name, photoURL, signOut } = useAuth();

  return (
    <Box
      w="260px"
      minH="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
    >
      {/* Logo */}
      <Flex align="center" p="5" borderBottom="1px" borderColor="gray.200">
        <Image src="/logo.svg" />
        <Text fontWeight="bold" ml="3" fontSize="lg">
          RECAP'EPS
        </Text>
      </Flex>

      {/* Menu Items */}
      <VStack align="start" gap="1" mt="4" px="2">
        <Text px="3" fontSize="sm" color="gray.500" fontWeight="semibold">
          Platform
        </Text>

        <SidebarItem icon={<FiGrid />} label="Tableau de bord" />

        <SidebarItem icon={<FiBook />} label="Quizz">
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

        <SidebarItem icon={<FiMessageSquare />} label="Flashcards" />
        <SidebarItem icon={<FiUser />} label="ChatBot" />
        <SidebarItem icon={<FiTool />} label="Fiches de révision" />

        <SidebarItem icon={<FiHelpCircle />} label="Support" />
        <SidebarItem icon={<FiMail />} label="Feedback" />
      </VStack>

      {/* Footer User Info */}
      <Box mt="auto" p="3" borderTop="1px" borderColor="gray.200">
        <MenuRoot>
          <MenuTrigger asChild>
            <Avatar src={photoURL} name={name} className="h-8 w-8 rounded-lg" />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{name}</span>
              <span className="truncate text-xs">{email}</span>
            </div>
            <LuChevronsDownUp className="ml-auto size-4" />
          </MenuTrigger>
          <MenuContent
            className="min-w-56 rounded-lg"
            alignContent="end">
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
      </Box>
    </Box >
  );
};

export default Sidebar;
