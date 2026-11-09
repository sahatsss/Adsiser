# Adsiser

Dashboard CRM untuk mengelola data klien, dibangun dengan React, TypeScript, dan Ant Design.

## Fitur

- Daftar klien dengan filter dan tab Client, Policy, dan Support
- Halaman profil klien berisi data pribadi, kondisi finansial saat ini, dan proyeksi finansial
- Skeleton loading dan penanganan error saat mengambil data
- Route guard dan logout

## Tech Stack

React 18, TypeScript, Vite, Ant Design, Tailwind CSS, Sass, React Query, React Router, Axios, ESLint, Husky.

## Struktur

Setiap fitur dipisah menjadi lapisan `model`, `repository`, `usecase`, dan `view`.

```
src/
├── routes/
│   ├── CRM/              # daftar klien
│   └── ClientProfile/    # detail klien
│       ├── model/        # tipe dan data statis
│       ├── repository/   # pemanggilan API
│       ├── usecase/      # custom hooks
│       └── view/         # komponen UI
└── shared/               # layout, API client, hooks bersama
```

## Menjalankan

Membutuhkan Node.js 21.6.1 atau lebih baru.

```bash
npm install
npm run dev
```

| Perintah | Keterangan |
|---|---|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat build produksi |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Deployment

Konfigurasi untuk Vercel sudah tersedia di `vercel.json` (SPA rewrite).
