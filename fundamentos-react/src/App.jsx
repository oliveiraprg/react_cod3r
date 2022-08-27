import React from "react";
import './App.css';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";


export default function App(props) {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#07 - Desafio Repetição Produtos" color="#DAA520">
                    <TabelaProduto />
                </Card>
                <Card titulo="#06 - Repetição Lista Alunos" color="#2F4F4F">
                    <ListaAlunos />
                </Card>
                <Card titulo="#05 - Componente com filhos" color="#8B008B">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome='Gabriel'></FamiliaMembro>
                        <FamiliaMembro nome='Ana'></FamiliaMembro>
                        <FamiliaMembro nome='Gustavo'></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatorio" color="#00BFFF">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 - Fragmento" color="#F08080">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Componente com paramentro" color="#3CB371">
                    <ComParametro
                        titulo='Situação do aluno(a)'
                        aluno='Maria'
                        nota={9.9}
                    />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#BDB76B">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}
