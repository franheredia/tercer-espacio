export interface Link {
  title: string;
  url: string;
  isSecondary?: boolean;
}

export interface LinkSection {
  title: string;
  links: Link[];
} 