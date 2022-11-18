import {
  Box,
  Container,
  IconButton,
  Input,
  Stack,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { AccountCircle } from "@mui/icons-material";

const OneChatDrawer = () => {
  return (
    <Box py={2}>
      <Stack direction={"row"} spacing={1.75} alignItems={"center"}>
        <TextField
          variant="standard"
          placeholder="Напишите сообщение..."
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            flex: "1",
            borderRadius: "12px",

            input: {
              backgroundColor: "grey.200",
              color: "common.black",

              "&::placeholder": {
                color: "grey.800",
              },
            },
          }}
        />
        <Box>
          <IconButton
            color="primary"
            sx={{ backgroundColor: "secondary.300", width: 44, height: 44 }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default OneChatDrawer;
