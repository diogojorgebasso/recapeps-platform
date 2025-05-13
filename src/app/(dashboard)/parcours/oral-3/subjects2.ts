import {
    FaLandmark,
    FaBookOpen,
    FaGavel,
    FaLightbulb,
    FaFlag,
} from 'react-icons/fa';

interface Subject {
    id: string;
    name: string;
    icon: React.ComponentType;
    premium: boolean;
}

export const subjects2: Subject[] = [
    {
        id: 'les-instances',
        name: 'Les instances',
        icon: FaLandmark,
        premium: false,
    },
    {
        id: 'lexique',
        name: 'Lexique',
        icon: FaBookOpen,
        premium: false,
    },
    {
        id: 'lois',
        name: 'Lois',
        icon: FaGavel,
        premium: false,
    },
    {
        id: 'solutions-long-terme',
        name: 'Solutions long terme',
        icon: FaLightbulb,
        premium: false,
    },
    {
        id: 'valeurs-de-la-republique',
        name: 'Valeurs de la République',
        icon: FaFlag,
        premium: false,
    },
];