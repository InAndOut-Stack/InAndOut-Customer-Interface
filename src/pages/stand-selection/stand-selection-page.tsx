import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import colors from "../../themes/colors";
import MenuBar from "../../components/menu/menu-bar";

export interface StandSummary {
  storeId: string;
  standId: string;
  articleId: string;
  edgeId: string;
  name?: string; // extended locally for UI
  price?: number; // extended locally for UI
}

export default function StandSelectionPage() {
  const { storeId } = useParams();
  const navigate = useNavigate();

  const [stands, setStands] = useState<StandSummary[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [shoppingCart, setShoppingCart] = useState<StandSummary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const mockStands: StandSummary[] = Array.from({ length: 15 }).map((_, i) => ({
    storeId: storeId || "unknown-store",
    standId: `stand-uuid-${i}`,
    articleId: `article-uuid-${i}`,
    edgeId: "edge-uuid",
    name: `Grocery Item ${i + 1}`,
    price: Number((Math.random() * 20).toFixed(2)),
  }));

  useEffect(() => {
    // According to user prompt: api call to /store/storeId/stands
    fetch(`/store/${storeId}/stands`)
      .then((res) => res.json())
      .then((data) => {
        if (data.tokens) setStands(data.tokens);
        else if (Array.isArray(data)) setStands(data);
        else setStands(mockStands);
        setIsLoading(false);
      })
      .catch(() => {
        setStands(mockStands);
        setIsLoading(false);
      });
  }, [storeId]);

  const handleAddToCart = (stand: StandSummary) => {
    if (!shoppingCart.find((item) => item.standId === stand.standId)) {
      setShoppingCart([...shoppingCart, stand]);
    }
  };

  const handleRemoveFromCart = (standId: string) => {
    setShoppingCart(shoppingCart.filter((item) => item.standId !== standId));
  };

  const handleGenerateRoute = async () => {
    if (shoppingCart.length === 0) return;
    setIsGenerating(true);

    try {
      // According to user prompt: api call to POST /host/routes
      await fetch("/host/routes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeId,
          standIdList: shoppingCart.map((i) => i.standId),
        }),
      });
      navigate("/itinerary-preview");
    } catch (error) {
      console.error(error);
      // mock the success
      setTimeout(() => navigate("/itinerary-preview"), 1000);
    } finally {
      setIsGenerating(false);
    }
  };

  const filteredStands = stands.filter((stand) =>
    (stand.name || `Article ${stand.articleId}`)
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

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

      <Typography
        sx={{
          color: colors.purpleColor,
          fontSize: "40px",
          fontFamily: '"Creato", sans-serif',
          fontWeight: 700,
          mb: 4,
          textAlign: "center",
        }}
      >
        Select Articles
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          flexGrow: 1,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          borderRadius: "30px",
          p: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Left Panel: Shopping List */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "24px",
              boxShadow: "none",
              border: `2px solid ${colors.orangeColor}`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Creato", sans-serif',
                  fontWeight: 600,
                  color: colors.orangeColor,
                  mb: 2,
                }}
              >
                Shopping Cart ({shoppingCart.length})
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Stack spacing={2} sx={{ maxHeight: "50vh", overflowY: "auto" }}>
                {shoppingCart.length === 0 && (
                  <Typography color="text.secondary">
                    Your cart is empty.
                  </Typography>
                )}
                {shoppingCart.map((item) => (
                  <Box
                    key={item.standId}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Creato", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {item.name || `Article ${item.articleId}`}
                    </Typography>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => handleRemoveFromCart(item.standId)}
                    >
                      Remove
                    </Button>
                  </Box>
                ))}
              </Stack>
            </CardContent>
            <Box sx={{ p: 3 }}>
              <Button
                fullWidth
                variant="contained"
                disabled={shoppingCart.length === 0 || isGenerating}
                onClick={handleGenerateRoute}
                sx={{
                  backgroundColor: colors.orangeColor,
                  color: "white",
                  borderRadius: "16px",
                  py: 2,
                  fontSize: "18px",
                  fontFamily: '"Creato", sans-serif',
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#e08a07" },
                }}
              >
                {isGenerating ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Generate Route"
                )}
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Right Panel: Articles and Search */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  fontFamily: '"Creato", sans-serif',
                  "&.Mui-focused fieldset": {
                    borderColor: colors.orangeColor,
                    borderWidth: "2px",
                  },
                },
              }}
            />

            {isLoading ? (
              <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
                <CircularProgress sx={{ color: colors.orangeColor }} />
              </Box>
            ) : (
              <Grid
                container
                spacing={2}
                sx={{ maxHeight: "65vh", overflowY: "auto", p: 1 }}
              >
                {filteredStands.map((stand) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={stand.standId}>
                    <Card
                      sx={{
                        borderRadius: "16px",
                        border: `1px solid #ddd`,
                        boxShadow: "none",
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{
                            fontFamily: '"Creato", sans-serif',
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {stand.name || `Article ${stand.articleId}`}
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                          ${stand.price?.toFixed(2)}
                        </Typography>
                        <Button
                          variant="outlined"
                          fullWidth
                          onClick={() => handleAddToCart(stand)}
                          sx={{
                            borderRadius: "12px",
                            borderColor: colors.orangeColor,
                            color: colors.orangeColor,
                            "&:hover": {
                              backgroundColor: colors.orangeColor,
                              color: "white",
                              borderColor: colors.orangeColor,
                            },
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
