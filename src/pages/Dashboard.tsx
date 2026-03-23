import { Grid, Stack } from "@mui/material";
import ProductsByCategoryChart from "../components/ProductChart";
import GenderChart from "../components/UsersGender";
import CustomerCard from "../components/CustomerCard";
import ProductsCard from "../components/ProductsCard";
import CategoriesCard from "../components/CategoriesCard";

const Dashboard = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"20px"}
        flexWrap={"wrap"}
      >
        <CustomerCard />
        <ProductsCard />
        <CategoriesCard />
      </Stack>
      <Grid container spacing={"20px"} mt={"30px"}>
        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <GenderChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 8 }}>
          <ProductsByCategoryChart />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
