import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';


const Login = () => {
    //Mensaje de alerta
    const alerta = (msg, tipo, titulo) =>{
        swal({
            title: titulo,
            text: msg,
            icon: tipo,
            button: "Acept!"
        })
    }

    const navegar = useNavigate();

    const [usuario, setUsuario] = useState({
        email : "",
        passwd : ""
    });
    const {email, passwd} = usuario;

    const onChange = (e)=>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    useEffect(()=>{
        document.getElementById("email").focus();
    },[]);
    const ingresoLogin = async () =>{
        const data={
            email: usuario.email,
            passwd: usuario.passwd
        }
        const response = await APIInvoke.invokePOST("/usuarios/login", data);
        const respuesta = response.msg;

        if (respuesta === "Denegado"){
            alerta("Ojo",  "error", "ojo");
        }else{
            alerta("Ojo", "success", "ojo");

            localStorage.setItem("user", response.usuario);
            navegar("/Home");
           
        }
        setUsuario({
            email : "",
            passwd : ""
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        ingresoLogin();
    }
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Acceso al sistema
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                    <div>
                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="name@example.com"
                                value={email}
                                onChange={onChange}
                                required
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input 
                                type="password"
                                className="form-control" 
                                id="passwd"
                                placeholder="Password"
                                name="passwd"
                                value={passwd}
                                onChange={onChange}
                                required
                             />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-lg my-2">Iniciar sesion</button>
                        <Link to={"/CrearCuenta"} className="btn btn-secondary btn-lg mx-2">Crear cuenta</Link>
                    </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>

        </div>
    );
}

export default Login;