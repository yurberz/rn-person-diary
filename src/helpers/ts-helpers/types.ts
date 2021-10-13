export type TEntryModel = {
  id: string;
  title: string;
  description: string;
  image?: string;
  audio?: string;
  date: string;
  tags: string[];
};

export type TAutoCapitalize = 'none' | 'sentences' | 'words' | 'characters';

export type TFilterButton = {
  id: string;
  title: string;
};
