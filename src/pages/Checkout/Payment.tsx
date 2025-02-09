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

const stripePromise = loadStripe("pk_test_51QqK3sIj1lxZjyG3UJ7RWgAsPinlIZHeUdbthRk6OUHuRS5VoAGVXzR69vtW2jkxe6DWOY2ZQZybQdYliWhFpa3G00GHICwwgy");

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

