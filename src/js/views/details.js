import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { CardComponent } from "../component/cardComponent.js";

export const Details = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getDetails()
	}, [])
	
	return (
        <div className="Details">
            <div className="">
				{/* {store.characters.map((item) =><li key={item.id}></li>)} */}
                <h1>Hola</h1>
			</div>
        </div>
    );
};