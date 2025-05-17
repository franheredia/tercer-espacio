import React from 'react';
import { Link } from 'react-router-dom';
import './LinksSection.scss';
import type { LinksSectionsProps } from '@/types';

interface LinksSectionProps {
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
    <section className="link-section">
      <h2>{section.title}</h2>
      <div className="links">
        {section.links.map((link, index) => {
          const className = link.isSecondary ? 'secondary' : 'primary';

          return link.isExternalLink ? (
            <a
              key={index}
              href={link.url}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ) : (
            <Link
              key={index}
              to={link.url}
              className={className}
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