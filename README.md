# Groupe Laporte — Site Web

Site web officiel du **Groupe Laporte**, firme de coaching exécutif basée à Montréal.

> "Obtenir de meilleurs résultats par des pratiques de gestion revisitées"

## Stack technique

- **Framework** : Next.js 16 (App Router, TypeScript)
- **Styling** : Tailwind CSS v4
- **i18n** : next-intl (FR / EN)
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Fonts** : Playfair Display + Inter (Google Fonts)
- **Déploiement** : Vercel

## Structure du projet

```
src/
├── app/
│   ├── [locale]/              # Routes localisées (fr/en)
│   │   ├── layout.tsx         # Layout principal avec providers
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── l-equipe/          # Page équipe
│   │   ├── services/          # Pages services
│   │   │   ├── cape/
│   │   │   ├── consultation-coaching/
│   │   │   └── gestion-de-vie/
│   │   └── contact/           # Page contact
│   ├── api/
│   │   └── contact/route.ts   # API formulaire de contact
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       └── Hero.tsx
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
└── lib/
    └── utils.ts
messages/
├── fr.json
└── en.json
```

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
# Redirige automatiquement vers /fr/
```

## Variables d'environnement

Copier `.env.local.example` vers `.env.local` et remplir les valeurs :

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site |
| `RESEND_API_KEY` | Clé API Resend pour les emails |

## Intégration email (formulaire de contact)

Le formulaire de contact envoie les données à `/api/contact`. Pour activer l'envoi d'emails réels :

1. Installer Resend : `npm install resend`
2. Créer un compte sur [resend.com](https://resend.com)
3. Ajouter `RESEND_API_KEY` dans `.env.local`
4. Décommenter le code Resend dans `src/app/api/contact/route.ts`

## Déploiement Vercel

```bash
# Via CLI
vercel deploy

# Ou connecter le dépôt GitHub à Vercel pour CI/CD automatique
```

## Palette de couleurs

| Nom | Hex | Usage |
|---|---|---|
| Navy | `#1B2B5E` | Couleur principale, textes |
| Gold | `#C9A84C` | Accents, CTAs |
| Cream | `#F8F7F4` | Arrière-plans sections |
| Dark | `#1A1A1A` | Texte corps |

## Contact client

- **Site** : groupelaporte.ca  
- **Tél** : 1 514 400-0671  
- **Email** : info@groupelaporte.ca
