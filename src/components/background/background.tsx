import React from 'react';
import { Stack } from '@mui/material';
import colors from '../../themes/colors';

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
                    zIndex: -100,
                    pointerEvents: 'none',
                    backgroundImage: `radial-gradient(
                        circle at 5% 5%, 
                        ${colors.greenColor} 10%,         
                        ${colors.orangeColor} 18%,
                        ${colors.whiteColor} 38%,
                        ${colors.whiteColor} 41%,
                        ${colors.orangeColor} 53%,        
                        ${colors.greenColor} 80%,        
                        ${colors.whiteColor} 90%
                    )`,
                    transform: 'scale(1.1)',
                    transformOrigin: 'center center',
                }}
            /> 
            <Stack sx={{ 
                position: 'relative', 
                zIndex: 10, 
                width: '100%' 
            }}>
                {children}
            </Stack>
        </Stack>
    );
};

export default CustomBackground;
