import { redirect } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import type { Route } from "./+types/payment";

interface PaymentPageState {
    clientSecret: string;
    selectedPlan: {
        id: string;
        name: string;
        price: string;
        amount: number;
    };
}

const stripePromise = loadStripe(import.meta.env.STRIPE_PROD_PUBLIC_KEY);

export default function Payment({
    params
}: Route.ComponentProps) {
    const state = params.state as PaymentPageState;
    console.log(state);
    if (!state) redirect("/");
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm
                clientSecret={state.clientSecret}
                selectedPlan={state.selectedPlan}
            />
        </Elements>
    );
};

