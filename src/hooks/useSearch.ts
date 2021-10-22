import {useMemo} from 'react';
import {TEntryModel} from '../helpers/ts-helpers/types';

const useSearch = (entries: TEntryModel[], query: string, sorted: boolean): TEntryModel[] => {

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
    if (sorted) {
      const sortedEntriesByDate = filteredEntries.sort((a,b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      return sortedEntriesByDate;
    } else {
      return filteredEntries.sort((a,b) => {
        return a.title.localeCompare(b.title);
      });
    }
};

export default useSearch;
