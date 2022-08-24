import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro />
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
    </div>,
    document.getElementById('root')
)