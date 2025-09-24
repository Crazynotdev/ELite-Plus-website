# Lycée Elite Plus

Plateforme scolaire moderne, rapide et sécurisée, Next.js + Tailwind + Supabase + shadcn/ui + Vercel.

## Fonctionnalités

- Authentification matricule/email/parent/admin
- Dashboard élève, prof, admin, parent
- Actualités, agenda interactif
- SplashScreen animé, UI “wow”
- Dark mode, multilingue, PWA
- Upload de documents, forum, notifications temps réel
- RGPD, sécurité, JWT, bcrypt
- Prêt à déployer sur Vercel
  ```
  ElitePlus/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── eleve/
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── prof/
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── admin/
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── parent/
│   │   └── dashboard/
│   │       └── page.tsx
│   └── agenda/
│       └── page.tsx
├── components/
│   ├── SplashScreen.tsx
│   ├── Actualites.tsx
│   ├── Agenda.tsx
│   ├── DarkModeToggle.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Loader.tsx
│   └── ui/
│       ├── WowCard.tsx
│       └── StatCard.tsx
│       └── ProfileCard.tsx
│       └── ChatBot.tsx
│       └── QRCodeCard.tsx
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   ├── i18n.ts
│   └── chatbot.ts
├── pages/
│   └── api/
│       ├── auth/
│       │   └── [...nextauth].ts
│       ├── notes.ts
│       ├── absences.ts
│       ├── emploi.ts
│       ├── users.ts
│       └── chatbot.ts
├── db/
│   └── schema.sql
├── public/
│   ├── logo-lycee.png
│   ├── icons/
│   │   └── icon-192.png
│   │   └── icon-512.png
│   └── manifest.json
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
├── next-i18next.config.js
├── package.json
├── tsconfig.json
├── .env.local
└── README.md
```

## Démarrage

```bash
pnpm install
pnpm run dev
```

## Stack

- Next.js 14
- Tailwind CSS
- Supabase (PostgreSQL)
- NextAuth.js
- shadcn/ui
- PWA, SEO, animations

## Déploiement

[Créer ton projet sur Vercel](https://vercel.com) et connecter ton repo GitHub.

## Personnalisation

Change le logo dans `/public/logo-lycee.png` et les couleurs dans `tailwind.config.js` selon la charte de ton lycée.
