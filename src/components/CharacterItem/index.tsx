import { Box, Paper, Typography } from "@mui/material";

import { CharacterProps } from "types";

const CharacterItem: React.FC<CharacterProps> = ({ name }) => {
  return (
    <Paper elevation={4}>
      <Box p={2} sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: 2,
          }}
        >
          <Typography>{name}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};
export default CharacterItem;
