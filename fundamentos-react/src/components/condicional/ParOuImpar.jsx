import React from "react";

export default function ParOuImpar (props) {
    return (
        <div>
            <p>O {props.numero} é : {props.numero % 2 === 0 ? <span>Par</span>: <span>Impar</span>} 
            </p> 
        </div>
    )
}
