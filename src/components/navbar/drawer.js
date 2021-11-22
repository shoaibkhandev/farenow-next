import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#f8f9fa!important",
              },
            }}
          >
            <Box
              sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
              }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Button
                aria-label="close"
                onClose={toggleDrawer(anchor, false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              >
                <CloseIcon sx={{ color: "#343a40!important" }} />
              </Button>
              <List>
                <ListItem>
                  {" "}
                  <Box
                    mt={3}
                    component="img"
                    src="/static/img/flyinLogo.png"
                    width="70px"
                  />
                </ListItem>
              </List>
              <List>
                <ListItem button>
                  <Box
                    color="#4d6f93"
                    fontSize="16px"
                    lineHeight="24px"
                    fontFamily="Roboto"
                    sx={{ "&:hover": { color: "#fec524" } }}
                  >
                    Flights{" "}
                  </Box>
                </ListItem>

                <ListItem button>
                  <Badge
                    sx={{
                      "& .MuiBadge-badge": {
                        borderRadius: "1px",
                        fontSize: "9px",
                        fontWeight: 400,
                        p: "0 4px",
                        height: "14px",
                      },
                    }}
                    color="error"
                    badgeContent="new"
                  >
                    <Box
                      color="#4d6f93"
                      fontSize="16px"
                      lineHeight="24px"
                      fontFamily="Roboto"
                      sx={{ "&:hover": { color: "#fec524" } }}
                    >
                      Staycations{" "}
                    </Box>
                  </Badge>
                </ListItem>
                <ListItem button>
                  <Badge
                    sx={{
                      "& .MuiBadge-badge": {
                        borderRadius: "1px",
                        fontSize: "9px",
                        fontWeight: 400,
                        p: "0 4px",
                        height: "14px",
                      },
                    }}
                    color="error"
                    badgeContent="new"
                  >
                    <Box
                      color="#4d6f93"
                      fontSize="16px"
                      lineHeight="24px"
                      fontFamily="Roboto"
                      sx={{ "&:hover": { color: "#fec524" } }}
                    >
                      Activities{" "}
                    </Box>
                  </Badge>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
