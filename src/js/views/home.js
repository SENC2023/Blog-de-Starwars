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
            <div className="row">
				{store.characters.map((character, index) => (
					<CardComponent key={index} character={character} />
				))}
			</div>
			
        </div>
    );
};
