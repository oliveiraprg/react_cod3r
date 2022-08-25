import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default function App(props) {
    return (    
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Aleatorio min={1} max={10}/>
            <Fragmento />
            <ComParametro
                titulo='Situação do aluno(a)'
                aluno='Pedro'
                nota={6.3}
            />
            <ComParametro
                titulo='Situação do aluno(a)'
                aluno='Maria'
                nota={9.9}
            />
            <Primeiro />
        </div>
    )
}
