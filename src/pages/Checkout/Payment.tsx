import React from "react";
import { useLocation, useNavigate } from "react-router";
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

const PaymentPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as PaymentPageState;

    if (!state) {
        navigate("/");
        return null;
    }

    return (
        <Elements stripe={stripePromise}>
            <PaymentForm
                clientSecret={state.clientSecret}
                selectedPlan={state.selectedPlan}
            />
        </Elements>
    );
};

export default PaymentPage;
