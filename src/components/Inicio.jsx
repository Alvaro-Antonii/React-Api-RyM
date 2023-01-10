import React,{useEffect, useState} from "react";
import { todosPersonajes } from "../funciones/funciones";
import "../Estilo/estilo.css"

const Inicio = () => {
    const [personaje, setPersonaje] = useState(null);


    useEffect(()=>{
        todosPersonajes(setPersonaje);
    },[])

    const vivo = status =>{
        
        return(status == "Dead");
        
    }

    return(
        
        
        <>
        
         {personaje != null ?( 
                personaje.map(per =>(
                <div className="cont" key={per.id}>
                    <img className="imag-cont"  src={per.image} alt="" />
                    
                    
                    <div className="cont-tes">
                        <p className="nombre">NOMBRE: {per.name}</p>
                        <p className= {`status ${vivo(per.status) ? " muerto " : "vivo"} `}>ESTADO: {per.status}</p>
                        

                        <p className="status">ESPECIE: {per.species}</p>

                        
                    </div>


                </div>
            ))) : ("es null")}

        </>
                
            
       
    )
}

export default Inicio;