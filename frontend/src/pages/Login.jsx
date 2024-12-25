import React, { useState } from 'react'
import loginIcon from "../assets/signin.gif"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../common';




const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email:"",
        password:"",
    })

const navigate = useNavigate()

    const handleOnchange=(e)=>{
        
        const {name,value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials:"include",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })

          const dataApi = await dataResponse.json()

          if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
          }

          if(dataApi.error){
            toast.error(dataApi.message)
          }
    
    

    }

    console.log(data)

  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white  p-5 w-full max-w-sm  mx-auto '>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcon} alt="login icon" />
                </div>
                <form onSubmit={handleSubmit} className='pt-6  flex flex-col gap-2' >
                    <div className='grid'>
                        <label>Email : </label>
                        <div className='bg-slate-100 p-2'>
                        <input 
                        type="email"
                         placeholder='enter email'
                         name='email'
                         value={data.email}
                          onChange={handleOnchange}
                           className='w-full h-full outline-none bg-transparent' />
                        </div>
                    </div>
                    <div>
                        <label>Password : </label>
                        <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type={showPassword? "text":"password"}
                         placeholder='enter password'
                         name='password'
                         value={data.password}
                          onChange={handleOnchange}
                          className='w-full h-full outline-none bg-transparent' />
                        <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                            <span>
                                {showPassword
                                ?
                                (
                                    <FaEyeSlash />
                                ):(
                                    <FaEye />
                                )
                            }
                               
                               

                             </span>
                        </div>
                        </div>
                        <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600' >
                            Forgot password ?
                        </Link>
                    </div>
                    <button className='bg-red-600 text-white hover:bg-red-700 w-full px-6 py-2 rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-w-[150px]'>Login</button>
                </form>

                <p className='my-2'>Dont have acount ? <Link to={'/signUp'} className='text-red-700 hover:underline hover:text-red-700'>Sign Up</Link></p>
            </div>
        </div>
    </section>
)
}

export default Login