import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardComponent = ({ character }) => {
  console.log(character)

const [details, setDetails] = useState ({})

  useEffect(() => {
		fetch("https://www.swapi.tech/api/people/"+character.uid)
    .then(res => res.json())
    .then(data => setDetails(data.result.properties))
    .catch(err => console.error(err))
	}, [])

	return (
    <div className="card col-3">
      <img src="https://loremflickr.com/640/360" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Gender: {details.gender}</p>
        <p className="card-text">Hair Color: {details.hair_color}</p>
        <p className="card-text">Eye Color: {details.eye_color}</p>
        <Link to="/details">
          <button className="btn btn-primary">
            <a href="#" className="text-white">Learn more!</a>
          </button>
        </Link>
      </div>
    </div>
    );
  };