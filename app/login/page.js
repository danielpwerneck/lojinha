'use client'

import { useState } from "react";

function Login () {

    const [ admin, alteraAdmin ] = useState( true );

    function manipulaAdmin(){
        if( admin == true){
            alteraAdmin(false)
        }else{
            alteraAdmin(true)
        }
    }


    


    return ( 
        <div>
            <h1 className="text-lg text-blue-500 mb">Página Login</h1>
            <p>Você está logado como <strong> { admin == true ?  <span>Administrador</span> :<span>Usuário</span> }</strong>.</p>
            <button className={`mt-3 ${admin== true? `bg-sky-500` : `bg-red-500`} text-white p-2 rounded-md`} onClick={() =>manipulaAdmin(admin)}  > {admin ?"Altera para Usuário" : "Alterar para Administrador"}</button>
            
         <br/>

        {
          admin == true ? 
            <div>
                <h2 ClassName="text-lg text-lime-800">Olá administrador</h2>
                <p>Seja bem-vindo</p>
            </div>
         :
            <div></div>
        }

          
        




        </div>

     );
}

export default Login ;