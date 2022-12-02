import { FC } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { RootState, useTypedSelector } from "@store/index";

const StartIcon = () => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        width: "32px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
      }}
    >
      <ArrowBackIosNewRoundedIcon
        sx={{ color: "primary.main", fontSize: "18px" }}
      />
    </Box>
  );
};

interface GoBackButtonProps {
  forPost: boolean;
}

const GoBackButton: FC<GoBackButtonProps> = ({ forPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const handlePostClick = () => {};

  return (
    <Button
      onClick={forPost ? handlePostClick : handleClick}
      startIcon={<StartIcon />}
      sx={{ color: "common.white", fontWeight: 600, fontSize: "16px" }}
    ></Button>
  );
};

export default GoBackButton;
