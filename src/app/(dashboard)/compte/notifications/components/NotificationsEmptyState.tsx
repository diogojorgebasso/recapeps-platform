import { EmptyState } from '@chakra-ui/react';
import { IoIosNotificationsOff } from "react-icons/io";

export default function NotificationsEmptyState() {
    return (
        <EmptyState.Root>
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <IoIosNotificationsOff />
                </EmptyState.Indicator>
                <EmptyState.Title>Aucune notification</EmptyState.Title>
                <EmptyState.Description />
            </EmptyState.Content>
        </EmptyState.Root>
    );
}
