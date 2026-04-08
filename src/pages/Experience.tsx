import { motion } from 'motion/react'
import { useLocale } from '../i18n/LocaleContext'

const items = [
  {
    period: { tr: 'Haziran 2024 - Mart 2025 (9 ay)', en: 'Haziran 2024 - Mart 2025 (9 ay)' },
    title: { tr: 'Fırat Üniversitesi - Dijital Dönüşüm ve Yazılım Ofisi', en: 'Fırat Üniversitesi - Dijital Dönüşüm ve Yazılım Ofisi' },
    desc: {
      tr: 'Laravel tabanlı kurumsal projelerde backend geliştirme, dinamik form ve raporlama modülleri, harici sistem entegrasyonları ve performans optimizasyonu üzerine çalıştım.',
      en: 'Laravel tabanlı kurumsal projelerde backend geliştirme, dinamik form ve raporlama modülleri, harici sistem entegrasyonları ve performans optimizasyonu üzerine çalıştım.',
    },
    status: { tr: 'Tamamlandı', en: 'Tamamlandı' },
    logo: '/logos/DDYO.png',
    org: { tr: 'Web Developer', en: 'Web Developer' },
  },
  {
    period: { tr: 'Mart 2025 - Şubat 2026 (11 ay)', en: 'Mart 2025 - Şubat 2026 (11 ay)' },
    title: { tr: 'Dromor ICT Solutions', en: 'Dromor ICT Solutions' },
    desc: {
      tr: 'Laravel tabanlı projelerde backend ağırlıklı geliştirme, Service-Repository mimarisi, yetkilendirme ve iş kuralları odaklı modüller ile refactor/performance iyileştirmeleri geliştirdim.',
      en: 'Laravel tabanlı projelerde backend ağırlıklı geliştirme, Service-Repository mimarisi, yetkilendirme ve iş kuralları odaklı modüller ile refactor/performance iyileştirmeleri geliştirdim.',
    },
    status: { tr: 'Tamamlandı', en: 'Tamamlandı' },
    logo: '/vite.svg',
    org: { tr: 'Full Stack Developer', en: 'Full Stack Developer' },
  },
]

export default function Experience() {
  const { locale } = useLocale()
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">{locale === 'tr' ? 'Deneyim' : 'Experience'}</h1>
      <div className="relative pl-7 space-y-4">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-300 dark:bg-slate-700" />
        {items.map((item, idx) => (
          <motion.article
            key={item.title.en}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.06 }}
            className="relative rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white/70 dark:bg-slate-900/60"
          >
            <span className="absolute -left-[1.4rem] top-6 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-cyan-100 dark:ring-cyan-950" />
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="group relative w-10 h-10 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md">
                  <img src={item.logo} alt={item.org[locale]} className="w-full h-full object-cover" />
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-white/20 via-transparent to-cyan-200/20" />
                </div>
                <div>
                  <p className="text-xs text-cyan-600 mb-1">{item.period[locale]}</p>
                  <h3 className="font-semibold text-lg">{item.title[locale]}</h3>
                </div>
              </div>
              <span className="text-[11px] px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                {item.org[locale]}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{item.desc[locale]}</p>
            <span className="mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
              {item.status[locale]}
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

