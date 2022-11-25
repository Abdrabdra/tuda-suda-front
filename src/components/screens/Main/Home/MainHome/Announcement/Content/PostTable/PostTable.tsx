import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack, TableFooter, TablePagination } from "@mui/material";
import { IPost } from "@store/rtk-api/post-rtk/post.type";
import { useNavigate } from "react-router-dom";
import AlertDialog from "./Approve";

const heads = [
  "ID",
  "City",
  "Disctrict",
  "Date",
  "Category",
  "Description",
  "Details",
  "Action",
];

interface Props {
  data?: IPost[];
}

const PostTable: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  return (
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
          {data &&
            data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.district}</TableCell>
                <TableCell>{row.dateTime}</TableCell>
                <TableCell>{row.postCategory}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.details}</TableCell>
                <TableCell>
                  <Stack>
                    <Button
                      variant={"contained"}
                      onClick={() => navigate(`/app/home/one/${row.id}`)}
                    >
                      Get In
                    </Button>
                    <AlertDialog postId={row.id} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostTable;
