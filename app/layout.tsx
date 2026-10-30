import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';

import classNames from 'classnames';
import type { Metadata, Viewport } from 'next';

import { Background, Column, Flex, RevealFx } from '@once-ui-system/core';
import type { Opacity } from '@once-ui-system/core';
import { Providers } from '@/components/Providers';
import { effects, fonts, style, basePath, siteUrl } from '@/resources/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dinmukhammed Mynzhassar · CTO, Galamat Group',
  description:
    'Digital business card of Dinmukhammed Mynzhassar, CTO at Galamat Group — phone, email, website and downloadable vCard in one place.',
  authors: [{ name: 'Dinmukhammed Mynzhassar' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: 'Galamat Group',
    locale: 'en_US',
    title: 'Dinmukhammed Mynzhassar · CTO, Galamat Group',
    description:
      'Digital business card of Dinmukhammed Mynzhassar, CTO at Galamat Group — phone, email, website and downloadable vCard in one place.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Business card of Dinmukhammed Mynzhassar, CTO at Galamat Group, with the Galamat Group logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinmukhammed Mynzhassar · CTO, Galamat Group',
    description:
      'Digital business card — phone, email, website and downloadable vCard.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#fafaf8',
  width: 'device-width',
  initialScale: 1,
};

const themeInit = `
  (function() {
    try {
      const root = document.documentElement;
      const config = ${JSON.stringify({
        brand: style.brand,
        accent: style.accent,
        neutral: style.neutral,
        solid: style.solid,
        'solid-style': style.solidStyle,
        border: style.border,
        surface: style.surface,
        transition: style.transition,
        scaling: style.scaling,
      })};
      Object.entries(config).forEach(function (e) {
        root.setAttribute('data-' + e[0], e[1]);
      });
      root.setAttribute('data-theme', 'light');
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      data-theme="light"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="icon" href={`${siteUrl}/galamat-logo.svg`} type="image/svg+xml" />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: '100vh' }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{ x: effects.mask.x, y: effects.mask.y, radius: effects.mask.radius, cursor: effects.mask.cursor }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as Opacity,
                size: effects.dots.size,
                color: effects.dots.color,
              }}
              gradient={{ display: false }}
              grid={{ display: false }}
              lines={{ display: false }}
            />
          </RevealFx>
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1} vertical="center">
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
        </Column>
      </Providers>
    </Flex>
  );
}
