"use client";

import { motion } from "framer-motion";

export default function Guest() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="container mx-auto px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Guest Book</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              방명록
            </h2>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((comment) => (
                <motion.div
                  key={comment}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: comment * 0.1 }}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-800">
                      방문자 {comment}
                    </span>
                    <span className="text-sm text-gray-500">
                      2024.01.{comment}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    전시회가 정말 인상적이었습니다. 좋은 작품들을 많이 볼 수
                    있어서 기뻤어요!
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              방명록 작성
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="방명록을 작성해주세요"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                작성하기
              </button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
