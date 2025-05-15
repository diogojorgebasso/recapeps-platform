"use client";

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase/clientApp';
import { useState, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
/**
 * Gets the current email notification preference for a user
 */
export async function getEmailNotificationStatus() {
    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('Utilisateur non authentifié');
        }

        // Get user preferences from Firestore
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            return false; // Default to false if no preferences found
        }

        const userData = userDoc.data();
        return userData?.emailNotifications ?? false;

    } catch (error: any) {
        console.error('Error checking email notifications status:', error);
        // Default to false in case of error
        return false;
    }
}

/**
 * Updates a user's email notification preferences
 */
export async function updateEmailNotificationPreference(enabled: boolean) {
    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('Utilisateur non authentifié');
        }

        // Update user preferences in Firestore
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
            'preferences.emailNotifications': enabled,
            updatedAt: new Date()
        });

        return { success: true, enabled };
    } catch (error: any) {
        console.error('Error updating email notification preference:', error);
        return {
            success: false,
            error: error.message,
            code: error.code || 'unknown-error'
        };
    }
}

export default function EmailNotificationToggle() {
    const [enabled, setEnabled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load initial state
        const loadPreferences = async () => {
            try {
                const status = await getEmailNotificationStatus();
                setEnabled(status);
            } catch (error) {
                console.error('Failed to load preferences:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPreferences();
    }, []);

    const handleToggle = async () => {
        setLoading(true);

        try {
            const result = await updateEmailNotificationPreference(!enabled);
            if (result.success) {
                setEnabled(result.enabled ?? !enabled);
            } else {
                // Show error message
                console.error('Failed to update preference:', result.error);
            }
        } catch (error) {
            console.error('Error during toggle:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Checkbox
            id="email-notifications"
            checked={enabled}
            onChange={handleToggle}
            disabled={loading}
        >
            {loading ? 'Chargement...' : (enabled ? 'Recevoir des notifications par email' : 'Ne pas recevoir de notifications par email')}
        </Checkbox>
    );
}