import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
     
      <Header />
      <div className="w-full p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Bienvenue sur INFOIUT</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              INFOIUT est le portail officiel de l&apos;IUT, où vous pouvez trouver des informations sur nos programmes et activités.
            </p>
            <p className="text-gray-600 mb-6">
             Sélectionnez l&apos;un des programmes ci-dessous pour en savoir plus :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Link href="/linfat">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg hover:bg-blue-100 transition-all cursor-pointer">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">LINFAT</h3>
                  <p className="text-gray-600">
                    Laboratoire d&apos;Informatique et de Formation en Analyse de Technologie
                  </p>
                </div>
              </Link>
              <Link href="/mmi">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 hover:shadow-lg hover:bg-green-100 transition-all cursor-pointer">
                  <h3 className="text-xl font-bold text-green-700 mb-2">MMI</h3>
                  <p className="text-gray-600">Master en Multimédia et Interfaces</p>
                </div>
              </Link>
              <Link href="/rt">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg hover:bg-purple-100 transition-all cursor-pointer">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">R&T</h3>
                  <p className="text-gray-600">Réseaux et Télécommunications</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>  
    </main>
  );
}
