import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            placeholder="pick a date"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": {
                height: "27px",
              },
              "& .MuiOutlinedInput-root": {
                color: "#4D6F93 !important",
                background: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "#4D6F93 !important",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                top: "0px",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
