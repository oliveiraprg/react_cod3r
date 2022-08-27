import React from "react";
import produtos from '../../data/produtos';


export default function ListaProdutos () {
    
    const listaProdutos = produtos.map((produto) => {
        return (
                <tr key={produto.id}>
                    <th>{produto.id}</th>
                    <td>{produto.produto}</td>
                    <td>{parseFloat(produto.preco)}</td>
                </tr>
        )
    })
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Produto:</th>
                        <th>Preço R$:</th>
                    </tr>
                </thead>                
                <tbody>
                        {listaProdutos}
                </tbody>
            </table>
        </div>
    )
}