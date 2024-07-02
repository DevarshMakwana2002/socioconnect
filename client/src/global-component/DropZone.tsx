import React from "react";
import { useField, useFormikContext } from "formik";
import { Box, Button, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const DropZone = ({ name }) => {
  const { setFieldValue, values }: any = useFormikContext();
  const [field] = useField(name);

  const handleFileChange = (event) => {
    setFieldValue(name, event.currentTarget.files[0]);
  };

  return (
    <Box border={`2px dashed #3f51b5`} p="1rem">
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button component="span" variant="contained">
          Upload Picture
        </Button>
      </label>
      {!values[name] ? (
        <p>Add Picture Here</p>
      ) : (
        <Box display="flex" alignItems="center">
          <Typography>{values[name].name}</Typography>
          <EditOutlinedIcon />
        </Box>
      )}
    </Box>
  );
};

export default DropZone;
