// library
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../../../store";
import { ActionsEnum } from "../../../../store/enum";
import { register } from "@store/reducers/auth/auth.action";
import { setUnRegister } from "@store/reducers/auth/auth.slice";

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/auth/login`);
  };

  const dispatch = useDispatch();
  const { isAuth, isRegistered, error, status } = useTypedSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      address: "Tole bi 259",
      fullName: "Serikov Serik Serikovich",
      username: "020501550254",
      phone: "+77005553533",
      location: "Almalinsky",
      position: "Police sergeant",
      password: "Dico1342002",
      roles: ["ROLE_POLICEMAN"],
    },
    onSubmit: async (values) => {
      //@ts-ignore
      const data = await dispatch(register(values as any));
      console.log(data);
    },
    // validationSchema: loginSchema,
  });

  const { values, errors, handleChange, handleSubmit } = formik;
  const { address, fullName, username, location, position, phone, password } =
    values;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        dispatch(setUnRegister());
        navigate("/auth/login");
      }, 1500);
    }
  }, [isRegistered]);

  return (
    <Container maxWidth="xs" component={"main"}>
      <Stack sx={{ height: "100vh", justifyContent: "center" }}>
        <Typography align="center" sx={{ fontSize: "25px", fontWeight: 500 }}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={1}>
            <Stack>
              <Typography>Full Name</Typography>
              <TextField
                ref={inputRef}
                name="fullName"
                value={fullName}
                required
                onChange={handleChange}
                placeholder="Full Name"
              />
              {errors.phone && <Typography>{errors.fullName}</Typography>}
            </Stack>

            <Stack>
              <Typography>Address</Typography>
              <TextField
                id="my-input"
                aria-describedby="my-helper-text"
                name="address"
                value={address}
                onChange={handleChange}
                placeholder="Address"
              />
              {errors.address && <Typography>{errors.address}</Typography>}
            </Stack>

            <Stack>
              <Typography>Location</Typography>
              <TextField
                id="my-input"
                aria-describedby="my-helper-text"
                name="location"
                value={location}
                onChange={handleChange}
                placeholder="Location"
              />
              {errors.location && <Typography>{errors.location}</Typography>}
            </Stack>

            <Stack>
              <Typography>Position</Typography>
              <TextField
                id="my-input"
                aria-describedby="my-helper-text"
                name="position"
                value={position}
                onChange={handleChange}
                placeholder="Position"
              />
              {errors.position && <Typography>{errors.position}</Typography>}
            </Stack>

            <Stack>
              <Typography>Phone Number</Typography>
              <TextField
                id="my-input"
                aria-describedby="my-helper-text"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              {errors.phone && <Typography>{errors.phone}</Typography>}
            </Stack>

            <Stack>
              <Typography>IIN</Typography>
              <TextField
                id="my-input"
                aria-describedby="my-helper-text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="IIN"
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
                disabled={
                  status === ActionsEnum.ERROR
                    ? false
                    : status === ActionsEnum.LOADING
                    ? true
                    : false
                }
                startIcon={
                  status === ActionsEnum.LOADING ? (
                    <CircularProgress sx={{ color: "#FFF" }} />
                  ) : (
                    <></>
                  )
                }
                type="submit"
              >
                Sign Up
              </Button>
            </Box>

            {isRegistered && (
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "success.main",
                }}
              >
                Successfully Signed Up!
              </Typography>
            )}

            <Typography>
              You've already have account?{" "}
              <Button onClick={() => handleClick()}>Sign In</Button>
            </Typography>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default Registration;
