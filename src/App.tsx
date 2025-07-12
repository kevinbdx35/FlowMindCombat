import React, { useState } from 'react';
import './App.css';

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      content: 'Contenu',
      patreon: 'Patreon'
    },
    hero: {
      title: 'Débloque ton potentiel de combattant',
      subtitle: 'Routines mentales, discipline et entraînement combat pour MMA, BJJ, Luta Livre et Boxe',
      cta: 'Rejoindre sur Patreon'
    },
    about: {
      title: 'À propos',
      description: 'FlowMindCombat t\'aide à développer ton potentiel de combattant grâce à des routines mentales, de la discipline et des techniques d\'entraînement spécialisées en MMA, BJJ, Luta Livre et Boxe.'
    },
    content: {
      title: 'Contenu',
      mental: {
        title: 'Entraînement Mental',
        description: 'Routines mentales pour améliorer focus et concentration'
      },
      mma: {
        title: 'Techniques MMA',
        description: 'Techniques et stratégies pour arts martiaux mixtes'
      },
      bjj: {
        title: 'BJJ & Luta Livre',
        description: 'Grappling, soumissions et positionnement'
      },
      boxing: {
        title: 'Boxe',
        description: 'Techniques de frappe et footwork'
      }
    },
    footer: {
      copyright: 'Tous droits réservés'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      content: 'Content',
      patreon: 'Patreon'
    },
    hero: {
      title: 'Unlock Your Fighter Potential',
      subtitle: 'Mental routines, discipline and combat training for MMA, BJJ, Luta Livre and Boxing',
      cta: 'Join on Patreon'
    },
    about: {
      title: 'About',
      description: 'FlowMindCombat helps you unlock your fighter potential through mental routines, discipline training and specialized techniques for MMA, BJJ, Luta Livre and Boxing.'
    },
    content: {
      title: 'Content',
      mental: {
        title: 'Mental Training',
        description: 'Mental routines to improve focus and concentration'
      },
      mma: {
        title: 'MMA Techniques',
        description: 'Techniques and strategies for mixed martial arts'
      },
      bjj: {
        title: 'BJJ & Luta Livre',
        description: 'Grappling, submissions and positioning'
      },
      boxing: {
        title: 'Boxing',
        description: 'Striking techniques and footwork'
      }
    },
    footer: {
      copyright: 'All rights reserved'
    }
  }
};

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>FlowMindCombat</h1>
          </div>
          
          <div className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#home" onClick={closeMobileMenu}>{t.nav.home}</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>{t.nav.about}</a></li>
              <li><a href="#content" onClick={closeMobileMenu}>{t.nav.content}</a></li>
              <li><a href="#patreon" className="patreon-btn" onClick={closeMobileMenu}>{t.nav.patreon}</a></li>
            </ul>
            <button onClick={toggleLanguage} className="lang-btn">
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={closeMobileMenu}>{t.nav.home}</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>{t.nav.about}</a></li>
              <li><a href="#content" onClick={closeMobileMenu}>{t.nav.content}</a></li>
              <li><a href="#patreon" className="patreon-btn" onClick={closeMobileMenu}>{t.nav.patreon}</a></li>
              <li>
                <button onClick={toggleLanguage} className="lang-btn mobile">
                  {language === 'fr' ? 'English' : 'Français'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h2>{t.hero.title}</h2>
            <p>{t.hero.subtitle}</p>
            <a href="https://www.patreon.com/c/FlowMindCombat" className="cta-button" target="_blank" rel="noopener noreferrer">
              {t.hero.cta}
            </a>
          </div>
        </section>

        <section id="about" className="about">
          <h2>{t.about.title}</h2>
          <p>{t.about.description}</p>
        </section>

        <section id="content" className="content">
          <h2>{t.content.title}</h2>
          <div className="content-grid">
            <div className="content-card">
              <h3>🧠 {t.content.mental.title}</h3>
              <p>{t.content.mental.description}</p>
            </div>
            <div className="content-card">
              <h3>🥊 {t.content.mma.title}</h3>
              <p>{t.content.mma.description}</p>
            </div>
            <div className="content-card">
              <h3>🥋 {t.content.bjj.title}</h3>
              <p>{t.content.bjj.description}</p>
            </div>
            <div className="content-card">
              <h3>🥊 {t.content.boxing.title}</h3>
              <p>{t.content.boxing.description}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 FlowMindCombat. {t.footer.copyright}.</p>
      </footer>
    </div>
  );
}

export default App;
