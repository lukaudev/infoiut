"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import { motion } from "framer-motion";

export default function RT() {
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
            R&T
          </motion.h1>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-700 text-lg mb-4">
              Bienvenue à la page de Réseaux et Télécommunications (R&T)!
            </p>
            <p className="text-gray-600 mb-4">
              Ici, vous pouvez trouver des informations sur les projets de réseaux et télécommunications de l&apos;IUT.
            </p>
            <motion.div
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-2xl font-semibold text-gray-800 mb-4" variants={itemVariants}>
               Objectifs du programme R&T
              </motion.h2>
              <ul className=" text-gray-700 space-y-2">
                <motion.p variants={itemVariants}>
                  Le B.U.T R&T forme en trois ans des professionnels en réseaux et télécommunications, cadres intermédiaires de leur entreprise ou de leur organisation, capables de comprendre, de mettre en œuvre, de configurer et de maintenir des équipements et systèmes d’informations, tout en assurant leur sécurité physique et logicielle. En plus des compétences scientifiques et techniques, le B.U.T R&T met l’accent sur les savoir-être, l’éthique, la capacité à travailler en équipe dans un environnement international et la compréhension des enjeux des technologies modernes.
                </motion.p>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
