// lib/stripe/server.ts   – server-only file
import Stripe from 'stripe';

// Check if STRIPE_SECRET_KEY is available and valid
const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey || typeof stripeKey !== 'string' || stripeKey.trim() === '') {
    throw new Error('STRIPE_SECRET_KEY is missing or invalid in environment variables');
}

export const stripe = new Stripe(stripeKey);
