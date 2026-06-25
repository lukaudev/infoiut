"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./components/footer";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const infoCards = [
    {
      img: "/assets/iutblois.jpg",
      title: "Entreprise d'accueil",
      subtitle: "IUT de Blois",
      accent: "border-blue-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      ),
      dialogTitle: "L'entreprise d'accueil",
      dialogText: "Le stage s'est déroulé au sein de l'IUT de Blois, dans un environnement académique favorisant l'innovation, la collaboration et l'apprentissage pratique.",
      dialogDetails: [
        "Lieu : IUT de Blois",
        "Type d'environnement : universitaire et professionnel",
      ],
    },
    {
      title: "Période de stage",
      subtitle: "08 au 27 juin",
      accent: "border-green-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      ),
      dialogTitle: "Période du stage",
      dialogText: "Le stage s'est organisé sur une période de trois semaines, permettant une immersion progressive dans les activités du lieu d'accueil.",
      dialogDetails: [
        "Dates : du 08 au 27 juin",
        "Cadence : suivi régulier sur la durée du stage",
      ],
    },
    {
      title: "Mon rôle",
      subtitle: "Découverte et Développement Web",
      accent: "border-purple-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      dialogTitle: "Mon rôle durant le stage",
      dialogText: "J'ai pu observer les pratiques du milieu et contribuer au développement web à travers des tâches de recherche, de mise en forme et d'amélioration de contenus.",
      dialogDetails: [
        "Rôle principal : observation et développement web",
        "Compétences travaillées : autonomie, rigueur, communication",
        "Résultat attendu : mieux comprendre le quotidien professionnel",
      ],
    },
    {
      title: "Objectifs",
      subtitle: "Avenir professionnel",
      accent: "border-orange-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      dialogTitle: "Les objectifs du stage",
      dialogText: "Ce stage m'a aidé à clarifier mes aspirations professionnelles et à mieux comprendre les métiers liés au développement et à l'informatique.",
      dialogDetails: [
        "Objectif professionnel : construire un projet de carrière",
        "Objectif personnel : renforcer sa confiance et son autonomie",
        "Apprentissage : découvrir les attentes du milieu professionnel",
      ],
    },
  ];

  const activiteCards = [
    {
      title: "Apprentissage",
      desc: "Participation aux cours",
      dialogTitle: "Apprentissage en cours",
      dialogText: "J'ai participé à plusieurs cours dispensés à l'IUT, ce qui m'a permis de découvrir les méthodes pédagogiques utilisées et d'approfondir mes connaissances techniques.",
      dialogDetails: [
        "Participation active aux séances de cours",
        "Prise de notes et suivi des enseignements",
        "Échanges avec les enseignants et les étudiants",
      ],
    },
    {
      title: "Amélioration",
      desc: "Améliorer mon portfolio",
      dialogTitle: "Amélioration du portfolio",
      dialogText: "Durant le stage, j'ai travaillé sur l'amélioration de mon portfolio personnel afin de mieux présenter mes compétences et mes réalisations.",
      dialogDetails: [
        "Refonte visuelle et ergonomique du site",
        "Ajout de nouveaux projets et descriptions",
        "Optimisation des performances et du référencement",
      ],
    },
    {
      title: "Développement Web",
      desc: "Développement d'un site web présentant le stage à l'IUT",
      dialogTitle: "Développement du site de stage",
      dialogText: "J'ai conçu et développé ce site web qui présente mon expérience de stage à l'IUT de Blois, en utilisant des technologies modernes comme Next.js et Tailwind CSS.",
      dialogDetails: [
        "Technologies utilisées : Next.js, Tailwind CSS, Framer Motion",
        "Conception de l'interface et de l'expérience utilisateur",
        "Intégration des animations et des composants interactifs",
        "Déploiement et mise en ligne du projet",
      ],
    },
    {
      title: "Découverte",
      desc: "Observation des projets",
      dialogTitle: "Découverte des projets de l'IUT",
      dialogText: "J'ai pu observer et analyser différents projets réalisés par les étudiants et les équipes pédagogiques, ce qui m'a donné un aperçu concret du travail effectué à l'IUT.",
      dialogDetails: [
        "Observation de projets étudiants en MMI et Informatique",
        "Analyse des méthodologies de travail employées",
        "Discussions avec les porteurs de projets",
      ],
    },
    {
      title: "Recherches",
      desc: "Recherches sur MMI, LIFAT et R&T",
      dialogTitle: "Recherches sur les départements",
      dialogText: "J'ai effectué des recherches approfondies sur les trois départements principaux de l'IUT : MMI (Métiers du Multimédia et de l'Internet), LIFAT (Laboratoire d'Informatique Fondamentale et Appliquée de Tours) et R&T (Réseaux et Télécommunications).",
      dialogDetails: [
        "MMI : découverte des formations en multimédia et design web",
        "LIFAT : compréhension des axes de recherche en informatique",
        "R&T : exploration des formations en réseaux et télécommunications",
        "Synthèse des informations collectées pour le rapport de stage",
      ],
    },
    {
      title: "Évaluation",
      desc: "Conception des projets des élèves de MMI",
      dialogTitle: "Évaluation des projets MMI",
      dialogText: "J'ai assisté et participé à l'évaluation des projets réalisés par les étudiants du département MMI, ce qui m'a permis de comprendre les critères d'excellence attendus dans ce domaine.",
      dialogDetails: [
        "Observation des soutenances de projets étudiants",
        "Prise en compte des critères créatifs et techniques",
        "Échanges avec les enseignants sur les méthodes d'évaluation",
      ],
    },
    {
      title: "Restitution Master",
      desc: "Exploration de portails sémantiques par programmation, utilisation des API pour la demande des données.",
      dialogTitle: "Restitution Master – Portails sémantiques",
      dialogText: "J'ai suivi une restitution de travaux de Master portant sur l'exploration de portails sémantiques via la programmation et l'utilisation d'API pour l'extraction de données structurées.",
      dialogDetails: [
        "Exploration de portails de données ouvertes (open data)",
        "Requêtes via des API REST et SPARQL",
        "Traitement et visualisation des données récupérées",
        "Présentation des résultats sous forme de rapports",
      ],
    },
    {
      title: "Restitution Master",
      desc: "Extraction-Chargement-Transformation",
      dialogTitle: "Restitution Master – ETL",
      dialogText: "Cette restitution portait sur le processus ETL (Extraction, Transformation, Chargement), une technique fondamentale en ingénierie des données permettant de collecter, nettoyer et intégrer des données provenant de sources hétérogènes.",
      dialogDetails: [
        "Extraction : collecte de données depuis diverses sources",
        "Transformation : nettoyage, normalisation et enrichissement des données",
        "Chargement : intégration dans une base de données cible",
        "Cas d'usage présentés : analyse de données académiques",
      ],
    },
  ];

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
    <main className="flex min-h-screen flex-col bg-gray-100 overflow-hidden">
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
                  Expérience de stage
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
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="#parcours">
                  <button className="w-full sm:w-auto text-md bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    Découvrez mon parcours  <span>→</span>
                  </button>
                </Link>
                <Link href={"/assets/Rapport.pdf"} target="_blank">
                  <button className="w-full sm:w-auto text-md border-2 cursor-pointer border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Télécharger mon rapport</span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
            {/* Right side with abstract design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block relative h-72 lg:h-96"
            >
              <div className="absolute inset-0 bg-linear-to-br to-teal-400 from-teal-50 rounded-3xl opacity-10 blur-3xl" />
              <div className="relative h-full flex items-center justify-center cardhover">
                <Image
                  src="/assets/iutdeblois-design.png"
                  alt="INFOIUT Reference"
                  width={800}
                  height={600}
                  loading="eager"
                  className="object-contain h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="w-full mt-10 shadow-2xs shadow-black/10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            className="text-lg font-bold mb-2"
          >
            Détails sur le stage
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
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {infoCards.map((card, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.button
                    variants={cardVariants}
                    className={`w-full text-left shadow-md border rounded-sm p-6 border-t-4 ${card.accent} cardhover cursor-pointer`}>
                    {card.icon}
                    <h3 className="text-gray-700 font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.subtitle}</p>
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle>{card.dialogTitle}</DialogTitle>
                    <DialogDescription>{card.dialogText}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-2 rounded-lg bg-gray-50 p-4">
                    {card.dialogDetails.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-gray-700">
                        {detail}
                      </p>
                    ))}
                    {card.img ? (
                      <div className="mt-4 overflow-hidden rounded-lg">
                        <Image
                          src={card.img}
                          alt={card.title}
                          width={800}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ) : null}
                  </div>
                  <DialogClose asChild>
                    <button className="bg-teal-600 text-white font-medium text-md rounded-md active:bg-teal-700 hover:bg-teal-500 py-2">
                      Fermer
                    </button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            ))}
          </motion.div>
        </div>
      </section>

      {/* À propos de moi */}
      <section className="bg-white flex items-center justify-center flex-col cardhover py-16 px-6 sm:px-8 lg:px-12 mt-10">
        <motion.div className="w-full max-w-6xl px-0 py-12 sm:px-8 lg:px-12" variants={cardVariants} initial="hidden" whileInView="visible">
          <div className="mx-auto">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            >À propos de moi</motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="text-base sm:text-lg leading-relaxed text-center text-gray-700 max-w-3xl mx-auto"
            >
              Étudiant en informatique passionné par le développement et les nouvelles technologies. Ce stage m&apos;a permis de mettre en pratique mes connaissances et de relever des défis concrets au sein d&apos;un environnement académique.
            </motion.div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="https://lukau.vercel.app/" target="_blank">
                <button className="w-full sm:w-auto text-sm bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  En savoir plus sur moi
                  <span>→</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Parcours Section */}
      <section className="w-full bg-white py-20" id="parcours">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}>
          <div className="max-w-6xl mx-auto px-8 lg:px-12">
            <motion.div variants={cardVariants} className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Mon Parcours à l&apos;IUT
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Découvrez les étapes clés de mon expérience à l&apos;IUT de Blois
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              {[
                { number: 1, title: "Admission", desc: "Inscription et bienvenue" },
                { number: 2, title: "Intégration", desc: "Découverte de l'entreprise" },
                { number: 3, title: "Présentation", desc: "Présentation des lieux" },
                { number: 4, title: "Mission", desc: "1ère mission" },
                { number: 5, title: "Expérience", desc: "Stage en entreprise" },
                { number: 6, title: "Avenir", desc: "Opportunités de carrière" },
              ].map((item) => (
                <motion.div
                  key={item.number}
                  variants={cardVariants}
                  className="relative"
                >
                  <div className="p-8 transition-all duration-800 text-center px-2 py-4 rounded-md cardhover bg-gray-50 border border-gray-200">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-teal-500 to-gray-500 text-white font-bold text-2xl mb-4 rounded-full">
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
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-linear-to-r from-teal-500 to-transparent" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Activités Section — Timeline */}
      <section className="w-full py-20 bg-gray-300 bg-imageiut">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <motion.div variants={cardVariants} className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Qu&apos;est-ce que j&apos;ai fait pendant mon stage ?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Découvrez les activités et les missions que j&apos;ai réalisées pendant mon stage à l&apos;IUT de Blois
              </p>
            </motion.div>

            {/* Timeline container */}
            <div className="relative">
              {/* Vertical center line — hidden on mobile, visible md+ */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-teal-400/40" />

              <motion.div className="flex flex-col gap-12" variants={containerVariants}>
                {activiteCards.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <Dialog key={index}>
                      <motion.div
                        variants={cardVariants}
                        className={`relative flex flex-col md:flex-row items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                      >
                        {/* Card */}
                        <div className="w-full md:w-[calc(50%-2.5rem)]">
                          <DialogTrigger asChild>
                            <button className="w-full text-left bg-white/90 backdrop-blur-sm border border-teal-100 shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
                              {/* Step badge */}
                              <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                                Étape {index + 1}
                              </span>
                              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-sm text-gray-500 leading-relaxed">
                                {item.desc}
                              </p>
                              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
                                Voir les détails
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                              </span>
                            </button>
                          </DialogTrigger>
                        </div>

                        {/* Center dot — only md+ */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 border-4 border-white shadow-md items-center justify-center z-10 text-white text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>

                        {/* Mobile dot + line */}
                        <div className="flex md:hidden items-center gap-3 w-full">
                          <div className="w-8 h-8 rounded-full bg-teal-500 border-4 border-white shadow text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </div>
                          {index < activiteCards.length - 1 && (
                            <div className="flex-1 h-0.5 bg-teal-300/50" />
                          )}
                        </div>

                        {/* Empty spacer on the opposite side (desktop) */}
                        <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                      </motion.div>

                      <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                          <DialogTitle>{item.dialogTitle}</DialogTitle>
                          <DialogDescription>{item.dialogText}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 space-y-2 rounded-lg bg-gray-50 p-4">
                          {item.dialogDetails.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-gray-700">
                              • {detail}
                            </p>
                          ))}
                        </div>
                        <DialogClose asChild>
                          <button className="bg-teal-600 text-white font-medium text-md rounded-md active:bg-teal-700 hover:bg-teal-500 py-2">
                            Fermer
                          </button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}