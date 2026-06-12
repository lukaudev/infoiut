"use client";

import Header from "../components/header";
import { motion } from "framer-motion";
import Footer from "../components/footer";

export default function MMI() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className="w-full p-8">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-gray-800 mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
           BUT MMI
          </motion.h1>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-700 text-lg mb-4">
              Bienvenue à la page du Metiers du Multimédia et de l&apos;Internet (MMI)!
            </p>
            <p className="text-gray-600 mb-4">
              Ici, vous pouvez trouver des informations sur le programme de MMI.
            </p>
            
            <motion.div
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4" variants={itemVariants}>
                Objectifs de la formation
              </motion.h2>
              <ul className=" text-gray-700 space-y-2">
                <motion.li variants={itemVariants}>L&apos;objectif du BUT MMI (Métiers du Multimédia et de l&apos;Internet) est de former en 3 ans des étudiants (Bac+3) polyvalents dans les domaines des nouvelles technologies, des médias et du web.</motion.li>
              </ul>
            </motion.div>
            <motion.div
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4" variants={itemVariants}>
                Informations du Programme
              </motion.h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <motion.li variants={itemVariants}>Durée: 3 ans</motion.li>
                <motion.li variants={itemVariants}>Domaine: Technologie et Multimédia</motion.li>
                <motion.li variants={itemVariants}>Modalité: Présentielle</motion.li>
              </ul>
            </motion.div>
             <motion.div
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4" variants={itemVariants}>
                Apprentissage
              </motion.h2>
              <ul className=" text-gray-700 space-y-2">
                <motion.li variants={itemVariants}>
                  Le BUT MMI est disponible en apprentissage pour les étudiants de deuxième année et troisième année. Après une année d&apos;acquisition de connaissances en première année MMI, vous est proposée la possibilité d&apos;avoir un contrat en alternance de 2 ans pour le parcours Stratégie de communication - Expérience utilisateur et pour le parcours Développement Web et Dispositifs Interactifs. Un contrat d&apos;alternance d&apos;un an en 3ème année est possible en fonction de nombre de places ou via-Ecandidats.
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
