import { useMemo, useState } from 'react';
import { Router } from '../types/types';

const useFiltersAndSort = (
	routers: Router[],
	filterType: string,
	sortBy: string,
	sortOrder: string
) => {
	const filteredData = useMemo(() => {
		if (filterType === "all") return routers;
		return routers.filter((item) => item.type === filterType);
	}, [routers, filterType]);

	const sortedData = useMemo(() => {
		const sorted = [...filteredData];

    if (sortBy === 'name' || sortBy === 'type') {
      sorted.sort((a, b) => {
        const fieldA = a[sortBy].toLowerCase();
        const fieldB = b[sortBy].toLowerCase();
        if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
        if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    } else if (sortBy === 'updatedAt') {
      sorted.sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
    }
    return sorted;
	}, [filteredData, sortBy, sortOrder]);

	return { sortedData };
};

export default useFiltersAndSort;