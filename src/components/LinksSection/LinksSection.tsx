import React from 'react';
import { Link } from 'react-router-dom';
import './LinksSection.scss';
import type { LinksSectionsProps } from '@/types';

/**
 * Props para el componente LinksSection
 * @interface LinksSectionProps
 */
interface LinksSectionProps {
  /** Sección de enlaces a renderizar */
  section: LinksSectionsProps;
}

/**
 * Componente que renderiza una sección de enlaces
 * @component
 * @param {LinksSectionProps} props - Propiedades del componente
 * @returns {React.ReactElement} Sección de enlaces renderizada
 */
const LinksSection: React.FC<LinksSectionProps> = ({ section }) => {
  return (
    <section className="links-section">
      <h2 className="links-section__title">{section.title}</h2>
      <div className="links-section__container">
        {section.links.map((link, index) => {
          const linkModifier = link.isSecondary ? 'links-section__link--secondary' : 'links-section__link--primary';
          const linkClassName = `links-section__link ${linkModifier}`;

          return link.isExternalLink ? (
            <a
              key={index}
              href={link.url}
              className={linkClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ) : (
            <Link
              key={index}
              to={link.url}
              className={linkClassName}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LinksSection; 