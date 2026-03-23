import { Group, Inventory } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Icon,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CustomerCard = () => {
  const theme = useTheme();
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/users");
        return data.users;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
            <Box
              color="info"
              sx={{
                p: "10px",
                borderRadius: "50%",
                width: "46px",
                height: "46px",
              }}
            >
              <Group />
            </Box>
            <Stack direction={"column"}>
              <Typography variant="body1" component={"span"} color="secondary">
                Customers
              </Typography>
              <Typography variant="h6" component={"h6"}>
                {data?.length}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
export default CustomerCard;
