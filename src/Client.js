import { React, useState, useEffect } from 'react'
import NavBar from './NavBar'
import ClientList from './ClientList'

const Client = () => {
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [dogName, setDogName] = useState('')
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/clients')
      .then(resp => resp.json())
      .then(obj => setClients(obj))
  }, [])

  function handleNewClientSubmit(e) {
    e.preventDefault()
    const newClient = {
      clientName,
      clientEmail,
      dogName,
    }
    fetch('http://localhost:4000/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClient),
    })
      .then(resp => resp.json())
      .then(obj => setClients([...clients, obj]))
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleNewClientSubmit}>
        <label htmlFor="clientName">Client's Name</label>
        <input
          type="text"
          name="clientName"
          placeholder="Enter Client's Name"
          onChange={e => {
            setClientName(e.target.value)
          }}
        />{' '}
        <br />
        <label htmlFor="clientEmail">Client's Email</label>
        <input
          type="email"
          name="clientEmail"
          placeholder="Enter Client's Email"
          onChange={e => {
            setClientEmail(e.target.value)
          }}
        />{' '}
        <br />
        <label htmlFor="dogName">Dog's Name</label>
        <input
          type="text"
          name="dogName"
          placeholder="Enter Dog's Name"
          onChange={e => {
            setDogName(e.target.value)
          }}
        />{' '}
        <br />
        <button type="submit">Submit</button>
      </form>
      <ClientList clients={clients} />
    </div>
  )
}

export default Client
