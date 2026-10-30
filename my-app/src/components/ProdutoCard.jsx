import { useState } from 'react';
import imagemPadrao from '../assets/imagem-padrao.png';

function ProdutoCard({ nome, preco, imagem, descricao }) {

    return (
            <li className="produto">
                <h1>Nome: {nome}</h1>
                <p>Preço: R$ {preco}</p>
                <img 
                src={imagem} 
                alt={nome}
                onError={e => {e.target.onerror = null;
                e.target.src = imagemPadrao;
            }} ></img>
                <p>Descriçao: {descricao}</p>
            </li>
    )
}

export default ProdutoCard;