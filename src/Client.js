import { React, useState, useEffect } from 'react'
import NavBar from './NavBar'
import ClientList from './ClientList'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

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

    setClientEmail('')
    setClientName('')
    setDogName('')

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

      <Container>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 3, width: '25ch' },
            '& .MuiButton-root': { m: 4, width: '10ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleNewClientSubmit}
        >
          <h1>Add New Client</h1>
          <Grid container>
            <Grid item xs={12} md={3}>
              <TextField
                onChange={e => {
                  setClientName(e.target.value)
                }}
                id="outlined-number"
                label="Client's Name"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                onChange={e => {
                  setClientEmail(e.target.value)
                }}
                id="outlined-number"
                label="Client's Email"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                onChange={e => {
                  setDogName(e.target.value)
                }}
                id="outlined-number"
                label="Dog's Name"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
        <h1>Current Clients</h1>

        <ClientList clients={clients} />
      </Container>
    </div>
  )
}

export default Client
