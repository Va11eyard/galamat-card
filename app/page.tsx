'use client';

import { Column, RevealFx } from '@once-ui-system/core';
import { FloatCard } from '@/components/FloatCard';
import { basePath, person } from '@/resources/site';

const img = (src: string) => `${basePath}${src}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.role,
  worksFor: { '@type': 'Organization', name: person.org, url: person.website },
  telephone: '+7-747-039-20-08',
  email: `mailto:${person.email}`,
  url: person.website,
};

const stopFlip = (e: React.MouseEvent) => e.stopPropagation();

const PhoneIcon = (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const GlobeIcon = (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

const Wave = (
  <svg className="fc-wave-svg" viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true">
    <path
      className="w1"
      d="M0 10 Q 10 3, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10 T 220 10 T 240 10 T 260 10 T 280 10 T 300 10 T 320 10 T 340 10 T 360 10 T 380 10 T 400 10"
    />
    <path
      className="w2"
      d="M0 11 Q 10 5, 20 11 T 40 11 T 60 11 T 80 11 T 100 11 T 120 11 T 140 11 T 160 11 T 180 11 T 200 11 T 220 11 T 240 11 T 260 11 T 280 11 T 300 11 T 320 11 T 340 11 T 360 11 T 380 11 T 400 11"
    />
  </svg>
);

export default function Card() {
  return (
    <Column maxWidth="m" fillWidth horizontal="center" vertical="center" paddingY="32">
      <RevealFx translateY="12">
        <FloatCard
          front={
            <>
              <div className="fc-keyline" aria-hidden="true" />
              <span className="fc-ghost" aria-hidden="true">CTO</span>
              <div className="fc-top">
                <span className="fc-brand">GALAMAT GROUP</span>
                <span className="fc-flipnote">tap to flip</span>
              </div>
              <div className="fc-bottom">
                <h1 className="fc-name">
                  Dinmukhammed
                  <br />
                  Mynzhassar
                </h1>
                <p className="fc-role">Chief Technology Officer</p>
                <p className="fc-loc">Galamat Group · Astana, Kazakhstan</p>
              </div>
            </>
          }
          back={
            <>
              <div className="fc-keyline" aria-hidden="true" />
              <div className="fc-top">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(person.wordmark)} alt="Galamat Group" className="fc-logo" />
                <span className="fc-flipnote">tap to flip</span>
              </div>
              <div className="fc-rows">
                <a className="fc-row fc-row-phone" href={person.phoneHref} onClick={stopFlip}>
                  {PhoneIcon}
                  <span className="fc-label">Phone</span>
                  <span className="fc-value">{person.phone}</span>
                  <span className="fc-wave">{Wave}</span>
                </a>
                <a className="fc-row" href={`mailto:${person.email}`} onClick={stopFlip}>
                  {MailIcon}
                  <span className="fc-label">Email</span>
                  <span className="fc-value">{person.email}</span>
                </a>
                <a className="fc-row" href={person.website} target="_blank" rel="noopener noreferrer" onClick={stopFlip}>
                  {GlobeIcon}
                  <span className="fc-label">Web</span>
                  <span className="fc-value">{person.websiteLabel}</span>
                </a>
              </div>
              <div className="fc-backbottom">
                <a
                  className="card-vcf"
                  href={`${basePath}/card.vcf`}
                  download
                  onClick={stopFlip}
                >
                  Save contact (.vcf)
                </a>
                <span className="fc-print">MEDTECH HOLDING · ASTANA</span>
              </div>
            </>
          }
        />
      </RevealFx>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </Column>
  );
}
