import { Stack, Grid, Typography, Button} from '@mui/material';

interface MenuBarProps {
    title: string;
    link: string;
}

function MenuBar({ title, link }: MenuBarProps) {
    return(
        <Grid>
            <Stack sx={{

            }}>
                <Button>
                    <Typography sx={{
                        
                    }}> {title}</Typography>
                </Button>
            </Stack>
        </Grid>
    )
};

export default MenuBar;