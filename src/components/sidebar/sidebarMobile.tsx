import {
    DrawerRoot,
    DrawerBody,
    DrawerContent,
    DrawerBackdrop,
    VStack,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { SidebarItems } from "./SidebarItems"
import { Tooltip } from "../ui/tooltip";

export const SidebarMobile = ({ isOpen, onOpen }: { isOpen: any, onOpen: any }) => {
    return (
        <DrawerRoot open={isOpen} placement="top" onOpenChange={(e) => onOpen(e.open)}>
            <DrawerBackdrop />
            <DrawerContent bg="orange.400">
                <DrawerBody>
                    <VStack gap={4} align="center" py={4}>
                        {SidebarItems.map((item, index) => (
                            <Tooltip key={index} content={item.label} positioning={{ placement: "right-end" }}>
                                <Link to={item.path}>
                                    {item.label}
                                </Link>
                            </Tooltip>
                        ))}
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </DrawerRoot>
    );
};
