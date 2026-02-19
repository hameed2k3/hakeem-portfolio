# Hakeem Abdul Lathif — Portfolio

Production-ready React portfolio with contact form, deployed on Vercel. Single Vite project with Vercel Serverless Functions.

## Stack

- **React** + **Vite**
- **TailwindCSS**
- **Axios**
- **Nodemailer** (Gmail) in `/api/contact.js`

## Install

```bash
cd "c:\Users\adham\hakeem portfolio"
npm install
```

## Run locally

**Frontend only (no email):**

```bash
npm run dev
```

**Full stack (frontend + API, for testing contact form):**

1. Install Vercel CLI: `npm i -g vercel`
2. Copy env: `copy .env.example .env` (Windows) or `cp .env.example .env` (Mac/Linux)
3. Edit `.env` and set `EMAIL_USER` and `EMAIL_PASS` (Gmail App Password)
4. Run: `vercel dev`

Then open the URL shown (e.g. http://localhost:3000). The contact form will POST to `/api/contact`.

## Gmail App Password

1. Use a Gmail account with 2-Step Verification enabled.
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords).
3. Create an app password for “Mail” and use it as `EMAIL_PASS` in `.env`.

## Deploy on Vercel

1. Push the project to GitHub (or use Vercel’s CLI).
2. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
3. Set **Environment Variables** in the project:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your Gmail App Password
4. Deploy. The contact form will send from your Gmail to the same inbox.

## Project structure

```
portfolio/
├── api/
│   └── contact.js      # Vercel serverless function (Nodemailer)
├── public/
├── src/
│   ├── components/     # Navbar, Footer, Section, Button
│   ├── pages/          # Hero, About, Experience, Skills, Contact
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── package.json
├── vercel.json
└── vite.config.js
```

## Contact API

- **POST** `/api/contact`
- **Body:** `{ fullName, email, subject, message }`
- **Response:** `{ success: true }` or `{ success: false, message: "error" }`

Credentials are read from `EMAIL_USER` and `EMAIL_PASS`; never commit `.env`.
