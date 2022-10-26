import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

const CrearCuenta = () =>{
    const alerta = (msg, tipo, titulo) =>{
        swal({
            title: titulo,
            text: msg,
            icon: tipo,
            button: "Aww yiss!"
        })
    }

    const [usuario, setUsuario] = useState({
        nombre : "",
        email : "",
        passwd : ""
    });
        const {email, nombre, passwd} = usuario;

        const onChange = (e)=>{
            setUsuario({
                ...usuario,
                [e.target.name]: e.target.value
            });
        }
        useEffect(()=>{
            document.getElementById("nombre").focus();
        },[]);

        const crearCuenta = async () =>{
            const data={
                nombre: usuario.nombre,
                email: usuario.email,
                passwd: usuario.passwd
            }
            const response = await APIInvoke.invokePOST("/usuarios/new", data);
            const respuesta = response.msg;

            if (respuesta === "Usuario existe"){
                alerta("Ojo",  "error", "ojo");
            }else{
                alerta("Ojo", "success", "ojo");
            }
            setUsuario({
                nombre : "",
                email : "",
                passwd : ""
            })
        }

        const onSubmit = (e)=>{
            e.preventDefault();
            crearCuenta();
        }
    return(
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Crear cuenta
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                    <div>
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                className="form-control"
                                id="nombre"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={onChange}
                                name="nombre"
                                required
                             />
                            <label htmlFor="floatingInput">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={onChange}
                                name="email"
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
                        <button type="submit" className="btn btn-primary btn-lg my-2">Crear cuenta</button>
                        <Link to={"/"} className="btn btn-secondary btn-lg mx-2">Iniciar sesión</Link>
                    </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Todo los campos son obligatorios
                </div>
            </div>

        </div>
    );
}

export default CrearCuenta;