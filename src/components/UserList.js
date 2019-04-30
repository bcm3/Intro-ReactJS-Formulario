import React, { Component } from 'react'
import FichaUser from '../components/FichaUser'

class UserList extends Component {
  render () {

    let cosas=JSON.parse(localStorage.getItem('key')) || [];
    console.log("tengoen key" , cosas)
     
    return (
        <ul>
          {cosas.map(u => {
          //cuando no funciona descomentar linea 14 y comentar la 14
          // {this.props.users.map(u => {
            console.log("Que hay aqui en el mapa" , u)
            return (           
              <FichaUser
                key={u.ID}
                name={u.name}
                apellidos={u.apellidos}
                numero={u.numero}
                email={u.email}
                sexo={u.sexo}
                adress={u.adress}
                foto={u.foto}

              />
            );
          })}
        </ul>
    );
  }
}

export default UserList;