import React from 'react';

import { Stack, Typography, Box, Button } from '@mui/material';
import CustomBackground from './Background';

import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';

import theme from '../../themes/theme';
import colors from '../../themes/colors';

function Logo() {
    return (
        // <Stack sx={{
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     height: '100vh',
        //     width: '100vw',
        // }}>
        <CustomBackground>
            <Stack sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '128px',
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '128px',
                        fontWeight: 800,
                        color: theme.palette.primary.main,
                        // textShadow: `5px 0 0 ${colors.StrokeColor},
                        //         -5px 0 0 ${colors.StrokeColor}, 
                        //         0 5px 0 ${colors.StrokeColor},
                        //         0 -5px 0 ${colors.StrokeColor},
                        //         5px 5px 0 ${colors.StrokeColor},
                        //         -5px 5px 0 ${colors.StrokeColor},
                        //         5px 5px 0 ${colors.StrokeColor},
                        //         -5px -5px 0 ${colors.StrokeColor}`,
                        WebkitTextStroke: `0.23rem ${colors.greenColor}`,
                        filter: `
                            drop-shadow(0px 0px 0px ${colors.greenColor}) 
                            drop-shadow(1px 0px 0px ${colors.greenColor}) 
                            drop-shadow(-1px 0px 0px ${colors.greenColor}) 
                            drop-shadow(0px -0px 0px ${colors.greenColor})
                            `
                    }}>
                        IN&OUT
                    </Typography>
                </Box>
                
                <Button sx={{
                    width: '16rem',
                    height: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                    }}>
                        <Typography sx={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: colors.orangeColor,
                            // color: colors.MainColor,
                            // WebkitTextStroke: `0.12rem ${colors.Accent1Color}`,
                        }}>
                            Start
                        </Typography>
                        <TrendingFlatRoundedIcon sx={{
                            fontFamily: 'inherit',
                            fontSize: '40px',
                            color: `${colors.orangeColor}`,
                            // border: `2px solid ${colors.Accent1Color}`,
                        }}>
                        </TrendingFlatRoundedIcon>
                    </Box>

                </Button>
            </Stack>

        </CustomBackground>
            
        // </Stack>
    )
};

export default Logo;