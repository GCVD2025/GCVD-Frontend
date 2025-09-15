"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="container mx-auto px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              전시회 소개
            </h2>
            <p className="text-gray-600 leading-relaxed">
              졸업 전시회에 오신 것을 환영합니다. 이곳에서는 다양한 작품들을
              만나보실 수 있습니다.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
