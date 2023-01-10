import React from "react";
import "../Estilo/img-estilo.css";
import im from "../img/im.jpg"

const Imagen = () =>{
    return(
        <div className="con-img">
            <img className="img" src={im} alt="rym" />
        </div>
    )
}

export default Imagen;

