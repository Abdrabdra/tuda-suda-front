import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

import numberWithSpaces from "../../../../../../../../utils/numberWithSpaces";
import LikeButton from "./LikeButton";
import Tags from "./Tags";

interface Props {
  title: string;
  price: number;
  city: string;
  tags: any;
}

const Main: FC<Props> = ({ title, price, city, tags }) => {
  return (
    <Stack direction="row" spacing={1} sx={{ padding: "4px 8px 8px 4px" }}>
      <Box
        sx={{
          backgroundColor: "secondary.200",
          borderRadius: "10px",
          width: "120px",
          height: "110px",
        }}
      >
        {/* <<img alt="car image" />> */}
      </Box>
      <Stack justifyContent="center" sx={{ flex: "1" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Stack>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h6" color="primary">
              {numberWithSpaces(price)}KZT
            </Typography>
            <Typography variant="h6">{city}</Typography>
          </Stack>
          <LikeButton />
        </Box>
        <Tags tags={tags} />
        {/* <Banner /> */}
      </Stack>
    </Stack>
  );
};

export default Main;
