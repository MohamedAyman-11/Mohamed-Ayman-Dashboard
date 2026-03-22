import { Clear } from "@mui/icons-material";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { grey } from "@mui/material/colors";
import { Fragment, useEffect, useState } from "react";

/* ** Interfaces ** */
interface IProps {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

const MessageDrawer = ({ open, toggleDrawer }: IProps) => {
  /* ** States ** */
  const [comments, setComments] = useState<{ body: string; id: number }[]>([]);

  /* ** Fetch Data ** */
  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((res) => setComments(res.comments));
  }, []);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
      slotProps={{
        paper: {
          sx: {
            width: 350,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          },
        },
      }}
    >
      {/* Header */}
      <Stack direction="row" alignItems="center" gap="10px" py={1.5} pl={2}>
        <IconButton
          onClick={toggleDrawer(false)}
          size="small"
          sx={{
            borderRadius: "6px",
            p: 0.25,
            color: grey[400],
            "&:hover": {
              color: grey[300],
            },
          }}
        >
          <Clear />
        </IconButton>

        <Typography variant="h6" fontWeight={500}>
          Message
        </Typography>
      </Stack>

      <Divider />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <List
          className="custom-scrollbar"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            minHeight: 0,
          }}
        >
          {comments.map((comment, index) => (
            <Fragment key={comment.id}>
              <ListItem>
                <ListItemText primary={comment.body} />
              </ListItem>
              {index < comments.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MessageDrawer;
