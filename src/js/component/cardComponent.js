import React from "react";

export const CardComponent = ({ character }) => {
  console.log(character)
	return (
    <div className="card col-3">
      <img src="https://loremflickr.com/640/360" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Gender: {character.gender}</p>
        <p className="card-text">Hair Color: {character.hair_color}</p>
        <p className="card-text">Eye Color: {character.eye_color}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    );
  };