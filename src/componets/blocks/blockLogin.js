import React from "react";

const LoginBlock = () =>{
   let urls="https://consultmidia.it/"
    return (
      <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
      <div className="my-3 text-4xl font-bold tracking-wider text-center">
         <p>Login</p>
      </div>
      <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </p>
      <p className="flex flex-col items-center justify-center mt-10 text-center">
         <span>Lorem Ipsum is simply dummy text  ?</span>
         <a href={urls} className="underline">A typesetting industry.!</a>
      </p>
      <p className="mt-6 text-sm text-center text-gray-300">
         Ler <a href={urls} >termos</a> de <a href={urls}>uso</a>
      </p>
   </div>  
    )
}

export default LoginBlock