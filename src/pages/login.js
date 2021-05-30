import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarked } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faMapMarked} size="9x"/>


export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

     
    function handleUserName(e) {
        setUserName(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function submit (e) {
        e.preventDefault();
        const newUser= {userName, password};
    
        // TODO: fetch con método POST para enviar el nuevo registro.
        console.log(newUser);

        setUserName("");
        setPassword("");
       

        // TODO: Enviar a la ruta news
        history.push("/news");        
    }



    return (
        
        <div className="container-fluid  ">
            <div className="row">
                <div className="col login-background">
                    {/* <img src="./pexels-final-project2.jpeg" className="h-100 w-100" alt=""/> */}
                </div>
                <div className="col">
                    <h2 className="fw-bold text-center py-5">Bienvenido</h2>

                    <form onSubmit = {submit}>
                        <div className="mb-4">
                            <label for="text" className="form-label">Username </label>
                            <input  type="text" className="form-control"  value = {userName} onChange = {handleUserName} placeholder = "Introduce nombre de usuario"/>
                        </div>
                        <div className="mb-4">
                            <label for="password" className="form-label">Password  </label>
                            <input type="password" className="form-control"  value = {password} onChange = {handlePassword} placeholder = "Introduce contraseña" />
                        </div>
                        <div className="d-grid">
                            <button type = "submit" className="btn btn-primary">Iniciar sesion</button>
                        </div>

                        <div className = "my-3">
                            <span>No tienes cuenta? <NavLink to="/register">Registrarse</NavLink></span> 
                            

                        </div>

                    </form>
                </div>
            </div>
        </div>

    )


}
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarked } from '@fortawesome/free-solid-svg-icons'


//                 <FontAwesomeIcon icon={faMapMarked} size="9x"/>
/* <form classNameName="formulario">
            <h1 className = "login" >Login</h1>

            <div className="contenedor">

                <div className="input-contenedor">

                    <input type="text" placeholder="Nombre completo" />

                </div>

                <div className="input-contenedor">

                    <input type="email" placeholder="Introduce email" />

                </div>

                <div className="input-contenedor">

                    <input type="password" placeholder="Introduce contraseña" />

                </div>
              <input type="submit" value = "Log-in" className = "button"/>

                <p>Al registrarse, acepta nuestras condiciones de uso y política de privacidad.</p>

                <p>Ya tienes cuenta? </p>
                <NavLink to="/form">Iniciar sesion</NavLink>

            </div>
        </form> */