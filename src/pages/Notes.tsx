import { useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/utils/firebase";
import { Button } from "@/components/ui/button";

export default function Notes() {
    const [filePath, setFilePath] = useState("/mixite/mixite_sexuee.pdf");
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);

        try {
            const fileRef = ref(storage, filePath);
            const url = await getDownloadURL(fileRef);
            window.open(url, "_blank");
        } catch (error) {
            console.error("Erro ao obter o PDF:", error);
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <Button onClick={handleButtonClick}>
                {loading ? "Carregando..." : "Abrir PDF"}
            </Button>
        </div>
    )
}