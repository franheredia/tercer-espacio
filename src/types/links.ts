export interface Link {
  isExternalLink: boolean;
  title: string;
  url: string;
  isSecondary?: boolean;
}

export interface LinkSection {
  title: string;
  links: Link[];
} 