import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function BasicDatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={props.fromDate}
        onChange={(newValue) => {
          props.setFromDate(newValue);
        }}
        renderInput={(params) =>
          <TextField {...params}
            placeholder="Select departure date"
            size="small"
            fullWidth sx={{
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
                top: "0px"
              },

            }} />}
      />
    </LocalizationProvider>
  );
}
