import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c5656] text-white">
      {/* Divider line accent */}
      <div className="h-0.5 w-full bg-teal-400/30" />

      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-wide text-white mb-1">INFOIUT</p>
            <p className="text-sm text-teal-200/80 leading-relaxed">
              Site de présentation du stage réalisé à l&apos;IUT de Blois en juin {new Date().getFullYear()}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-300 mb-3">Navigation</p>
            <ul className="space-y-2 text-sm text-teal-100/80">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="#parcours" className="hover:text-white transition-colors">Mon parcours</Link>
              </li>
              <li>
                <Link href="/assets/Rapport.pdf" target="_blank" className="hover:text-white transition-colors">
                  Rapport de stage
                </Link>
              </li>
            </ul>
          </div>

          {/* Author */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-300 mb-3">Auteur</p>
            <p className="text-sm text-teal-100/80 mb-1">Bernadinho Ndombele</p>
            <Link
              href="https://lukau.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm text-teal-300 hover:text-white transition-colors"
            >
              Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-400/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-teal-200/60">
          <p>&copy; {new Date().getFullYear()} INFOIUT. Tous droits réservés.</p>
          <p>IUT de Blois &mdash; Stage du 08 au 27 juin</p>
        </div>
      </div>
    </footer>
  );
}