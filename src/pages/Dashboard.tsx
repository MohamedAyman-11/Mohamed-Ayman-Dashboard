import { Grid } from "@mui/material";
import ProductsByCategoryChart from "../components/ProductChart";
import GenderChart from "../components/UsersGender";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={"20px"} mt={"30px"}>
        <Grid size={{ xs: 12, lg: 6, xl: 4 }}>
          <GenderChart />
        </Grid>
        <Grid size={{ xs: 12, lg: 6, xl: 8 }}>
          <ProductsByCategoryChart />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
