import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, CardContent, Typography } from "@mui/material";

export default function ProductsByCategoryChart() {
  const [products, setProducts] = React.useState([]);

  // ✅ fetch
  React.useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const categoryCount = React.useMemo(() => {
    const map: Record<string, number> = {};

    products.forEach((product: { category: string }) => {
      const cat = product.category;
      map[cat] = (map[cat] || 0) + 1;
    });
    return map;
  }, [products]);

  const categories = Object.keys(categoryCount);

  const values = Object.values(categoryCount);
  console.log(values);

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Products per Category
        </Typography>

        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: categories,
            },
          ]}
          series={[
            {
              data: values,
            },
          ]}
          height={400}
        />
      </CardContent>
    </Card>
  );
}
