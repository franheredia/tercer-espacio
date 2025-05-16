import React from 'react';
import { Link } from 'react-router-dom';
import './LinksSection.scss';
import type { LinkSection as LinkSectionType } from '../../types/links';

interface LinksSectionProps {
  section: LinkSectionType;
}

const LinksSection: React.FC<LinksSectionProps> = ({ section }) => {
  return (
    <section className="link-section">
      <h2>{section.title}</h2>
      <div className="links">
        {section.links.map((link, index) => {
          const isExternalLink = link.url.startsWith('http') || link.url.startsWith('#');
          const className = link.isSecondary ? 'secondary' : 'primary';

          return isExternalLink ? (
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