import React from "react";
import { CircularProgress } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'


function CircularProgressDetails({ voteAverage }) {
  const voteAverageRefactored = Math.ceil(voteAverage * 10);

  return (
    <Box sx={{ mt:2, position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" size='5rem' value={voteAverageRefactored} 
color={voteAverageRefactored > 70 ? 'success' : 'warning'} {...voteAverageRefactored} />
      <Box
        sx={{
          top:6,
          left: 30,
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
          color={voteAverageRefactored > 70 ? 'success' : 'warning'}
        >{`${voteAverageRefactored}%`}</Typography>
      </Box>
    </Box>
  );
}
 

export default CircularProgressDetails;