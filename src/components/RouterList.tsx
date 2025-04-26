import { CircularProgress, Grid, TablePagination, Typography, Box } from '@mui/material';
import FiltersBar from './FiltersBar';
import RouterCard from './RouterCard';
import useRouters from '../hooks/useRouters';
import { useMemo, useState } from 'react';
import useFiltersAndSort from '../hooks/useFiltersAndSort';

const RouterList = () => {
  const { routers, loading, error } = useRouters();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filters, setFilters] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const { sortedData } = useFiltersAndSort(routers, filters, sortBy, sortOrder);

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage + 1);
  };

  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Reset to first page
  };

  const paginatedRouters = useMemo(() => {
    return sortedData.slice((page - 1) * rowsPerPage, page * rowsPerPage) || [];
  }, [page, sortedData, rowsPerPage]);

  return (
		<>
			{/* Filters and Sorting Section */}
			<Grid item>
				<FiltersBar
					filters={filters}
					setFilters={setFilters}
					sortBy={sortBy}
					setSortBy={setSortBy}
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
			</Grid>

			{/* Cards List Section */}
			<Grid item>
				{loading ? (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "50vh", // Center vertically
						}}
					>
						<CircularProgress />
					</Box>
				) : error ? (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "50vh", // Center vertically
							textAlign: "center",
						}}
					>
						<Typography color="error" variant="h6">
							{error}
						</Typography>
					</Box>
				) : routers.length === 0 ? (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "50vh", // Center vertically
							textAlign: "center",
						}}
					>
						<Typography variant="h6">No routers found.</Typography>
					</Box>
				) : (
					<Grid container spacing={2}>
						{paginatedRouters?.map((router, idx) => (
							<RouterCard key={router.id || idx} router={router} />
						))}
					</Grid>
				)}
			</Grid>

			{/* Pagination */}
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={sortedData?.length || 0}
				rowsPerPage={rowsPerPage}
				page={page - 1}
				onPageChange={onPageChange}
				onRowsPerPageChange={onRowsPerPageChange}
			/>
		</>
	);
};

export default RouterList;