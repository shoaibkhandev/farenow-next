import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box, Divider } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    minWidth: "500px",
  },
  "& .vatdtls": {
    fontSize: "20px",
    fontFamily: "Roboto Regular",
    color: "#212529",
  },
  "& .Fltprice": {
    fontSize: "12px",
    fontFamily: "Roboto Bold",
    color: "#4d6f93",
  },
  "& .service": {
    fontSize: "12px",
    fontFamily: "Roboto Regular",
    color: "#4d6f93",
  },
  "& .Fltnet": {
    fontSize: "12px",
    fontFamily: "Roboto Medium",
    color: "#203152",
  },
  "& .Gdprince": {
    fontSize: "16px",
    fontFamily: "Roboto Medium",
    color: "#203152",
  },
  "& .sartext": {
    float: "right",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiDialog-paper": {
      minWidth: "300px",
    },
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a className="btn btn-link" onClick={handleClickOpen} role="button">
        View Details
      </a>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          className="vatdtls"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          vatDtls
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom className="Fltprice">
            FltpriceNet <span className="sartext">SAR 638.85</span>
          </Typography>
          <Box my={2}>
            <Typography gutterBottom className="service">
              ServiceFee <span className="sartext">SAR 638.85</span>
            </Typography>
          </Box>
          <Typography gutterBottom className="Fltnet">
            TotalPrice <span className="sartext">SAR 638.85</span>
          </Typography>
          <Box my={2}>
            <Divider sx={{ border: "1px solid #dee2e6" }} />
          </Box>
          <Typography gutterBottom className="service">
            Vat 0%<span className="sartext">+ SAR 0</span>
          </Typography>
          <Box mt={2} mb={1}>
            <Divider sx={{ border: "1px solid #dee2e6" }} />
          </Box>
          <Typography
            gutterBottom
            className="Fltnet"
            sx={{ marginBottom: "30px" }}
          >
            FltPriceTotal<span className="sartext">SAR 638.85</span>
          </Typography>
          <Box my={1}>
            <Divider sx={{ border: "1px solid #dee2e6" }} />
          </Box>
          <Typography
            gutterBottom
            className="Gdprince"
            sx={{ marginBottom: "30px" }}
          >
            GrdPriceTotal<span className="sartext">SAR 638.85</span>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
