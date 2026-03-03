# CSS Kararlari

## 1. Breakpoint Secimi

Projede 3 ana breakpoint kullanildi:

- **Mobil (0 – 639px):** Varsayilan stil mobil icin yazildi (mobile-first). Tek sutunlu, dikey yiginma mantigi uygulanarak dar ekranlarda okunabilirlik on plana alindi.
- **Tablet (640px ve uzeri):** Icerik yatay yonlendirilmeye basladi. Header'da logo sola, nav saga yerlesti. Hakkimda bolumunde profil fotografi ve metin yan yana geldi. Proje kartlari `auto-fit` ile otomatik 2 sutuna gecti.
- **Masaustu (1024px ve uzeri):** Icerik genisligi `max-width: 1200px` ile sinirlandirildi ve ortalandi. Section padding'leri arttirildi.

Bu degerler cihaz modeline degil, icerigin gorsel olarak bozuldugu noktalara gore belirlendi.

## 2. Layout Tercihleri

- **Header icin Flexbox:** Header tek boyutlu bir duzene sahip (logo + nav yan yana veya alt alta). Flexbox bu tur tek eksenli hizalama icin idealdir. `flex-direction` ile mobilde dikey, tablette yatay gecis saglanir.
- **Navigasyon icin Flexbox:** Nav linkleri tek bir satir (veya sutun) boyunca dizilir. `flex-wrap` ve `gap` ile tasan elemanlar otomatik sarmalanir.
- **Proje kartlari icin CSS Grid:** Kartlar iki boyutlu bir izgara duzeni gerektirdigi icin Grid secildi. `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan responsive grid elde edildi. `auto-fit` kullanildi cunku bos sutunlarin daraltilip mevcut kartlarin genislemesi istendi.
- **Kart ici duzen icin Flexbox:** Her kart icinde `flex-direction: column` ile icerik dikey hizalandi. `flex-grow: 1` ile aciklama paragraflarinin farkli uzunluklarda olmasina ragmen kart alt kenarlari hizali tutuldu.

## 3. Design Tokens

- **Renk paleti:** Mevcut dark tema renkleri korundu (`#1e293b` arka plan, `#e2e8f0` metin, `#646cff` accent). Light mode icin `prefers-color-scheme` media query'si ile token degerleri override edildi. Boylece tema degisimi tek bir yerde kontrol ediliyor.
- **Spacing skalasi:** 4px tabanli bir skala (`0.25rem` – `4rem`) kullanildi. Bu tutarli bosluklar gorsel hiyerarsiyi guclendirir ve rastgele deger kullanilmasini engeller.
- **Fluid typography:** `clamp()` fonksiyonu ile font boyutlari ekran genisligine gore akici sekilde olceklenir. Minimum deger `1rem`'in altina dusurulmedi (erisilebilirlik). Her zaman `rem + vw` karisimi kullanildi, saf `vw` kullanimindan kacinildi (zoom destegi).

## 4. Responsive Stratejiler

- **Mobile-first yaklasim:** Tum CSS kurallari once mobil icin yazildi. Daha buyuk ekranlar icin `min-width` media query'leri ile ekleme yapildi. Bu sayede mobil kullanicilar gereksiz CSS indirmez.
- **Breakpoint'lerde degisen elemanlar:**
  - Header: `flex-direction: column` → `row`
  - Nav: dikey yigin → yatay satir
  - Hakkimda: tek sutun → iki sutun (foto + metin yan yana)
  - Proje kartlari: tek sutun → auto-fit grid → 2 sutun
  - Submit butonu: tam genislik → icerige gore genislik
- **Gorsel boyutlari:** Tum gorsellere `max-width: 100%; height: auto; display: block` uygulanarak responsive yapildi. Proje kartlarindaki gorsellerde `object-fit: cover` ile tutarli yukseklik saglandi.
