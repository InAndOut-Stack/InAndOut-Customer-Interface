import { Box, Stack, Grid, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

import MenuIcon from '@mui/icons-material/Menu';
import colors from '../../../themes/colors';
interface MenuBarProps {
    title?: string;
    link?: string;
}

// function MenuBar({ title, link }: MenuBarProps) {

function MenuBar() {
    const [IsOpen, SetIsOpen] = useState(0);


    return (
        <motion.div
            layout
            initial={{ width: 140, height: 60 }}
            animate={{
                width: IsOpen ? 560 : 140,
                height: 60,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
                backgroundColor: colors.whiteColor,
                borderRadius: '30px',
                border: `2.5px solid ${colors.orangeColor}`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                userSelect: 'none',
            }}
        >
            {!IsOpen ? (
                <motion.div>
                    <Box
                        onClick={() => SetIsOpen(1)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}
                    >
                        <Typography sx={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: '"Creato", sans-serif',
                            color: colors.orangeColor,
                            letterSpacing: '-0.05em',
                            textTransform: 'none',
                        }}>
                            Menu
                        </Typography>
                        <MenuIcon sx={{
                            color: colors.orangeColor,
                            fontSize: '32px',
                        }} />
                    </Box>
                </motion.div>
            ) : (
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                    <Box
                        onClick={() => SetIsOpen(0)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}
                    >
                        <Typography sx={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: '"Creato", sans-serif',
                            color: colors.orangeColor,
                            letterSpacing: '-0.05em',
                            textTransform: 'none',
                        }}>
                            Menu
                        </Typography>
                        <MenuIcon sx={{
                            color: colors.orangeColor,
                            fontSize: '32px',
                        }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}
                    >
                        <Typography sx={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: '"Creato", sans-serif',
                            color: colors.orangeColor,
                            letterSpacing: '-0.05em',
                            textTransform: 'none',
                        }}>
                            FAQ
                        </Typography>
                        {/* <MenuIcon sx={{
                            color: colors.orangeColor,
                            fontSize: '32px',
                        }} /> */}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}
                    >
                        <Typography sx={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: '"Creato", sans-serif',
                            color: colors.orangeColor,
                            letterSpacing: '-0.05em',
                            textTransform: 'none',
                        }}>
                            Docs
                        </Typography>
                        {/* <MenuIcon sx={{
                            color: colors.orangeColor,
                            fontSize: '32px',
                        }} /> */}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}
                    >
                        <Typography sx={{
                            fontSize: '24px',
                            fontWeight: 700,
                            fontFamily: '"Creato", sans-serif',
                            color: colors.orangeColor,
                            letterSpacing: '-0.05em',
                            textTransform: 'none',
                        }}>
                            GitHub
                        </Typography>
                        {/* <MenuIcon sx={{
                            color: colors.orangeColor,
                            fontSize: '32px',
                        }} /> */}
                    </Box>
                </motion.div>
            )}
        </motion.div>
    );
};

export default MenuBar;