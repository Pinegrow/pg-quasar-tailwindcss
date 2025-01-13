# QuCommerce Store - Quasar powered cross-platform store with powerful, accessible components, styled with Tailwind CSS

Quasar quick start template that pre-includes the [Pinegrow Quasar Module](https://www.npmjs.com/package/@pinegrow/quasar-module), [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) and other goodies for Vue Designer.

Demo - https://pg-quasar-tailwindcss-css.netlify.app/

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-quasar-tailwindcss/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-quasar-tailwindcss my-quasar-tailwindcss-app #project-name
cd my-quasar-tailwindcss-app
npm install #or use pnpm
```

(or)

If you prefer a minimal template (a single empty home page) instead,

```bash
npx giget@latest gh:pinegrow/pg-quasar-tailwindcss#minimal my-quasar-tailwindcss-app #project-name
cd my-quasar-tailwindcss-app
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

- **ACTION REQUIRED**: Currently, only SPA & SSR mode are active in this template. To use other modes (desktop, mobile etc), enable them by following the official Quasar documentation.

### Start your development server

For Windows build when running Mac - run Windows in a virtual machine and run development process there
For iOS (Mac only) - install Xcode before starting development server
For Android - install Android Studio, Android File Transfer, setup and launch Android Virtual Device, and then start the development server

```bash
npm run dev # Web - SPA
npm run dev:ssr # Web - SSR SPA
npm run dev:electron # Desktop
npm run dev:ios # Mobile - ios
npm run dev:android # Mobile - android
```

### Build

For Windows build when running Mac - uncomment the `platform: 'win32'` line in `quasar.config.ts` and run `npm run build:electron`

```bash
npm run build # Web - SPA
npm run build:ssr # Web - SSR SPA
npm run build:electron # Desktop
npm run build:ios # Mobile - ios
npm run build:android # Mobile - android
```

### Icons

```bash
npm run icons # regenerate icons & splash screens
```

### Analyze

Set `build > analyze` to `true` in your config file and run the necessary `build` command. This will generate and open an HTML report containing bundle size information.

```bash
npm run build # use the necessary build command from above build section
```

### Preview

```bash
npm run build # build
quasar serve --history #preview build
```

### Lighthouse

```bash
npm run unlighthouse # Uses npx unlighthouse from https://unlighthouse.dev/ to run lighthouse on entire site (all pages)
```

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/pg-quasar-tailwindcss)

Check out the [deployment documentation](https://quasar.dev/quasar-cli-webpack/developing-ssr/deploying/) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [Quasar](https://quasar.dev/introduction-to-quasar) - The enterprise-ready cross-platform VueJs framework
  - 👉 Follow the Quasar docs for the amazing list of [features](https://quasar.dev/introduction-to-quasar).
  - 🚦 [Vue-Router](https://vuejs.org/guide/introduction.html) for client-side routing. Expressive, configurable, convenient enables snappy navigation.

### UI Frameworks

- [Quasar](https://quasar.dev/components/) - There’s a component for almost every web development need within Quasar. Each of Quasar’s components is carefully crafted to offer you the best possible experience for your users. Quasar is designed with performance & responsiveness in mind – so the overhead of using Quasar is barely noticeable. This attention to performance and good design is something that gives us special pride.

- [Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs#3) - The amazing utility-first CSS framework.
  👉 Note: This template uses Tailwind CSS for styling. In order to resolve Quasar's !important in default theme, tailwind.config.ts includes the `important: true` setting.
  👉 Note: Quasar's extended spacing utilities that can enabled by setting `framework.cssAddon: true` in quasar config is ensured to be not enabled to reduce the css footprint added by quasar.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow Quasar Module](https://www.npmjs.com/package/@pinegrow/quasar-module) - enables you to live-design your Vue single-file components visually in Vue Designer. Also, via Design Panel, enables theme customization (optional) and visual controls for Quasar utilities. Note: This is an addon that's licensed separately to Pinegrow apps (like Vue Designer).
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).
- [VueUse](https://vueuse.org/) - collection of essential Vue composition utilities.
- 🍍 [Pinia](https://quasar.dev/quasar-cli-vite/state-management-with-pinia) stores for global state management. Its light-weight, type-safe, extensible, modular with vue-devtools support.
- [VeeValidate](https://vee-validate.logaretm.com/v3/guide/3rd-party-libraries.html#quasar) takes care of value tracking, validation, errors, submissions and more.
- [QImg](https://quasar.dev/vue-components/img#introduction/) - The QImg component makes working with images (any picture format) easy and also adds a nice loading effect to it along with many other features (example: the ability to set an aspect ratio).
- [Quasar SEO](https://quasar.dev/options/seo/) - The Quasar Meta plugin can dynamically change page title, manage `<meta>` tags, manage `<html>` and `<body>` DOM element attributes, add/remove/change `<style>` and `<script>` tags in the head of your document (useful for CDN stylesheets or for json-ld markup, for example), or manage `<noscript>` tags.

### Devtools

- [Vite Devtools](https://devtools-next.vuejs.org/guide/vite-plugin) - A Vite plugin for Vue that enhances your DX (developer experience) with an amazing set of in-app features. This is an in-app alternative to browser-based/standalone Vue Devtools.
- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's configured as a boot file (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `src/boot/devtools.ts`, uncomment to activate.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [eslint-plugin-vue](https://vuejs.org/guide/scaling-up/tooling.html#linting) - official set of linting rules.
- [Prettier](https://prettier.io) with [@vue/eslint-config-prettier](https://vuejs.org/guide/scaling-up/tooling.html#formatting) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `tsconfig.ts` as required.

```json
{
  // https://quasar.dev/quasar-cli-vite/supporting-ts
  "extends": "@quasar/app-vite/tsconfig-preset",
  "compilerOptions": {
    "allowJs": true,
    "strict": false
  }
}
```

## Community

- [Vue Designer Community](https://discord.gg/BYp45Nnu5T)
