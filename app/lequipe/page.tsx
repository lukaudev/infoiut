import Header from "../components/header";
import Footer from "../components/footer";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Lequipe() {

    const equipeIUT = [
        {
            nom: "Samuel Callé",
            email: "samuel.calle@univ-tours.fr",
            role: "Directeur de l’IUT de Blois",
        },
        {
            nom: "Ludovic Fontaine",
            email: "Non communiqué",
            role: "Directeur adjoint",
        },
        {
            nom: "Catherine Chenu",
            email: "Non communiqué",
            role: "Directrice adjointe",
        },
        {
            nom: "Marilyne Trémine",
            email: "Non communiqué",
            role: "Responsable administrative",
        },
        {
            nom: "Marie-Carmen Cerezo",
            email: "Non communiqué",
            role: "Responsable scolarité / formation continue",
        },
        {
            nom: "Marie Darde",
            email: "communication.iut-blois@univ-tours.fr",
            role: "Chargée de mission communication",
        },
        {
            nom: "Jean-Michel Bettembourg",
            email: "Non communiqué",
            role: "Chargé de mission communication",
        },
        {
            nom: "Christine Farmer",
            email: "Non communiqué",
            role: "Chargée de mission relations internationales",
        },
        {
            nom: "Thibaut Devaux",
            email: "Non communiqué",
            role: "Chargé de mission relations internationales",
        },
        {
            nom: "Jean-Luc Duriaud",
            email: "Non communiqué",
            role: "Responsable informatique",
        },
        {
            nom: "Jean-Luc Berger",
            email: "Non communiqué",
            role: "Technicien informatique",
        },
        {
            nom: "Pierre Lin Torrijos",
            email: "Non communiqué",
            role: "Technicien réseaux et télécoms",
        },
        {
            nom: "Mustapha Zaghrioui",
            email: "mustapha.zaghrioui@univ-tours.fr ",
            role: "Co-chef département BUT Mesures Physiques",
        },
        {
            nom: "Lionel Haumesser",
            email: "Non communiqué",
            role: "Co-chef département BUT Mesures Physiques",
        },
        {
            nom: "Fanomezantsoa Randrianaivo",
            email: "Non communiquéC",
            role: "Chef département BUT Science et Génie des Matériaux",
        },
        {
            nom: "Laurianne Blanc",
            email: "Non communiqué",
            role: "Co-cheffe département BUT Réseaux & Télécommunications",
        },
        {
            nom: "Rémi Rouffaud",
            email: "Non communiqué",
            role: "Co-chef département BUT Réseaux & Télécommunications",
        },
        {
            nom: "Cyril De Runz",
            email: "chef.departement.mmi.iut-blois@univ-tours.fr",
            role: "Chef département BUT Métiers du Multimédia et de l’Internet",
        },
    ]
    return (
        <main className="flex min-h-screen flex-col bg-gray-100">
            <Header />
            <div className="w-full p-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        L&apos;équipe
                    </h1>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <p className="text-gray-700 text-lg mb-4">
                            Bienvenue à la page de l&apos;équipe de l&apos;IUT de Tours à Blois!
                        </p>
                        <p className="text-gray-600 mb-4">
                            Ici, vous pouvez trouver des informations sur les membres de l&apos;équipe pédagogique et administrative de l&apos;IUT.
                            tableau de l&apos;équipe pédagogique et administrative de l&apos;IUT de Tours à Blois.
                            <div className="rounded-md border w-full mt-10">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nom complet</TableHead>
                                        <TableHead>Contact (email)</TableHead>
                                        <TableHead>Rôle</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {equipeIUT.map((personne) => (
                                        <TableRow key={personne.nom}>
                                            <TableCell className="font-medium text-md">
                                                {personne.nom}
                                            </TableCell>

                                            <TableCell className="text-gray-600 font-medium text-md"> 
                                                {personne.email}
                                            </TableCell>

                                            <TableCell className="text-gray-600 font-medium text-md">
                                                {personne.role}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                    </div>
                </p>
            </div>
        </div>
            </div >
        <Footer />
        </main >
    );
}  