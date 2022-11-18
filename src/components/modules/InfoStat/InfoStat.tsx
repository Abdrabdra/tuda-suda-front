import { FC } from "react";
import { Box, Typography, Stack } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import numberWithSpaces from "@utils/numberWithSpaces";
import { InfoStatsProps } from "./InfoStats.types";

const InfoStats: FC<InfoStatsProps> = ({ views, publishDate }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ marginLeft: "13px" }}
    >
      <VisibilityOutlinedIcon sx={{ fontSize: "11.2px" }} />
      <Typography sx={{}}>{numberWithSpaces(views)}</Typography>
      <Box
        sx={{
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          backgroundColor: "secondary.500",
        }}
      />
      <Typography>{publishDate}</Typography>
    </Stack>
  );
};

export default InfoStats;
