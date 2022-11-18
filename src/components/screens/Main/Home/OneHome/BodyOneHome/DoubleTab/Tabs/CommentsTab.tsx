import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const data = [
  {
    name: "Димаш",
    comment:
      "Очень нравиться машина. Я бы хотел взять эту машину. Цена=Качество ",
  },
  {
    name: "Димаш",
    comment:
      "Очень нравиться машина. Я бы хотел взять эту машину. Цена=Качество ",
  },
  {
    name: "Димаш",
    comment:
      "Очень нравиться машина. Я бы хотел взять эту машину. Цена=Качество ",
  },
];

const CommentsTab = () => {
  return (
    <Stack spacing={2}>
      {data.map((row) => (
        <Stack
          spacing={1}
          sx={{
            height: "122px",
            padding: "16px",
            borderRadius: "12px",
            backgroundColor: "common.white",
          }}
        >
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignContent={"end"}
          >
            <Typography
              alignSelf={"center"}
              sx={{ fontSize: 16, fontWeight: 600 }}
            >
              {row.name}
            </Typography>
            <IconButton color="primary" sx={{ padding: 0 }}>
              <FavoriteBorderIcon />
            </IconButton>
          </Stack>
          <Typography sx={{ color: "secondary.900" }}>{row.comment}</Typography>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Button
              sx={{
                width: "60px",
                height: "20px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "underline",
              }}
            >
              Ответить
            </Button>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default CommentsTab;
