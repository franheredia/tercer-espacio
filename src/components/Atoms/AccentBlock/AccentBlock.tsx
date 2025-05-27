import React from 'react';
import './AccentBlock.scss';

interface AccentBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const AccentBlock: React.FC<AccentBlockProps> = ({ children, className = '' }) => {
  return (
    <div className={`accent-block ${className}`}>
      {children}
    </div>
  );
};

export default AccentBlock; 