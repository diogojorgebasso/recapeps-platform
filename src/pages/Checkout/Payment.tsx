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

const stripePromise = loadStripe("pk_test_51IOvMXBiilgt3voLm7kvY2GAgsyYVssTyO59sttI2KqgGLTrgPMA5WHox80IXFS7YCuQuo40nXj0qX9JKZiTRocQ00l1cSSkFU");

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
