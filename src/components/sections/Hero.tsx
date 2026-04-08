import { motion } from 'motion/react'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'

export default function Hero() {
  const { locale } = useLocale()
  return (
    <section id="hero" className="relative min-h-[86vh] md:min-h-[92vh] flex items-center px-4 pt-10 pb-16 md:pb-20 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-400/25 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[0.85fr_1.15fr_0.9fr] gap-6 md:gap-8 items-center">
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-1 mx-auto lg:mx-0"
        >
          <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl">
            <img src="/profil.jpg" alt="Furkan Can Bayrak" className="w-full h-full object-cover" />
          </div>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="order-2 lg:order-2 space-y-5"
        >
          <span className="inline-flex rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
            {locale === 'tr' ? 'Yazılım Mühendisi Adayı & Full-Stack Developer' : 'Software Engineer Candidate & Full-Stack Developer'}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Furkan Can Bayrak
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {locale === 'tr'
              ? 'Backend ağırlıklı web ve mobil uygulamalar geliştiren, Laravel, FastAPI ve NestJS ile REST API tabanlı sistemler tasarlayan bir yazılım mühendisi adayıyım.'
              : 'Backend ağırlıklı web ve mobil uygulamalar geliştiren, Laravel, FastAPI ve NestJS ile REST API tabanlı sistemler tasarlayan bir yazılım mühendisi adayıyım.'}
          </p>

          <div className="flex flex-wrap gap-2.5">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 transition text-sm"
            >
              {locale === 'tr' ? 'Projeleri Keşfet' : 'Explore Projects'} <ArrowRight size={16} />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm"
            >
              {locale === 'tr' ? 'Benimle İletişime Geç' : 'Get In Touch'} <Download size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href="/Furkan_Can_Bayrak_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              CV (TR)
            </a>
            <a
              href="/Furkan_Can_Bayrak_CV_En.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              CV (EN)
            </a>
            <a
              href="https://www.linkedin.com/in/furkan-can-bayrak/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Furkan-Can-Bayrak"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:furkancanb957@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              furkancanb957@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-3 lg:order-3 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/65 p-6 backdrop-blur-sm"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            {locale === 'tr' ? 'Öne Çıkan Uzmanlıklar' : 'Core Expertise'}
          </p>
          <ul className="space-y-3 text-sm">
            <li className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/60">Backend: Laravel, FastAPI, NestJS, REST API</li>
            <li className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/60">Mimari: Service-Repository, Clean Code, SOLID</li>
            <li className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/60">Veri ve Entegrasyon: MySQL, PostgreSQL, MSSQL, Gemini API</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

