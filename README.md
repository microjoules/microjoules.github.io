# microjoules.github.io

Personal site built with Create React App and deployed to GitHub Pages.

## Setup

```bash
corepack enable
corepack yarn install --frozen-lockfile
```

## Local Development

```bash
corepack yarn start
```

App runs at `http://localhost:3000`.

## Build

Production build:

```bash
corepack yarn build
```

Dev build (for `/dev` path on Pages):

```bash
corepack yarn build:dev
```

## Deploy

Production deploy to site root (`https://microjoules.github.io/`):

```bash
corepack yarn deploy
```

Dev deploy to isolated subpath (`https://microjoules.github.io/dev/`):

```bash
corepack yarn deploy:dev
```

`deploy:dev` publishes the same app under `dev/` on the `gh-pages` branch so it does not replace production root files.
