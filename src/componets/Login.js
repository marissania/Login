import React, { useState } from "react"
import { GitHubIcon } from "./icons/Inco"
import { GoogleLogin } from "react-google-login"
import { useForm } from "react-hook-form"
import LoginBlock from "./blocks/blockLogin";


const Login = () =>{
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [url, setUrl] = useState("")
const [loginStatus, setLoginStatus] = useState(false)
const responseGoogle = response => {
setName(response.profileObj.name)
setEmail(response.profileObj.email)
setUrl(response.profileObj.imageUrl)
setLoginStatus(true)
}
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
let urls="https://consultmidia.it/"
return (
<>
<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
   <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
    <LoginBlock />
      <div className="p-5 bg-white md:flex-1">
         <h1 className="my-4 text-2xl text-center font-semibold text-gray-700">Login</h1>
         <form className="flex flex-col space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-1">
               <label for="email" className="text-sm font-semibold text-gray-500">Email</label>
               <input
                  type="text"
                  id="email"
                  name="email"
                  autofocus
                  required={true}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
            </div>
            <div className="flex flex-col space-y-1">
               <div className="flex items-center justify-between">
                  <label for="password" className="text-sm font-semibold text-gray-500">Senha</label>
                  <a href={urls} className="text-sm text-blue-600 hover:underline focus:text-blue-800">Esqueceu a senha?</a>
               </div>
               <link />
               <input
                  type="text"
                  id="password"
                  name="password"
                  required={true}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
            </div>
            <div className="form-group">    
          </div>
               <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>        
               <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
               Log in
               </button>
               <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>
            </div>
            <div className="flex flex-col space-y-5">
               <span className="flex items-center justify-center space-x-2">
               <span className="h-px bg-gray-400 w-14"></span>
               <span className="font-normal text-gray-500">Ou</span>
               <span className="h-px bg-gray-400 w-14"></span>
               </span>
               <div className="flex flex-col space-y-4">
                  <button
                     href="#"
                     className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                     >
                     <GitHubIcon />
                     <span className="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
                  </button>
                  <GoogleLogin
                     className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors  duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                     buttonText="Login"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}
                     />
               </div>
            </div>
 
         </form>
      </div>
   </div>
</div>
</>
)
}
export default Login