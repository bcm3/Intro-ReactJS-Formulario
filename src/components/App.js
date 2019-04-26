import React, { Component } from "react";
import UserList from "../components/UserList";
import Formulario from "./Formulario";
import logo from "../assets/logo.svg";
import "../assets/App.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
//import { PrimaryButton } from "office-ui-fabric-react";
import firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //de primeras nuestros usuarios y usuario logeados estaran vacios no hay nada en la app
      users: [],
      usuario: null
    };

    //bindeo de eventos
    this.handleAuth = this.handleAuth.bind(this);
    this.handleSalir = this.handleSalir.bind(this);
    this.renderCompruebaUsuario = this.renderCompruebaUsuario.bind(this);
  }

  //CADA VEZ QUE NO LOGUEMOS CON UN USUARIO
  componentWillMount() {
    firebase.auth().onAuthStateChanged(usuario => {
      this.setState({ usuario });
    });
  }

  //METODO PARA REALIZAR LA AUTENTIFICACION
  handleAuth() {
    //realiza la conexion con google para realizar la autentificación
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      //correcto login
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      //error en login
      .catch(error => console.log(`Error  ${error.code}: ${error.mensaje}`));
  }

  //Se encargar de salir de la app y desloguearse de google, sesion registrada previamente
  handleSalir() {
    firebase
      .auth()
      .signOut()
      //correcto login
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      //error en login
      .catch(error => console.log(`Error  ${error.code}: ${error.mensaje}`));
  }

  //METODO PARA SABER SI HAY O NO USUARIO LOGEADO
  renderCompruebaUsuario() {

    const { disabled, checked } = this.props;

    //SI hay usuario logeado
    if (this.state.usuario) {
      return (

        <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lista de Contactos</h2>
          <div className="App-Formulario">
            <input type="submit" onClick={this.handleSalir} value="Salir" />      
          </div>
        </div>
        <div className="App-Section">
          <p>
            <strong>Añade usuarios</strong>
          </p>
          <Formulario anadirUsuario={this.handleOnAddUser.bind(this)} />
          <UserList users={this.state.users} className="App-Resultado" />
        </div>
        <div className="App-Footer">
          <Map google={this.props.google} zoom={16}>
            <Marker onClick={this.props.adress} name={"Current location"} />
            <InfoWindow onClose={this.props.adress} />
          </Map>
        </div>
      </div>
      );
    } else {
      return (
        //si no esta logeado en la app, boton de INICIO DE PANTALLA!!!!
        <div className="App-Formulario"> 
          <input type="submit" onClick={this.handleAuth} value="Entrar" />      
      </div>
      );
    }
  }

  //evento para recoger todos los datos introducidos por el formulario
  handleOnAddUser(event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      apellidos: event.target.apellidos.value,
      numero: event.target.numero.value,
      email: event.target.email.value,
      sexo: event.target.sexo.value,
      adress: event.target.adress.value,
      foto: event.target.foto.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  //aqui esta el inicio de nuestra app, el DOM nos renderiza a esta parte 
  render() {
    return (
      <div className="App">
        <p>{this.renderCompruebaUsuario()}</p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAS9A3od8eoaLbZs8tPH1PTQAIj6gp_mrM"
})(App);
