import { Navigate, useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

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

export default function Payment() {
    const location = useLocation();
    const state = location.state as PaymentPageState | undefined;
    if (!state) return <Navigate to="/" />;
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm
                clientSecret={state.clientSecret}
                selectedPlan={state.selectedPlan}
            />
        </Elements>
    );
}

