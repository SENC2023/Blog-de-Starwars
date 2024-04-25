import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicles = ({ vehicle }) => {
  // console.log(vehicle)

const [details, setDetails] = useState ({})
const {store, actions} = useContext(Context);

  useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles/"+vehicle.uid)
        .then(res => res.json())
        .then(data => setDetails(data.result.properties))
        .catch(err => console.error(err))
        }, [])

	return (
    <div className="card col-3 m-2 p-2">
      <img src="https://loremflickr.com/640/360" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <p className="card-text">Model: {details.model}</p>
        <p className="card-text">Vehicle Class: {details.vehicle_class}</p>
        <div className="d-flex justify-content-between">
            <Link to={`/vehicle/${vehicle.uid}`}>
            <button className="btn btn-primary">
                Learn more!
            </button>
            </Link>
            <div className="">
            <button className="btn btn-primary" onClick={() => {actions.addFavorite(vehicle.name)}}><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
      </div>
    </div>
    );
  };