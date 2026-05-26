import { useEffect } from 'react'
import onlgstreetsImage from './Images/onlgstreets.png'
import AnniesImage from './Images/Annies.png'
import bankingImage from './Images/banking.png'
import icebergImage from './Images/iceberg.png'
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
      category: 'Data website',
      image: onlgstreetsImage, 
      color: '#00D9FF',
      link: 'https://onlgstreets.com',
    },
    {
      title: 'Iceberg',
      category: 'Premium restaurant ;lamding page and menu',
      image: icebergImage,
      color: '#00D9FF',
      link: 'https://iceberg-front.vercel.app',
    },
    {
      title: 'Fashion collection (E-commerce)',
      category: 'Currently in Developmen',
      image: AnniesImage,
      color: '#A855F7',
      link: '',
    },
    {
      title: 'Vault Pay (Online Banking) ',
      category: 'this is a demo project(unfinished)',
      image: bankingImage,
      color: '#EC4899',
      link: 'https://online-banking-nu-eight.vercel.app',
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
                className="inline-flex items-center gap-2 md:gap-3 bg-white text-slate-950 px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] whitespace-nowrap mb-8"
              >
                <Mail size={16} className="md:w-5 md:h-5" />
                <span className="text-sm md:text-base">neatwebstudio@outlook.com</span>
              </button>

              {/* Social Media Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/2347079621137?text=Hello%20%F0%9F%91%8B%20I%20came%20across%20your%20contact%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#25D366] transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.212.6 4.285 1.648 6.078L.002 23.998l5.96-1.646C7.69 23.317 9.803 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.7-.547-5.237-1.494l-.375-.225-3.54.978.977-3.46-.225-.38A9.946 9.946 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">WhatsApp</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/neatweb_studio?igsh=MWxiYTB5eWY2Z2FlcA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:from-30% hover:via-[#d62976] hover:via-50% hover:to-[#962fbf] transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(214,41,118,0.5)]"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.835.335 4.012.784c-.844.457-1.56 1.118-2.181 1.739-.621.621-1.282 1.337-1.739 2.181-.449.823-.654 1.763-.712 3.04C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.263 2.217.712 3.04.457.844 1.118 1.56 1.739 2.181.621.621 1.337 1.282 2.181 1.739.823.449 1.763.654 3.04.712 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.277-.058 2.217-.263 3.04-.712.844-.457 1.56-1.118 2.181-1.739.621-.621 1.282-1.337 1.739-2.181.449-.823.654-1.763.712-3.04.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.263-2.217-.712-3.04-.457-.844-1.118-1.56-1.739-2.181-.621-.621-1.337-1.282-2.181-1.739-.823-.449-1.763-.654-3.04-.712C15.668.014 15.259 0 12 0z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Instagram</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#0A66C2] transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-black transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.589 6.686a4.5 4.5 0 0 1-4.5-4.5h-3.5v13.5a2.5 2.5 0 1 1-2.5-2.5h.5V9.186h-.5a6 6 0 1 0 6 6v-7.5a8.5 8.5 0 0 0 4.5 1.3v-3.5z"/>
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">TikTok</span>
                </a>
              </div>
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