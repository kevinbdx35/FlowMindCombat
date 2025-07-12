import React, { useState } from 'react';
import './App.css';

/**
 * Objet contenant toutes les traductions pour le site bilingue FR/EN
 * Structure: { langue: { section: { clé: traduction } } }
 */
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

/**
 * Composant principal de l'application FlowMindCombat
 * Gère l'état de la langue et du menu mobile
 */
function App() {
  // État pour la langue active (français par défaut)
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  // État pour l'ouverture/fermeture du menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Raccourci vers les traductions de la langue active
  const t = translations[language];

  /**
   * Bascule entre français et anglais
   */
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  /**
   * Ouvre/ferme le menu mobile
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /**
   * Ferme le menu mobile (utilisé lors des clics sur les liens)
   */
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      {/* En-tête fixe avec navigation */}
      <header className="header">
        <nav className="navbar">
          {/* Logo de l'application */}
          <div className="logo">
            <h1>FlowMindCombat</h1>
          </div>
          
          {/* Navigation desktop */}
          <div className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#home" onClick={closeMobileMenu}>{t.nav.home}</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>{t.nav.about}</a></li>
              <li><a href="#content" onClick={closeMobileMenu}>{t.nav.content}</a></li>
              <li><a href="#patreon" className="patreon-btn" onClick={closeMobileMenu}>{t.nav.patreon}</a></li>
            </ul>
            {/* Bouton de changement de langue */}
            <button onClick={toggleLanguage} className="lang-btn">
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          {/* Bouton hamburger pour mobile */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation mobile (affichée conditionnellement) */}
          <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={closeMobileMenu}>{t.nav.home}</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>{t.nav.about}</a></li>
              <li><a href="#content" onClick={closeMobileMenu}>{t.nav.content}</a></li>
              <li><a href="#patreon" className="patreon-btn" onClick={closeMobileMenu}>{t.nav.patreon}</a></li>
              <li>
                {/* Bouton de langue version mobile avec texte complet */}
                <button onClick={toggleLanguage} className="lang-btn mobile">
                  {language === 'fr' ? 'English' : 'Français'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* Section héro avec call-to-action principal */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h2>{t.hero.title}</h2>
            <p>{t.hero.subtitle}</p>
            {/* Lien vers Patreon avec ouverture dans nouvel onglet */}
            <a href="https://www.patreon.com/c/FlowMindCombat" className="cta-button" target="_blank" rel="noopener noreferrer">
              {t.hero.cta}
            </a>
          </div>
        </section>

        {/* Section à propos */}
        <section id="about" className="about">
          <h2>{t.about.title}</h2>
          <p>{t.about.description}</p>
        </section>

        {/* Section contenu avec grille de cartes */}
        <section id="content" className="content">
          <h2>{t.content.title}</h2>
          <div className="content-grid">
            {/* Carte entraînement mental */}
            <div className="content-card">
              <h3>🧠 {t.content.mental.title}</h3>
              <p>{t.content.mental.description}</p>
            </div>
            {/* Carte techniques MMA */}
            <div className="content-card">
              <h3>🥊 {t.content.mma.title}</h3>
              <p>{t.content.mma.description}</p>
            </div>
            {/* Carte BJJ et Luta Livre */}
            <div className="content-card">
              <h3>🥋 {t.content.bjj.title}</h3>
              <p>{t.content.bjj.description}</p>
            </div>
            {/* Carte boxe */}
            <div className="content-card">
              <h3>🥊 {t.content.boxing.title}</h3>
              <p>{t.content.boxing.description}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Pied de page avec copyright */}
      <footer>
        <p>&copy; 2025 FlowMindCombat. {t.footer.copyright}.</p>
      </footer>
    </div>
  );
}

export default App;
