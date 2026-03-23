import { Dashboard, Group, Inventory } from "@mui/icons-material";
import type { ILinksData } from "../interfaces";

export const LinksData: ILinksData[] = [
  {
    text: "Dashboard",
    path: "/",
    icon: <Dashboard />,
  },
  {
    text: "Products",
    path: "/products",
    icon: <Inventory />,
  },
  {
    text: "Customers",
    path: "/customers",
    icon: <Group />,
  },
];
