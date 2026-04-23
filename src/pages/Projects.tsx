import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { projects as allProjects } from '../data/projects'
import { applyFilters } from '../utils/projectHelpers'
import { useLocale } from '../i18n/LocaleContext'

export default function Projects() {
  const { locale } = useLocale()
  const [search, setSearch] = useState('')

  const filtered = useMemo(
    () => applyFilters(allProjects, search, 'all', 'order', 'asc', locale),
    [search, locale],
  )

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">{locale === 'tr' ? 'Tüm Projeler' : 'All Projects'}</h1>

      <div className="space-y-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={locale === 'tr' ? 'Proje ara...' : 'Search projects...'}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70"
          >
            <img src={project.image} alt={project.title[locale]} className="h-44 w-full object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{project.title[locale]}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle[locale]}</p>
              <Link to={`/projects/${project.slug}`} className="text-sm text-cyan-600">
                {locale === 'tr' ? 'Detayı İncele' : 'See Details'} →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

