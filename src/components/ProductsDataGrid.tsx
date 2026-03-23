import { Star } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Rating,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* ** What The Column Will Appear  ** */
const columns: GridColDef[] = [
  {
    field: "thumbnail",
    headerName: "Product Image",
    align: "center",
    flex: 1,
    headerAlign: "center",
    renderCell: (data) => {
      return (
        <Avatar
          sx={{ mx: "auto" }}
          alt={`${data.row.title} `}
          src={data.row.thumbnail}
        />
      );
    },
  },
  {
    field: "id",
    headerName: "ID",
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "title",
    headerName: "Title",
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "price",
    headerName: "Price",
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "discountPercentage",
    headerName: "Discount Percentage",
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "stock",
    headerName: "Stock",
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "rating",
    headerName: "Rating",
    align: "center",
    flex: 1,
    headerAlign: "center",
    renderCell: (data) => {
      return (
        <Rating
          name="text-feedback"
          value={data.row.rating}
          readOnly
          precision={0.5}
          emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      );
    },
  },
  {
    field: "brand",
    headerName: "Brand",
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
];

const ProductsDataGrid = () => {
  /* ** Fetching Data ** */
  const theme = useTheme();
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=194&select=title,price,discountPercentage,rating,stock,brand,thumbnail",
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
          height: 600,
          width: "95%",
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
            width: "80px",
            height: "80px",
          }}
          color="primary"
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
    <Box
      sx={{
        height: 600,
        width: "85%",
        mx: "auto",
        mt: "30px",
      }}
    >
      <Typography component={"h4"} variant="h4" mb={"20px"}>
        Products in store
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        sx={{
          boxShadow: theme.palette.mode === "light" ? "0 0 5px #ddd" : "",
        }}
      />
    </Box>
  );
};
export default ProductsDataGrid;
