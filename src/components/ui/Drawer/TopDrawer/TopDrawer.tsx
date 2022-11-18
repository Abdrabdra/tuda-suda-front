import { FC, useEffect, useState } from "react";
import { AppBar, Box, Container } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";

import TopHomeDrawer from "./TopHomeDrawer";
import useCheckPath from "../DrawerUtils/CheckPath";

const TopDrawer = () => {
  const location = useLocation();
  const [path, setPath] = useState<String | null>(null);

  const matchedPath: string | null | undefined = useCheckPath();
  useEffect(() => {
    matchedPath != null ? setPath(matchedPath) : setPath("/app/other");
  }, [location]);

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: 0,
        bottom: "auto",
        height: "125px",
        justifyContent: "flex-end",
        paddingBottom: "12px",
        backgroundColor: "secondary.200",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Container>
        <TopHomeDrawer />
      </Container>
    </AppBar>
  );
};

export default TopDrawer;
