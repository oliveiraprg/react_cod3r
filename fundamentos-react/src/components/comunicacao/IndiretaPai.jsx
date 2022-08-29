import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai (props) {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] =  useState(0)
    const [nerd, setNerd] = useState(false)
    function fornecerInormacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    
    return (
        <div>
            <h3>pai</h3>
            <div>
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>Nerd: {nerd ? 'Verdadeiro':"Falso"}</p>
            </div>
            <IndiretaFilho quandoClicar={fornecerInormacoes} ></IndiretaFilho>
        </div>
    )
}