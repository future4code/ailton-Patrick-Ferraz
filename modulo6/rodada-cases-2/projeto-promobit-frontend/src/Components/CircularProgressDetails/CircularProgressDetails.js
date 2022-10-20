import React from "react";
import { CircularProgress } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'


function CircularProgressDetails({ voteAverage }) {
  const voteAverageRefactored = Math.ceil(voteAverage * 10);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={voteAverageRefactored} 
color={voteAverageRefactored > 70 ? 'success' : 'warning'} {...voteAverageRefactored} />
      <Box
        sx={{
          top: 0,
          left: 8,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Typography
          variant="caption"
          component="div"
        >{`${voteAverageRefactored}%`}</Typography>
      </Box>
    </Box>
  );
}
 

export default CircularProgressDetails;