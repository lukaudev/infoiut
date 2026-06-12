"use client";

import Header from "../components/header";
import { motion } from "framer-motion";
import Footer from "../components/footer";

export default function LIFAT() {
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
      transition: { duration: 0.5 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
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
            LIFAT
          </motion.h1>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-700 text-lg mb-4">
             Laboratoire d&apos;Informatique Fondamentale et Appliquée de Tours
            </p>
            <p className="text-gray-600 mb-4">
              Ici, vous pouvez trouver des informations sur le programme LIFAT.
            </p>
            <motion.div
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4" variants={itemVariants}>
                Qu&apos;est-ce que c&apos;est l&apos;LIFAT?
              </motion.h2>
              <ul className="text-gray-700 space-y-2">
                <motion.li variants={itemVariants}>
                  Les recherches du Laboratoire d’Informatique Fondamentale et Appliquée de Tours (LIFAT) consistent à concevoir et développer des modèles, et à créer des algorithmes pour la fouille de données, la visualisation de données, l’apprentissage automatique, le traitement des langues naturelles et des images ou l’optimisation combinatoire. Le laboratoire est donc spécialisé en Sciences des Données, avec des spécialités reconnues dans les domaines de l’Intelligence Artificielle et de l’Optimisation.   
                </motion.li>
              </ul>
               <motion.h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-4" variants={itemVariants}>
                Thèmes de Recherche
              </motion.h2>
              <ul className="text-gray-700 space-y-2">
                <motion.li variants={itemVariants} className="list-disc list-inside">Informatique, Intelligence Artificielle  </motion.li>
                <motion.li variants={itemVariants} className="list-disc list-inside">Science des données (apprentissage, fouille de texte et de données, visualisation de données) et Optimisation discrète, analyse d’images et vision</motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
