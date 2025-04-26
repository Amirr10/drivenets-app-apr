import RouterList from '../components/RouterList'
import { Box, Grid, Typography } from '@mui/material'

const RouterDashboard = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'grey.50', padding: 4 }}>
      <Grid container direction="column" spacing={4}>
        
        {/* Header */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              padding: 3,
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              Router Dashboard
            </Typography>
          </Box>
        </Grid>

        <RouterList  /> 
      </Grid>
    </Box>
	);
}

export default RouterDashboard