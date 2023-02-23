/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  github: 'https://github.com/joscha0/olynet-wiki',
  docsRepositoryBase: 'https://github.com/joscha0/olynet-wiki/tree/main',
  titleSuffix: ' – Olynet',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Olynet</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Das OlyNet ist ein studentischer Verein und hilft den Bewohnern des Olydorfs bei Internetproblemen"
      />
      <meta
        name="og:description"
        content="Das OlyNet ist ein studentischer Verein und hilft den Bewohnern des Olydorfs bei Internetproblemen"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Olynet" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  // search: true,
  navigation: true,
  footer: {
    text: <>MIT {new Date().getFullYear()} © Olynet e.V.</>,
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' },
  ],
}
