import React,{useState} from 'react';
import './SignUp.css';
// import back2 from './img/back2.png'
// import th from './img/th.svg'
// import avtar from './img/avtar.svg'
import {NavLink, useHistory} from 'react-router-dom'
import back2 from "./img/back2.png"
import th from './img/th.svg'
import avtar from './img/avtar2.svg'



function SignUp(){

    const history = useHistory();
    const [fullName, setFullName]= useState({
        fname:"",
        email:"",
        uname:"",
        pass:"",
        cpass:""
    });

    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name); 

        const {name, value}= event.target;
        setFullName((preValue)=>{
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            };
        });

    };

    const postdata = async (e)=>{
        e.preventDefault();

        const {fname, email, uname, pass, cpass} = fullName;

        const res = await fetch("/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name:fname, email:email, username:uname, password:pass, cpassword:cpass
            })
        })

        

        if(res.status === 422){
            window.alert("User Already Exists"); 
        }else if(pass!==cpass){
            window.alert("Passwords Do not Match");
            console.log("Passwords Do not Match");
        }else if(!fname|| !email|| !uname|| !pass|| !cpass){

            window.alert("Please fill all the details");
            console.log("Please fill all the details");

        }else{
            window.alert("Registration Successfull");
            console.log("Registration Successfull"); 

            history.push("/sign-in");
        }

    }

    return(
<>

        <body style={{ backgroundImage: `url(${back2})`}} >

       
<div className="m" style={{ height:`100vh`}}>
    <div className="img">
        <img src={th} alt="bg"/>
    </div>
    <div className="login-content">
        <form method="POST" className="container-fluid col-md-9 shadow-lg p-3 mb-2 pt-2 bg-body rounded">
            <img src={avtar} alt="avtar"/>
            <h2 style={{color:`#031bf1`}}>Registration</h2>
            <div className="input-div one">
                <div className="i">
                    <i className="fas fa-user"></i>
                </div>
                <div className="div">

                    <input id="name" type="text" className="input " placeholder="Full Name" name="fname" onChange={inputEvent} value={fullName.fname}  />
                </div>
            </div>
            <div className="input-div one">
                <div className="i">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="div">

                    <input type="email" className="input " placeholder="Email" name="email" onChange={inputEvent} value={fullName.email} />
                </div>
            </div>
            <div className="input-div one">
                <div className="i">
                    <i className="fas fa-coffee"></i>
                </div>
                <div className="div">

                    <input type="text" className="input" placeholder="Username" name="uname" onChange={inputEvent} value={fullName.uname} />
                </div>
            </div>
            <div className="input-div pass">
                <div className="i">
                    <i className="fas fa-lock"></i>
                </div>
                <div className="div">

                    <input type="password" className="input" name="pass" placeholder="Password" onChange={inputEvent}/>
                </div>
            </div>
            <div className="input-div pass">
                <div className="i">
                    <i className="fas fa-check"></i>
                </div>
                <div className="div">

                    <input type="password" className="input b" name="cpass" placeholder="Conform Password" onChange={inputEvent}/>
                </div>
            </div>
            
            <input type="submit" onClick={postdata} className="bt" value="SIGN UP"/>
            <div style={{ color: `rgb(129, 129, 129)`}}>Already have an Account ? <NavLink to="/sign-in" className="cnt dw" style={{textDecoration:`none`}}>LOGIN</NavLink></div>
        </form>
    </div>
</div>
 </body>

 </>


    );
}

export default SignUp;