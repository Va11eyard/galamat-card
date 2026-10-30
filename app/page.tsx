import {
  Button,
  Column,
  Heading,
  RevealFx,
  Row,
  Tag,
  Text,
} from '@once-ui-system/core';
import { FloatCard } from '@/components/FloatCard';
import { basePath, person } from '@/resources/site';

const img = (src: string) => `${basePath}${src}`;

const ringText =
  'DINMUKHAMMED MYNZHASSAR · CTO · GALAMAT GROUP · ASTANA · ';

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

const P3D = { transformStyle: 'preserve-3d' } as const;

export default function Card() {
  return (
    <Column maxWidth="m" fillWidth horizontal="center" vertical="center" paddingY="32">
      <FloatCard>
        <Column gap="l" horizontal="center" align="center" style={P3D}>
          {/* Circling card */}
          <RevealFx translateY="12" style={P3D}>
            <div className="card-orb" role="img" aria-label="Galamat Group logo ringed by a rotating caption">
              <svg className="card-ring" viewBox="0 0 240 240" aria-hidden="true">
                <defs>
                  <path
                    id="card-ring-path"
                    d="M 120,120 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                  />
                </defs>
                <text>
                  <textPath href="#card-ring-path">{ringText}</textPath>
                </text>
              </svg>
              <div className="card-disc">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(person.logo)} alt="Galamat Group logo" width={88} height={64} />
              </div>
            </div>
          </RevealFx>

          <Column horizontal="center" align="center" gap="8" style={P3D}>
            <RevealFx translateY="12" delay={0.05} style={P3D}>
              <Heading variant="display-strong-l">{person.name}</Heading>
            </RevealFx>
            <RevealFx translateY="12" delay={0.1} style={P3D}>
              <Text variant="heading-default-m" onBackground="neutral-weak">
                {person.role} · {person.org}
              </Text>
            </RevealFx>
            <RevealFx translateY="12" delay={0.15} style={P3D}>
              <Row gap="8" paddingTop="4" wrap horizontal="center">
                <Tag size="l">Astana</Tag>
                <Tag size="l">Medtech holding</Tag>
              </Row>
            </RevealFx>
          </Column>

          <RevealFx translateY="12" delay={0.2} style={P3D}>
            <Row wrap gap="8" horizontal="center">
              <Button
                href={person.phoneHref}
                prefixIcon="phone"
                label={person.phone}
                size="s"
                variant="secondary"
              />
              <Button
                href={`mailto:${person.email}`}
                prefixIcon="email"
                label={person.email}
                size="s"
                variant="secondary"
              />
              <Button
                href={person.website}
                prefixIcon="globe"
                label={person.websiteLabel}
                size="s"
                variant="secondary"
                target="_blank"
              />
            </Row>
          </RevealFx>

          <RevealFx translateY="12" delay={0.25} style={P3D}>
            {/* A raw anchor, not Once UI Button: next/link defers basePath to the
                client router, so a static page would ship a 404 href. */}
            <a className="card-vcf" href={`${basePath}/card.vcf`} download>
              Save contact (.vcf)
            </a>
          </RevealFx>

          <RevealFx translateY="12" delay={0.3} style={P3D}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img(person.wordmark)}
              alt="Galamat Group"
              height={18}
              style={{ marginTop: '12px' }}
            />
          </RevealFx>
        </Column>
      </FloatCard>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </Column>
  );
}
