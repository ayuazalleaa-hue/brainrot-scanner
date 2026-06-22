# 🧠 Brainrot Scanner — TikTok Live Edition

Website scanner brainrot species untuk digunakan saat **Live TikTok**. Viewer ketik nama di chat → host ketik ke website → hasil muncul dengan rarity, species, dan animasi keren!

---

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1 — Upload ke GitHub
1. Buka [github.com](https://github.com) dan login.
2. Klik tombol **+** → **New repository**.
3. Isi nama repo, contoh: `brainrot-scanner`.
4. Pilih **Public**, lalu klik **Create repository**.
5. Upload semua file ini:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - Folder `assets/` (opsional, untuk gambar species)

### Langkah 2 — Aktifkan GitHub Pages
1. Di repo, klik tab **Settings**.
2. Klik menu **Pages** di sidebar kiri.
3. Di bagian **Source**, pilih branch **main** dan folder **/ (root)**.
4. Klik **Save**.
5. Tunggu 1-2 menit, lalu akses di:
   ```
   https://username.github.io/brainrot-scanner/
   ```

---

## 📁 Struktur Folder

```
brainrot-scanner/
├── index.html        ← Halaman utama
├── style.css         ← Semua styling & animasi
├── script.js         ← Logika scan, rarity, species
├── README.md         ← Panduan ini
└── assets/
    └── species/      ← (Opsional) gambar tiap species
        ├── tralalero-bananero.png
        ├── ballerina-galonina.png
        └── ...
```

---

## 🎮 Cara Pakai Saat Live TikTok

1. Buka website di browser (fullscreen dengan F11).
2. Saat viewer ketik nama di chat TikTok...
3. Ketik nama mereka di kolom input website.
4. Tekan **Enter** atau klik tombol **SCAN**.
5. Animasi scanning akan berjalan ~2-3 detik.
6. Hasil muncul dengan species, rarity, dan stats!

---

## 🖼️ Menambah Gambar Species (Opsional)

Saat ini gambar menggunakan emoji. Untuk menambah gambar:

1. Simpan gambar di folder `assets/species/`.
2. Di `script.js`, tambahkan properti `img` pada species:
   ```js
   { name: "Tralalero Bananero", emoji: "🍌", img: "assets/species/tralalero-bananero.png" }
   ```
3. Website akan otomatis menampilkan gambar jika tersedia.

---

## ✨ Fitur

- 100+ species brainrot absurd
- 8 tingkat rarity (Common → Eternal)
- Animasi berbeda per rarity
- Efek suara sintetik (Web Audio API, tanpa file)
- Partikel burst saat hasil muncul
- Screen shake & flash untuk Eternal
- Riwayat 5 scan terakhir
- Counter total scan
- Responsif mobile & desktop
- Siap fullscreen untuk live streaming

---

## 🛠️ Menambah Species Baru

Buka `script.js`, cari array `SPECIES`, dan tambahkan:
```js
{ name: "Nama Species Baru", emoji: "🎯", desc: "Deskripsi singkat" },
```

---

## 📜 Lisensi

Bebas digunakan untuk konten TikTok Live. Have fun! 🎉
