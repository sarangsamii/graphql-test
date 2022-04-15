import {useState}from "react";
import {
  Fab,
  DialogTitle,
  Box,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import { AddDialogProps } from "types";

export default function AddDialog({ onSubmit }: AddDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mb: 3,
        }}
      >
        <Fab onClick={handleClickOpen}>
          <Add />
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              onSubmit(name);
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
