import { Avatar, Box, Button, Icon, Input, Stack } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";

import { logout } from "@store/reducers/auth/auth.slice";

const TopHomeDrawer = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    console.log(localStorage.getItem("access_token"));
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Avatar />
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          minWidth: "50px",
          width: "50px",
          height: "50px",
          borderRadius: "12px",
        }}
      >
        <Icon component={LogoutIcon} />
      </Button>
    </Stack>
  );
};

export default TopHomeDrawer;
