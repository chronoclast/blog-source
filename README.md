# Personal blog source and reference guide

This repository includes the source of my personal blog, which is based on
[Gatsby](https://www.gatsbyjs.com/docs/tutorial/getting-started/) and uses the
[minimal blog template from LekoArts](https://www.gatsbyjs.com/plugins/@lekoarts/gatsby-theme-minimal-blog/).

The **deployed blog** is available here:
[**chronoclast.github.io**](https://chronoclast.github.io/)

Most (if not all) articles are written in _the tongue of Cervantes_ (spanish). Perhaps you find
some inspiration there. Otherwise, at least it shows how the end result may look like, in case you
decide to build your own.

## Clone the repository

First of all, clone the repository and head to its directory:

```sh
git clone https://github.com/chronoclast/blog-source
cd blog-source
```

> ℹ️ If the SSH access has been configured, it can also be cloned as follows:
>
> ```sh
> git clone git@github.com:chronoclast/blog-source.git
> ```

## Use the correct Node version

```sh
nvm install 20
nvm use 20
```

## Install dependencies

```sh
npm install
```

## Instructions for local development

Start the local site:

```sh
npm run develop
```

Clean the Gatsby cache/build state:

```sh
npm run clean
```

## Customize the Gatsby theme

The site uses Gatsby theme shadowing to customize `@lekoarts/gatsby-theme-minimal-blog`. Add an
override under `src/@lekoarts/gatsby-theme-minimal-blog/`, mirroring the path relative to the
theme's `src` directory. For example:

```text
node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/footer.tsx
src/@lekoarts/gatsby-theme-minimal-blog/components/footer.tsx
```

The file under `src/` takes precedence over the theme version. Avoid editing files in
`node_modules`, since dependency installs can replace them. Existing overrides in this repository
include the homepage, blog page, article template, footer, and homepage text.

When shadowing a component, use package-qualified imports for other theme files (for example,
`@lekoarts/gatsby-theme-minimal-blog/src/components/layout`), since relative imports would resolve
from the override's location.

Restart `npm run develop` after adding a new override. If Gatsby still serves the old version, stop
the server, run `npm run clean`, and start it again.

## Build and deploy

Build the project and publish it to GitHub Pages:

```sh
npm run deploy
```

## Useful cleanup commands

```sh
rm -rf node_modules/.cache/gh-pages
rm -rf node_modules .cache public
```

## Create a brand new Gatsby site

If necessary, a brand new blog with the original template can be started as follows:

```sh
npx gatsby new blog-source-clean-start https://github.com/LekoArts/gatsby-starter-minimal-blog
cd blog-source-clean-start
```
