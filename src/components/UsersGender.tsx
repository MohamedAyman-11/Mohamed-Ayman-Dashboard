import {
  Card,
  CardContent,
  Typography,
  Box,
  SvgIcon,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

const GenderChart = () => {
  const theme = useTheme();
  // ✅ fetch users
  const { isLoading, data } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/users?limit=208&select=firstName,age,password,lastName,username,gender,image",
        );
        return data.users;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [genderData, setGenderData] = useState<ChartData<"doughnut">>({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    if (isLoading) return;
    const maleCount = data.filter(
      (u: { gender: string }) => u.gender === "male",
    ).length;
    const femaleCount = data.filter(
      (u: { gender: string }) => u.gender === "female",
    ).length;
    setGenderData({
      labels: ["Male", "Female"],
      datasets: [
        {
          label: "Gender Count",
          data: [maleCount, femaleCount],
          backgroundColor: [theme.palette.primary.main, "#f35865"],
          borderColor: "transparent",
        },
      ],
    });
  }, [data, theme.palette.primary.main]);

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
    <Card
      sx={{
        borderRadius: 3,
        width: "98%",
        height: 400,
        mx: "auto",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Doughnut
          width={"100%"}
          options={{
            animation: {
              duration: 1500,
              easing: "easeOutQuart",
              delay: (ctx) => ctx.dataIndex * 200,
            },
            plugins: {
              legend: {
                labels: {
                  color: theme.palette.text.primary,
                  font: {
                    size: 18,
                  },
                },
              },
              title: {
                display: true,
                text: "Gender Distribution",
                color: theme.palette.text.primary,
                font: {
                  size: 20,
                  weight: "bold",
                },
              },
            },
            responsive: true,
          }}
          data={genderData}
        />
      </CardContent>
    </Card>
  );
};
export default GenderChart;
