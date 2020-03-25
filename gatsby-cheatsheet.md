### Cleaning, building and deploying

Clean the cache and the `public` folder:

    gatsby clean
    
Build and deploy:

    npm run deploy

## Customization

### Edit the config

    gatsby-config.js

### Edit the index page

    content/pages/about/index.mdx
    
### Edit the "hero text"

    src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx

Alternatively, it may be here:

    /node_modules/@lekoarts/gatsby-theme-minimal-blog/src/texts/hero.mdx

### Edit the homepage (incl. the link to the latest posts)

    /node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/homepage.tsx

## Miscellanea

### Font weight in React

```
{ fontWeight: '100' }, // Thin
{ fontWeight: '200' }, // Ultra Light
{ fontWeight: '300' }, // Light
{ fontWeight: '400' }, // Regular
{ fontWeight: '500' }, // Medium
{ fontWeight: '600' }, // Semibold
{ fontWeight: '700' }, // Bold
{ fontWeight: '800' }, // Heavy
{ fontWeight: '900' }, // Black
```