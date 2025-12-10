import React from 'react';

import { Stack, Typography, Box, Button, Grid } from '@mui/material';
import CustomBackground from './Background';

import TitleImage from '../../assets/inandoutTITLE.png';
import BackgroundImages from '../../assets/images_under_title.png';

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
                            lineHeight: "41px",
                            maxWidth: '300px',
                            letterSpacing: '-0.05em',
                            filter: `
                                drop-shadow(0px 1.5px 0.7px ${colors.blackColor}) 
                                `
                            // WebkitTextStroke: `0.06rem ${colors.orangeColor}`,
                        }}>
                            we've made shopping easy by providing the fastest route for the products that you want
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={4}>
                    
                    {/*avem aici imaginile din fundal: vin facute separat, dar le-am pus imagine momentan*/}
                    
                    <Box component="img"
                         src={BackgroundImages}
                         sx={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%', 
                                height: '100%',
                                objectFit: 'scale-down',
                                zIndex: -1, 
          }}
      />
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
          }}
      />                        
                       {/* <Box>
                            <Typography sx={{
                                fontSize: '128px',
                                fontFamily: '"Creato", sans-serif',
                                fontWeight: 800,
                                color: theme.palette.primary.main,
                                WebkitTextStroke: `0.12rem ${colors.greenColor}`,
                                filter: `
                                drop-shadow(0px 1.5px 1.25px ${colors.blackColor}) 
                                `
                            }}>
                                IN&OUT
                            </Typography> 
                        </Box>
                        
                        putin mai are sens acum, dar il pastram in caz de orice
                        */}

                        <Button sx={{
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
                            textAlign: 'right',
                            lineHeight: "41px",
                            maxWidth: '300px',
                            letterSpacing: '-0.05em',
                            filter: `
                                drop-shadow(0px 1.5px 0.7px ${colors.blackColor}) 
                                `
                            // WebkitTextStroke: `0.06rem ${colors.orangeColor}`,
                        }}>
                            after a long day at work, get in and out of the store as quickly as possible with everything you need
                        </Typography>
                    </Stack>
                </Grid>

            </Grid>
        </CustomBackground>

        // </Stack>
    )
};

export default Logo;