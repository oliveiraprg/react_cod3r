import React from "react";

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default function App(props) {
    return (    
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Card titulo="#04 - Desafio Aleatorio entre 2 numeros">
                <Aleatorio min={1} max={60}/>
                <Aleatorio min={1} max={60}/>
                <Aleatorio min={1} max={60}/>
                <Aleatorio min={1} max={60}/>
                <Aleatorio min={1} max={60}/>
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Componente com paramentro">
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
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>
        </div>
    )
}
