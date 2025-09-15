"use client";

import { motion } from "framer-motion";

export default function Works() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="flex max-w-7xl mx-auto mt-8 px-4">
        {/* 좌측 필터 사이드바 */}
        <aside className="w-48">
          <ul className="space-y-4 text-sm text-gray-600 font-medium">
            <li className="text-pink-500 font-bold text-lg">ALL</li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>Branding</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>Graphic</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>UI/UX</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>Illust</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>Editorial</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>Media</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>3D</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-cyan-200 rounded"></span>
              <span>Game</span>
            </li>
          </ul>
        </aside>

        {/* 프로젝트 카드 그리드 */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-8">
          {/* 카드 예시들 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((work) => (
            <motion.div
              key={work}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: work * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md border"
            >
              <div className="bg-gray-200 h-48"></div>
              <div className="p-4">
                <h3 className="text-sm font-bold">프로젝트 제목 {work}</h3>
                <p className="text-xs text-gray-500 mb-2">홍길동</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="flex items-center gap-1 text-orange-400 font-medium">
                    Branding
                  </span>
                  <span className="flex items-center gap-1 text-pink-400 font-medium">
                    Illust
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
