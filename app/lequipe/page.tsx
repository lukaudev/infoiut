import Header from "../components/header";
import Footer from "../components/footer";  
export default function Lequipe() {
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
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}  