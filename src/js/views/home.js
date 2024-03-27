import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CardComponent } from "../component/cardComponent.js";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	}, [])
	
	return (
        <div className="Home">
            <CardComponent />
        </div>
    );
};
