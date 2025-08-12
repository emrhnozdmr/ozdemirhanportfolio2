import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      {/* Profil resmi */}
      <motion.img
        src="https://via.placeholder.com/150"
        alt="Emirhan Özdemir"
        className="w-40 h-40 rounded-full border-4 border-slate-300 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      />

      {/* İsim */}
      <motion.h1
        className="mt-6 text-4xl font-bold text-slate-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Emirhan Özdemir
      </motion.h1>

      {/* Açıklama */}
      <motion.p
        className="mt-2 text-lg text-slate-600 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Frontend Developer • React & Tailwind • Modern Web UI/UX tutkunu
      </motion.p>

      {/* Butonlar */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:ornek@email.com"
          className="p-3 bg-green-600 text-white rounded-full hover:bg-green-500 transition"
        >
          <Mail size={20} />
        </a>
      </motion.div>

      {/* Projeler */}
      <motion.div
        className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-slate-800">
            Portfolio Sitesi
          </h2>
          <p className="mt-2 text-slate-600">
            Kişisel tanıtım ve proje listesi için modern, mobil uyumlu bir web
            sitesi.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-slate-800">Blog Platformu</h2>
          <p className="mt-2 text-slate-600">
            Basit ve hızlı React tabanlı blog sistemi.
          </p>
        </div>
      </motion.div>
    </div>
  );
}