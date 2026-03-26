// import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface PortfolioCardProps {
  title: string
  category: string
  image: string
  color: string
  index: number
  link?: string  // 👈 ADD THIS
}

export function PortfolioCard({
  title,
  category,
  image,
  color,
  index,
  link = '#',  // 👈 ADD THIS with default value
}: PortfolioCardProps) {
  // 👈 ADD THIS CLICK HANDLER
  const handleClick = () => {
    if (link && link !== '#') {
      window.open(link, '_blank')
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-100px',
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      onClick={handleClick}  // 👈 ADD THIS
      className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
    >
      {/* Rest of your component remains the same */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
        style={{
          backgroundColor: color,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end">
          <div>
            <p
              className="text-sm font-medium mb-2 tracking-wider uppercase"
              style={{
                color,
              }}
            >
              {category}
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              {title}
            </h3>
          </div>

          <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <ArrowUpRight className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500" />
    </motion.div>
  )
}