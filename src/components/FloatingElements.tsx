// import React from 'react'
import { motion } from 'framer-motion'
export function FloatingElements() {
  // Generate random positions and animations for background elements
  const elements = Array.from({
    length: 15,
  }).map((_, i) => {
    const size = Math.random() * 100 + 50
    const isCircle = Math.random() > 0.5
    const colors = [
      'bg-neon-cyan/10',
      'bg-neon-purple/10',
      'bg-neon-pink/10',
      'bg-neon-blue/10',
    ]
    const color = colors[Math.floor(Math.random() * colors.length)]
    return {
      id: i,
      size,
      isCircle,
      color,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }
  })
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-purple/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-cyan/10 blur-[150px]" />
      <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-neon-pink/10 blur-[100px]" />

      {/* Floating geometric shapes */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.color} backdrop-blur-3xl border border-white/5`}
          style={{
            width: el.size,
            height: el.size,
            borderRadius: el.isCircle ? '50%' : '16px',
            left: `${el.initialX}vw`,
            top: `${el.initialY}vh`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: el.isCircle ? 0 : [0, 180, 360],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: el.delay,
          }}
        />
      ))}
    </div>
  )
}
