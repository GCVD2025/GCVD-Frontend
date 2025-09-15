"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedCard, FadeInText, AnimatedButton } from "@/components";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </motion.div>

        <motion.ol
          className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </motion.ol>

        <motion.div
          className="flex gap-4 items-center flex-col sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </motion.a>
          <motion.a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read our docs
          </motion.a>
        </motion.div>

        {/* Framer Motion 예시 섹션 */}
        <FadeInText delay={0.8} className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Framer Motion 애니메이션 예시
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              아래 카드들을 호버하고 클릭해보세요!
            </p>
          </div>
        </FadeInText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <AnimatedCard
            delay={1.0}
            className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-lg text-white shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">페이드 인</h3>
            <p className="text-blue-100">
              페이지 로드 시 부드럽게 나타나는 애니메이션
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={1.2}
            className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-lg text-white shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">호버 효과</h3>
            <p className="text-green-100">
              마우스 오버 시 확대되는 인터랙티브 애니메이션
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={1.4}
            className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-lg text-white shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">클릭 효과</h3>
            <p className="text-orange-100">
              클릭 시 축소되는 피드백 애니메이션
            </p>
          </AnimatedCard>
        </div>

        <div className="flex gap-4 items-center justify-center flex-wrap">
          <AnimatedButton
            delay={1.6}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            onClick={() => alert("애니메이션 버튼이 클릭되었습니다!")}
          >
            클릭해보세요
          </AnimatedButton>

          <AnimatedButton
            delay={1.8}
            href="https://www.framer.com/motion/"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            Framer Motion 문서
          </AnimatedButton>
        </div>
      </main>
      <motion.footer
        className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </motion.a>
        <motion.a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </motion.a>
        <motion.a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </motion.a>
      </motion.footer>
    </div>
  );
}
