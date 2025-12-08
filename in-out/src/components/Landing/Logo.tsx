import React from 'react';
import { Stack, Typography, Box, Button } from '@mui/material';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import theme from '../../themes/theme';
import colors from '../../themes/colors';

function Logo() {
    return (
        <Stack  sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}>
            <Box>
                <Typography sx={{
                    fontSize: '128px',
                    fontFamily: '"M PLUS 1c", sans-serif',
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    textShadow: `5px 0 0 ${colors.StrokeColor},
                                -5px 0 0 ${colors.StrokeColor}, 
                                0 5px 0 ${colors.StrokeColor},
                                0 -5px 0 ${colors.StrokeColor},
                                4px 4px 0 ${colors.StrokeColor},
                                -4px 4px 0 ${colors.StrokeColor},
                                4px -4px 0 ${colors.StrokeColor},
                                -4px -4px 0 ${colors.StrokeColor}`,
                    letterSpacing: '2px',
                }}>
                    IN&OUT
                </Typography>
            </Box>
            <Button sx={{}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                }}>
                    <Typography sx={{
                    fontSize: '32px',
                    fontFamily: '"M PLUS 1c", sans-serif',
                    fontWeight: 700,
                    color: colors.Accent1Color,
                    // WebkitTextStroke: `1.7px ${colors.Accent1Color}`,
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
    )
};

export default Logo;