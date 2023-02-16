import React, { useState, useEffect } from "react";
import { movies$ } from "./data.js";
import "../card/card.css";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import Jauge from "../../actions/jauge/Jauge.jsx";

function Card() {
  // Déclaration des variables
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [dislikedMovies, setDislikedMovies] = useState([]);
  const [maxCards, setMaxCards] = useState(12);

  useEffect(() => {
    // Utilise l'API interne  movies$ pour récupérer les données de films et met à jour les variables d'état allMovies et movies
    movies$.then((data) => {
      setAllMovies(data);
      setMovies(data);
    });
  }, []);
 //Gere le cas de like
  const handleLike = (id) => {
    if (!likedMovies.includes(id)) {

      setMovies(
        movies.map((movie) => {
          if (movie.id === id) {
            return {
              ...movie,
              likes: movie.likes + 1,
            };
          } else {
            return movie;
          }
        })
      );
      setLikedMovies([...likedMovies, id]);
    }
  };
  //Gere le cas de dislike
  const handleDislike = (id) => {
    if (!dislikedMovies.includes(id)) {
    
      setMovies(
        movies.map((movie) => {
          if (movie.id === id) {
            return {
              ...movie,
              dislikes: movie.dislikes + 1,
            };
          } else {
            return movie;
          }
        })
      );
      setDislikedMovies([...dislikedMovies, id]);
    }
  };

  //Supression 
  const handleDelete = (id) => {
    setAllMovies(allMovies.filter((movie) => movie.id !== id));
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleFilter = (category) => {
    if (category === "All") {
      setMovies(allMovies);
    } else {
      const filteredMovies = allMovies.filter(
        (movie) => movie.category === category
      );
      setMovies(filteredMovies);
    }
  };

  // fonction pour mettre à jour le nombre maximum de cartes à afficher
  const handleMaxCards = (max) => {
    setMaxCards(max);
  };

  return (
    <div>
      <div className="filter-buttons-container">
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("Comedy")}>Comedy</button>
        <button onClick={() => handleFilter("Drame")}>Drame</button>
        <button onClick={() => handleFilter("Thriller")}>Thriller</button>
        <button onClick={() => handleFilter("Animation")}>Animation</button>
      </div>

      {/* Nouveaux boutons pour limiter le nombre de cartes à afficher */}
      <div className="limit-buttons-container">
        <button onClick={() => handleMaxCards(4)}>4</button>
        <button onClick={() => handleMaxCards(8)}> 8 </button>
        <button onClick={() => handleMaxCards(12)}>12</button>
      </div>

      <div className="card-container">
         {/* Utilisation de Map Merci React <3*/}
        {movies.slice(0, maxCards).map((movie) => (
          <div key={movie.id} className="card">
            <img src={movie.poster_url} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.category}</p>

            <div className="card-actions">
              <button className="like" onClick={() => handleLike(movie.id)}>
                <AiFillLike /> <span>{movie.likes}</span>
              </button>
              <button
                className="dislike"
                onClick={() => handleDislike(movie.id)}
              >
                <AiFillDislike /> <span>{movie.dislikes}</span>
              </button>
            </div>
            <div className="card-jauge">
              <Jauge likes={movie.likes} dislikes={movie.dislikes} />
            </div>
            <button className="delete" onClick={() => handleDelete(movie.id)}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
