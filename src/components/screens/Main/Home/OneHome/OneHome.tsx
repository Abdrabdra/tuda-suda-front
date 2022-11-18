import InfoStats from "@components/modules/InfoStat/InfoStat";
import { Box, Container, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  Description,
  DoubleTab,
  ImageBox,
  TagBox,
  TitleBox,
} from "./BodyOneHome";

const OneHome = () => {
  const params = useParams();
  const { announceId } = params;

  return (
    <Box>
      <Container>
        <Stack spacing={1}>
          <ImageBox />
          <TagBox />
          <TitleBox title="Toyota Alphard" price={15000} />
          <DoubleTab />
          <Description />
          <InfoStats views={770} publishDate={"7 октября"} />
        </Stack>
      </Container>
    </Box>
  );
};

export default OneHome;
