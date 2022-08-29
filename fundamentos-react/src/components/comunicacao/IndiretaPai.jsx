import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function iniretaPai (props) {
    let nome = ''
    let idade = 0
    let nerd = false
    function fornecerInormacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
    }
    
    return (
        <div>
            <h3>pai</h3>
            <div>
                <p>{nome}</p>
                <p>{idade}</p>
                <p>{nerd}</p>
            </div>
            <IndiretaFilho quandoClicar={fornecerInormacoes} ></IndiretaFilho>
        </div>
    )
}