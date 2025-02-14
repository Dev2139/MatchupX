import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const CustomButton = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  disabled = false,
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  loading = false,
  sx = {}, // Custom styling using MUI's sx prop
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled || loading} // Disable button when loading
      fullWidth={fullWidth}
      startIcon={!loading ? startIcon : <CircularProgress size={20} color="inherit" />}
      endIcon={endIcon}
      sx={sx}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
};

export default CustomButton;
