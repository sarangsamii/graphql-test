import {
  Male,
  Female,
  QuestionMark,
  SentimentDissatisfied,
  SentimentSatisfied,
} from "@mui/icons-material";
import { Avatar, Box, Paper, Typography } from "@mui/material";

import { CharacterProps } from "types";

const genderIcon = (type: string) => {
  if (type === "Male") {
    return <Male />;
  } else {
    return <Female />;
  }
};

const statusIcon = (type: string) => {
  switch (type) {
    case "Dead":
      return <SentimentDissatisfied fontSize="large" color="error"/>;
    case "Alive":
      return <SentimentSatisfied fontSize="large" color="success"/>;

    default:
      return <QuestionMark fontSize="large" color="primary"/>;
  }
};

const CharacterItem: React.FC<CharacterProps> = ({
  name,
  status,
  gender,
  image,
}) => {
  return (
    <Paper elevation={4}>
      <Box p={2} sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Avatar alt={name} src={image} sx={{width:64,height:64}} />
          {statusIcon(status)}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mt: 2,
          }}
        >
          <Typography>{name}</Typography>
          {genderIcon(gender)}
        </Box>
      </Box>
    </Paper>
  );
};
export default CharacterItem;
