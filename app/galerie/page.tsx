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

  const galleryItems = [
    {
      title: 'IUT de Blois',
      src: '/assets/iutblois.jpg',
      alt: 'Bâtiment B',
      caption: 'St. place Jean Jeaures - IUT Blois',
    },
    {
      title: 'Entrée',
      src: '/assets/entre.jpg',
      alt: 'Bâtiment A',
      caption: 'Entrée et sortie',
    },
    {
      title: 'Rez-de-chaussée',
      src: '/assets/rezdechaussee.jpg',
      alt: 'Rez de chaussée',
      caption: 'Rez de chaussee',
    },
    {
      title: '3e Etage',
      src: '/assets/departinfo.jpg',
      alt: 'Département Informatique',
      caption: 'Departement Informatique',
    },
  ];

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
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {galleryItems.map((item, index) => (
                <motion.figure
                  key={index}
                  className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-sm"
                  variants={itemVariants}
                >
                  <div className="relative h-72 w-full bg-gray-200">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                    <figcaption className="text-sm text-gray-500">{item.caption}</figcaption>
                  </div>
                </motion.figure>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
