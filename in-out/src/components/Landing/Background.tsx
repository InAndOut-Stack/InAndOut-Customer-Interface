import React from 'react';

import { Stack } from '@mui/material';

// import { keyframes } from '@emotion/react';
import colors from '../../themes/colors';

// const float = keyframes`
//   0% { transform: scale(1.0) translate(0px, 0px); }
//   50% { transform: scale(1.05) translate(20px, -20px); } /* Se mișcă puțin */
//   100% { transform: scale(1.0) translate(0px, 0px); }
// `;

const CustomBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
    <Stack
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          // radial gradient background
          backgroundImage: `radial-gradient(
            circle at 5% 5%, 
            ${colors.whiteColor} 9%,    
            ${colors.greenColor} 24%,         
            ${colors.whiteColor} 35%,
            ${colors.whiteColor} 49%,   
            ${colors.orangeColor} 61%,        
            ${colors.greenColor} 78%,        
            ${colors.whiteColor} 89%
          )`,
          transform: 'scale(1.1)',
          transformOrigin: 'center center',
        }}
      />
      {children}
    </Stack>
  );
};

export default CustomBackground;