import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" Link to={"#"}>Menú principal</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page"  to={"#"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"#"}>Crea tickets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Listar tickets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Actualiza tickets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Elimina tickets</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
}

export default Navbar;