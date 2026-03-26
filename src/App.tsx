import { useEffect } from 'react'
import onslgImage from './images/onslg.png'
import AnniesImage from './images/Annies.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Atom,
  FileCode2,
  Braces,
  Server,
  FileCode,
  GitBranch,
  Wind,
  Palette,
  Code2,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { FloatingElements } from './components/FloatingElements'
import { SkillOrb } from './components/SkillOrb'
import { PortfolioCard } from './components/PortfolioCard'

export default function App() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  const skills = [
    {
      name: 'React',
      icon: Atom,
      color: '#00D8FF',
      size: 'lg' as const,
    },
    {
      name: 'TypeScript',
      icon: FileCode2,
      color: '#3178C6',
      size: 'md' as const,
    },
    {
      name: 'JavaScript',
      icon: Braces,
      color: '#F7DF1E',
      size: 'md' as const,
    },
    {
      name: 'AdonisJS',
      icon: Server,
      color: '#5A45FF',
      size: 'md' as const,
    },
    {
      name: 'PHP',
      icon: FileCode,
      color: '#777BB4',
      size: 'sm' as const,
    },
    {
      name: 'Tailwind',
      icon: Wind,
      color: '#06B6D4',
      size: 'lg' as const,
    },
    {
      name: 'GitHub',
      icon: GitBranch,
      color: '#FFFFFF',
      size: 'sm' as const,
    },
    {
      name: 'Design',
      icon: Palette,
      color: '#EC4899',
      size: 'md' as const,
    },
  ]

  const projects = [
    {
      title: 'Onslg Project',
      category: 'Web Development',
      image: onslgImage, 
      color: '#00D9FF',
      link: 'https://onlgstreets.com', // Replace with your actual project URL
    },
    {
      title: 'In devlopment',
      category: 'Web Development',
      image: AnniesImage,
      color: '#A855F7',
      link: 'https://your-second-project.com', // Replace with actual URL
    },
    {
      title: 'Coming Soon ',
      category: '',
      image: '',
      color: '#EC4899',
      link: 'https://your-third-project.com', // Replace with actual URL
    },
    {
      title: 'Coming Soon',
      category: '',
      image: '',
      color: '#0EA5E9',
      link: 'https://your-fourth-project.com', // Replace with actual URL
    },
  ]

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-neon-purple/30 selection:text-white font-sans">
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="font-display font-bold text-xl tracking-tight"
          >
            NEATWEB<span className="text-neon-cyan">.</span>
          </motion.div>
          <motion.a
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            href="#contact"
            className="text-sm font-medium hover:text-neon-cyan transition-colors"
          >
            Let's Talk
          </motion.a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <motion.div
            style={{
              y,
              opacity,
            }}
            className="max-w-5xl mx-auto text-center mt-20"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-neon-cyan mb-8"
            >
              <Sparkles size={16} />
              <span>Digital Studio</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.9] mb-6"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              NEATWEB
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink">
                STUDIO
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light mb-12"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              Crafting exceptional digital experiences through code and design.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                View Selected Work
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-32 px-6 relative" id="about">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-100px',
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                  Developer by day.
                  <br />
                  <span className="text-slate-500">Designer by night.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-400">
                  <p>
                    I bridge the gap between aesthetics and functionality. As a
                    hybrid web developer and graphic designer, I don't just
                    write code—I craft visual stories that live on the web.
                  </p>
                  <p>
                    Whether it's a complex React application or a striking brand
                    identity, I bring a unique perspective that ensures the
                    final product is both beautiful and robust.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="relative"
              >
                <div className="aspect-square rounded-full glass-panel p-8 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <Code2
                    size={120}
                    className="text-white/80 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Constellation Section */}
        <section className="py-32 px-6 relative overflow-hidden" id="skills">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                My Arsenal
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life.
              </p>
            </motion.div>

            {/* Creative Skills Visualization */}
            <div className="relative min-h-[600px] flex items-center justify-center">
              {/* Central Element */}
              <motion.div
                className="absolute z-20 w-48 h-48 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shadow-[0_0_100px_rgba(168,85,247,0.4)]"
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(168,85,247,0.4)',
                    '0 0 100px rgba(0,217,255,0.6)',
                    '0 0 60px rgba(168,85,247,0.4)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <span className="font-display font-bold text-2xl text-white">
                  NEATWEB
                </span>
              </motion.div>

              {/* Orbiting/Floating Skills */}
              <div className="absolute inset-0 max-w-4xl mx-auto">
                {/* Top Left */}
                <div className="absolute top-[10%] left-[15%]">
                  <SkillOrb {...skills[0]} delay={0.1} />
                </div>
                {/* Top Right */}
                <div className="absolute top-[20%] right-[10%]">
                  <SkillOrb {...skills[1]} delay={0.3} />
                </div>
                {/* Middle Left */}
                <div className="absolute top-[45%] left-[5%]">
                  <SkillOrb {...skills[2]} delay={0.5} />
                </div>
                {/* Middle Right */}
                <div className="absolute top-[50%] right-[5%]">
                  <SkillOrb {...skills[3]} delay={0.2} />
                </div>
                {/* Bottom Left */}
                <div className="absolute bottom-[20%] left-[20%]">
                  <SkillOrb {...skills[4]} delay={0.6} />
                </div>
                {/* Bottom Right */}
                <div className="absolute bottom-[15%] right-[25%]">
                  <SkillOrb {...skills[5]} delay={0.4} />
                </div>
                {/* Far Top */}
                <div className="absolute top-[5%] left-[50%] -translate-x-1/2">
                  <SkillOrb {...skills[6]} delay={0.7} />
                </div>
                {/* Far Bottom */}
                <div className="absolute bottom-[5%] left-[50%] -translate-x-1/2">
                  <SkillOrb {...skills[7]} delay={0.8} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-32 px-6 relative" id="work">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                  Selected Work
                </h2>
                <p className="text-slate-400 max-w-md">
                  A showcase of recent projects blending technical precision
                  with creative design.
                </p>
              </div>
              <button className="text-neon-cyan hover:text-white transition-colors flex items-center gap-2 font-medium">
                View All Projects <ArrowRight size={16} />
              </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <PortfolioCard 
                  key={project.title} 
                  {...project} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6 relative" id="contact">
          <div className="max-w-4xl mx-auto text-center glass-panel rounded-3xl p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-purple/10 pointer-events-none" />

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Let's build something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                  neat.
                </span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                Currently available for freelance opportunities. If you have a
                project that needs some creative coding, I'd love to hear about
                it.
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('neatwebstudio@outlook.com')
                  alert('Email address copied to clipboard!')
                }}
                className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <Mail size={20} />
                neatwebstudio@outlook.com
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Neatweb Studio. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}
