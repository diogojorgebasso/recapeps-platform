import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "@/hooks/useAuth";

export function useSubscription() {
  const { currentUser } = useAuth();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState<string | null>(null);
  const [lastPurchaseDate, setLastPurchaseDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const db = getFirestore();
    const ref = collection(db, "users", currentUser.uid, "subscriptions");
    const q = query(ref, where("status", "==", "active"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const subscription = snapshot.docs[0].data();
        setIsSubscribed(true);
        setSubscriptionType(subscription.priceId);
        setLastPurchaseDate(
          subscription.createdAt.toDate().toLocaleDateString()
        );
      } else {
        setIsSubscribed(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  return { isSubscribed, subscriptionType, lastPurchaseDate, loading };
}
