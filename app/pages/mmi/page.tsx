import Header from "../../components/header";

export default function MMI() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className="w-full p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">MMI</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              Bienvenue sur la page du Master en Multimédia et Interfaces (MMI)!
            </p>
            <p className="text-gray-600 mb-4">
              Ici vous pouvez trouver des informations sur le programme de formation post-graduée MMI.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informations du Programme</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Durée: 2 ans</li>
                <li>Domaine: Technologie et Multimédia</li>
                <li>Modalité: Présentielle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
