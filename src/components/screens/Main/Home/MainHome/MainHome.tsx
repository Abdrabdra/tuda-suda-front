import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Announcement from "./Announcement";

const MainHome: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("one/1");
  };

  return (
    <Box>
      <Container>
        <Stack spacing={1}>
          <Announcement />
        </Stack>
      </Container>
    </Box>
  );
};

export default MainHome;
