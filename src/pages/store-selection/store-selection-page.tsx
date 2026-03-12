import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import colors from "../../themes/colors";
import MenuBar from "../../components/menu/menu-bar";

export interface StoreSummary {
  storeId: string;
  name: string;
  brandId: string;
  description: string;
  imageUrl: string;
  geoCoordinates: any;
  operatingHoursMap: any;
  timezone: string;
  createdAt: string;
  updatedAt: string;
}

const ITEMS_PER_PAGE = 6;

export default function StoreSelectionPage() {
  const navigate = useNavigate();
  const [stores, setStores] = useState<StoreSummary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  // Fallback Mock Data to allow UI Development
  const mockStores: StoreSummary[] = Array.from({ length: 12 }).map((_, i) => ({
    storeId: `store-uuid-${i + 1}`,
    name: `In & Out Market ${i + 1}`,
    brandId: `brand-uuid`,
    description: `Your favourite shopping center, ensuring fast routing and the freshest products available!`,
    imageUrl: `https://loremflickr.com/400/300/store?random=${i}`,
    geoCoordinates: {},
    operatingHoursMap: {},
    timezone: "CET",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));

  useEffect(() => {
    // According to user prompt: api call to /host/stores
    fetch("/host/stores")
      .then((res) => res.json())
      .then((data) => {
        // Adjust if API returns { tokens: [...] } per paginated struct
        if (data.tokens) setStores(data.tokens);
        else if (Array.isArray(data)) setStores(data);
        else setStores(mockStores);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API Error, using fallback data instead", err);
        setStores(mockStores);
        setIsLoading(false);
      });
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    if (event == undefined) {
      return;
    }
    setPage(value);
  };

  const paginatedStores = stores.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
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
      <Box
        sx={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 100,
        }}
      >
        <MenuBar />
      </Box>

      <Typography
        sx={{
          color: colors.purpleColor,
          fontSize: "48px",
          fontFamily: '"Creato", sans-serif',
          fontWeight: 700,
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Select a Store
      </Typography>

      {isLoading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
        >
          <CircularProgress sx={{ color: colors.orangeColor }} />
        </Box>
      ) : (
        <>
          <Grid
            container
            spacing={4}
            sx={{ maxWidth: "1200px", margin: "0 auto", flexGrow: 1 }}
          >
            {paginatedStores.map((store) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={store.storeId}>
                <Card
                  onClick={() => navigate(`/stores/${store.storeId}/stands`)}
                  sx={{
                    borderRadius: "24px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    border: `2px solid transparent`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: colors.orangeColor,
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        store.imageUrl ||
                        "https://via.placeholder.com/400x200?text=No+Image"
                      }
                      alt={store.name}
                    />
                    <CardContent
                      sx={{ backgroundColor: "white", minHeight: "150px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          fontFamily: '"Creato", sans-serif',
                          fontWeight: 600,
                          color: colors.purpleColor,
                        }}
                      >
                        {store.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontFamily: '"Creato", sans-serif' }}
                      >
                        {store.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
              paddingBottom: "40px",
            }}
          >
            <Pagination
              count={Math.ceil(stores.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChangePage}
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontFamily: '"Creato", sans-serif',
                  fontWeight: "bold",
                  "&.Mui-selected": {
                    backgroundColor: colors.orangeColor,
                    color: colors.whiteColor,
                    "&:hover": {
                      backgroundColor: colors.orangeColor,
                    },
                  },
                },
              }}
            />
          </Box>
        </>
      )}
    </Stack>
  );
}
