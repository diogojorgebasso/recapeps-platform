import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { CheckboxGroup, } from "@chakra-ui/react"

type Plan = {
    id: string;
    name: string;
    price: string;
    amount: number;
    features: string[];
};

interface PlanCardProps {
    plan: Plan;
    selectedPlan: string;
    setSelectedPlan: (id: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, selectedPlan, setSelectedPlan }) => (
    <CheckboxCard
        value={plan.id}
        className={`border p-4 rounded-lg shadow-sm transition-all cursor-pointer ${selectedPlan === plan.id ? "border-blue-600" : "border-gray-300 hover:shadow-md"
            }`}
        onClick={() => setSelectedPlan(plan.id)}
    >
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <span className="text-lg font-bold text-gray-700">{plan.price}</span>
        </div>
        <ul className="mt-3 text-gray-600">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <span className="mr-2 text-green-600">✔</span> {feature}
                </li>
            ))}
        </ul>
    </CheckboxCard>
);

const CheckoutPage: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string>("basic");
    const navigate = useNavigate();
    const { getUserToken } = useAuth();
    const plans: Plan[] = [
        {
            id: "basic",
            name: "Plan Basique",
            price: "4.99€",
            amount: 499,
            features: [
                "Accès aux fonctionnalités de base",
                "Support par e-mail",
                "Utilisation personnelle",
            ],
        },
        {
            id: "medium",
            name: "Plan Moyen",
            price: "10.99€",
            amount: 1099,
            features: [
                "Toutes les fonctionnalités basiques",
                "Support prioritaire",
                "Accès à des rapports avancés",
            ],
        },
        {
            id: "complete",
            name: "Plan Complet",
            price: "14.99€",
            amount: 1499,
            features: [
                "Toutes les fonctionnalités du plan moyen",
                "Accès illimité",
                "Support premium 24/7",
            ],
        },
    ];

    const handleCheckout = async () => {
        const token = await getUserToken();
        console.log(token);
        const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan);
        if (!selectedPlanDetails) return;

        const items = [
            {
                amount: selectedPlanDetails.amount,
                quantity: 1,
            },
        ];

        const response = await fetch("https://us-central1-recapeps-platform.cloudfunctions.net/createStripeCheckoutSession", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ items }),
        });
        console.log(response);

        const data = await response.json();
        navigate("/payment", { state: { clientSecret: data.clientSecret, selectedPlan: selectedPlanDetails } });
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Choisissez votre plan</h1>
            <CheckboxGroup className="space-y-6" defaultValue={[selectedPlan]}>
                {plans.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        selectedPlan={selectedPlan}
                        setSelectedPlan={setSelectedPlan}
                    />
                ))}
            </CheckboxGroup>
            <button
                onClick={handleCheckout}
                className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-all"
            >
                Confirmer et Payer
            </button>
        </div>
    );
};

export default CheckoutPage;
