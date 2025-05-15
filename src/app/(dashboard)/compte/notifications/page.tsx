import { Box, Heading } from '@chakra-ui/react';
import NotificationsContainer from './components/NotificationsContainer';

export default function NotificationsPage() {
    return (
        <Box maxW="container.lg" mx="auto" p={4}>
            <Heading mb={4}>Notifications</Heading>
            <NotificationsContainer />
        </Box>
    );
}
