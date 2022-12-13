import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const ejercicios = {
    bodyPart: "cintura",
    equipment: "peso corporal",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    id: "0002",
    name: "side bend de 45°",
    target: "abdominales",
  }
  
  
  return (

    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={ejercicios.gifUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ejercicios.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ejercicios.bodyPart}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
