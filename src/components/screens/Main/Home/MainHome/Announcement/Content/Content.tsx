import InfoStats from "@components/modules/InfoStat/InfoStat";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Main from "./Main/Main";

const cars = [
  {
    id: 0,
    image: "",
    title: "Lexus LF LC 500",
    price: 20000000,
    city: "Алматы",
    publishDate: "7 октября",
    views: 1280,
    tags: { releaseDate: "2017", condition: "С пробегом", mileage: "5000" },
  },
  {
    id: 1,
    image: "",
    title: "Lexus LF LC 500",
    price: 20000000,
    city: "Алматы",
    publishDate: "7 октября",
    views: 1280,
    tags: { releaseDate: "2017", condition: "С пробегом", mileage: "5000" },
  },
  {
    id: 2,
    image: "",
    title: "Lexus LF LC 500",
    price: 20000000,
    city: "Алматы",
    publishDate: "7 октября",
    views: 1280,
    tags: { releaseDate: "2017", condition: "С пробегом", mileage: "5000" },
  },
  {
    id: 3,
    image: "",
    title: "Lexus LF LC 500",
    price: 20000000,
    city: "Алматы",
    publishDate: "7 октября",
    views: 1280,
    tags: { releaseDate: "2017", condition: "С пробегом", mileage: "5000" },
  },
  {
    id: 4,
    image: "",
    title: "Lexus LF LC 500",
    price: 20000000,
    city: "Алматы",
    publishDate: "7 октября",
    views: 1280,
    tags: { releaseDate: "2017", condition: "С пробегом", mileage: "5000" },
  },
];

const Content = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/app/home/one/${id}`);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" my={1}>
          Посты
        </Typography>
        <Button variant="contained" color="success">
          Добавить Пост
        </Button>
      </Stack>
      <Stack spacing={1.5}>
        {cars.map((car, index) => (
          <Box
            key={index}
            onClick={() => handleNavigate(car.id)}
            sx={{
              height: "146px",
              backgroundColor: "common.white",
              borderRadius: "10px",
            }}
          >
            <Main
              title={car.title}
              city={car.city}
              price={car.price}
              tags={car.tags}
            />
            <InfoStats views={car.views} publishDate={car.publishDate} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Content;
