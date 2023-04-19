import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type dataType = {
  title: string;
  subtitle: string;
  text: string;
  info: {
    text: string;
    topics: string[];
  };
};

export default function DailogServices({ open, setOpen, item }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; item: dataType | undefined }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <Box display={"flex"}>
          <DialogTitle id="alert-dialog-title" style={{ width: "86%" }}>
            {item?.title}
          </DialogTitle>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <DialogContent>
          <Typography variant="h5" color="black">
            {item?.subtitle}
          </Typography>
          <br />
          <DialogContentText id="alert-dialog-description">{item?.info.text}</DialogContentText>
          <br />
          <br />
          <Typography variant="h6" color="black">
            Relações:
          </Typography>

          <ul>
            {item?.info.topics.map((item, i) => (
              <li key={i}>◉ {item}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}
