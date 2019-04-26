import React, { Component } from 'react';
import logoUser from '../assets/logo-user.png';
import '../assets/App.css';
//import Formulario from '../components/Formulario'

//recuperamos los elementos que hay mediante una lista y los mostramos
class FichaUser extends Component {
  render () {
    return (
      <li className="Lista">
        <img src={logoUser} className="App-logo-user" alt="logo" width="5"/>
        <p><strong>Nombre: </strong>{this.props.name}</p>
        <p><strong>Apellidos: </strong>{this.props.apellidos}</p>
        <p><strong>Sexo: </strong>{this.props.sexo}</p>
        <p><strong>Número: </strong>{this.props.numero}</p>
        <p><strong>Dirección: </strong>{this.props.adress}</p>
        <p><strong>Correo Electrónico: </strong>{this.props.email}</p>
        <p><strong>Fotografia: </strong>{this.props.foto}</p>
      </li>
    );

  }
}

export default FichaUser;