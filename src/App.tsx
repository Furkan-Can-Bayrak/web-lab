import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import UIKit from './pages/UIKit'

function ThemeToggle() {
  return (
    <button
      onClick={() => document.documentElement.classList.toggle('dark')}
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Tema degistir"
    >
      <span className="dark:hidden">&#9790;</span>
      <span className="hidden dark:inline">&#9728;</span>
    </button>
  )
}

function PortfolioPage() {
  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      <ThemeToggle />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Furkan Can Bayrak
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Iletisim
                </a>
              </li>
              <li>
                <a
                  href="/uikit"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkimda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="/profil.jpg"
                alt="Furkan Can Bayrak'in vesikalik fotografi"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba, ben Furkan Can Bayrak. Yazilim Muhendisligi ogrencisiyim.
                Modern web teknolojileriyle kullanici dostu arayuzler olusturuyorum.
              </p>
              <ul
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Beceri etiketleri"
              >
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  Laravel
                </li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  PHP
                </li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  JavaScript
                </li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  Java
                </li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  C#
                </li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  Flutter
                </li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  Spring Boot
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim */}
        <section
          id="projeler"
          className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="Ruya Tabiri"
                image="/ruya-tabiri.jpg"
                imageAlt="Ruya Tabiri uygulamasi ana ekran goruntusu"
              >
                <p>
                  Kullanicilarin ruyalarini yorumlatan kapsamli bir mobil
                  uygulama.
                </p>
              </Card>
              <Card
                variant="elevated"
                title="Akademik Icerik Sistemi"
                image="/proexpert.png"
                imageAlt="Proexpert Akademik Icerik Sistemi ekran goruntusu"
              >
                <p>
                  Makale, bildiri, kitap ve proje gibi akademik iceriklerin
                  listelendigi ve yonetilebildigi bir platform.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Iletisim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <form className="space-y-4" noValidate>
              <fieldset className="space-y-4 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <legend className="text-lg font-semibold text-blue-700 dark:text-blue-300 px-2">
                  Iletisim Formu
                </legend>
                <Input id="name" label="Ad Soyad" required minLength={2} />
                <Input
                  id="email"
                  label="E-posta"
                  type="email"
                  required
                />
                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                  >
                    <option value="">-- Seciniz --</option>
                    <option value="is">Is Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Oneri</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mesajiniz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit">
                  Gonder
                </Button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Furkan Can BAYRAK. Tum haklari saklidir.</p>
        <p className="mt-1">
          <a
            href="https://github.com/SametAltuner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>{' '}
          |{' '}
          <a
            href="https://www.linkedin.com/in/samet-altuner-910712294"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </>
  )
}

function App() {
  const isUIKitPath = window.location.pathname === '/uikit'

  if (isUIKitPath) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <ThemeToggle />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline"
          >
            ← Portfolyoya don
          </a>
        </div>
        <UIKit />
      </div>
    )
  }

  return <PortfolioPage />
}

export default App
