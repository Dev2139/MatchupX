import React from "react";
import CustomButton from "./assets/Generic_Components/CustomButton";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
      {/* Default Button */}
      <CustomButton onClick={() => alert("Clicked Primary Button")}>
        Primary Button
      </CustomButton>

      {/* Outlined Secondary Button */}
      <CustomButton variant="outlined" color="secondary">
        Outlined Button
      </CustomButton>

      {/* Large Success Button */}
      <CustomButton variant="contained" color="success" size="large">
        Success Button
      </CustomButton>

      {/* Button with Start Icon */}
      <CustomButton startIcon={<SaveIcon />} color="info">
        Save
      </CustomButton>

      {/* Button with End Icon */}
      <CustomButton endIcon={<DeleteIcon />} color="error">
        Delete
      </CustomButton>

      {/* Full-Width Disabled Button */}
      <CustomButton fullWidth disabled>
        Disabled Button
      </CustomButton>

      {/* Loading Button */}
      <CustomButton loading color="warning">
        Submit
      </CustomButton>
    </div>
  );
};

export default App;
