import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@radix-ui/react-dialog";
import Cropper from "react-easy-crop";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export default function Profile() {
    const { photoURL, updatePhotoURLInContext, uid, subscribed } = useAuth();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<{ width: number; height: number; x: number; y: number } | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
            setIsDialogOpen(true);
        }
    };

    const onCropComplete = (_croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const uploadImage = async () => {
        if (!selectedFile || !croppedAreaPixels) return;

        setIsUploading(true);
        const canvas = document.createElement("canvas");
        const image = new Image();
        image.src = URL.createObjectURL(selectedFile);
        await new Promise((resolve) => (image.onload = resolve));

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.drawImage(
                image,
                croppedAreaPixels.x,
                croppedAreaPixels.y,
                croppedAreaPixels.width,
                croppedAreaPixels.height,
                0,
                0,
                croppedAreaPixels.width,
                croppedAreaPixels.height
            );
        }

        const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, "image/jpeg")
        );
        if (!blob) {
            alert("Falha ao criar a imagem cortada.");
            return;
        }

        const storage = getStorage();
        const storageRef = ref(storage, `user/${uid}/profile.jpg`);

        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);

        const firestore = getFirestore();
        const userRef = doc(firestore, "users", uid);
        await updateDoc(userRef, { photoURL: downloadURL });

        await updatePhotoURLInContext(downloadURL);
        alert("Foto atualizada com sucesso!");
        setIsUploading(false)
        setIsDialogOpen(false);
    };

    return (
        <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Informations Personnelles
            </h2>
            <section className="flex">

                <div className="flex items-start space-x-6">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                            <img
                                src={photoURL}
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <label className="mt-4 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
                            Changer la photo
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent>
                        <DialogTitle>Crop photo</DialogTitle>

                        <div className="relative w-[400px] h-[400px]">
                            {selectedFile && (
                                <Cropper
                                    image={URL.createObjectURL(selectedFile)}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={1}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={onCropComplete}
                                />
                            )}
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setIsDialogOpen(false)}
                                className="mr-4 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                Annuler
                            </button>
                            <Button
                                onClick={uploadImage}
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                disabled={isUploading}
                            >
                                Enregistrer
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>

                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-600 mb-1">Nom</label>
                            <input
                                type="text"
                                placeholder="Votre nom"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Prénom</label>
                            <input
                                type="text"
                                placeholder="Votre prénom"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-600 mb-1">Adresse Email</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
                        />
                    </div>
                </div>
            </section>

            < section >
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Changer le Mot de Passe</h2>
                <div>
                    <label className="block text-gray-600 mb-1">Nouveau Mot de Passe</label>
                    <input
                        type="password"
                        placeholder="Nouveau mot de passe"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Section: Email Preferences */}
                < section >
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Préférences Email</h2>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-600" />
                            <span className="ml-2 text-gray-600">Recevoir des notifications</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-600" />
                            <span className="ml-2 text-gray-600">Recevoir des promotions</span>
                        </label>
                    </div>
                </ section>

                {/* Section: Confidentiality */}
                < section >
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Confidentialité</h2>
                    <p className="text-gray-600">
                        Vous pouvez consulter nos{" "}
                        <a href="/termes-et-condition" className="text-blue-600 underline">termes et conditions</a>.
                    </p>
                </ section>

                {/* TODO : get the history */}
                < section >
                    {subscribed ?
                        <>
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Historique des Achats</h2>
                            <p className="text-gray-600">
                                Abonnement: <span className="font-semibold">Premium (Actif)</span>
                            </p>
                            <p className="text-gray-600">
                                Dernier achat: <span className="font-semibold">10 décembre 2024</span>
                            </p>
                        </>
                        : <div>
                            <h2>Make your subscription</h2>
                            <NavLink to="/checkout">Subscribe</NavLink>
                        </div>}
                </ section>
            </section>
        </div >
    );
}