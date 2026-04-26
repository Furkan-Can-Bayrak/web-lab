import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'dta-e-ticaret-yonetim',
    title: { tr: 'DTA Yayincilik - E-Ticaret & Yonetim Sistemi', en: 'DTA Yayincilik - E-Ticaret & Yonetim Sistemi' },
    subtitle: {
      tr: 'Laravel tabanli kurumsal e-ticaret backend projesi',
      en: 'Laravel tabanli kurumsal e-ticaret backend projesi',
    },
    description: {
      tr: 'Laravel tabanli e-ticaret sisteminde backend gelistirme ve mimari kararlar, PayTR iframe odeme entegrasyonu, stok ve siparis yonetimi modulleri ile teknik borc/performans iyilestirmeleri yaptim.',
      en: 'Laravel tabanli e-ticaret sisteminde backend gelistirme ve mimari kararlar, PayTR iframe odeme entegrasyonu, stok ve siparis yonetimi modulleri ile teknik borc/performans iyilestirmeleri yaptim.',
    },
    role: { tr: 'Backend Developer', en: 'Backend Developer' },
    problem: {
      tr: 'Kurumsal e-ticaret akislarinda guvenli odeme, stok-siparis yonetimi ve yuksek veri tutarliligini saglamak.',
      en: 'Kurumsal e-ticaret akislarinda guvenli odeme, stok-siparis yonetimi ve yuksek veri tutarliligini saglamak.',
    },
    architecture: {
      tr: ['Laravel backend', 'PayTR iframe odeme entegrasyonu', 'Stok ve siparis yonetimi modulleri'],
      en: ['Laravel backend', 'PayTR iframe odeme entegrasyonu', 'Stok ve siparis yonetimi modulleri'],
    },
    outcomes: {
      tr: ['Guvenli odeme ve siparis akislari hayata gecirildi', 'Stok/siparis modulleri ile operasyonel surec iyilesti', 'Refactor ve performans iyilestirmeleri uygulandi'],
      en: ['Guvenli odeme ve siparis akislari hayata gecirildi', 'Stok/siparis modulleri ile operasyonel surec iyilesti', 'Refactor ve performans iyilestirmeleri uygulandi'],
    },
    highlights: {
      tr: ['Laravel', 'PayTR', 'MySQL'],
      en: ['Laravel', 'PayTR', 'MySQL'],
    },
    tech: ['Laravel', 'MySQL', 'PayTR'],
    category: 'backend',
    featured: false,
    image: '/projeler/dta-yayincilik/dta-1.webp',
    gallery: ['/projeler/dta-yayincilik/dta-2.webp', '/projeler/dta-yayincilik/dta-3.webp', '/projeler/dta-yayincilik/dta-4.webp', '/projeler/dta-yayincilik/dta-5.webp', '/projeler/dta-yayincilik/dta-6.webp'],
    links: {
      demo: 'https://www.dtayayincilik.com.tr/',
    },
  },
  {
    id: 5,
    slug: 'laravel-starter-pack',
    title: { tr: 'Laravel Starter Pack - Clean Architecture Scaffold', en: 'Laravel Starter Pack - Clean Architecture Scaffold' },
    subtitle: {
      tr: 'Yeniden kullanilabilir Laravel proje altyapisi',
      en: 'Yeniden kullanilabilir Laravel proje altyapisi',
    },
    description: {
      tr: 'Service-Repository mimarisini temel alan bir Laravel scaffold gelistirdim. Migration, model, controller, service ve repository olusturma sureclerini tek komutla otomatiklestirdim.',
      en: 'Service-Repository mimarisini temel alan bir Laravel scaffold gelistirdim. Migration, model, controller, service ve repository olusturma sureclerini tek komutla otomatiklestirdim.',
    },
    role: { tr: 'Backend Developer', en: 'Backend Developer' },
    problem: {
      tr: 'Kurumsal Laravel projelerinde tekrarlayan kurulum ve katman olusturma islerini standartlastirmak.',
      en: 'Kurumsal Laravel projelerinde tekrarlayan kurulum ve katman olusturma islerini standartlastirmak.',
    },
    architecture: {
      tr: ['Service-Repository katmani', 'Code generation komutlari', 'Clean Architecture odakli klasor yapisi'],
      en: ['Service-Repository katmani', 'Code generation komutlari', 'Clean Architecture odakli klasor yapisi'],
    },
    outcomes: {
      tr: ['Tek komutla katman olusturma otomasyonu', 'Ekip ici standart gelistirme yapisi', 'Kod tekrarinin azaltilmasi'],
      en: ['Tek komutla katman olusturma otomasyonu', 'Ekip ici standart gelistirme yapisi', 'Kod tekrarinin azaltilmasi'],
    },
    highlights: {
      tr: ['Laravel', 'Service-Repository', 'Clean Architecture'],
      en: ['Laravel', 'Service-Repository', 'Clean Architecture'],
    },
    tech: ['Laravel'],
    category: 'backend',
    featured: false,
     image: '/projeler/laravel-starter-pack/laravel-starter-pack-1.webp',
    links: {},
  },
  {
    id: 6,
    slug: 'dreamind',
    title: { tr: 'Dreamind: AI Dream Interpreter - Mobil Uygulama Backend', en: 'Dreamind: AI Dream Interpreter - Mobil Uygulama Backend' },
    subtitle: {
      tr: 'Flutter tabanli mobil uygulama icin FastAPI backend',
      en: 'Flutter tabanli mobil uygulama icin FastAPI backend',
    },
    description: {
      tr: 'Flutter tabanli mobil uygulama icin FastAPI backend servisleri gelistirdim. Gemini LLM entegrasyonu, ruya gecmisi yonetimi, kredi bazli kullanim sistemi ve authentication mekanizmalari uzerinde calistim.',
      en: 'Flutter tabanli mobil uygulama icin FastAPI backend servisleri gelistirdim. Gemini LLM entegrasyonu, ruya gecmisi yonetimi, kredi bazli kullanim sistemi ve authentication mekanizmalari uzerinde calistim.',
    },
    role: {
      tr: 'Backend Developer',
      en: 'Backend Developer',
    },
    problem: {
      tr: 'Mobil uygulamada AI destekli ruya yorumu, kullanici gecmisi ve guvenli backend akislarinin tek bir servis katmaninda yonetilmesi gerekiyordu.',
      en: 'Mobil uygulamada AI destekli ruya yorumu, kullanici gecmisi ve guvenli backend akislarinin tek bir servis katmaninda yonetilmesi gerekiyordu.',
    },
    architecture: {
      tr: ['FastAPI backend servisleri', 'Gemini LLM API entegrasyonu', 'Kredi bazli kullanim akis mantigi', 'Dis authentication mekanizmalari'],
      en: ['FastAPI backend servisleri', 'Gemini LLM API entegrasyonu', 'Kredi bazli kullanim akis mantigi', 'Dis authentication mekanizmalari'],
    },
    outcomes: {
      tr: ['AI yorum sureci API uzerinden calisir hale getirildi', 'Ruya gecmisi yonetimi backend tarafinda tamamlandi', 'Docker ile containerize edilerek VPS uzerinde canli ortama alindi'],
      en: ['AI yorum sureci API uzerinden calisir hale getirildi', 'Ruya gecmisi yonetimi backend tarafinda tamamlandi', 'Docker ile containerize edilerek VPS uzerinde canli ortama alindi'],
    },
    highlights: {
      tr: ['FastAPI', 'Gemini LLM API entegrasyonu', 'Docker + VPS deployment'],
      en: ['FastAPI', 'Gemini LLM API entegrasyonu', 'Docker + VPS deployment'],
    },
    tech: ['FastAPI', 'Python', 'Flutter', 'AI API', 'Docker', 'VPS'],
    category: 'mobile',
    featured: true,
    image: '/projeler/dreamind/dreamind-1.webp',
    gallery: ['/projeler/dreamind/dreamind-2.webp'],
    links: { store: 'https://play.google.com/store/apps/details?id=com.ruyatabiri.ruya_tabiri_mobile' },
  },
  {
    id: 2,
    slug: 'erasmusgate',
    title: { tr: 'ErasmusGate - Erasmus Surec Yonetim Sistemi', en: 'ErasmusGate - Erasmus Surec Yonetim Sistemi' },
    subtitle: {
      tr: 'Erasmus basvuru ve degerlendirme sureclerini dijitallestiren backend sistem',
      en: 'Erasmus basvuru ve degerlendirme sureclerini dijitallestiren backend sistem',
    },
    description: {
      tr: 'Erasmus basvuru, degerlendirme ve raporlama sureclerini dijitallestiren kurumsal sistemin backend gelistirmesinde aktif rol aldim. Turna Portal ve OBS entegrasyonlariyla veri akislarini yonettim.',
      en: 'Erasmus basvuru, degerlendirme ve raporlama sureclerini dijitallestiren kurumsal sistemin backend gelistirmesinde aktif rol aldim. Turna Portal ve OBS entegrasyonlariyla veri akislarini yonettim.',
    },
    role: { tr: 'Backend Developer', en: 'Backend Developer' },
    problem: {
      tr: 'Kurumlar arasi ogrenci sureclerinde basvuru, degerlendirme ve raporlamayi tek platformda yonetmek.',
      en: 'Kurumlar arasi ogrenci sureclerinde basvuru, degerlendirme ve raporlamayi tek platformda yonetmek.',
    },
    architecture: {
      tr: ['Laravel backend', 'Turna Portal entegrasyonu', 'OBS entegrasyonu', 'Raporlama modulleri'],
      en: ['Laravel backend', 'Turna Portal entegrasyonu', 'OBS entegrasyonu', 'Raporlama modulleri'],
    },
    outcomes: {
      tr: ['Basvuru/degerlendirme surecleri dijitallesti', 'Harici sistem veri akislarinda sureklilik saglandi', 'Yogun modullerde query optimizasyonu ile performans artirildi'],
      en: ['Basvuru/degerlendirme surecleri dijitallesti', 'Harici sistem veri akislarinda sureklilik saglandi', 'Yogun modullerde query optimizasyonu ile performans artirildi'],
    },
    highlights: {
      tr: ['Laravel', 'MySQL', 'Harici sistem entegrasyonu'],
      en: ['Laravel', 'MySQL', 'Harici sistem entegrasyonu'],
    },
    tech: ['Laravel', 'MySQL'],
    category: 'backend',
    featured: false,
    image: '/projeler/erasmusgate/erasmusgate-1.webp',
    links: {
      demo: 'https://erasmusgate.firat.edu.tr/',
    },
  },
  {
    id: 19,
    slug: 'cybercortex',
    title: { tr: 'CyberCortex - Guvenlik Acigi Analiz Platformu', en: 'CyberCortex - Guvenlik Acigi Analiz Platformu' },
    subtitle: {
      tr: 'Sirket ici siber guvenlik analiz platformu',
      en: 'Internal cybersecurity analysis platform',
    },
    description: {
      tr: 'Sirket projesi oldugu icin teknik detay ve gorsel paylasimi sinirlidir. Tanitim sayfasi asagidadir.',
      en: 'As this is a company project, technical details and visuals are limited. The project page is provided below.',
    },
    role: { tr: 'Frontend Developer', en: 'Frontend Developer' },
    problem: {
      tr: 'Analiz sonuclarinin ekipler tarafindan hizli takip edilmesi.',
      en: 'Fast team-wide tracking of analysis results.',
    },
    architecture: {
      tr: ['Moduler arayuz gelistirme'],
      en: ['Modular interface development'],
    },
    outcomes: {
      tr: ['Kullanici deneyimi ve surec gorunurlugu iyilestirildi'],
      en: ['User experience and process visibility were improved'],
    },
    highlights: {
      tr: ['Blade', 'HTML', 'CSS', 'JavaScript'],
      en: ['Blade', 'HTML', 'CSS', 'JavaScript'],
    },
    tech: ['Blade', 'HTML', 'CSS', 'JavaScript'],
    category: 'fullstack',
    featured: false,
    image: '/projeler/gorsel-guncellenecek.svg',
    links: {
      source: 'https://prodrom.com/projeler/cybercortex',
    },
  },
  {
    id: 20,
    slug: 'atanma-akademik-kadro',
    title: { tr: 'Atanma - Akademik Kadro Atama Sistemi', en: 'Atanma - Akademik Kadro Atama Sistemi' },
    subtitle: {
      tr: 'Sirket ici akademik kadro yonetim platformu',
      en: 'Internal academic staffing platform',
    },
    description: {
      tr: 'Sirket projesi oldugu icin teknik detay ve gorsel paylasimi sinirlidir. Tanitim sayfasi asagidadir.',
      en: 'As this is a company project, technical details and visuals are limited. The project page is provided below.',
    },
    role: { tr: 'Backend Developer', en: 'Backend Developer' },
    problem: {
      tr: 'Atama sureclerinin daha hizli ve tutarli yurutilmesi.',
      en: 'Faster and more consistent staffing workflows.',
    },
    architecture: {
      tr: ['Kural bazli backend akis tasarimi'],
      en: ['Rule-based backend workflow design'],
    },
    outcomes: {
      tr: ['Sistem sureclerinin yonetilebilirligi artirildi'],
      en: ['System process manageability was improved'],
    },
    highlights: {
      tr: ['Laravel', 'Is kurali tasarimi', 'Otomatik degerlendirme'],
      en: ['Laravel', 'Is kurali tasarimi', 'Otomatik degerlendirme'],
    },
    tech: ['Laravel', 'MySQL'],
    category: 'backend',
    featured: false,
    image: '/projeler/gorsel-guncellenecek.svg',
    links: {
      source: 'https://prodrom.com/projeler/proassign',
    },
  },
  {
    id: 15,
    slug: 'ai-recipe-chatbot',
    title: { tr: 'AI Recipe Chatbot', en: 'AI Recipe Chatbot' },
    subtitle: {
      tr: 'Korunan mevcut proje',
      en: 'Korunan mevcut proje',
    },
    description: {
      tr: 'Kullanicinin malzemelerine gore tarif onerisi ureten chatbot projesi. Bu proje kullanici istegiyle mevcut hali korunarak tutuldu.',
      en: 'Kullanicinin malzemelerine gore tarif onerisi ureten chatbot projesi. Bu proje kullanici istegiyle mevcut hali korunarak tutuldu.',
    },
    role: {
      tr: 'Takim Kaptani & Backend Developer',
      en: 'Takim Kaptani & Backend Developer',
    },
    problem: {
      tr: 'Eldeki malzemelere gore hizli ve dogru tarif onerileri sunmak.',
      en: 'Eldeki malzemelere gore hizli ve dogru tarif onerileri sunmak.',
    },
    architecture: {
      tr: ['FastAPI backend', 'LangChain orchestration', 'ChromaDB', 'RAG tabanli yanit uretimi'],
      en: ['FastAPI backend', 'LangChain orchestration', 'ChromaDB', 'RAG tabanli yanit uretimi'],
    },
    outcomes: {
      tr: ['Kisa surede uctan uca teslim', 'RAG tabanli yanit kalitesi', 'Takim koordinasyonu'],
      en: ['Kisa surede uctan uca teslim', 'RAG tabanli yanit kalitesi', 'Takim koordinasyonu'],
    },
    highlights: {
      tr: ['FastAPI', 'LangChain', 'ChromaDB'],
      en: ['FastAPI', 'LangChain', 'ChromaDB'],
    },
    tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'ChromaDB'],
    category: 'ai',
    featured: true,
    image: '/projeler/recipe-chatbot/recipe-chatbot-1.webp',
    gallery: ['/projeler/recipe-chatbot/recipe-chatbot-2.webp', '/projeler/recipe-chatbot/recipe-chatbot-3.webp', '/projeler/recipe-chatbot/recipe-chatbot-4.webp', '/projeler/recipe-chatbot/recipe-chatbot-5.webp'],
    links: {},
  },
  {
    id: 10,
    slug: 'agesa-city',
    title: { tr: 'AgeSA City', en: 'AgeSA City' },
    subtitle: {
      tr: 'Korunan mevcut proje',
      en: 'Korunan mevcut proje',
    },
    description: {
      tr: 'Oyunlastirilmis finans platformu projesi. Bu proje kullanici istegiyle mevcut hali korunarak tutuldu.',
      en: 'Oyunlastirilmis finans platformu projesi. Bu proje kullanici istegiyle mevcut hali korunarak tutuldu.',
    },
    role: {
      tr: 'Takim Kaptani & Backend',
      en: 'Team Captain & Backend',
    },
    problem: {
      tr: 'Finansal okuryazarligi oyunlastirilmis bir deneyimle desteklemek.',
      en: 'Finansal okuryazarligi oyunlastirilmis bir deneyimle desteklemek.',
    },
    architecture: {
      tr: ['Dashboard tabanli SPA', 'JavaScript + CSS Grid', 'Oyunlastirilmis moduller'],
      en: ['Dashboard tabanli SPA', 'JavaScript + CSS Grid', 'Oyunlastirilmis moduller'],
    },
    outcomes: {
      tr: ['Kisitli surede teslim', 'Yuksek etkilesimli arayuz', 'Moduler frontend yapi'],
      en: ['Kisitli surede teslim', 'Yuksek etkilesimli arayuz', 'Moduler frontend yapi'],
    },
    highlights: {
      tr: ['JavaScript', 'CSS Grid', 'Frontend Architecture'],
      en: ['JavaScript', 'CSS Grid', 'Frontend Architecture'],
    },
    tech: ['JavaScript', 'CSS Grid', 'Frontend Architecture'],
    category: 'fullstack',
    featured: true,
    image: '/projeler/agesa-city/agesa-city-1.webp',
    gallery: ['/projeler/agesa-city/agesa-city-2.webp', '/projeler/agesa-city/agesa-city-3.webp'],
    links: {},
  },
  {
    id: 11,
    slug: 'verial',
    title: { tr: 'VeriAl', en: 'VeriAl' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'backend',
    featured: false,
    image: '/projeler/verial/verial-1.webp',
    gallery: ['/projeler/verial/verial-2.webp'],
    links: {
      demo: 'https://verial.firat.edu.tr/',
    },
  },
  {
    id: 14,
    slug: 'surec-takip',
    title: { tr: 'Surec Takip', en: 'Surec Takip' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'backend',
    featured: false,
    image: '/projeler/surec-takip/surec-takip-1.webp',
    links: {
      demo: 'https://surec.firat.edu.tr/',
    },
  },
  {
    id: 12,
    slug: 'lisansustu-egitim-bilgi-sistemi',
    title: { tr: 'Lisansustu Egitim Bilgi Sistemi', en: 'Lisansustu Egitim Bilgi Sistemi' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'backend',
    featured: false,
    image: '/projeler/lbys/lbys-1.webp',
    links: {
      demo: 'https://lbys.firat.edu.tr/',
    },
  },
  {
    id: 7,
    slug: 'firat-universitesi-resmi-web-sayfasi',
    title: { tr: 'Firat Universitesi Resmi Web Sayfasi', en: 'Firat Universitesi Resmi Web Sayfasi' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'fullstack',
    featured: false,
    image: '/projeler/firat-ana-sayfa/firat-1.webp',
    links: {
      demo: 'https://www.firat.edu.tr/tr',
    },
  },
  {
    id: 8,
    slug: 'malatya-turgut-ozal-universitesi-resmi-web-sayfasi',
    title: { tr: 'Malatya Turgut Ozal Universitesi Resmi Web Sayfasi', en: 'Malatya Turgut Ozal Universitesi Resmi Web Sayfasi' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'fullstack',
    featured: false,
    image: '/projeler/malatya-turgut-ozal-ana-sayfa/tozal-1.webp',
    links: {
      demo: 'https://www.ozal.edu.tr/',
    },
  },
  {
    id: 13,
    slug: '50-yil-hatira-diplomasi',
    title: { tr: 'Fırat 50. Yıl Hatıra Diplomasi', en: 'Fırat 50. Yıl Hatıra Diplomasi' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'fullstack',
    featured: false,
    image: '/projeler/hatira-diplomasi/hatira-diplomasi-1.webp',
    gallery: [
      '/projeler/hatira-diplomasi/hatira-diplomasi-2.webp',
    ],
    links: {
      demo: 'https://hatiradiplomasi.firat.edu.tr/',
    },
  },
  {
    id: 3,
    slug: 'arya-muzik',
    title: { tr: 'Arya Muzik', en: 'Arya Muzik' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'fullstack',
    featured: false,
    image: '/projeler/aryamusicart/aryamusicart-1.webp',
    gallery: [
      '/projeler/aryamusicart/aryamusicart-2.webp',
      '/projeler/aryamusicart/aryamusicart-3.webp',
      '/projeler/aryamusicart/aryamusicart-4.webp',
    ],
    links: {
      demo: 'https://aryamusicart.com/',
    },
  },
  {
    id: 4,
    slug: 'yenilmez-insaat',
    title: { tr: 'Yenilmez Insaat', en: 'Yenilmez Insaat' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'fullstack',
    featured: false,
    image: '/projeler/yenilmezinsaat/yenilmezinsaat-1.webp',
    links: {
      demo: 'https://yenilmezinsaat.com/',
    },
  },
  {
    id: 9,
    slug: '2kai-yazilim-web-sayfasi',
    title: { tr: '2kai yazilim web sayfasi', en: '2kai yazilim web sayfasi' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'fullstack',
    featured: false,
    image: '/projeler/gorsel-guncellenecek.svg',
    links: {},
  },
  {
    id: 16,
    slug: 'paycell-kampus-cuzdani',
    title: { tr: 'Paycell kampus cuzdani', en: 'Paycell kampus cuzdani' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'mobile',
    featured: false,
    image: '/projeler/gorsel-guncellenecek.svg',
    links: {},
  },
  {
    id: 17,
    slug: 'kombin-maker',
    title: { tr: 'Kombin maker', en: 'Kombin maker' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'mobile',
    featured: false,
    image: '/projeler/gorsel-guncellenecek.svg',
    links: {},
  },
  {
    id: 18,
    slug: 'fitlestik-kanka',
    title: { tr: 'Fitlestik kanka', en: 'Fitlestik kanka' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Backend Developer', en: 'Backend Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'mobile',
    featured: false,
    image: '/projeler/gorsel-guncellenecek.svg',
    links: {},
  },
  {
    id: 21,
    slug: 'sozluk',
    title: { tr: 'Sozluk', en: 'Sozluk' },
    subtitle: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    description: {
      tr: 'Bu proje kullanici tarafindan eklendi. Icerik gecici olarak olusturuldu ve daha sonra guncellenecektir.',
      en: 'This project was added by the user. The content is temporary and will be updated later.',
    },
    role: { tr: 'Developer', en: 'Developer' },
    problem: {
      tr: 'Gecici icerik',
      en: 'Temporary content',
    },
    architecture: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    outcomes: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    highlights: {
      tr: ['Gecici icerik'],
      en: ['Temporary content'],
    },
    tech: ['TBD'],
    category: 'backend',
    featured: false,
    image: '/projeler/gorsel-guncellenecek.svg',
    links: {},
  },
]

