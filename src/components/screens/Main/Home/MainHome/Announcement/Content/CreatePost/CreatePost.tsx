import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ActionsEnum } from "@store/enum";
import { IPost } from "@store/rtk-api/post-rtk/post.type";
import { useCreatePostMutation } from "@store/rtk-api/post-rtk/postEndpoints";
import { useFormik } from "formik";

const CreatePost = () => {
  const [create, { isLoading, isSuccess, isError }] = useCreatePostMutation();

  const current = new Date();
  let fullHour = "";

  if (current.getHours() < 10) {
    fullHour = `0${current.getHours()}`;
  }

  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()} ${fullHour}:${current.getMinutes()}`;

  const formik = useFormik({
    initialValues: {
      id: 0,
      city: "",
      district: "",
      dateTime: date,
      postCategory: "",
      description: "",
      details: "",
    },
    onSubmit: (values) => {
      create(values as IPost);
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <Stack sx={{ justifyContent: "center" }}>
      <Typography align="center" sx={{ fontSize: "25px", fontWeight: 500 }}>
        Create Post
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <Stack>
            <Typography>City</Typography>
            <TextField
              name="city"
              value={values.city}
              required
              onChange={handleChange}
              placeholder="City"
            />
          </Stack>

          <Stack>
            <Typography>District</Typography>
            <TextField
              id="my-input"
              aria-describedby="my-helper-text"
              required
              name="district"
              value={values.district}
              onChange={handleChange}
              placeholder="District"
            />
          </Stack>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              value={values.postCategory}
              name={"postCategory"}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={"lost thing"}>Lost thing</MenuItem>
              <MenuItem value={"lost people"}>Lost people</MenuItem>
            </Select>
          </FormControl>

          <Stack>
            <Typography>Description</Typography>
            <TextField
              id="my-input"
              required
              aria-describedby="my-helper-text"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </Stack>

          <Stack>
            <Typography>Details</Typography>
            <TextField
              id="my-input"
              aria-describedby="my-helper-text"
              name="details"
              required
              value={values.details}
              onChange={handleChange}
              placeholder="Details"
            />
          </Stack>

          <Box sx={{ width: "100px" }}>
            <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              startIcon={
                isLoading ? <CircularProgress sx={{ color: "#FFF" }} /> : <></>
              }
              type="submit"
            >
              Create
            </Button>
          </Box>

          {isSuccess && (
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: "success.main",
              }}
            >
              Successfully Created!
            </Typography>
          )}
          {isError && (
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: "error.main",
              }}
            >
              Error!
            </Typography>
          )}
        </Stack>
      </form>
    </Stack>
  );
};

export default CreatePost;
