import React, {useEffect, useContext} from "react";
import { useParams } from "react-router";

import { Context } from "../store/appContext";



export const People = () => {
    const params = useParams()
    console.log(params);
    const {store, actions} = useContext(Context)
    useEffect(() => {
        actions.getCharacter(params.id)
    },[])
    console.log(store.character);
    return(
        <div>Hola</div>
    )
}