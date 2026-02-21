"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const stack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
]

const MarqueeRow = ({ direction, speed = 20 }: { direction: "left" | "right"; speed?: number }) => {
  // Repeating the stack to ensure smooth infinite loop and full screen coverage
  const content = [...stack, ...stack, ...stack, ...stack]

  return (
    <div
      className="flex overflow-hidden relative z-0 w-full py-3"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-8 md:gap-16 flex-nowrap"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            {/* Real logo images with proper sizing and responsive behavior */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 opacity-60 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
              <Image
                src={item.logo || "/placeholder.svg"}
                alt={`${item.name} logo`}
                width={40}
                height={40}
                className="w-full h-full object-contain dark:invert-[0.85] dark:brightness-200"
                unoptimized
              />
            </div>
            {/* Text - default opacity reduced, full opacity and contrast color on hover */}
            <span className="font-mono text-lg md:text-xl font-bold tracking-tight text-slate-400 dark:text-slate-600 opacity-60 group-hover:opacity-100 group-hover:text-slate-900 dark:group-hover:text-white transition-all duration-300 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const TechMarquee: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full py-4">
      <MarqueeRow direction="left" speed={40} />
      <MarqueeRow direction="right" speed={50} />
    </div>
  )
}

export default TechMarquee
