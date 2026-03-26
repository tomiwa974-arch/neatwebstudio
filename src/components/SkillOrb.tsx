// import React from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
interface SkillOrbProps {
  name: string
  icon: LucideIcon
  color: string
  delay: number
  size?: 'sm' | 'md' | 'lg'
}
export function SkillOrb({
  name,
  icon: Icon,
  color,
  delay,
  size = 'md',
}: SkillOrbProps) {
  const sizeClasses = {
    sm: 'w-24 h-24 text-sm',
    md: 'w-32 h-32 text-base',
    lg: 'w-40 h-40 text-lg',
  }
  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay,
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 2, // Offset the floating animations
        }}
        className={`
          ${sizeClasses[size]} 
          glass-panel rounded-full 
          flex flex-col items-center justify-center 
          gap-2 relative z-10
          transition-colors duration-500
          hover:bg-slate-800/80
        `}
      >
        {/* Glow effect that reveals on hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{
            backgroundColor: color,
          }}
        />

        {/* Border gradient that rotates on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />

        <Icon
          size={iconSizes[size]}
          style={{
            color,
          }}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <span className="font-display font-medium text-slate-200 group-hover:text-white transition-colors">
          {name}
        </span>
      </motion.div>
    </motion.div>
  )
}
