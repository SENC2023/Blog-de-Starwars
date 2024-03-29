import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CardPeople } from "../component/cardPeople.js";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	}, [])
	
	return (
        <div className="Home">
            <div className="People p-4">
				{store.characters.map((character, index) => (
					<CardPeople key={index} character={character} />
				))}
			</div>
        </div>
    );
};
