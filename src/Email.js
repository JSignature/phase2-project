import { React, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import NavBar from './NavBar'

const Email = () => {
  const [clients, setClients] = useState([])
  const [templates, setTemplates] = useState([])
  const [filteredClient, setFilteredClient] = useState('')
  const [filteredTemplate, setFilteredTemplate] = useState('')
  const [templateProp, setTemplateProp] = useState([])
  const [clientsName, setClientsName] = useState('Please Select a Client')
  const [dogsName, setDogsName] = useState('')
  const [date, setDate] = useState(new Date())

  function handleClientChange(e) {
    setFilteredClient(e.target.value)
  }

  useEffect(() => {
    const clientPropArr = clients.filter(
      client => client.clientName === filteredClient
    )

    setClientsName(
      clientPropArr.length === 0 ? ' ' : clientPropArr[0].clientName
    )
    setDogsName(clientPropArr.length === 0 ? ' ' : clientPropArr[0].dogName)
  }, [filteredClient])

  function handleTemplateChange(e) {
    setFilteredTemplate(e.target.value)
  }

  useEffect(() => {
    const templatePropArr = templates.filter(
      template => template.tempName === filteredTemplate
    )

    const templatePropStr = templatePropArr.map(template => template.tempBody)

    setTemplateProp(templatePropStr)
  }, [filteredTemplate])

  useEffect(() => {
    fetch('http://localhost:4000/clients')
      .then(resp => resp.json())
      .then(obj => setClients(obj))
  }, [])
  useEffect(() => {
    fetch('http://localhost:4000/templates')
      .then(resp => resp.json())
      .then(obj => setTemplates(obj))
  }, [])

  return (
    <div>
      <NavBar />

      <Container>
        <h1>Email</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Client's Name</InputLabel>
              <Select
                label="Client's Name"
                value={filteredClient}
                onChange={handleClientChange}
              >
                {clients.map(client => (
                  <MenuItem key={client.id} value={client.clientName}>
                    {client.clientName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={props => <TextField {...props} />}
                label="DateTimePicker"
                value={date}
                onChange={newValue => {
                  setDate(newValue)
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Template</InputLabel>
              <Select
                id="demo-simple-select"
                value={filteredTemplate}
                label="Template"
                onChange={handleTemplateChange}
              >
                {templates.map(template => (
                  <MenuItem key={template.id} value={template.tempName}>
                    {template.tempName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                '& .MuiTextField-root': { width: 1 },
              }}
            >
              {templateProp.length === 0 ? (
                ' '
              ) : (
                <TextField
                  name="Final Email"
                  multiline
                  minRows={1}
                  maxRows={100}
                  label="Email"
                  value={eval('`' + templateProp + '`')}
                  focused
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Email
