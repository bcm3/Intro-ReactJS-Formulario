import React, { Component } from 'react'
//import axios from 'axios';
import firebase from 'firebase';
//import { timingSafeEqual } from 'crypto';


export default class Formulario extends Component{

  constructor(){
    super();
    this.state = {
      uploadValue: 0,
      picture: null
    
    };
    //bindeo del evento
    this.onUpload = this.onUpload.bind(this);
  }

  // fileSelector = event =>{
  //  // console.log(event.target.files[0]);
  //   axios.post('');
  // }

  onUpload (event) {

    const bd = firebase.firestore();

    const file = event.target.files[0];
    //tenemos el fichero vemos

    const storageRef = firebase.storage().ref(`/fotos/${file.name}`)
    const task=storageRef.put(file); 

    let nombre=document.getElementById('nombre').value; 

    bd.collection("users").add({
      nombre: nombre
    })
    .then(function(){
      console.log("Entro aqui para la insercion, A UN NO ESTA FUNCIONANDO")
    })
    .catch(function(error){
      console.log("Error")
    })

    task.on('state_change', snapshot =>{
        let porcentaje = (snapshot.bytesTransferreed / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue: porcentaje
        })
    }, error => {console.log(error.message)
    }, () => {  this.setState({
        uploadValue: 100,
        picture: task.snapshot.downloadURL
        //donde esta el fichero ubicado
      });
    });

  }

  render(){
    return ( 
      <form onSubmit={this.props.anadirUsuario} className="App-Formulario">
          Nombre: <input type="text" placeholder="Introduzca su nombre" name="name" onChange={this.onUpload} />
          Apellidos: <input type="text" placeholder="Introduzca sus apellidos" name="apellidos" onChange={this.onUpload}/>
          Dirección: <input type="text" placeholder="Introduce tu direccion" name="adress" onChange={this.onUpload}/>
          Telefono: <input type="number" placeholder="Introduzca su móvil" name="numero" onChange={this.onUpload}/>
          Sexo: <select name="sexo" onChange={this.onUpload}>
                  <option>Seleccione una opción</option>
                  <option value="hombre" name="hombre">Hombre</option>
                  <option value="mujer" name="mujer">Mujer</option>
                </select>
          Correo electrónico: <input type="email" placeholder="Introduzca Email" name="email" onChange={this.onUpload}/>
          Imagen: <input type="file" onChange={this.onUpload} name="foto" />
          <br></br><br></br>
          <input type="submit" value="Guardar" />
          <span> </span>
          <input type="reset" value="Borrar" />
      </form>
    );
  }
}