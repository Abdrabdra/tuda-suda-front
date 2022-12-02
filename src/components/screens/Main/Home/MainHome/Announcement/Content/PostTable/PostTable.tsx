import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Chip,
  Stack,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { IPost } from "@store/rtk-api/post-rtk/post.type";
import { useNavigate } from "react-router-dom";
import AlertDialog from "./Approve";
import {
  DataGrid,
  GridApi,
  GridCellValue,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useTypedSelector } from "@store/index";

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
  data?: any;
}

const PostTable: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const { role } = useTypedSelector((state) => state.auth);

  const lastData =
    role === "ROLE_POLICEMAN"
      ? data
      : data.filter((row: any) => row.approved === true);

  console.log(lastData);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "city", headerName: "city", width: 130 },
    { field: "district", headerName: "district", width: 130 },
    {
      field: "dateTime",
      headerName: "DateTime",
      type: "number",
      width: 90,
    },
    { field: "postCategory", headerName: "postCategory", width: 130 },
    { field: "description", headerName: "description", width: 130 },
    { field: "details", headerName: "details", width: 130 },
    {
      field: "approved",
      headerName: "approved",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          console.log(params);
          return alert(JSON.stringify(thisRow, null, 4));
        };

        return (
          <Stack>
            <Chip
              onClick={onClick}
              label={params.value ? `true` : `false`}
              color={params.value ? `success` : `error`}
            />
          </Stack>
        );
      },
    },
    {
      field: "Get In",
      headerName: "Get In",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return (
          <Stack>
            <Button
              variant={"contained"}
              onClick={(id) => navigate(`/app/home/one/${params.row.id}`)}
            >
              Get In
            </Button>
          </Stack>
        );
      },
    },
    {
      field: "Approve",
      headerName: role === "ROLE_POLICEMAN" ? "Approve" : "",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return (
          <Stack>
            {role === "ROLE_POLICEMAN" ? (
              <AlertDialog postId={params.id} />
            ) : null}
          </Stack>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      {data && (
        <DataGrid
          rows={lastData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default PostTable;
