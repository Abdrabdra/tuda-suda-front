import InfoStats from "@components/modules/InfoStat/InfoStat";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useGetOnePostsQuery } from "@store/rtk-api/post-rtk/postEndpoints";
import { useNavigate, useParams } from "react-router-dom";

const heads = [
  "ID",
  "City",
  "Disctrict",
  "Date",
  "Category",
  "Description",
  "Details",
];

const OneHome = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { postId } = params;

  const { data } = useGetOnePostsQuery(postId ? postId : "");
  console.log("from: ", data);

  return (
    <Box>
      <Container>
        <Stack spacing={1}>
          <Box>
            <Button variant={"outlined"} onClick={() => navigate(-1)}>
              Back
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {heads.map((head, index) => (
                    <TableCell key={index}>{head}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data && (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data.id}
                    </TableCell>
                    <TableCell>{data.city}</TableCell>
                    <TableCell>{data.district}</TableCell>
                    <TableCell>{data.dateTime}</TableCell>
                    <TableCell>{data.postCategory}</TableCell>
                    <TableCell>{data.description}</TableCell>
                    <TableCell>{data.details}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </Box>
  );
};

export default OneHome;
