# kkt-web — kittykat.tech main site

Astro 5 + TypeScript + MDX. Cream palette, DM Sans, Playfair Display.
Deployed to `kittykat.tech` on zone.eu shared hosting.

## Quick start

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serve dist/
npm run check    # type + content collections check
```

## Project layout

```
src/
├── pages/                  Astro pages (file-based routing)
├── layouts/                BaseLayout — head, header, footer, version badge
├── components/             Header, Footer, Hero, TrustStrip, CTA, VersionBadge
├── styles/global.css       Cream palette, fonts, type primitives
├── content/                Astro content collections
│   ├── team/               One MD file per team member (see _TEMPLATE.md)
│   └── insights/           Working-in-Public posts (see _TEMPLATE.md)
└── content.config.ts       Collection schemas

public/
├── deploy.php              Server-side pull-from-GitHub (zone.eu)
├── update.html             Operator UI to trigger deploy.php
├── .htaccess               Apache config — caching, .env block, 404
├── .env.example            Server config template
├── robots.txt
└── favicon.svg
```

## Adding a team member

1. Copy `src/content/team/_TEMPLATE.md` to a new file, e.g. `dennis-lee.md`.
2. Fill the frontmatter (`name`, `role`, `order`, optionally `photo`, `links`).
3. Write the bio in the body.
4. Drop a square photo into `public/team/<slug>.jpg` if you have one and
   set `photo: "/team/<slug>.jpg"` in frontmatter.
5. Commit + push. The `/about` page picks it up on the next build.

To temporarily hide someone, set `active: false`.

## Adding an insights post

Same pattern: copy `src/content/insights/_TEMPLATE.md`, fill frontmatter,
write the body. `draft: true` keeps it out of the index.

## Deployment

Push to `main` triggers `.github/workflows/build-and-deploy.yml`:

1. Runs `npm ci && npm run build`.
2. Force-pushes `dist/*` to the `production` branch.

The zone.eu server has a clone of `production` in its web root. To
update the live site after a build:

1. Visit https://kittykat.tech/update.html
2. Enter the deploy key.
3. Click *Update Now*.

The server runs `deploy.php`, which `git pull`s the latest `production`
build into `htdocs/` and writes `version.json` for the in-page version
badge.

### First-time server setup

```sh
ssh kittykat
cd ~/domeenid/www.kittykat.tech/htdocs
# (Existing legacy site files are already moved to OLD/ — see project notes.)
git init
git remote add origin https://github.com/joinreachout/kkt-web.git
git fetch origin production
git checkout -t origin/production
echo "DEPLOY_KEY=$(openssl rand -hex 32)" > .env
chmod 600 .env
```

After this, `update.html` works.

## Visual language

Match retail.kittykat.tech. Cream `#F5F3EF`, DM Sans body, Playfair
Display italic for display type. No drop shadows on rest. No gradients.
No AI-vendor visual language.

## Anti-patterns

See `../INPUT/AGENTS.md`. Anti-hype, business-first, no fabricated
numbers, no model IDs without backing.
