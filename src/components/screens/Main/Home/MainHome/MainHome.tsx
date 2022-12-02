import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import { useTypedSelector } from "@store/index";
import { setRole } from "@store/reducers/auth/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthService } from "service/auth/auth.service";

import Announcement from "./Announcement";

const MainHome: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const response = await AuthService.userme();
    dispatch(setRole(response.data.roleName));
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
