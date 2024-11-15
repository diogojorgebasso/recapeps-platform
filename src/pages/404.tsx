import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-muted-foreground mb-6">
                Page non trouvée
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
                Il semble que vous avez essayé d'accéder à une page qui n'existe pas. Retournez à un endroit sûr ?
            </p>
            <Button className="px-6 py-3" onClick={() => navigate("/")}>
                Retour à la page d'accueil
            </Button>
        </div>
    );
};

export default NotFoundPage;
