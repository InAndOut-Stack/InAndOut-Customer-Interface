import { createTheme } from '@mui/material';
import colors from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.whiteColor,
        }
    },
    typography: {
        fontFamily: ['"Creato", sans-serif'].join(','),
        fontSize: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    backgroundColor: colors.whiteColor,
                    border: `2.5px solid ${colors.orangeColor}`,
                    padding: '8px 24px',
                }
            }
        },
        MuiGrid:{
            styleOverrides: {
                root: {
                    // backgroundColor: colors.whiteColor,
                }
            }
        },
        MuiStack:{
            styleOverrides: {
                root: {
                    // backgroundColor: colors.whiteColor,
                }
            }
        }
    }
});

export default theme;