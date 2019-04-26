import React, { Component } from 'react'
import FichaUser from '../components/FichaUser'

class UserList extends Component {
  render () {
    return (
        <ul>
          {this.props.users.map(u => {
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