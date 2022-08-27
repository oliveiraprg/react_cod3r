import './TabelaProdutos.css'
import React from "react";
import produtos from '../../data/produtos';


export default function ListaProdutos () {
    
    function getLinhas(){ 
        return produtos.map((produto, i) => {
            return (
                    <tr key={produto.id} className={i % 2 === 0 ? 'Par': 'Impar'}>
                        <th>{produto.id}</th>
                        <td>{produto.produto}</td>
                        <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
                    </tr>
            )
        })
    
    } 
    
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Produto:</th>
                        <th>Preço R$:</th>
                    </tr>
                </thead>                
                <tbody>
                        {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}