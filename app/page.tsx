"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {

  const textVariants = {
    hidden: {
      opacity: 0, y: 10,
      transition: { duration: 0.3 },
    },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };


  return (
    <main className="flex min-h-screen flex-col bg-gray-100">

      {/* Hero Section */}
      <section className="w-full shadow-2xs shadow-black/10 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={cardVariants} className="mb-4">
                <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Experience de stage
                </span>
              </motion.div>

              <motion.h1
                variants={cardVariants}
                className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-6"
              >
                Stage à l&apos;IUT
              </motion.h1>

              <motion.p
                variants={cardVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Découvrez mon expérience de stage à l&apos;INFOIUT et comment elle m&apos;a permis de développer mes compétences professionnelles.
              </motion.p>

              <motion.div
                variants={cardVariants}
                className="flex gap-4"
              >
                <Link href="#programmes">
                  <button className="text-md bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <span>→</span> Découvrez mon parcours
                  </button>
                </Link>
                <button className="text-md border-2 cursor-pointer border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-colors">
                  ↓ Télécharger mon rapport
                </button>
              </motion.div>
            </motion.div>

            {/* Right side with abstract design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block relative h-96"
            >
              <div className="absolute inset-0 bg-linear-to-br to-teal-400 from-teal-50 rounded-3xl opacity-10 blur-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="/assets/illustration.png"
                  alt="INFOIUT Reference"
                  width={600}
                  height={400}
                  className="object-contain h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*Info Cards Section */}
      <section className="w-full mt-10 shadow-2xs shadow-black/10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            className="text-lg font-bold mb-2"
          >
            Details sur le stage
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            className="text-sm mb-4"
          >
            Informations sur le stage
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <motion.div variants={cardVariants} className="shadow-md border rounded-sm p-6 border-t-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-600 mb-2 hidden">3</div>
              <h3 className="text-gray-700 font-semibold">Entreprise d&apos;accueil</h3>
              <p className="text-sm text-gray-600">IUT de Blois</p>
            </motion.div>

            <motion.div variants={cardVariants} className="shadow-md border rounded-sm p-6 border-t-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-2 hidden">∞</div>
              <h3 className="text-gray-700 font-semibold">Periode de stage</h3>
              <p className="text-sm text-gray-600">06 à 27 juin</p>
            </motion.div>

            <motion.div variants={cardVariants} className="shadow-md border rounded-sm p-6 border-t-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600 mb-2 hidden">📚</div>
              <h3 className="text-gray-700 font-semibold">Mon role</h3>
              <p className="text-sm text-gray-600">Observation et Development Web</p>
            </motion.div>

            <motion.div variants={cardVariants} className="shadow-md border rounded-sm p-6 border-t-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-2 hidden">🎯</div>
              <h3 className="text-gray-700 font-semibold">Objectifs</h3>
              <p className="text-sm text-gray-600">Avenir professionnel</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      

      {/* A propos de moi */}
      <section className="p-15 bg-white flex items-center justify-center flex-col">
       
        <motion.div className="pb-10 card-apropos px-20 flex items-center h-32 " variants={cardVariants} initial="hidden" whileInView="visible">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="text-2xl font-bold mb-4 text-center"
            >A propos de moi</motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="text-xl mb-5 text-center"
            >
              Etudient en informatique passioné par le développment et les nouvelles technlogies. Ce stage m&apos;a permis de mettre en pratique mes connaissances et de reveler des défis concrets au sein d&apos;un environnement académique.
              
              <Link href="https://lukau.vercel.app/" >
                <button className="text-sm bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mt-4">
                  <span>→</span> Découvrez mon parcours
                </button>
              </Link>

            </motion.p>
          </div>
        </motion.div>

      </section>

      {/* Parcours Section */}
      <section className=" w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <motion.div variants={cardVariants} className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mon Parcours à l&apos;IUT
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Découvrez les étapes clés de mon expérience à l&apos;IUT de Blois
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              {[
                { number: 1, title: "Admission", desc: "Inscription et bienvenue" },
                { number: 2, title: "Integration", desc: "Decouvert de l'entreprise" },
                { number: 3, title: "Presentantion", desc: "Presentantion de chaque endroit" },
                { number: 4, title: "Mission", desc: "Mission" },
                { number: 5, title: "Expérience", desc: "Stage en entreprise" },
                { number: 6, title: "Avenir", desc: "Opportunités carrière" },
              ].map((item) => (
                <motion.div
                  key={item.number}
                  variants={cardVariants}
                  className="relative"
                >
                  <div className="bg-linear-to-br from-teal-50 to-blue-50 p-8 transition-all duration-800 text-center px-2 py-4 rounded-md">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-teal-500 to-blue-500 rounded-full text-white font-bold text-2xl mb-4">
                      {item.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                  {item.number < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-teal-500 to-transparent" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
