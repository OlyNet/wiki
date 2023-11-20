import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase: 'https://github.com/OlyNet/wiki/tree/main/',
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
  search: {
    placeholder() {
      const { locale } = useRouter()
      return locale === 'de' ? 'Suchen...' : 'Search...'
    },
  },
  feedback: false,
  navigation: true,
  primaryHue: 50,
  footer: {
    component() {
      const { locale } = useRouter()
      return (
        <div style={{ textAlign: 'center', padding: 15 }}>
          <div style={{ display: 'flex', gap: 15, justifyContent: 'center' }}>
            <Link href="/imprint">
              {locale === 'de' ? 'Impressum' : 'Imprint'}
            </Link>
            <Link href="/privacy">
              {locale === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </Link>
          </div>
          <p>{new Date().getFullYear()} © Olynet e.V.</p>
        </div>
      )
    },
  },
  editLink: {
    text() {
      const { locale } = useRouter()
      return locale === 'de'
        ? 'Diese Seite auf Github bearbeiten'
        : 'Edit this page on GitHub'
    },
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: false,
    title() {
      const { locale } = useRouter()
      return locale === 'de' ? 'Auf dieser Seite' : 'On This Page'
    },
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter()
    return (
      <>
        {locale === 'de' ? 'Zuletzt aktualisiert am' : 'Last updated on'}{' '}
        {timestamp.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </>
    )
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
