import { Helmet } from 'react-helmet-async';
import { siteMeta } from './data/mockData';

export default function App() {
  return (
    <>
      <Helmet>
        <title>{siteMeta.name} — {siteMeta.tagline}</title>
        <meta name="description" content={siteMeta.description} />
      </Helmet>

      <main>
        <section id="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            {siteMeta.name}
          </h1>
          <p style={{ fontFamily: 'var(--body)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: 'var(--steel)', maxWidth: '600px' }}>
            {siteMeta.description}
          </p>
        </section>
      </main>
    </>
  );
}