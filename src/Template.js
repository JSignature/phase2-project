import { React, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Placeholder from './Placeholder'
import TemplateList from './TemplateList'
import TextField from '@mui/material/TextField'
import { TextareaAutosize } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const Template = () => {
  const [tempName, setTempName] = useState('')
  const [tempBody, setTempBody] = useState('')
  const [templates, setTemplates] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/templates')
      .then(resp => resp.json())
      .then(obj => setTemplates(obj))
  }, [])

  function handleNewTemplate(e) {
    e.preventDefault()
    const newTempObj = {
      tempName,
      tempBody,
    }

    fetch('http://localhost:4000/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTempObj),
    })
      .then(resp => resp.json())
      .then(obj => setTemplates([...templates, obj]))
  }

  return (
    <div>
      <NavBar />
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 3, width: 1 },
                '& .MuiButton-root': { m: 1, width: 1 },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleNewTemplate}
            >
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  color="primary"
                  label="New Template Name"
                  onChange={e => {
                    setTempName(e.target.value)
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  focused
                />{' '}
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="Temp_Body"
                  multiline
                  id=""
                  cols="30"
                  minRows={10}
                  maxRows={100}
                  height="10"
                  placeholder="Remember to use  placeholders"
                  label="Email Template"
                  onChange={e => {
                    setTempBody(e.target.value)
                  }}
                  focused
                />
              </Grid>
              <Grid item xs={8}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Placeholder />
          </Grid>
        </Grid>
      </Container>
      <TemplateList templates={templates} />
    </div>
  )
}

export default Template
