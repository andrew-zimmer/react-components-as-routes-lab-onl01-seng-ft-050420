import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((x) => {
        return (
          <div>
            <p>{x.title}</p>
            <p>{x.time}</p>
            <ul>
              {x.genres.map((y) => (
                <li>{y}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
