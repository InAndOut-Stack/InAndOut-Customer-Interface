import { createTheme } from '@mui/material';
import colors from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.MainColor
        }
    },
    typography: {
        fontFamily: '"M PLUS Rounded 1c", sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '80px',
                    backgroundColor: colors.MainColor,
                    border: `3px solid ${colors.Accent1Color}`,
                    padding: '8px 24px',
                }
            }
        },
        MuiGrid:{
            styleOverrides: {
                root: {
                    backgroundColor: colors.MainColor,
                }
            }
        },
        MuiStack:{
            styleOverrides: {
                root: {
                    backgroundColor: colors.MainColor,
                }
            }
        }
    }
});

export default theme;