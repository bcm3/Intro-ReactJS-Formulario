import React, { Component } from 'react'
import FichaUser from '../components/FichaUser'

class UserList extends Component {
  render () {

    // let cosas=JSON.parse(localStorage.getItem('key')) || [];
    // console.log("tengoen key" , cosas)
    return (
        <ul>
          {this.props.users.map((u, idx) => {
            return (           
              <FichaUser
                key={u.id}
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