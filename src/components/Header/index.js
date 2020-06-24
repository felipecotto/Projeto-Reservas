import React from 'react';
import logo from '../../assets/logo.svg'; 
import './style.css'; 
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo do Projeto" />
      </Link>

      <Link className="reservas" to="/reservas">
        <div>
            <strong>Minhas Reservas</strong>
            <span> 0 Reservas </span>
        </div>  
    </Link>
    </header>
  )
}