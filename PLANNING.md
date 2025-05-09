# CardCompass Project Planning

## 1. High-Level Vision

CardCompass aims to be a modern, performant, and feature-rich blogging platform. It serves as a customizable and easily configurable starter template, leveraging the latest web technologies to provide an excellent user and developer experience. The primary focus is on content delivery, SEO, and a clean, intuitive interface. It is designed to be an ideal solution for individuals and organizations looking to establish a professional online presence through a blog, particularly those migrating from older or less flexible platforms.

## 2. Architecture

The project follows a modern web architecture based on Next.js and its App Router.

* **Frontend:** Next.js with React Server Components for server-side rendering (SSR) and static site generation (SSG) capabilities, ensuring optimal performance and SEO.
* **UI Components:** Built using Shadcn UI, which provides accessible and customizable components on top of Radix UI and Tailwind CSS.
* **Styling:** Tailwind CSS is used for utility-first styling, allowing for rapid UI development and easy customization.
* **Content Management:** Integrates with Wisp CMS as a headless CMS for managing blog posts and related content.
* **API Layer:** Next.js API routes are used for specific backend functionalities like Open Graph image generation.
* **State Management:** Primarily relies on React's built-in capabilities (e.g., Context API, `useState`, `useEffect`) and TanStack Query for server state management (data fetching, caching, synchronization).

## 3. Constraints

* **Dependency on Wisp CMS:** The core blogging functionality is tightly coupled with Wisp CMS. Any limitations or changes in the Wisp CMS API could impact the project.
* **Next.js Versioning:** Built on Next.js 15. Future Next.js updates might require code modifications to maintain compatibility and leverage new features.
* **React Versioning:** Uses React 19. Some dependencies (e.g., `next-themes` as noted in `README.md`) might have compatibility issues with newer React versions, requiring workarounds like `--legacy-peer-deps`.
* **Deployment Environment:** Primarily designed and tested for deployment on Vercel, leveraging its specific optimizations for Next.js projects.
* **Customization Complexity:** While designed to be customizable, deep customizations might require a good understanding of Next.js, React, Tailwind CSS, and the underlying Wisp CMS data structure.

## 4. Technology Stack

* **Core Framework:** Next.js 15 (App Router, Server Components)
* **Programming Language:** TypeScript
* **UI Library:** React 19
* **Component Library:** Shadcn UI
* **Styling:** Tailwind CSS
* **Headless CMS:** Wisp CMS (`@wisp-cms/client`)
* **State Management (Server):** TanStack Query (`@tanstack/react-query`)
* **Form Handling:** React Hook Form (`react-hook-form`) with Zod (`zod`) for validation
* **Date Handling:** `date-fns`
* **Markdown Processing:** `react-markdown`
* **HTML Sanitization:** `sanitize-html`
* **RSS Feed Generation:** `rss`
* **Icons:** Lucide React (`lucide-react`)
* **Theming:** `next-themes`

## 5. Tools

* **Package Manager:** npm (as indicated by `package-lock.json` if present, or inferred from `package.json` scripts)
* **Version Control:** Git (assumed, standard for modern development)
* **Linting:** ESLint (`eslint`, `eslint-config-next`)
* **Code Editor/IDE:** Visual Studio Code (inferred from user's environment)
* **Deployment Platform:** Vercel (recommended in `README.md`)
* **Build Tool:** Next.js CLI (`next build`, `next dev`)

## 6. Other Relevant Details

* **SEO:** Focus on SEO through SSR/SSG, automatic sitemap generation, and Open Graph image generation.
* **Performance:** Optimized for performance using Next.js features like server components, font optimization (`next/font`), and efficient data fetching.
* **Accessibility:** Leverages Shadcn UI components which are designed with accessibility in mind.
* **Developer Experience:** TypeScript for type safety, ESLint for code quality, and a well-structured project layout contribute to a good developer experience.
* **Community & Documentation:** Relies on the extensive documentation and communities of Next.js, React, Tailwind CSS, and Wisp CMS.

This document serves as a living guide and should be updated as the project evolves.
