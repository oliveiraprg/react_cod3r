import React from "react"

export default function Aleatorio(props) {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <div>
            <h2>Numero aleatorio entre dois valores</h2>
            <p>Menor valor {min} maior valor {max}</p>
            <p>Resultado {aleatorio}</p>
        </div>
    )
}