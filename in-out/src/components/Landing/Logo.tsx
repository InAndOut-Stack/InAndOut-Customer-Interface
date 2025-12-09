import React from 'react';

import { Stack, Typography, Box, Button, Grid } from '@mui/material';
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
            <Grid container
                spacing = {2}
                direction = "row"
                justifyContent = "space-evenly"
                alignContent = "center"
                alignItems = "center"
            >
                <Grid size={2}>
                    <Stack sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '128px',
                    }}>
                        <Typography sx={{
                            color: colors.whiteColor,
                            fontSize: '40px',
                            fontFamily: '"Creato", sans-serif',
                            // WebkitTextStroke: `0.06rem ${colors.orangeColor}`,
                        }}>
                            the only web application that makes shopping easier by reducing the time spent searching for the right isle
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={4}>
                    <Stack sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '128px',
                    }}>
                        <Box>
                            <Typography sx={{
                                fontSize: '128px',
                                fontFamily: '"Creato", sans-serif',
                                fontWeight: 800,
                                color: theme.palette.primary.main,
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
                                    fontFamily: '"Creato", sans-serif',
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
                </Grid>
                <Grid size={2}>
                    <Stack sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '128px',
                    }}>
                        <Typography sx={{
                            color: colors.whiteColor,
                            fontSize: '40px',
                            fontFamily: '"Creato", sans-serif',
                            textAlign: 'right'
                            // WebkitTextStroke: `0.06rem ${colors.orangeColor}`,
                        }}>
                            simply add your preffered product choices and we’ll create the fastest route of the store 
                        </Typography>
                    </Stack>
                </Grid>

            </Grid>
        </CustomBackground>

        // </Stack>
    )
};

export default Logo;