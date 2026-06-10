import Header from "../../components/header";

export default function RT() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className="w-full p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">R&T</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              Réseaux et Télécommunications (R&T)!
            </p>
            <p className="text-gray-600 mb-4">
              Ici tu trouveras des informations sur les projets de recherche et technologie de l&apos;IUT.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Áreas de Pesquisa</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Inteligence Artificial</li>
                <li>Development web</li>
                <li>Securité des Données</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
