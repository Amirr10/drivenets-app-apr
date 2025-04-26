import React from 'react';
import { Typography } from '@mui/material';
import { WifiRouter } from '../../types/types';

const WifiDetails = ({ router }: { router: WifiRouter }) => {
  return (
    <div>
      <Typography variant="body2">
        <strong>WiFi Channels:</strong> {router.wifiChannels.join(', ')}
      </Typography>
      <Typography variant="body2">
        <strong>Supports Dual Band:</strong> {router.supportsDualBand ? 'Yes' : 'No'}
      </Typography>
    </div>
  );
};

export default WifiDetails;