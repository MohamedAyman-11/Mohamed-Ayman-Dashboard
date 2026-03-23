import { Inventory } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductsCard = () => {
  const theme = useTheme();
  const { isLoading, data } = useQuery({
    queryKey: ["our-products"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=194",
        );
        return data.products;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading)
    return (
      <Box
        sx={{
          height: "100px",
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <SvgIcon
          scale={5}
          sx={{
            width: "40px",
            height: "40px",
          }}
          color="info"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="3" r="0">
            <animate
              id="spinner_318l"
              begin="0;spinner_cvkU.end-0.5s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="16.50" cy="4.21" r="0">
            <animate
              id="spinner_g5Gj"
              begin="spinner_318l.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="7.50" cy="4.21" r="0">
            <animate
              id="spinner_cvkU"
              begin="spinner_Uuk0.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="19.79" cy="7.50" r="0">
            <animate
              id="spinner_e8rM"
              begin="spinner_g5Gj.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="4.21" cy="7.50" r="0">
            <animate
              id="spinner_Uuk0"
              begin="spinner_z7ol.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="21.00" cy="12.00" r="0">
            <animate
              id="spinner_MooL"
              begin="spinner_e8rM.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="3.00" cy="12.00" r="0">
            <animate
              id="spinner_z7ol"
              begin="spinner_KEoo.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="19.79" cy="16.50" r="0">
            <animate
              id="spinner_btyV"
              begin="spinner_MooL.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="4.21" cy="16.50" r="0">
            <animate
              id="spinner_KEoo"
              begin="spinner_1IYD.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="16.50" cy="19.79" r="0">
            <animate
              id="spinner_1sIS"
              begin="spinner_btyV.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="7.50" cy="19.79" r="0">
            <animate
              id="spinner_1IYD"
              begin="spinner_NWhh.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
          <circle cx="12" cy="21" r="0">
            <animate
              id="spinner_NWhh"
              begin="spinner_1sIS.begin+0.1s"
              attributeName="r"
              calcMode="spline"
              dur="0.6s"
              values="0;2;0"
              keyTimes="0;.2;1"
              keySplines="0,1,0,1;.53,0,.61,.73"
              fill="freeze"
            />
          </circle>
        </SvgIcon>
        <Typography component={"span"} variant="h6">
          Loading...
        </Typography>
      </Box>
    );
  return (
    <>
      <Card
        sx={{
          width: {
            md: "fit-content",
            xs: "100%",
          },
          boxShadow: theme.palette.mode === "light" ? "0 0 3px #ccc" : "none",
          border: 0,
          px: 1.5,
          py: 2,
          borderRadius: "8px",
        }}
      >
        <CardContent>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={"20px"}
            sx={{
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: theme.palette.warning.light,
                width: "65px",
                height: "65px",
              }}
              variant="circular"
            >
              <Inventory
                fontSize="large"
                sx={{
                  color: "#fff",
                }}
              />
            </Avatar>
            <Stack direction={"column"} alignItems={"center"}>
              <Typography variant="h6" component={"span"} color="secondary">
                Products
              </Typography>
              <Typography variant="h4" component={"h6"} mt={1}>
                {data?.length}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
export default ProductsCard;
