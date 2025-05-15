import {
    FaSyringe,
    FaCheckCircle,
    FaChild,
    FaUsers,
    FaCloudSun,
    FaHandsHelping,
    FaHandshake,
    FaLeaf,
    FaBalanceScale,
    FaExclamationTriangle,
    FaGenderless,
    FaPeopleCarry,
    FaUniversity,
    FaGlobeAmericas,
    FaHeartbeat,
    FaShieldAlt,
} from 'react-icons/fa';

interface Subject {
    id: string;
    name: string;
    icon: React.ComponentType;
    premium: boolean;
}

export const subjects: Subject[] = [
    { id: 'addiction', name: 'Addiction', icon: FaSyringe, premium: false },
    { id: 'assiduite', name: 'Assiduité', icon: FaCheckCircle, premium: false },
    { id: 'assiduite-2', name: 'Assiduité (2)', icon: FaCheckCircle, premium: true },
    { id: 'autonomie', name: 'Autonomie', icon: FaChild, premium: true },
    { id: 'citoyennete', name: 'Citoyenneté', icon: FaUsers, premium: true },
    { id: 'climat-scolaire', name: 'Climat scolaire', icon: FaCloudSun, premium: true },
    { id: 'coeducation', name: 'Coéducation', icon: FaHandsHelping, premium: true },
    { id: 'cooperation', name: 'Coopération', icon: FaHandshake, premium: true },
    { id: 'ecologie', name: 'Écologie', icon: FaLeaf, premium: true },
    { id: 'egalite', name: 'Égalité', icon: FaBalanceScale, premium: true },
    { id: 'egalite-2', name: 'Égalité (2)', icon: FaBalanceScale, premium: true },
    { id: 'harcelement', name: 'Harcèlement', icon: FaExclamationTriangle, premium: true },
    { id: 'identite-de-genre', name: 'Identité de genre', icon: FaGenderless, premium: true },
    { id: 'inclusion', name: 'Inclusion', icon: FaPeopleCarry, premium: true },
    { id: 'inclusion-harcelement', name: 'Inclusion & harcèlement', icon: FaPeopleCarry, premium: true },
    { id: 'laicite', name: 'Laïcité', icon: FaUniversity, premium: true },
    { id: 'racisme', name: 'Racisme', icon: FaGlobeAmericas, premium: true },
    { id: 'sante', name: 'Santé', icon: FaHeartbeat, premium: true },
    { id: 'sante-2', name: 'Santé (2)', icon: FaHeartbeat, premium: true },
    { id: 'securite', name: 'Sécurité', icon: FaShieldAlt, premium: true },
    { id: 'securite-2', name: 'Sécurité (2)', icon: FaShieldAlt, premium: true },
    { id: 'securite-3', name: 'Sécurité (3)', icon: FaShieldAlt, premium: true },
];
