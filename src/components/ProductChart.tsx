import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import {
  Box,
  Card,
  CardContent,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function ProductsByCategoryChart() {
  const theme = useTheme();

  // ✅ fetch
  const { isLoading, data } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100",
        );
        return data.products;
      } catch (error) {
        console.log(error);
      }
    },
  });

  /* ** Get The Products Category ** */
  const categoryCount = useMemo(() => {
    if (!data) return {};
    const map: Record<string, number> = {};
    data.forEach((product: { category: string }) => {
      const cat = product.category;
      map[cat] = (map[cat] || 0) + 1;
    });
    return map;
  }, [data]);

  const categories = Object.keys(categoryCount);

  console.log("CATEGORIES", categories);
  const values = Object.values(categoryCount);
  console.log("VALUES", values);

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
    <Card sx={{ borderRadius: 3, width: "95%", height: 400, mx: "auto" }}>
      <CardContent sx={{ height: "100%" }}>
        <Typography variant="h6" mb={2}>
          Products per Category
        </Typography>

        <Box sx={{ height: "calc(100% - 40px)" }}>
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,

              scales: {
                x: {
                  ticks: {
                    color: theme.palette.text.primary,
                  },
                },
                y: {
                  ticks: {
                    color: theme.palette.text.primary,
                  },
                },
              },

              plugins: {
                legend: {
                  labels: {
                    color: theme.palette.text.primary,
                    font: {
                      size: 16,
                    },
                  },
                },
              },
            }}
            data={{
              labels: categories,
              datasets: [
                {
                  label: "Number Of Products",
                  data: values,
                  backgroundColor: theme.palette.primary.main,
                },
              ],
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
