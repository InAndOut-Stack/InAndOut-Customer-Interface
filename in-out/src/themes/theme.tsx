import { createTheme } from '@mui/material';
import colors from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.MainColor
        }
    },
    typography: {
        fontFamily: ['"Creato", sans-serif'].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '80px',
                    backgroundColor: colors.MainColor,
                    border: `5px solid ${colors.Accent1Color}`,
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