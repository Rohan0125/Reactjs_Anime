import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
const baseURL = "https://ghibliapi.herokuapp.com/film";

export default function Home() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div className="home_flex">
        {post.map((item)=>{
          return(
            <>
              <Link style={{ textDecoration: 'none' }} to="/details" state={item}>
                <div className="space"></div>
                <Cards className="card" anime={item}/>
              </Link>
            </>
          )
        }  
        )}
    </div>
  );
}
