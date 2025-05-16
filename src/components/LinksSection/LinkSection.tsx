import React from 'react';
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
        {section.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={link.isSecondary ? 'secondary' : 'primary'}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default LinksSection; 