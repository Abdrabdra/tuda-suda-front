import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import OneTag from "./OneTag";

interface Props {
  tags: { releaseDate?: string; condition: string; mileage: string };
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <Stack direction="row" spacing={1}>
      <OneTag tags>{tags.releaseDate}</OneTag>
      <OneTag tags>{tags.condition}</OneTag>
      <OneTag tags>{tags.mileage}</OneTag>
    </Stack>
  );
};

export default Tags;
