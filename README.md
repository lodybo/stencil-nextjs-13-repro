# Stencil & Next.js 13 reproduction

This repo is a reproduction of [a bug in Stencil & Next.js 13](https://github.com/ionic-team/stencil/issues/4061). When using Stencil components in a Next.js 13 app, the components are not rendered.
This happens in Stencil 2 and 3, and only in Next.js 13's `app` directory. It works fine inside the `pages` directory.

## How to use this repo
First, install the dependencies:
```bash
npm install
```

Then build the Stencil components:
```bash
npm run build
```

Then, run the app:
```bash
npm run dev
```

