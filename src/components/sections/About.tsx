import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'

export default function About() {
  const { locale } = useLocale()
  return (
    <section id="about" className="py-8 md:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/75 dark:bg-slate-900/60 backdrop-blur-sm p-5 md:p-6"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {locale === 'tr' ? 'Hakkımda' : 'About'}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Backend ağırlıklı web ve mobil uygulamalar geliştiren Yazılım Mühendisliği 3. sınıf öğrencisiyim. Laravel, FastAPI ve NestJS ile REST API tabanlı backend sistemleri geliştiriyor; Clean Code ve SOLID prensipleriyle çalışıyorum.'
            : 'Backend ağırlıklı web ve mobil uygulamalar geliştiren Yazılım Mühendisliği 3. sınıf öğrencisiyim. Laravel, FastAPI ve NestJS ile REST API tabanlı backend sistemleri geliştiriyor; Clean Code ve SOLID prensipleriyle çalışıyorum.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Gemini LLM gibi yapay zeka servislerini API üzerinden sistemlere entegre ediyorum. Service-Repository mimarisi, performans optimizasyonu ve sürdürülebilir backend tasarımı odaklı projeler geliştiriyorum.'
            : 'Gemini LLM gibi yapay zeka servislerini API üzerinden sistemlere entegre ediyorum. Service-Repository mimarisi, performans optimizasyonu ve sürdürülebilir backend tasarımı odaklı projeler geliştiriyorum.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Fırat Üniversitesi DDYO ve Prodrom ICT Solutions deneyimlerimde yoğun veri işleyen kurumsal sistemlerde modüler backend geliştirme, refactor ve teknik borç azaltma süreçlerinde aktif görev aldım.'
            : 'Fırat Üniversitesi DDYO ve Prodrom ICT Solutions deneyimlerimde yoğun veri işleyen kurumsal sistemlerde modüler backend geliştirme, refactor ve teknik borç azaltma süreçlerinde aktif görev aldım.'}
        </p>
      </motion.div>
    </section>
  )
}

