// import React from 'react';

import { Stack, Typography, Box, Button, Grid } from '@mui/material';
import { useState } from 'react';

import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import TitleImage from '../../assets/inandoutTITLE.png';

import colors from '../../themes/colors';
import CarouselElement from './Carousel/CarouselFinal';

import MenuBar from './Menu/MenuBar';

function Logo() {
    const [isLandingPage, setIsLandingPage] = useState(1);
    return ( isLandingPage &&
            <Grid container
                spacing={2}
                direction="row"
                justifyContent="space-evenly"
                alignContent="center"
                alignItems="center"
            >
                <Grid size={2}>
                    <Stack sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '128px',
                        userSelect: 'none',
                    }}>
                        <Typography sx={{
                            color: colors.whiteColor,
                            fontSize: '40px',
                            fontFamily: '"Creato", sans-serif',
                            lineHeight: "41px",
                            maxWidth: '300px',
                            letterSpacing: '-0.05em',
                            pointerEvents: 'none',
                            filter: `
                                drop-shadow(0px 1.5px 0.7px ${colors.blackColor}) 
                                `
                        }}>
                            we've made shopping easy by providing the fastest route for the products that you want
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

                        <Box component="img"
                            src={TitleImage}
                            sx={{
                                position: 'relative',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'scale-down',
                                zIndex: -1,
                                userSelect: 'none',
                                pointerEvents: 'none',
                            }} />
                        <CarouselElement />
                        <Button onClick={() => setIsLandingPage(0)} sx={{
                            width: '10.5rem',
                            height: '5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            filter: `
                                drop-shadow(0px 1.5px 0.7px ${colors.blackColor}) 
                                `
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                            }}>
                                <Typography sx={{
                                    fontSize: '32px',
                                    fontWeight: 500,
                                    fontFamily: '"Creato", sans-serif',
                                    color: colors.orangeColor,
                                    letterSpacing: '-0.05em',
                                    textTransform: 'none', // il facea uppercase for no reason
                                }}>
                                    Start
                                </Typography>
                                <TrendingFlatRoundedIcon sx={{
                                    fontFamily: 'inherit',
                                    fontSize: '40px',
                                    color: `${colors.orangeColor}`,
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
                        userSelect: 'none',
                    }}>
                        <Typography sx={{
                            color: colors.whiteColor,
                            fontSize: '40px',
                            fontFamily: '"Creato", sans-serif',
                            textAlign: 'right',
                            lineHeight: "41px",
                            maxWidth: '300px',
                            letterSpacing: '-0.05em',
                            filter: `
                                drop-shadow(0px 1.5px 0.7px ${colors.blackColor}) 
                                `
                        }}>
                            after a long day at work, get in and out of the store as quickly as possible with everything you need
                        </Typography>
                    </Stack>
                </Grid>

                {/* WIP */}
                <Box sx={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 100,
                }}>
                    <MenuBar />
                </Box>

            </Grid>
    );
};

export default Logo;