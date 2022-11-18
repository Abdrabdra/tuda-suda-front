import { Box, Button, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const TagBox = () => {
  const [like, setLike] = useState(326);
  const handleClick = () => {
    setLike(like + 1);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "5px", fontWeight: 700, fontSize: "12px" }}
        >
          В Топ-10
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "common.white",
            borderRadius: "5px",
            fontWeight: 600,
            fontSize: "12px",
            color: "secondary.300",
          }}
        >
          В Рекомендациях
        </Button>
      </Stack>
      <Button
        startIcon={<FavoriteBorderIcon />}
        onClick={handleClick}
        sx={{
          backgroundColor: "secondary.300",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        {like}
      </Button>
    </Stack>
  );
};

export default TagBox;
