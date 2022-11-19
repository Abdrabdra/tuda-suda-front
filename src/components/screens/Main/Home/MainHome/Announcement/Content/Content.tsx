import InfoStats from "@components/modules/InfoStat/InfoStat";
import { TextFields } from "@mui/icons-material";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useGetPostsQuery } from "@store/rtk-api/post-rtk/postEndpoints";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import CreatePost from "./CreatePost";

import Main from "./Main/Main";
import PostTable from "./PostTable";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Content = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/app/home/one/${id}`);
  };

  const [query, setQuery] = React.useState({
    query: "",
    sort: "",
  });

  const { data } = useGetPostsQuery(
    { ...query },
    { refetchOnMountOrArgChange: true }
  );

  const formik = useFormik({
    initialValues: {
      query: "",
      sort: "",
    },
    onSubmit: (values) => {
      setQuery((prev) => {
        return {
          ...prev,
          ...values,
        };
      });
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" my={1}>
          Posts
        </Typography>
        <Button variant="contained" color="success" onClick={handleOpen}>
          Create Post
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Post
            </Typography>
            <CreatePost />
          </Box>
        </Modal>
      </Stack>

      <form onSubmit={handleSubmit}>
        <Stack spacing={1} direction="row">
          <TextField
            placeholder="Search"
            label="Search"
            name="query"
            onChange={handleChange}
            value={values.query}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Stack>
      </form>

      <PostTable data={data && data.content} />
    </Stack>
  );
};

export default Content;
