
export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface Publication {
  title: string;
  year: string;
  publisher: string;
  description: string;
  pdfUrl: string;
  coverImage: string;
}

export interface Quote {
  text: string;
  source: string;
}

export enum ArticleType {
  ONLINE = 'Online Link',
  TEXT = 'Plain Text',
  PDF = 'PDF Document',
  SCANNED = 'Scanned Clipping'
}

export interface Article {
  title: string;
  date: string;
  type: ArticleType;
  excerpt: string;
  url: string;
}
