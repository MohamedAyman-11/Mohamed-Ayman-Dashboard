import { Box, Grid } from "@mui/material";
import UsersCard from "../components/UsersGender";
import ProductsByCategoryChart from "../components/ProductChart";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={"20px"} mt={"30px"}>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <UsersCard />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <UsersCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <UsersCard />
        </Grid>
      </Grid>
      <Box mt={"50px"}>
        <ProductsByCategoryChart />
      </Box>
    </>
  );
};
export default Dashboard;
