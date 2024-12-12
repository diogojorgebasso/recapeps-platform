import React from "react";
import { useLocation, useNavigate } from "react-router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

interface PaymentPageState {
    clientSecret: string;
    selectedPlan: {
        id: string;
        name: string;
        price: string;
        amount: number;
    };
}

const PaymentPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const state = location.state as PaymentPageState;
    const { clientSecret, selectedPlan } = state || {};

    if (!state) {
        navigate("/");
        return null;
    }

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement!,
            },
        });

        if (error) {
            alert(`Erreur: ${error.message}`);
        } else {
            navigate("/success"); // Navigate to a success page
        }
    };

    return (
        <div className="p-8 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Payer pour {selectedPlan.name}</h1>
            <p className="mb-4">Prix: {selectedPlan.price}</p>
            <form onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": { color: "#aab7c4" },
                            },
                            invalid: { color: "#9e2146" },
                        },
                    }}
                />
                <button
                    type="submit"
                    className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg font-medium text-lg hover:bg-green-700 transition-all"
                >
                    Payer
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
