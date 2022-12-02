import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RootState, useTypedSelector } from "@store/index";
import { FC } from "react";

interface SubmitButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: any;
}

const GetStepButtonTitle = () => {
  return <>ч</>;
};

const SubmitButton = styled(
  ({ type, disabled, onClick }: SubmitButtonProps) => (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      fullWidth
      disabled={disabled ? disabled : false}
    >
      {GetStepButtonTitle()}
    </Button>
  )
)(({ theme }) => ({
  backgroundColor: "primary.main",
  borderRadius: "10px",

  fontSize: "18px",
  fontWeight: 600,
}));

export default SubmitButton;
