import React from "react";
import {
    Navigate,
    //Link,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Home = () => {
    const idUsuario = localStorage.getItem("user");
    if (idUsuario === null) {
        return (
            <Navigate to="/" replace={true}/>
        );
    } else {
        return (
            <div>
                <Navbar />
                <main className="flex-shrink-0">
                    <div className="container">
                        <h1 className="mt-5">Página principal ServiPlus.</h1>
                        <p className="lead">Sistema integrado de tickets que le permitirá registrar y hacer seguimiento a sus tickets. </p>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default Home;