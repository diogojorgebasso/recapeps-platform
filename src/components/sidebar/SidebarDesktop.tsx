import { VStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router";
import { SidebarItems } from "./SidebarItems";
import { MenuRoot, MenuTrigger, MenuContent, MenuSeparator, MenuItem, MenuItemGroup } from "../ui/menu";
import { Tooltip } from "../ui/tooltip";

import {
  LuSparkles,
  LuBadge,
  LuBell,
  LuLogOut,
} from "react-icons/lu";

import { useAuth } from "@/hooks/useAuth";
import { Avatar } from "../ui/avatar";
import { SimpleColorModeButton } from "../ui/color-mode";
export const SidebarDesktop = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <VStack
      as="nav"
      position="fixed"
      bg="orange.400"
      gap={4}
      borderRadius="0 0 16px 0"
      p={2}
      shadow="lg"
    >
      <MenuRoot positioning={{ placement: "right-start" }}>
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
      <VStack as="ul" gap="6" align="center" mt="4">
        {SidebarItems.map((item, index) => (
          <Tooltip key={index} content={item.label} positioning={{ placement: "right-end" }}>
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
          </Tooltip>
        ))}
        <SimpleColorModeButton mb={5} />
      </VStack>
    </VStack>
  );
};
