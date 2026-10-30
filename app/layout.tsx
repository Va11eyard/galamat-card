import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';

import classNames from 'classnames';
import type { Metadata } from 'next';

import { Background, Column, Flex, RevealFx } from '@once-ui-system/core';
import type { Opacity } from '@once-ui-system/core';
import { Providers } from '@/components/Providers';
import { effects, fonts, style, basePath, siteUrl } from '@/resources/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dinmukhammed Mynzhassar · CTO, Galamat Group',
  description:
    'Digital business card: Dinmukhammed Mynzhassar, CTO at Galamat Group. Phone, email and website in one place.',
  openGraph: {
    type: 'profile',
    title: 'Dinmukhammed Mynzhassar · CTO, Galamat Group',
    description: 'Digital business card · Galamat Group',
    images: ['/og.png'],
  },
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
