import React from 'react';
import { Grid, Select, MenuItem, Box, Typography, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { sortOptions, typeOptions } from '../utils/consts';

interface FiltersBarProps {
  filters: string;
  setFilters: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

const FiltersBar = ({
  filters,
  setFilters,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: FiltersBarProps) => {
  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilters(event.target.value as string);
  };

  const handleSortByChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (event: SelectChangeEvent) => {
    setSortOrder(event.target.value);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: 'grey.100', borderRadius: 2 }}>
      <Grid container spacing={2}>
        {/* Filter By Type */}
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{ backgroundColor: 'grey.200', padding: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
              Filter By Type
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="filter-by-type-label"
                value={filters}
                onChange={handleFilterChange}
              >
                {typeOptions.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* Sort By */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: 'grey.200', padding: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
              Sort By
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="sort-by-label"
                value={sortBy}
                onChange={handleSortByChange}
              >
                {sortOptions?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* Sort Order */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: 'grey.200', padding: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
              Sort Order
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="sort-order-label"
                value={sortOrder}
                onChange={handleSortOrderChange}
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiltersBar;