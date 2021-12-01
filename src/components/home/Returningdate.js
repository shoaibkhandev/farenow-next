import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function BasicDatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={props.toDate}
        onChange={(newValue) => {
          props.setToDate(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            placeholder="Select return date"
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
