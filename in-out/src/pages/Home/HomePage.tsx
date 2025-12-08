// import React from "react";
import { Stack, ThemeProvider,} from "@mui/material";
import theme from "../../themes/theme";
import LogoComp from "../../components/Landing/logo";

function HomePage() {
    return (
        <ThemeProvider theme={theme}>
            <Stack sx={{
                width: '100vw',
                height: '100vh',
            }}>
                <LogoComp />
            </Stack>
        </ThemeProvider>
    )
};

export default HomePage;