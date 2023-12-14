// @ts-check

// See: https://github.com/gregrickaby/nextjs-github-pages

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
// /**
//  * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
//  *
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'export',
//
//   // https://stackoverflow.com/a/68691247
//   assetPrefix: './',
//
//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,
//
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,
//
//   // Convenient since GitHub already supports this.
//   distDir: 'docs',
// }
//
// module.exports = nextConfig
