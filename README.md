# Personal blog source and reference guide

This repository includes the source of my personal blog, which is based on
[Gatsby](https://www.gatsbyjs.com/docs/tutorial/getting-started/) and uses the
[minimal blog template from LekoArts](https://www.gatsbyjs.com/plugins/@lekoarts/gatsby-theme-minimal-blog/).

The **deployed blog** is available here:
[**chronoclast.github.io**](https://chronoclast.github.io/)

Most (if not all) articles are written in _the tongue of Cervantes_ (spanish). Perhaps you find
some inspiration there. Otherwise, at least it shows how the end result may look like, in case you
decide to build your own.

## Remote setup

First of all, clone the repository and head to its directory:

```sh
git clone https://github.com/chronoclast/blog-source
cd blog-source
```

Check the current remotes:

```sh
git remote -v
```

Add the GitHub Pages remote:

```sh
git remote add origin https://github.com/chronoclast/chronoclast.github.io
```

> ℹ️ If the SSH access has been configured, the remote can also be added this way.

## Use the correct Node version

```sh
nvm install 20
nvm use 20
```

## Install GitHub Pages support

```sh
npm install gh-pages --save-dev
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

## Build and deploy

Build the project and publish it to GitHub Pages:

```sh
npm run deploy
```

## Useful leanup commands

```sh
rm -rf node_modules/.cache/gh-pages
rm -rf node_modules package-lock.json .cache public
```

## Create a brand new Gatsby site

If necessary, a brand new blog with the original template can be started as follows:

```sh
npx gatsby new blog-source-clean-start https://github.com/LekoArts/gatsby-starter-minimal-blog
cd blog-source-clean-start
```
