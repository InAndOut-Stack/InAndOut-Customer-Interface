import LogoComp from "../../components/Landing/Logo";
import { Stack } from "@mui/material";

function HomePage() {
    return (
        <Stack sx={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            overflow: 'hidden',
        }}>
            <LogoComp />
        </Stack>
    )
};

export default HomePage;