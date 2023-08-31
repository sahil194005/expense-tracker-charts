import React, { useRef, useState } from "react";
import axios from "axios";
import { NavLink,useNavigate } from 'react-router-dom'
const Auth = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false)
    const [sendingReq, setSendingReq] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const AuthHandler = async (obj) => {
        try {
            if (login) {
                setSendingReq(true);
                const response = await axios.post(`http://localhost:3006/users/login`, obj);
                setSendingReq(false);
                localStorage.setItem('token', JSON.stringify(response.data.token));
                navigate('/dashboard');
            }
            else {
                setSendingReq(true);
                const response = await axios.post(`http://localhost:3006/users/signup`, obj);
                setSendingReq(false);
                setLogin(true);
            }
        } catch (error) {
            console.log(error);
            setSendingReq(false);
        }
    }
    const formSubmitHandler = async (e) => {
        e.preventDefault();

        let LoginObj = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        passwordRef.current.value = emailRef.current.value = "";

        AuthHandler(LoginObj)
    }
    return (
        <div className="mt-[30px] flex flex-col items-center " >
            <p className=" text-6xl my-4 font-serif text-center">Welcome Back</p>
            <div className=" grid sm:grid-cols-2 sm:grid-rows-1 p-7 bg-gradient-to-r from-purple-400 to-purple-900 ... ">
                <div className=" bg-white p-5 flex flex-col justify-evenly">

                    <form className="  min-h-[400px] flex flex-col justify-evenly md:min-h-[500px] md:min-w-[400px]" action="" onSubmit={formSubmitHandler}>
                        <p className="font-serif text-4xl  tracking-[4px]">{login ? 'Login' : 'SignUp'}</p>
                        <div className="flex flex-col py-3">
                            <label>Email :</label>
                            <input ref={emailRef} className="text-center border-b-4 p-2 border-gray-400" type="email"  ></input>
                        </div>
                        <div className="flex flex-col py-3">
                            <label >Password</label>
                            <input ref={passwordRef} className=" text-center border-b-4 p-2 border-gray-400" type="password"  ></input>
                        </div>
                        {!sendingReq && <button className="bg-purple-700 rounded-md focus:bg-purple-950 duration-700 text-white text-2xl p-2 text-center" >{login ? 'login' : 'signUp '}</button>}
                        {sendingReq && <button className="bg-purple-700 rounded-md hover:bg-purple-600 duration-700 text-white text-2xl p-2 text-center">sending Req</button>}
                    </form>
                    <div className="text-2xl p-2 text-center font-QuickSand " onClick={() => setLogin((state) => !state)}>
                        <button >{login ? 'New User??' : 'Already a member??'}
                            <p>Click Here</p></button>
                    </div>
                    <NavLink to="/forgotPassword" className="text-1xl p-2 text-center text-blue-600" >
                        Forgot Password ?
                        Click Here
                    </NavLink>
                </div>
                <div className=" hidden sm:block bg-white   ">
                    <img className=" max-h-[700px] w-full " src="https://plus.unsplash.com/premium_photo-1681589452811-513d1952077c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="" />
                </div>
            </div>
        </div>


    );
}

export default Auth






