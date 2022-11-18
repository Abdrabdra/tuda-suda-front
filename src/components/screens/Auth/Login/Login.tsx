// library
import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  FormGroup,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useTypedSelector } from "../../../../store";
import { loginSchema } from "../../../../utils/schema/validation";
import { StyledNewInput } from "../../../ui/Input";
import { ActionsEnum } from "../../../../store/enum";
import { login } from "../../../../store/reducers/auth/auth.action";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, error, status } = useTypedSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "", // 8747 411 81 59
      password: "", // 12345
    },
    onSubmit: async (values) => {
      // @ts-ignore
      dispatch(login(values as ILogin));
    },
    validationSchema: loginSchema,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  const { username, password } = values;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handlePolicemanClick = () => {
    navigate(`/auth/registration`);
  };

  const handleUserClick = () => {
    navigate(`/auth/uregistration`);
  };

  return (
    <Box>
      <Container maxWidth="xs" component={"main"}>
        <Stack
          sx={{
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography align="center" sx={{ fontSize: "25px", fontWeight: 500 }}>
            Добро Пожаловать!
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <Stack>
                <Typography>ИИН</Typography>
                <TextField
                  ref={inputRef}
                  name="username"
                  value={username}
                  required
                  onChange={handleChange}
                  placeholder="ИИН"
                />
                {errors.username && <Typography>{errors.username}</Typography>}
              </Stack>
              <Stack>
                <Typography>Пароль</Typography>
                <TextField
                  id="my-input"
                  aria-describedby="my-helper-text"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Введите пароль"
                />
                {errors.password && <Typography>{errors.password}</Typography>}
              </Stack>
              <Box sx={{ width: "100px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={status === ActionsEnum.LOADING}
                  startIcon={
                    status === ActionsEnum.LOADING && (
                      <CircularProgress sx={{ color: "#FFF" }} />
                    )
                  }
                  type="submit"
                >
                  Войти
                </Button>
              </Box>

              <Typography>
                У вас нет аккаунта?{" "}
                <Button onClick={() => handleOpen()}>Регистрируйтесь</Button>
              </Typography>
            </Stack>
          </form>
        </Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Stack sx={style} alignItems="center" spacing={2}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you?
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Button variant="outlined" onClick={handleUserClick}>
                User
              </Button>
              <Button variant="contained" onClick={handlePolicemanClick}>
                Policeman
              </Button>
            </Stack>
          </Stack>
        </Modal>
      </Container>
    </Box>
  );
};

export default Login;
