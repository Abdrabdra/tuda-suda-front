import { Box, Divider, Stack, Typography } from "@mui/material";
import { RootState, useTypedSelector } from "@store/index";

const data = [
  {
    title: "Город",
    value: "Алматы",
  },
  {
    title: "Поколение",
    value: "2016-2020 W213/S213/C238/A23",
  },
  {
    title: "Кузов",
    value: "Купе",
  },
  {
    title: "Обьем двигателя",
    value: "3л",
  },
  {
    title: "Пробег",
    value: "5 000км",
  },
  {
    title: "Коробка передач",
    value: "Автомат",
  },
  {
    title: "Привод",
    value: "Задний привод",
  },
  {
    title: "Руль",
    value: "Слева",
  },
  {
    title: "Расмтожен в КЗ",
    value: "Да",
  },
];
const len = data.length;

const DetailsTab = () => {
  const stateGeneration = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedGeneration
  );
  const stateCase = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedCase
  );
  const stateManufacture = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedManufacture
  );
  const stateGear = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedGear
  );
  const stateCondition = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedCondition
  );

  const stateData = [
    { value: stateGeneration, title: "Поколение" },
    { value: stateCase, title: "Кузов" },
    { value: stateManufacture, title: "Год Выпуска" },
    { value: stateGear, title: "Двигатель" },
    { value: stateCondition, title: "Пробег" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Stack>
        {(stateData ? stateData : data).map((row, index) => (
          <Stack spacing={1} sx={{ paddingTop: "0.5rem" }}>
            <Box sx={{ display: "flex" }} key={index}>
              <Typography
                sx={{
                  flex: "1",
                  color: "secondary.900",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.title}
              </Typography>
              <Typography
                sx={{
                  flex: "1",
                  display: "display",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                {row.value}
              </Typography>
            </Box>
            {len != index + 1 && <Divider />}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default DetailsTab;
