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

const stripePromise = loadStripe("pk_live_51QqK3jEfLSFXfvk1Ysx877RxVyMoWj4NMoFUWGvyvVKbI7Zw9bT4FzuJ4TKf0ne3LxO7FjKCaTGdwJZ1VTRgBkpv00eNrzjryZ");

export default function Payment() {
    const location = useLocation();
    const state = location.state as PaymentPageState | undefined;
    if (!state) return <Navigate to="/" />;
    return (
        <Elements stripe={stripePromise} options={{ clientSecret: state.clientSecret }}>
            <PaymentForm
                clientSecret={state.clientSecret}
                selectedPlan={state.selectedPlan}
            />
        </Elements>
    );
}

