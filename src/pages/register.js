import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState } from 'react'
import {useHistory} from 'react-router-dom'

export default function Register() {

    const [name,setName] = useState("");
    const [surNames, setSurNames] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const history = useHistory();
        
    
    function handleName(e) {
        setName(e.target.value)
    }
    function handleSurNames(e) {
        setSurNames(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }
   
    function submit (e) {
        e.preventDefault();
        const newRegister = {name, surNames, password,email,phoneNumber};
    
        // TODO: fetch con método POST para enviar el nuevo registro.
        //console.log(newRegister);

        setName("");
        setSurNames("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");

        // TODO: Enviar a la ruta login
        history.push("/");        
    }
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col register-background"></div>
                <div className="col">
                    <h2 className="fw-bold text-center py-5">Register</h2>

                    <form onSubmit = {submit}>
                        <div className="mb-4">
                            <label for="text" className="form-label">Name </label>
                            <input type="text" className="form-control" value = {name} onChange = {handleName} placeholder="Introduce el nombre"></input>
                        </div>

                        <div className="mb-4">
                            <label for="text" className="form-label">Surnames</label>
                            <input type="text" className="form-control" value = {surNames} onChange = {handleSurNames} placeholder="Introduce los apellidos"></input>
                        </div>

                        <div className="mb-4">
                            <label for="email" className="form-label">Email  </label>
                            <input type="email" className="form-control" value =  {email} onChange = {handleEmail} placeholder="Introduce el email"></input>
                        </div>
                        <div className="mb-4">
                            <label for="password" className="form-label">Password  </label>
                            <input type="password" className="form-control" value = {password} onChange = {handlePassword} placeholder="Introduce la contraseña"></input>
                        </div>
                        <div className="mb-4">
                            <label for="text" className="form-label"> Phone number </label>
                            <input type="text" className="form-control" value = {phoneNumber} onChange = {handlePhoneNumber} placeholder="Introduce el numero de movil"></input>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" value ="Registrar">Registrarse</button>
                        </div>

                        <div className="my-3">
                            <span>Ya tienes cuenta? <NavLink to="/">Iniciar sesion</NavLink></span>


                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}





