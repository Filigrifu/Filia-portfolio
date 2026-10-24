[README.md](https://github.com/user-attachments/files/33912701/README.md)
<div align="center">

# 🌌 Fili's Portfolio

### Cosmic Aurora Experience

**Portfolio web interaktif yang memadukan Desain Grafis, Web Graphics, dan Audio Teknologi.**

![HTML5](https://img.shields.io/badge/HTML5-0b0716?style=for-the-badge&logo=html5&logoColor=00ffd5)
![CSS3](https://img.shields.io/badge/CSS3-0b0716?style=for-the-badge&logo=css3&logoColor=9d4edd)
![JavaScript](https://img.shields.io/badge/JavaScript-0b0716?style=for-the-badge&logo=javascript&logoColor=00ffd5)
![Web Audio](https://img.shields.io/badge/Web_Audio_API-0b0716?style=for-the-badge&logoColor=c026d3)
![No Framework](https://img.shields.io/badge/Zero-Dependencies-0b0716?style=for-the-badge&logoColor=white)
![Mobile Ready](https://img.shields.io/badge/Mobile-Optimized-0b0716?style=for-the-badge&logoColor=00ffd5)

*Dikembangkan untuk mata kuliah **Grafis dan Teknologi** — Semester 7*

</div>

---

## 📖 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Fitur Utama](#-fitur-utama)
- [Teknologi](#️-teknologi)
- [Performa & Mobile](#-performa--mobile)
- [Struktur Proyek](#-struktur-proyek)
- [Cara Menjalankan](#-cara-menjalankan)
- [Identitas Visual](#-identitas-visual)
- [Kredit](#-kredit)

---

## ✨ Tentang Proyek

**Fili's Portfolio** adalah website portfolio single-page bertema **Cosmic Aurora**: ungu nebula yang dalam, cahaya cyan berpendar, dan antarmuka interaktif ala perangkat keras futuristik.

Seluruh proyek dibangun **tanpa framework dan tanpa build step**. Hanya HTML, CSS, dan JavaScript murni, jadi ringan, mudah dibaca, dan bisa langsung dibuka di browser.

| 🎯 Tujuan | Penjelasan |
| :--- | :--- |
| **Showcase** | Menampilkan karya branding, visual design, dan fotografi |
| **Eksperimen** | Mengeksplorasi Canvas, WebRTC, dan Web Audio API |
| **Pengalaman** | Memberikan pengunjung pengalaman yang imersif dan interaktif |

---

## 🚀 Fitur Utama

### 🪐 1. Home Hero Sinematik
- **Starfield prosedural** dengan bintang berkedip dan meteor jatuh.
- **Animasi typewriter** pada judul dan subjudul.
- **Aurora warp transition** saat memulai perjalanan.

### 📸 2. Playground: Retro-Cyber Photo Booth
| Fitur | Detail |
| :--- | :--- |
| 🎥 **Kamera real-time** | Webcam aktif hanya saat dibutuhkan, tanpa konsumsi sumber daya di latar belakang |
| ⏱️ **Auto 4-pose** | Hitung mundur 3-2-1 dengan bunyi sonar dan flash shutter |
| 🎨 **Filter Green & Purple** | Hanya warna hijau zamrud (65°–170°) dan ungu kosmik (250°–335°) yang dipertahankan, sisanya menjadi monokrom |
| 🎞️ **Filmstrip generator** | Strip PNG resolusi tinggi dengan lubang sprocket film retro |
| 📱 **Layout adaptif** | Horizontal di desktop, vertikal ala bookmark di mobile |

### 🔊 3. Cosmic Synthesizer (100% Web Audio API)
> Semua suara disintesis langsung di browser. **Tanpa file audio eksternal**, latensi 0 ms, dan bisa dipakai offline.

| Interaksi | Suara |
| :--- | :--- |
| Klik | Chirp holografik dengan sub-bass |
| Shutter kamera | Impuls energi tinggi dan ionisasi kristal |
| Toggle filter | Melodi dua nada menaik |
| Download | Chime warp-drive 3 nada |
| Countdown | Ping sonar teknologi tinggi |

### 🗂️ 4. Works Showcase
- Kategori **Branding**, **Visual Design**, dan **Photography**.
- **Lightbox gallery** dengan dukungan panah keyboard dan transisi halus.

### ✉️ 5. Kontak Kartu Flip 3D
- Kartu 3D: info kontak di depan, kotak pesan retro-cyber di belakang.
- Integrasi `mailto` untuk pengiriman satu klik.

### 📱 6. Navigasi Responsif
- Header transparan yang tersembunyi di halaman Home demi imersi penuh.
- Menu hamburger fullscreen bergaya glassmorphism dengan tipografi aktif yang menyala.

---

## 🛠️ Teknologi

| Domain | Teknologi |
| :--- | :--- |
| **Struktur** | Semantic HTML5, SVG Vector |
| **Styling & Motion** | Vanilla CSS3 (Custom Properties, Flexbox, Grid, 3D Transform, Glassmorphism) |
| **Interaktivitas** | Vanilla JavaScript (ES6+, DOM, Async/Await) |
| **Audio** | Web Audio API (`AudioContext`, `OscillatorNode`, `BiquadFilterNode`, `GainNode`) |
| **Grafis & Vision** | HTML5 Canvas 2D (isolasi warna HSL tingkat piksel) |
| **Kamera** | WebRTC `navigator.mediaDevices.getUserMedia` |
| **Tipografi** | *Chakra Petch* & *Outfit* (Google Fonts) |

---

## ⚡ Performa & Mobile

Versi layar kecil sudah dioptimalkan agar halus dan hemat baterai:

| Optimasi | Dampak |
| :--- | :--- |
| 🖼️ **Kompresi aset** | Ukuran folder gambar turun dari **154 MB menjadi 39 MB** (−74,6%) |
| 💤 **Lazy loading** | Gambar di bawah layar pertama dimuat dengan `loading="lazy"` dan `decoding="async"` |
| ⭐ **Bintang adaptif** | 22 bintang di mobile (desktop: 75), sehingga beban DOM dan compositor lebih ringan |
| 🎥 **Canvas kamera ringan** | Mobile memakai resolusi 180px dan throttle ~30 FPS, jadi perangkat tidak cepat panas |
| 🧱 **`content-visibility: auto`** | Section di luar layar tidak di-paint hingga di-scroll |
| 🌫️ **Blur & shadow ringan** | `backdrop-filter` dan box-shadow dikurangi untuk menekan beban GPU |
| 👆 **`touch-action: manipulation`** | Respons sentuh instan tanpa jeda tap 300 ms |
| 🖱️ **Kursor native** | Kursor SVG custom dinonaktifkan di layar sentuh |

---

## 📂 Struktur Proyek

```text
porto_fili/
├── index.html                 # Dokumen utama single-page
├── assets/
│   ├── css/
│   │   └── style.css          # Design tokens, animasi & media queries responsif
│   ├── js/
│   │   └── script.js          # Synthesizer audio, engine Photo Booth & UI controller
│   └── images/
│       ├── about/             # Foto profil & pendidikan
│       ├── works/             # Galeri karya (Burgreens, Snail-it, Photography)
│       └── backgroundref.png  # Latar belakang Cosmic Aurora
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

Tidak perlu npm, bundler, atau build step.

### Opsi 1: Buka langsung
Klik dua kali [`index.html`](index.html) atau buka di browser modern (Chrome, Edge, Safari, Firefox).

### Opsi 2: Server lokal (disarankan untuk akses kamera)
```bash
python3 -m http.server 8000
```
Lalu buka `http://localhost:8000`.

> [!TIP]
> Browser modern mewajibkan origin aman (`localhost` atau `https://`) untuk mengizinkan akses webcam pada fitur Photo Booth.

---

## 🎨 Identitas Visual

| Warna | Kode | Peran |
| :--- | :--- | :--- |
| 🌑 Cosmic Deep Dark | `#0b0716` / `#0d0918` | Latar utama |
| 💠 Aurora Emerald Cyan | `#00ffd5` / `#008f8c` | Aksen dan glow |
| 🔮 Nebula Violet & Magenta | `#9d4edd` / `#c026d3` | Aksen sekunder |
| ⚪ Pure Radiant White | `#ffffff` | Teks dan highlight |

---

## 📄 Kredit

Dibuat oleh **Fili** untuk **Semester 7 — Grafis dan Teknologi**.

*Seluruh hak cipta atas karya kreatif dan fotografi proyek ini dimiliki oleh pembuatnya.*

<div align="center">

✦ ✧ ✦

*Dibuat dengan 💜 dan cahaya aurora.*

</div>
