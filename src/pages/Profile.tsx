export default function Profile() {
    return (
        <div className="space-y-8">
            {/* Section: Personal Information */}
            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Informations Personnelles</h2>
                <div className="flex items-start space-x-6">
                    {/* Profile Picture */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                            <img
                                src="https://via.placeholder.com/96"
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
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        console.log(e.target.files[0]);
                                    }
                                }}
                            />
                        </label>
                    </div>

                    {/* Personal Information Form */}
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
                </div>
            </section>

            {/* Section: Change Password */}
            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Changer le Mot de Passe</h2>
                <div>
                    <label className="block text-gray-600 mb-1">Nouveau Mot de Passe</label>
                    <input
                        type="password"
                        placeholder="Nouveau mot de passe"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
                    />
                </div>
            </section>

            {/* Section: Email Preferences */}
            <section>
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
            </section>

            {/* Section: Confidentiality */}
            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Confidentialité</h2>
                <p className="text-gray-600">
                    Vous pouvez consulter nos{" "}
                    <a href="/termes-et-condition" className="text-blue-600 underline">termes et conditions</a>.
                </p>
            </section>

            {/* Section: Purchase History */}
            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Historique des Achats</h2>
                <p className="text-gray-600">
                    Abonnement: <span className="font-semibold">Premium (Actif)</span>
                </p>
                <p className="text-gray-600">
                    Dernier achat: <span className="font-semibold">10 décembre 2024</span>
                </p>
            </section>
        </div>
    );
}