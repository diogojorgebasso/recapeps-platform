import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51IOvMXBiilgt3voLm7kvY2GAgsyYVssTyO59sttI2KqgGLTrgPMA5WHox80IXFS7YCuQuo40nXj0qX9JKZiTRocQ00l1cSSkFU");

export default function Checkout() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};
