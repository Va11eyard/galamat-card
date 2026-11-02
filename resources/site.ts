import { Geist, Geist_Mono } from 'next/font/google';

export const style = {
  brand: 'cyan',
  accent: 'red',
  neutral: 'gray',
  solid: 'contrast',
  solidStyle: 'flat',
  border: 'playful',
  surface: 'translucent',
  transition: 'all',
  scaling: '100',
};

const heading = Geist({ variable: '--font-heading', subsets: ['latin'], display: 'swap' });
const body = Geist({ variable: '--font-body', subsets: ['latin'], display: 'swap' });
const label = Geist({ variable: '--font-label', subsets: ['latin'], display: 'swap' });
const code = Geist_Mono({ variable: '--font-code', subsets: ['latin'], display: 'swap' });

export const fonts = { heading, body, label, code };

export const effects = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: { display: false },
  // The card is now wine with gold accents; the cyan dot field competed with it,
  // so the page texture is neutral and the card carries the color.
  dots: { display: true, opacity: 40, size: '2' as const, color: 'neutral-alpha-medium' },
  grid: { display: false },
  lines: { display: false },
};

export const person = {
  name: 'Dinmukhammed Mynzhassar',
  role: 'CTO',
  org: 'Galamat Group',
  // Galamat ships the lockup in two monochrome cuts. The card face is wine
  // stock, so it uses their own white file verbatim (literal fill="white";
  // the ink variant's var(--fill-0) paints invisible on iOS Safari). The ink
  // file stays as the favicon, where white would vanish on light browser chrome.
  logo: '/galamat-logo-white.svg',
  phone: '+7 747 039 20 08',
  phoneHref: 'tel:+77470392008',
  email: 'dimash@galamat.com',
  website: 'https://www.galamat.com',
  websiteLabel: 'www.galamat.com',
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://va11eyard.github.io/galamat-card';
