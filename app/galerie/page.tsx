"use client";

import Header from "../components/header";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import Image from "next/image";

export default function Galerie() {
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
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-gray-800 mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Galerie
          </motion.h1>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-700 text-lg mb-4">
               Ici, vous pouvez trouver les photos de quelques endroits de l&apos;IUT de Tours à Blois. 
            </p>
            
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accueil</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image  src="/assets/lifat.png" alt="Bâtiment B" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment B - Accueil</figcaption>
                    </figure>
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Secretariat</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image src="/assets/lifat.png" alt="Bâtiment A" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment A - Secrétariat</figcaption>
                    </figure>
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Salle A</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image  src="/assets/lifat.png" alt="Bâtiment B" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment B - Salle A</figcaption>
                    </figure>
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Secretariat</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image src="/assets/lifat.png" alt="Bâtiment A" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment A - Secrétariat</figcaption>
                    </figure>
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Salle A</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image src="/assets/lifat.png" alt="Bâtiment C" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment C - Salle A</figcaption>
                    </figure>
                </motion.div>

                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accueil</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image  src="/assets/lifat.png" alt="Bâtiment B" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment B - Accueil</figcaption>
                    </figure>
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Secretariat</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image src="/assets/lifat.png" alt="Bâtiment A" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment A - Secrétariat</figcaption>
                    </figure>
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Salle A</h2>
                    <figure className="w-full bg-gray-50 border border-gray-100">
                        <Image src="/assets/lifat.png" alt="Bâtiment C" className="w-full" width={100} height={150} />
                        <figcaption className="text-sm text-gray-500 mt-2">Bâtiment C - Salle A</figcaption>
                    </figure>
                </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
