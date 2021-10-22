import {useMemo} from 'react';
import {TEntryModel} from '../helpers/ts-helpers/types';

const useSearch = (entries: TEntryModel[], query: string): TEntryModel[] => {
    const filteredEntries = useMemo(() => {

      return entries.filter(entry => {
        const normalizedQuery = query.toLowerCase();
        const normalizedTitle = entry.title?.toLowerCase();
        const normalizedDescription = entry.description?.toLowerCase();
        const normalizedTags = entry.tags?.join(' ').toLocaleLowerCase();

        if (
          normalizedTitle?.includes(normalizedQuery) ||
          normalizedDescription?.includes(normalizedQuery) ||
          normalizedTags?.includes(normalizedQuery)
        ) {
            return entry;
        }
      });
    }, [query, entries]);


  return filteredEntries;
};

export default useSearch;
