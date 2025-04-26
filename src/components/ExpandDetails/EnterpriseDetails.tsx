import React from 'react';
import { Typography } from '@mui/material';
import { EnterpriseRouter } from '../../types/types';

const EnterpriseDetails = ({ router }: { router: EnterpriseRouter }) => {
  return (
    <div>
      <Typography variant="body2">
        <strong>Port Count:</strong> {router.portCount}
      </Typography>
      <Typography variant="body2">
        <strong>Supported Protocols:</strong> {router.supportedProtocols.join(', ')}
      </Typography>
      <Typography variant="body2">
        <strong>Throughput (Gbps):</strong> {router.throughputGbps}
      </Typography>
    </div>
  );
};

export default EnterpriseDetails;