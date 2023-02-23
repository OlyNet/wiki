import Image from 'next/image'
/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase: 'https://github.com/joscha0/olynet-wiki/tree/main',
  logo: (
    <>
      <span>
        <Image src="/logo.png" height={30} width={30} />
        <p>Olynet</p>
        <style jsx>{`
          p {
            font-weight: bold;
            padding-left: 5px;
          }
          span {
            display: flex;
            align-content: center;
            align-items: center;
            padding: 0.5rem 0.5rem 0.5rem 0;
            mask-image: linear-gradient(
              60deg,
              black 25%,
              rgba(0, 0, 0, 0.2) 50%,
              black 75%
            );
            mask-size: 400%;
            mask-position: 0%;
          }
          span:hover {
            mask-position: 100%;
            transition: mask-position 1s ease, -webkit-mask-position 1s ease;
          }
        `}</style>
      </span>
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
      <meta name="twitter:site:domain" content="olynet.club" />
      <meta name="twitter:url" content="https://www.olynet.club/" />
      <meta
        name="og:title"
        content="Das OlyNet ist ein studentischer Verein und hilft den Bewohnern des Olydorfs bei Internetproblemen"
      />
      <meta name="apple-mobile-web-app-title" content="Olynet" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
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
        sizes="16x16"
        href="/favicon-16x16.png"
      />
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
  sidebar: {
    toggleButton: true,
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' },
  ],
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Olynet',
    }
  },
}
