import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {
  Avatar,
  Badge,
  badgeClasses,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  DarkMode,
  LightMode,
  Message,
  Notifications,
} from "@mui/icons-material";
import type { PaletteMode } from "@mui/material/styles";
import { useState } from "react";
import MessageDrawer from "./MessageDrawer";
import NotiDrawer from "./NotiDrawer";

/* ** Interfaces ** */
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
interface IProps {
  open?: boolean;
  handleDrawerOpen: () => void;
  setMode: (value: PaletteMode) => void;
}

const drawerWidth = 240;

/* ** Styles Customization ** */
/* ** App Bar Custom Styles ** */
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));
/* ** Message Icon Badge Custom Style ** */
const MessageBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
/* ** Notifications Icon Badge Custom Style ** */
const NotiBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const TopBar = ({ open, handleDrawerOpen, setMode }: IProps) => {
  /* ** States And Hooks ** */
  const [openMsgDrawer, setOpenMsgDrawer] = useState(false);
  const [openNotiDrawer, setOpenNotiDrawer] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMsgDrawer(newOpen);
  };
  const toggleNotiDrawer = (newOpen: boolean) => () => {
    setOpenNotiDrawer(newOpen);
  };

  const onToggleModeHandler = () => {
    const newMode = theme.palette.mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("currentMode", newMode);
  };
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ mr: 5, ...(open && { display: "none" }) }]}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={"row"}
            gap={"15px"}
            justifyContent={"space-between"}
            flexGrow={1}
          >
            <Tooltip title="My Profile Photo">
              <Avatar alt="Mohamed Ayman" src="/images/myPhoto.jpg" />
            </Tooltip>
            <Typography variant="h5" noWrap component="h2">
              Mohamed Ayman
            </Typography>
            <Stack direction={"row-reverse"} gap={"2px"}>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <Message />
                <MessageBadge
                  badgeContent={25}
                  max={20}
                  color="error"
                  overlap="circular"
                />
              </IconButton>
              <IconButton color="inherit" onClick={toggleNotiDrawer(true)}>
                <Notifications />
                <NotiBadge
                  badgeContent={15}
                  max={10}
                  color="error"
                  overlap="circular"
                />
              </IconButton>
              {theme.palette.mode === "light" ? (
                <IconButton
                  aria-label="Change To Dark Mode"
                  color="inherit"
                  onClick={onToggleModeHandler}
                >
                  <LightMode fontSize="medium" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="Change To Light Mode"
                  color="inherit"
                  onClick={onToggleModeHandler}
                >
                  <DarkMode fontSize="medium" />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Toolbar>
        <MessageDrawer open={openMsgDrawer} toggleDrawer={toggleDrawer} />
        <NotiDrawer open={openNotiDrawer} toggleDrawer={toggleNotiDrawer} />
      </AppBar>
    </>
  );
};
export default TopBar;
