import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPeople = ({ character }) => {
  console.log(character)

const [details, setDetails] = useState ({})
const {store, actions} = useContext(Context);

  useEffect(() => {
		fetch("https://www.swapi.tech/api/people/"+character.uid)
    .then(res => res.json())
    .then(data => setDetails(data.result.properties))
    .catch(err => console.error(err))
	}, [])



	return (
    <div className="card col-3 m-2 p-2">
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
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={() => {actions.addFavorite(character.name)}}><i className="fa-solid fa-heart"></i></button>
        </div>
      </div>
    </div>
    );
  };