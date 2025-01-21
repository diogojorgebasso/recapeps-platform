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
export const SidebarDesktop = () => {
  const { firstName, photoURL, signOut } = useAuth();

  return (
    <VStack
      as="nav"
      position="fixed"
      bg="orange.400"
      gap={4}
      align="center"
    >
      <MenuRoot positioning={{ placement: "right-start" }}>
        <MenuTrigger>
          <Avatar src={photoURL} name={firstName} className="h-8 w-8 rounded-lg" />
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
      {SidebarItems.map((item, index) => (
        <Tooltip key={index} content={item.label} positioning={{ placement: "right-end" }}>
          <Link to={item.path}>
            <IconButton
              aria-label={item.label}
              variant="ghost"
              size="lg"
              color="white"
              _hover={{ bg: "orange.500" }}
            >{item.icon}</IconButton>
          </Link>
        </Tooltip>
      ))}
    </VStack>
  );
};
