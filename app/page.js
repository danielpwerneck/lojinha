'use client'

import { useState } from "react";

export default function Home() {

  // Aqui entra o JavaScript normal
  // let carrinho = 0;
  const [ carrinho, alteraCarrinho ] = useState(0);
  const [precoProduto, alteraPreco ] = useState(25);
  const [ valorTotal, alteravalorTotal ] = useState(0);

  function manipulaCarrinho( adicionar ){
     const novoCarrinho = carrinho;

    if(adicionar == true){
      alteraCarrinho(carrinho + 1)  
      novoCarrinho++
    }else{
        alteraCarrinho( carrinho -1 )
        novoCarrinho--

    }

    alteravalorTotal( novoCarrinho * precoProduto)


  }
  function limpaCarrinho(){
    alteraCarrinho ( 0 )
  }


  function aplicaCupom(){
    alteraPreco(19)
  }


  return (

     <div className="p-5">

      <h1 className="bg-sky-500 text-white p-3">Lojinha Next</h1>
      <p className="P-3 text-lg">
        Carrinho:<strong> {carrinho} </strong> itens
      </p>

      {carrinho > 0?
      <button onClick={()=>limpaCarrinho()} className="bg-yellow-400 text-black mt-5 p-3">Limpar</button>
      :
      <div></div>

    }
      
      <button onClick={()=>aplicaCupom()} className="bg-black text-white mt-5 p-3">Adicionar Cupom</button>

      <hr/>

      <p classname="p-3 text-lg text-red-900">
        Valor total: R$ <strong> {valorTotal} </strong>
      </p> 

      <hr/>

      <h2>Produtos</h2>

      <div className="border bg-sky-700 w-fit p-2 text-center text-white">
        <img className="" src="https://placehold.co/200"/>
        <h3 className="text-lg text-lime-200 font-bold">Produto modelo</h3>
        <p>R$ 25,00</p>        
        <button onClick={()=>manipulaCarrinho(true)} className="bg-lime-400 text-black mt-5 p-3">Adicionar ao carrinho</button>
        <br/>
        {carrinho > 0?
        
        <button onClick={()=>manipulaCarrinho(false)} className="bg-lime-400 text-black mt-5 p-3">Remover do Carrinho</button>
        :
        <div></div>
      }
           

      </div>

    </div>
  );
}
