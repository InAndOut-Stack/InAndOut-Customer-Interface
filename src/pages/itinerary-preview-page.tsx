import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import colors from "../themes/colors";
import MenuBar from "../components/menu/menu-bar";

export default function ItineraryPreviewPage() {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "100vh",
        padding: "40px",
        position: "relative",
      }}
    >
      <Box sx={{ position: "fixed", top: "20px", right: "20px", zIndex: 100 }}>
        <MenuBar />
      </Box>

      <Stack
        sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Card
          sx={{
            maxWidth: "800px",
            width: "100%",
            borderRadius: "30px",
            padding: "40px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                color: colors.orangeColor,
                fontSize: "48px",
                fontFamily: '"Creato", sans-serif',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Your Itinerary is Ready!
            </Typography>
            <Typography
              sx={{
                color: colors.blackColor,
                fontSize: "20px",
                fontFamily: '"Creato", sans-serif',
                mb: 6,
              }}
            >
              We have calculated the fastest route for you to collect all your
              groceries smoothly.
            </Typography>

            <Box
              sx={{
                height: "300px",
                backgroundColor: "#f5f5f5",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 6,
                border: `2px dashed ${colors.orangeColor}`,
              }}
            >
              <Typography
                sx={{ color: "#aaa", fontFamily: '"Creato", sans-serif' }}
              >
                (Map preview will be displayed here)
              </Typography>
            </Box>

            <Button
              variant="contained"
              onClick={() => navigate("/")}
              sx={{
                backgroundColor: colors.greenColor,
                color: colors.purpleColor,
                borderRadius: "16px",
                py: 2,
                px: 6,
                fontSize: "18px",
                fontFamily: '"Creato", sans-serif',
                fontWeight: 600,
                "&:hover": { backgroundColor: "#98c94d" },
              }}
            >
              Start Shopping
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
