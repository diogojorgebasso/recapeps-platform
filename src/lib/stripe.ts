// lib/stripe/server.ts   – server-only file
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
