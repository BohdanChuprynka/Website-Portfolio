export type ProjectStatus =
  | 'closed-beta'
  | 'private'
  | 'live'
  | 'archived'
  | 'in-development';

export interface ProjectExternalLink {
  label: string;
  url: string;
}

export interface ProjectInfoCell {
  label: string;
  value: string;
  sub?: string;
  subLink?: { text: string; url: string };
}

export interface ProjectArchitecture {
  caption: string;
  image?: string;
  filename?: string;
  chips?: string[];
}

export interface BuiltItem {
  category: string;
  body: string;
}

export interface ResultItem {
  big: string;
  label: string;
}

export interface PlateItem {
  label: string;
  caption: string;
  body: string;
  image?: string;
  filename?: string;
}

export interface QuadCell {
  label: string;
  body: string;
  image?: string;
}

export interface QuadView {
  caption: string;
  cells: QuadCell[];
  filename?: string;
}

export interface ReflectionItem {
  title: string;
  body: string;
}

export interface ProjectPageContent {
  slug: string;
  badge: string;
  title: string;
  dek: string;
  info: ProjectInfoCell[];
  problem: string[];
  architecture: ProjectArchitecture;
  built: BuiltItem[];
  results: ResultItem[];
  plates: PlateItem[];
  glance?: QuadView;
  reflections: ReflectionItem[];
  externalLinks?: ProjectExternalLink[];
}
