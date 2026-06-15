"use client";

import Header from "./components/header";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.02 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.02 },
    },
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className="w-full p-8 mt-8">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-gray-800 mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Bienvenue sur INFOIUT
          </motion.h1>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-700 text-lg mb-4">
              INFOIUT c&apos;est un portail d&apos;information pour les étudiants de l&apos;IUT de Tours. Vous pouvez trouver des informations sur les différents programmes, les actualités, les événements et bien plus encore.

            </p>
            <p className="text-gray-600 mb-6">
              Sélectionnez l&apos;un des programmes ci-dessous pour en savoir plus :
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/lifat">
                <motion.div
                  className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg hover:bg-blue-100 transition-all cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
            
                  <h3 className="text-xl font-bold text-blue-700 mb-2">LIFAT</h3>
                  <p className="text-gray-600">
                    Laboratoire d&apos;Informatique Fondamentale et Appliquée de Tours
                  </p>
                </motion.div>
              </Link>
              <Link href="/mmi">
                <motion.div
                  className="bg-green-50 border-2 border-green-200 rounded-lg p-6 hover:shadow-lg hover:bg-green-100 transition-all cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-bold text-green-700 mb-2">MMI</h3>
                  <p className="text-gray-600">Métiers du Multimédia et de l&apos;Internet</p>
                </motion.div>
              </Link>
              <Link href="/rt">
                <motion.div
                  className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg hover:bg-purple-100 transition-all cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-bold text-purple-700 mb-2">R&T</h3>
                  <p className="text-gray-600">Réseaux et Télécommunications</p>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
