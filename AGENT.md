# AGENT.md - GuildKit Website

## Project Overview

This is the official website for GuildKit, built with Astro framework, following accessibility best practices.

## Tech Stack

- **Framework**: Astro 6.x
- **Package Manager**: pnpm (workspaces enabled)
- **Runtime Manager**: mise
- **Languages**: TypeScript
- **Styling**: SCSS + Tailwind CSS
- **Linting**: ESLint
- **Deployment**: Cloudflare Workers (wrangler)

## Project Structure

```
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── assets/         # SCSS styles, images
│   └── styles/         # Global CSS including Tailwind
├── public/             # Static assets
├── dist/               # Build output (git ignored)
└── legal/              # License information
```

## Standard Commands

Always use `mise` commands for all project operations:

| Command        | Purpose |
|----------------|-----------------------------------------------------|
| `mise install` | Setup project, install dependencies and toolchain   |
| `mise dev`     | Start development server at `http://localhost:4321` |
| `mise build`   | Production build to `./dist/`                       |
| `mise lint`    | Run TypeScript typecheck + ESLint                   |
| `mise fix`     | Auto-fix all fixable linter issues                  |
| `mise clean`   | Cleanup generated files                             |
| `mise refresh` | Full reset: clean + reinstall dependencies          |

## Development Guidelines

1.  **Always run `mise install` first** before working on the project
2.  Use Astro components for UI elements (`*.astro` files)
3.  Follow existing SCSS structure in `src/assets/scss/`
4.  Maintain accessibility standards as per accessible-astro-starter base
5.  Run `mise lint` before committing changes
6.  All pages must use DefaultLayout as root layout

## Code Style

- Use TypeScript for all logic
- Follow ESLint rules defined in eslint.config.ts
- 2 space indentation (configured in .editorconfig)
- Use ExternalLink component for external URLs
- Responsive design implemented via SCSS breakpoints

## Important Files

- `astro.config.ts` - Astro framework configuration
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `wrangler.jsonc` - Cloudflare deployment configuration
- `src/content.config.ts` - Content collections config
