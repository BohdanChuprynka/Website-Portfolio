import { ProjectPageContent } from './types';
import { aximon } from './aximon';
import { personaRag } from './persona_rag';

export const projectPages: Record<string, ProjectPageContent> = {
  'persona-rag': personaRag,
  aximon,
};

export type { ProjectPageContent } from './types';
