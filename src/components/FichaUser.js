import React, { Component } from 'react';
import logoUser from '../assets/logo-user.png';
import '../assets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
//import usuarios2 from '../components/App'
//import console = require('console');
//import u from '../components/UserList'
//import Formulario from '../components/Formulario'


//recuperamos los elementos que hay mediante una lista y los mostramos
class FichaUser extends Component {
    usuarios2 = JSON.parse(localStorage.getItem('key'));
    handleDelete(usuarios2){
      console.log("aqui estoy en el metodo borrar");
      console.log("cucu",usuarios2);
      if(window.confirm("¿Desea borrar el registro seleccionado?")){
       //localStorage.removeItem(usuarios2)
        localStorage.clear();
     }
    }
  
  render () {  

    return (
      <li className="Lista">
      <div className="botones">
      <a href="#" onClick={this.handleDelete.bind(this)}><FontAwesomeIcon icon={faTrash} /></a>
        <FontAwesomeIcon icon={faUserEdit} />
     </div>
        <img src={logoUser} className="App-logo-user" alt="logo"/> 
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