# Kohila Priya — Portfolio

A responsive, multi-page React portfolio built with Vite. Its shared navigation and footer are React components; the Home, About, Internship, Learning, Projects, and Contact pages remain directly navigable.

## Run locally

1. Install Node.js 20.19+.
2. From this folder, run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.

## Verify and build

- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the production build locally.

The project pages intentionally describe MealLens and PRIORA as in development. There is no claimed live demo. The contact page uses FormSubmit.co to deliver messages to the supplied email address; first use requires activating the form from a confirmation email. Visitors can also copy the displayed email address and contact Kohila through their preferred webmail service.

## Deploy to Vercel

The included `vercel.json` configures the Vite production build. From this folder, run `npx vercel --prod` and follow Vercel's account sign-in and project prompts. The deployed site is public; no Git repository is required for a direct CLI deployment.
