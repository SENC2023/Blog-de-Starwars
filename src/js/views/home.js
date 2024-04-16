import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CardComponent } from "../component/cardComponent.js";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	}, [])
	console.log(store.characters);
	return (
        <div className="Home">
            <div className="Overflow p-4">
				{store.characters.map((character, index) => (
					<CardComponent key={index} character={character} />
				))}
			</div>
        </div>
    );
};
