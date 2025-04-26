import React from 'react';
import { Typography } from '@mui/material';
import { HomeRouter } from '../../types/types';

const HomeDetails = ({ router }: { router: HomeRouter }) => {
  return (
    <div>
      <Typography variant="body2">
        <strong>Connected Devices:</strong> {router.connectedDevices}
      </Typography>
      <Typography variant="body2">
        <strong>Parental Controls Enabled:</strong> {router.parentalControlsEnabled ? 'Yes' : 'No'}
      </Typography>
      <Typography variant="body2">
        <strong>Max Bandwidth (Mbps):</strong> {router.maxBandwidthMbps}
      </Typography>
    </div>
  );
};

export default HomeDetails;