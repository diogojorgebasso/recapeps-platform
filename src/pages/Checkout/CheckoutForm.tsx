import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuth } from "@/hooks/useAuth";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const { currentUser } = useAuth();
    interface CheckoutItem {
        name: string;
        amount: number;
        quantity: number;
    }

    interface CheckoutSessionResponse {
        clientSecret: string;
    }

    const createCheckoutSession = async (items: CheckoutItem[]): Promise<CheckoutSessionResponse> => {
        const response = await fetch("/createStripeCheckoutSession", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items, userId: currentUser?.uid || "" }),
        });

        if (!response.ok) {
            throw new Error("Failed to create checkout session");
        }

        return response.json();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            setError("Stripe.js has not loaded. Please refresh the page and try again.");
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            const data = await createCheckoutSession([
                {
                    name: "Produto Exemplo",
                    amount: 5000, // Preço em centavos (50.00 USD)
                    quantity: 1,
                },
            ]);

            const { error } = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)!,
                },
            });

            if (error) {
                setError(error.message || "Erro ao processar pagamento.");
            } else {
                setSuccess(true);
            }
        } catch (error) {
            console.error("Erro ao criar sessão:", error);
            setError("Erro ao iniciar sessão de pagamento.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
                type="submit"
                disabled={!stripe || isProcessing}
                style={{
                    marginTop: "16px",
                    padding: "8px 16px",
                    backgroundColor: "#6772e5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                }}
            >
                {isProcessing ? "Processando..." : "Pagar"}
            </button>
            {success && <p style={{ color: "green" }}>Pagamento realizado com sucesso!</p>}
        </form>
    );
};

export default CheckoutForm;
