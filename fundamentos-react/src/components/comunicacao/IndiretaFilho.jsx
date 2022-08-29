import React from "react";

export default function iniretaPai (props) {
    
    
    return (
        <div>
            <h3>filho</h3>
            
            <button onClick={ e => props.quandoClicar('Jo', 53, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}