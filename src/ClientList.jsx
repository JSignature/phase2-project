import { React, useState, useEffect } from 'react'

const ClientList = ({ clients }) => {
  return (
    <div>
      <h1>Current Client List</h1>

      {clients.map(client => (
        <div key={client.id}>
          <h3> Name: {client.clientName}</h3>
          <p> E-mail: {client.clientEmail} </p>
          <p> Dog Name: {client.dogName}</p>
        </div>
      ))}
    </div>
  )
}

export default ClientList
