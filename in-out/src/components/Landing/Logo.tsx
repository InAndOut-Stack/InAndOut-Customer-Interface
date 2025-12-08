import React from 'react';
import { Stack, Typography, Box, Button } from '@mui/material';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import theme from '../../themes/theme';
import colors from '../../themes/colors';

function Logo() {
    return (
        // <>
        <Stack sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        }}>
            <Stack sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '128px',
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '128px',
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        // textShadow: `5px 0 0 ${colors.StrokeColor},
                        //         -5px 0 0 ${colors.StrokeColor}, 
                        //         0 5px 0 ${colors.StrokeColor},
                        //         0 -5px 0 ${colors.StrokeColor},
                        //         5px 5px 0 ${colors.StrokeColor},
                        //         -5px 5px 0 ${colors.StrokeColor},
                        //         5px 5px 0 ${colors.StrokeColor},
                        //         -5px -5px 0 ${colors.StrokeColor}`,
                        WebkitTextStroke: `0.3rem ${colors.StrokeColor}`,
                        letterSpacing: '2px',
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
                            color: colors.Accent1Color,
                            // color: colors.MainColor,
                            // WebkitTextStroke: `0.12rem ${colors.Accent1Color}`,
                        }}>
                            Start
                        </Typography>
                        <TrendingFlatRoundedIcon sx={{
                            fontFamily: 'inherit',
                            fontSize: '40px',
                            color: `${colors.Accent1Color}`,
                            // border: `2px solid ${colors.Accent1Color}`,
                        }}>
                        </TrendingFlatRoundedIcon>
                    </Box>

                </Button>
            </Stack>

        </Stack>

        /* </> */
    )
};

export default Logo;