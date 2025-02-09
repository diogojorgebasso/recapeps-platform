import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useAuth } from "@/hooks/useAuth";

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
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

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
