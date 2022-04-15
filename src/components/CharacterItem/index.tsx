import { useEffect, useState, Fragment } from "react";
import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";

import { CharacterProps } from "types";
import { Check, Clear, Edit } from "@mui/icons-material";

const CharacterItem: React.FC<CharacterProps> = ({ name,id,onUpdate }) => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [currentName, setCurrentName] = useState<string>("");

  useEffect(() => {
    setCurrentName(name);
  }, [name]);

  const handleChange = () =>{
    setEdit((prev) => !prev);
    onUpdate({id,name:currentName})
  }

  return (
    <Paper elevation={4}>
      <Box p={2} sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            mt: 2,
          }}
        >
          {isEdit ? (
            <TextField
              onChange={(e)=>setCurrentName(e.target.value)}
              id="name"
              type="text"
              name="name"
              value={currentName}
              size="small"
              fullWidth
            />
          ) : (
            <Typography>{currentName}</Typography>
          )}
          {isEdit ? (
            <Fragment>
              <IconButton
                sx={{ ml: 2 }}
                onClick={() => {setEdit((prev) => !prev);setCurrentName(name)}}
              >
                <Clear />
              </IconButton>
              <IconButton
                sx={{ ml: 2 }}
                onClick={handleChange}
              >
                <Check />
              </IconButton>
            </Fragment>
          ) : (
            <IconButton sx={{ ml: 2 }} onClick={() => setEdit((prev) => !prev)}>
              <Edit />
            </IconButton>
          )}
        </Box>
      </Box>
    </Paper>
  );
};
export default CharacterItem;
