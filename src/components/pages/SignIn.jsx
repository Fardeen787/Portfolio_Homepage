import React,{useState} from 'react';
// import back from './img/side.png'
// import bg from './img/back.pvg'
// import avtar from './img/man.svg'
import { NavLink, useHistory} from 'react-router-dom';
import './SignIn.css';
// import back from "./src/"
import bg from './img/back.png'
import avtar from './img/man.svg'
import back from './img/side.png'


function SignIn(){
    const history=useHistory();
    const [user,setUser]= useState({
        username:"",
        password:""
    });

    const eventIn=(event)=>{
        
        const {name, value}= event.target;
        setUser((preValue)=>{
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            };
        });

    };

    const submiteve = async (e)=>{
        e.preventDefault();

        const {username, password} = user;

        const res = await fetch("/sign",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username:username, password:password
            })
        })

        

        if(res.status === 422){
            window.alert("Invalid Credentials"); 
        }else if(!username|| !password){

            window.alert("Please fill all the details");
            console.log("Please fill all the details");

        }else{ 

            history.push("/about");
        }

    }



    return(
        <>
        <body  style={{ backgroundImage: `url(${back})` }} >

                    
          
        <div className="m " style={{ height:`100vh`}} >
                        <div className="img" >
                            {/* <img src={bg} alt="bg" /> */}
                        </div>
                        <div className="login-content" >
                            <form method="POST" className="fo container-fluid col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded">
                                <img src={avtar} alt="Avatar" />
                                <h2 style={{color:`#031bf1`}}> Welcome </h2>
                                <div className="input-div one">
                                    <div className="i" >
                                        <i className="fas fa-user" > </i>
                                    </div> <div className="div" >

                                        <input type="text" className="input" name="username" placeholder="Username" onChange={eventIn} />
                                    </div>
                                </div>
                                <div className="input-div pass" >
                                    <div className="i" >
                                        <i className="fas fa-lock" > </i>
                                    </div> <div className="div" >

                                        <input type="password" className="input mb-4" name="password" placeholder="Password" onChange={eventIn}/>
                                    </div>
                                </div>
                                <a href="/" className="mt-3" style={{textDecoration:`none`}}> Forgot Password ? </a>
                                <input onClick={submiteve} type="submit" className="bt" value="Login" />
                               <NavLink to="/" className="cnt" style={{textDecoration:`none`, marginBottom:`40px`}}>SIGNUP</NavLink>
                               
                            </form>
                        </div>

                    </ div>
                   
                    </body>
        </>
    );
}

export default SignIn;