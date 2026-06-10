import Header from "../../components/header";

export default function Linfat() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className="w-full p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">LINFAT</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              Bienvenue au Laboratoire d&apos;Informatique et de Formation en Analyse de Technologie (LINFAT)!
            </p>
            <p className="text-gray-600 mb-4">
              le portal officiel du LINFAT de l&apos;IUT, où vous pouvez trouver des informations sur nos cours et programmes.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Programmes Disponibles</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Graduation en Informatique</li>
                <li>Master en Multimédia et Interfaces (MMI)</li>
                <li>Réseaux et Télécommunications (R&T)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </main>
  );
}
