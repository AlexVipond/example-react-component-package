# Example React Component Package

This repo is an example of how to use Vite to create a nice manual testing environment when developing React components, and also how to use Vite to bundle and publish those components in multiple formats.


## Developing

The actual code/plugins/components you want to publish should go in `src`.


## Testing

A Vite-powered demo/test environment is in `tests/demo/src`. Run `npm run dev` to serve the test app at `localhost:3000`. The Vite app can be configured via `vite.config.ts`.

Add new test pages by adding TSX files to the `tests/demo/src/pages` directory. Each file's default export should be a React component for that page. Page-based routing is powered by `vite-plugin-pages`.

TailwindCSS is supported in the test app via the Play CDN build (`link` tag in `index.html`).

For more automated in-browser testing, my go-to is to write tests with uvu, using Playwright or Puppeteer to visit locally served pages. I `npm run dev` before running a test suite that needs browser access. Plenty of examples in this repo: https://github.com/baleada/vue-features.


## Building an publishing

Run `npm run build` to compile TypeScript and bundle with Vite, outputting multiple formats to `lib`. Customize formats and other things via `vite.lib.config.ts`, and customize TypeScript compilation via `tsconfig.lib.json`.

`.npmignore` is set up to include JS and TS files in the `lib` and `types` directories when you publish to NPM.
