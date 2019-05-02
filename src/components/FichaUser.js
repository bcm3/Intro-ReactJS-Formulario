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
   cosas=JSON.parse(localStorage.getItem('key'));

    // handleDelete(cosas){
    //   console.log("aqui estoy en el metodo borrar");
    //  // console.log("cucu",usuarios2);
    //   // var ul = document.getElementById("li");
    //   // ul.clear();
    //   //removeItem = () => localStorage.removeItem("name")
    //   //console.log("Entraste " , cosas)
    // //   if(window.confirm("¿Desea borrar el registro seleccionado?")){
    // //    //localStorage.removeItem(usuarios2)
    // //     //borra todo el local
    // //     //localStorage.clear();
    // //     //refresco automatico
        
        
    // //     //location.reload();
    // //       console.log("borrado despues" ,cosas)
    // //  }
    // }

    handleClick(){
      console.log("BORRAR", this)
    }
  
  render () {  

    return (
      <li className="Lista">
      <div className="botones">
       <div className="tooltip">
          <span className="tooltiptext">Borrar</span>
          <a href="#" onClick={(e) => this.handleClick(e)}><FontAwesomeIcon icon={faTrash} /></a>        </div><spam> </spam>
        <div className="tooltip">
          <span className="tooltiptext">Editar</span>
          <a href="#" onClick=""><FontAwesomeIcon icon={faUserEdit} /></a>
        </div>      
     </div>
        <img src={logoUser} className="App-logo-user" alt="logo"/> 
        <p><strong>ID: </strong>{this.props.id}</p>
        <p><strong>Nombre: </strong>{this.props.name}</p>
        <p><strong>Apellidos: </strong>{this.props.apellidos}</p>
        <p><strong>Sexo: </strong>{this.props.sexo}</p>
        <p><strong>Número: </strong>{this.props.numero}</p>
        <p><strong>Dirección: </strong>{this.props.adress}</p>
        <p><strong>Correo Electrónico: </strong>{this.props.email}</p>
        <p><strong>Fotografía: </strong>{this.props.foto}</p>        
      </li>
    );

  }

}

export default FichaUser;