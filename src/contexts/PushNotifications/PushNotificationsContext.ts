"use client";

import {
    createContext,
} from "react";

import { Messaging } from "firebase/messaging";

export const PushNotificationsContext = createContext<Messaging | undefined>(
    undefined
);
