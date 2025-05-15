"use client"
import { useCallback, useState } from 'react';
import {
    callUpdateUserName,
    callHandleEmailChange,
} from './userFunctions';
import { useAuth } from '@/contexts/Auth/useAuth';

export function useProfileInfo() {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);

    const save = useCallback(
        async (firstName: string, lastName: string, newEmail?: string) => {
            setLoading(true);
            try {
                // nome
                const resName = await callUpdateUserName({ firstName, lastName });
                if (!resName.data.success) throw new Error(resName.data.error);

                // email
                if (newEmail && newEmail !== user?.email) {
                    const resEmail = await callHandleEmailChange({ newEmail });
                    if (!resEmail.data.success) throw new Error(resEmail.data.error);
                }

            } catch (e: any) {
                throw new Error(e.message || 'Failed to update profile info');
            } finally {
                setLoading(false);
            }
        },
        [user]
    );

    return { save, loading };
}
