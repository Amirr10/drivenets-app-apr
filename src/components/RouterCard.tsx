import React, { lazy, Suspense } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Grid, Typography,  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Router } from '../types/types';
import { format } from 'date-fns';

type RouterType = keyof typeof detailsComponents;

type DetailComponentProps<T extends Router> = {
  router: T;
};

const detailsComponents = {
  enterprise: lazy(() => import('./ExpandDetails/EnterpriseDetails')),
  home: lazy(() => import('./ExpandDetails/HomeDetails')),
  wifi: lazy(() => import('./ExpandDetails/WifiDetails')),
};

const RouterCard = ({ router }: { router: Router }) => {
  const routerType = router?.type as RouterType | undefined;

  const DetailComponent = routerType && detailsComponents[routerType] 
    ? detailsComponents[routerType] as React.ComponentType<{ router: Router }>
    : null;

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Box
				sx={{
					backgroundColor: "grey.100", // Light grey background
					padding: 3, // Add padding for spacing
					borderRadius: 4, // Rounded corners
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
					transition: "transform 0.2s ease-in-out", // Add hover effect
					"&:hover": {
						transform: "scale(1.03)", // Slightly enlarge on hover
					},
				}}
			>
				<Typography variant="h6" align="center" gutterBottom>
					{router.name}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>ID:</strong> {router.id}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Type:</strong> {router.type}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Updated At:</strong>{" "}
					{format(new Date(router.updatedAt), "PPpp")}
				</Typography>
			</Box>

			{/* Accordion for Extra Data */}
			<Accordion sx={{ marginTop: 2 }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography variant="body2" color="textSecondary">
						More Details
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Suspense fallback={<CircularProgress />}>
			      {DetailComponent && <DetailComponent router={router} />}
					</Suspense>
				</AccordionDetails>
			</Accordion>
		</Grid>
	);
};

export default RouterCard