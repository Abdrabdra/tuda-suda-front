import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import numberWithSpaces from "@utils/numberWithSpaces";
import { RootState, useTypedSelector } from "@store/index";

interface Props {
  title: string;
  price: number;
}

const TitleBox: FC<Props> = ({ title, price }) => {
  const stateBrand = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedBrand
  );
  const stateMark = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedMark
  );

  const statePrice = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedPrice
  );

  return (
    <Stack>
      <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
        {stateBrand && stateMark ? `${stateBrand} ${stateMark}` : title}
      </Typography>
      <Typography color="primary" sx={{ fontSize: "16px", fontWeight: 500 }}>
        {numberWithSpaces(statePrice ? statePrice : price)}KZT
      </Typography>
    </Stack>
  );
};

export default TitleBox;
