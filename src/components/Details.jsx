import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Card, CardMedia, CardContent } from "@mui/material";
import Fab from '@mui/material/Fab';
// import Skeleton from '@mui/material/Skeleton';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Details(){
    
    const location = useLocation();
    const { title,image,movie_banner,description,director,running_time,producer,release_date,rt_score,original_title } = location.state;
    // console.log(description);
    return(
        <div className="details"> 
            <Typography className="title" variant="h2" gutterBottom component="div">
                {title}
            </Typography>
            <div className="space"></div>
            <div className="details_page">
                <div className="Left_side">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="auto"
                    image={image}
                    alt="anime_poster"
                    />
                </Card>
                
                </div>
                <div className="Right_side">
                <Card className="desc_card" sx={{ maxWidth: 500 }}>
                    <CardContent className="card_details">
                    <Typography gutterBottom variant="h5" component="div">
                        Decription
                    </Typography>
                    <Typography variant="body2" color="text.inherit">
                        {description}
                    </Typography>
                    </CardContent>
                </Card>
                <Card className="desc_card" sx={{ maxWidth: 500 }}>
                    <CardContent className="card_details">
                    <Typography gutterBottom variant="h5" component="div">
                        Info:
                    </Typography>
                    <Typography variant="body2" color="text.inherit">
                        <ul>
                            <li>Original title: {original_title}</li>
                            <li>Release date: {release_date}</li>
                            <li>Director: {director}</li>
                            <li>Producer: {producer}</li>
                            <li>Running time: {running_time}</li>
                            <li>Rt score:{rt_score}</li>
                        </ul>
                    </Typography>
                    </CardContent>
                </Card>
                </div>
            </div>
                <div className="banner_img">
                    <img src={movie_banner} alt="" />
                </div>
            <Fab color="primary" className="float" variant="extended" aria-label="back">
                <Link to={"/"}  className="link">Back</Link>
            </Fab>
            {/* <Skeleton/> */}
            {/* <iframe width="692" height="389" src="https://www.youtube.com/embed/0pVkiod6V0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
    )
}
