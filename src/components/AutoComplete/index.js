import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";

const CustomTextField = styled(TextField)`
  fieldset {
    border: none !important;
  }
`;

const Languages = [
  { id: 1, label: "C#" },
  { id: 2, label: "C++" },
  { id: 3, label: "Java" },
  { id: 4, label: "JavaScript" },
  { id: 5, label: "Python" },
];

export default function AutoComplete() {
  const [value, setValue] = useState([Languages[3]]);
  return (
    <Stack spacing={2}>
      {/* <Autocomplete
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        options={Languages}
        getOptionLabel={(item) => item.label.toUpperCase()}
        sx={{ width: 300 }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Languages"
              // sx={{ "& fieldset": { border: "none" } }}
            />
          );
        }}
      /> */}
      <Autocomplete
        multiple
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        // filterSelectedOptions
        options={Languages}
        getOptionLabel={(item) => item.label.toUpperCase()}
        sx={{ mb: 2, "& .MuiChip-root": { bgcolor: "transparent" } }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Languages"
              // sx={{ "& fieldset": { border: "none" } }}
            />
          );
        }}
      />
    </Stack>
  );
}
