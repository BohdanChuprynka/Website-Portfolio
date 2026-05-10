import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { projectPages } from '../data/projectPages';
import { ProjectPageContent } from '../data/projectPages/types';
import NotFound from './NotFound';
import '../assets/styles/ProjectPage.scss';

interface ProjectPageProps {
  mode: string;
  modeChange: () => void;
}

const SECTION_IDS = [
  { id: 'problem', label: 'Problem' },
  { id: 'arch', label: 'Architecture' },
  { id: 'built', label: 'What I Built' },
  { id: 'results', label: 'Results' },
  { id: 'plates', label: 'Plates' },
  { id: 'glance', label: 'At a Glance' },
  { id: 'reflect', label: 'Reflections' },
];

function ProjectPage({ mode, modeChange }: ProjectPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const page: ProjectPageContent | undefined = slug ? projectPages[slug] : undefined;

  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0].id);

  const sections = useMemo(() => {
    if (!page) return [];
    return SECTION_IDS.filter(s => {
      if (s.id === 'glance') return Boolean(page.glance);
      return true;
    });
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  useEffect(() => {
    if (!page) return;

    const handler = () => {
      const scrollY = window.scrollY + 200;
      let activeIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          activeIdx = i;
        }
      }
      setActiveSection(sections[activeIdx]?.id ?? sections[0].id);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [page, sections]);

  if (!page) return <NotFound />;

  const isDark = mode === 'dark';

  return (
    <div className={`project-page ${isDark ? 'dark-mode' : 'light-mode'}`} data-theme={isDark ? 'dark' : 'light'}>
      {/* Top bar */}
      <div className="pp-topbar">
        <Link to="/" className="pp-back">← Back to portfolio</Link>
        <button
          type="button"
          className="pp-theme"
          onClick={modeChange}
          aria-label="Toggle theme"
        >
          {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
        </button>
      </div>

      {/* TOC top-right */}
      <nav className="pp-toc" aria-label="Contents">
        <div className="pp-toc-label">On this page</div>
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={s.id === activeSection ? 'active' : ''}
          >
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </nav>

      <div className="pp-container">
        {/* Hero */}
        <header className="pp-hero">
          <span className="pp-badge">{page.badge}</span>
          <h1>{page.title}</h1>
          <p className="pp-dek">{page.dek}</p>
        </header>

        {/* Info card */}
        <div
          className="pp-info-card"
          style={{ gridTemplateColumns: `repeat(${page.info.length}, 1fr)` }}
        >
          {page.info.map((cell, idx) => (
            <div className="pp-info-cell" key={idx}>
              <div className="lab">{cell.label}</div>
              <div className="val">
                {cell.value}
                {(cell.sub || cell.subLink) && (
                  <span className="sub">
                    {cell.subLink && (
                      <a
                        href={cell.subLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className="ceo-link"
                      >
                        {cell.subLink.text}
                      </a>
                    )}
                    {cell.subLink && cell.sub ? ' ' : ''}
                    {cell.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Problem */}
        <section id="problem" className="pp-essay">
          <header className="pp-essay-head">
            <span className="num">01</span>
            <h2>Problem</h2>
          </header>
          {page.problem.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Architecture */}
        <section id="arch" className="pp-essay">
          <header className="pp-essay-head">
            <span className="num">02</span>
            <h2>Architecture</h2>
          </header>
          {page.architecture.image ? (
            <figure className="pp-fig">
              <div className="pp-fig-frame">
                <div className="pp-fig-label">Fig. 01</div>
                <img className="pp-fig-image" src={page.architecture.image} alt="System architecture" />
                {page.architecture.filename && (
                  <div className="pp-fig-file">{page.architecture.filename}</div>
                )}
              </div>
              <figcaption>
                <strong>System overview.</strong> {page.architecture.caption}
              </figcaption>
            </figure>
          ) : (
            <div className="pp-arch-summary">
              <p>{page.architecture.caption}</p>
              {page.architecture.chips && (
                <div className="pp-arch-chips">
                  {page.architecture.chips.map((c, i) => (
                    <span key={i} className="pp-chip">{c}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Built */}
        <section id="built" className="pp-essay">
          <header className="pp-essay-head">
            <span className="num">03</span>
            <h2>What I Built</h2>
          </header>
          <div className="pp-built-list">
            {page.built.map((item, i) => (
              <div className="pp-built-card" key={i}>
                <div className="cat">{item.category}</div>
                <div className="body">{item.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section id="results" className="pp-essay">
          <header className="pp-essay-head">
            <span className="num">04</span>
            <h2>Results</h2>
          </header>
          <div className="pp-results-grid">
            {page.results.map((r, i) => (
              <div className="pp-result-card" key={i}>
                <div className="big">{r.big}</div>
                <div className="lab">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Plates */}
        <section id="plates" className="pp-essay">
          <header className="pp-essay-head">
            <span className="num">05</span>
            <h2>Plates</h2>
          </header>
          <div className="pp-fig-grid-2">
            {page.plates.map((plate, i) => (
              <figure className="pp-fig" key={i}>
                <div className="pp-fig-frame">
                  <div className="pp-fig-label">{plate.label}</div>
                  {plate.image ? (
                    <img className="pp-fig-image" src={plate.image} alt={plate.caption} />
                  ) : (
                    <div className="pp-fig-body">[ {plate.filename ?? 'screenshot.png'} ]</div>
                  )}
                  {plate.filename && <div className="pp-fig-file">{plate.filename}</div>}
                </div>
                <figcaption>
                  <strong>{plate.caption}</strong> {plate.body}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* At a Glance */}
        {page.glance && (
          <section id="glance" className="pp-essay">
            <header className="pp-essay-head">
              <span className="num">06</span>
              <h2>At a Glance</h2>
            </header>
            <figure className="pp-fig">
              <div className="pp-quad-frame">
                <div className="pp-fig-label">Fig. 06</div>
                <div className={`pp-quad-grid cells-${page.glance.cells.length}`}>
                  {page.glance.cells.map((c, i) => (
                    <div className="pp-quad-cell" key={i}>
                      <div className="pp-quad-cell-lab">{c.label}</div>
                      <div className="pp-quad-cell-body">
                        {c.image ? (
                          <img src={c.image} alt={c.label} />
                        ) : (
                          c.body
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {page.glance.filename && <div className="pp-fig-file">{page.glance.filename}</div>}
              </div>
              <figcaption>
                <strong>Supporting surfaces.</strong> {page.glance.caption}
              </figcaption>
            </figure>
          </section>
        )}

        {/* Reflections */}
        <section id="reflect" className="pp-essay">
          <header className="pp-essay-head">
            <span className="num">{String(sections.length).padStart(2, '0')}</span>
            <h2>Reflections</h2>
          </header>
          <ul className="pp-reflect-list">
            {page.reflections.map((r, i) => (
              <li key={i}>
                <strong>{r.title}</strong>
                {r.body}
              </li>
            ))}
          </ul>
        </section>

        <footer className="pp-signoff">
          <Link to="/">← Back to portfolio</Link>
          <span className="meta">Bohdan Chuprynka · 2026</span>
        </footer>
      </div>
    </div>
  );
}

export default ProjectPage;
