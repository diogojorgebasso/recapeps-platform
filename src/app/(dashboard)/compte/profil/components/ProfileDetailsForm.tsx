'use client';
import {
    Button,
    Field,
    Fieldset,
    HStack,
    Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useProfileInfo } from '../useProfileInfo';

type Props = {
    defaultFirst: string;
    defaultLast: string;
    defaultEmail: string;
};

export default function ProfileDetailsForm({
    defaultFirst,
    defaultLast,
    defaultEmail,
}: Props) {
    const { save, loading } = useProfileInfo();
    const [first, setFirst] = useState(defaultFirst);
    const [last, setLast] = useState(defaultLast);
    const [email, setEmail] = useState(defaultEmail);

    return (
        <Fieldset.Root>
            <Fieldset.Content>
                <HStack>
                    <Field.Root>
                        <Field.Label>Prénom</Field.Label>
                        <Input value={first} onChange={(e) => setFirst(e.target.value)} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Nom</Field.Label>
                        <Input value={last} onChange={(e) => setLast(e.target.value)} />
                    </Field.Root>
                </HStack>

                <Field.Root>
                    <Field.Label>Email</Field.Label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Field.ErrorText>Entrez votre mot de passe ci-dessous</Field.ErrorText>
                </Field.Root>
            </Fieldset.Content>

            <Button
                onClick={() => save(first, last, email)}
                loading={loading}
                mt={4}
            >
                Enregistrer
            </Button>
        </Fieldset.Root>
    );
}
