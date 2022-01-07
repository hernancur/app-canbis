import { useState } from 'react';
import { useForm } from "react-hook-form"
// import ReactSlidy from 'react-slidy';
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import RocketIcon from "@mui/icons-material/Rocket"
import "./home.scss"


export default function Home() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const [started, setStarted] = useState(false);
    const getStarted = () => {
        !started ? setStarted(true) : setStarted(false);
        console.log(started);
    };

    return (
        <div className="home">
            <Navbar />
            <div className="fbs">
                <div className="title">
                        <h1 id="faster">
                            Faster.
                        </h1>
                        <h1 id="better">
                            Better.
                        </h1>
                        <h1 id="stronger">
                            Stronger.
                        </h1>
                        
                </div>
                <div className="button">
                            <button className={started ? "btn getStarted hidden" : "btn getStarted"} onClick={getStarted}>
                                Get Started
                            </button>
                        </div>
                <div className={started ? "container" : "container hidden"}>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="form">    
                        <div className="brand">
                            <RocketIcon className="icon"/>
                            <h1>Getfly</h1>
                        </div>
                        <div className="formContainer">
                            <div className="inputContainer">
                                <div className="formText">
                                    <span>Email</span>
                                </div>
                                    <input type="text" {...register("email", { required: true })}/>
                            </div>
                            <div className="inputContainer">
                                <div className="formText">
                                    <span>Password</span>
                                </div>
                                    <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 16 })}/>
                            </div>
                            <div className="submitBtn">
                                <button type="submit" className="btn" onClick={getStarted}>Register</button>
                                <div className="or">
                                    <span>or</span>
                                </div>
                                <button type="submit" className="btn" onClick={getStarted}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="info">
                <h1>
                    nasheeey
                </h1>
            </div>
        </div>
    )
}
