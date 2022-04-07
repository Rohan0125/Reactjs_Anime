import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { makeStyles } from '@mui/material/node/styles';



export default function Create(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="auto"
          image={props.anime.image}
          alt="green iguana"
        />
        <CardContent className="card_title">
          <Typography gutterBottom variant="h5" component="div">
          {props.anime.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
