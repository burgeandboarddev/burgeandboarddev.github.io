/**
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Convenient since GitHub already supports this.
  distDir: 'docs',
}

module.exports = nextConfig
