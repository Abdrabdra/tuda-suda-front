import { Box, Grid, Typography } from "@mui/material";

const OneTag = ({ children }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.300",
        padding: "4px 8px 4px 8px",
        borderRadius: "5px",
        color: "grey.100",
      }}
    >
      <Typography>{children}</Typography>
    </Box>
  );
};

export default OneTag;
