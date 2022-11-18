import { Button, Icon, IconButton } from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = () => {
  const [iconClick, setIconClick] = useState(false);
  const handleIconClick = () => {
    setIconClick(!iconClick);
  };

  return (
    <IconButton
      onClick={handleIconClick}
      sx={{
        width: "32px",
        height: "32px",
        minWidth: "32px",
        borderRadius: "5px",
        color: "primary.main",
        backgroundColor: "secondary.300",
      }}
    >
      <Icon
        component={iconClick == false ? FavoriteBorderIcon : FavoriteIcon}
      />
    </IconButton>
  );
};

export default LikeButton;
