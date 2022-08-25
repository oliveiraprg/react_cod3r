import React from "react"

export default function ComParametro(props) {
    const title = props.titulo
    const aluno = props.aluno
    const nota = props.nota
    const situacao = nota > 7 ? 'Aprovado' : 'Recuperação'

    return (
        <div>
            <h2>{title}</h2>
            <p>{aluno} tem nota {nota}</p>
            <p>Foi {situacao}</p>
        </div>
    )
}