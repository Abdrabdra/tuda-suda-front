import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { RootState, useTypedSelector } from "@store/index";

const banners = [
  {
    title: "Avto Like запустился",
    text: "Покупайте автомобили через наше приложение Avto-Like.kz",
  },
  {
    title: "Buy Jer запустился",
    text: "Покупайте недвижимость через наше приложение BuyJer.kz",
  },
  {
    title: "MarketPlace запустился",
    text: "Покупайте все что угодно через наше приложение MarketPlace.kz",
  },
];

const ImageBox = () => {
  const image = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedPicture
  );

  return (
    <Box sx={{ backgroundColor: "grey.0" }}>
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            {image ? (
              <Box
                component="img"
                src={image}
                sx={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "20px",
                  backgroundColor: "secondary.200",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "20px",
                  backgroundColor: "secondary.200",
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default ImageBox;
