import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'

const Placeholder = () => {
  return (
    <div style={{ border: 1 }}>
      <Container>
        <Box
          component="form"
          sx={{
            bgcolor: '#ebfbff',

            '& .MuiTextField-root': { m: 3, width: '25ch' },
            '& .MuiButton-root': { m: 4, width: '10ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <h1 style={{ textAlign: 'center' }}> Placeholders</h1>

          <TextField
            variant="outlined"
            color="primary"
            label="Client Name"
            value="${clientsName}"
            focused
          />
          <br />

          <TextField
            variant="outlined"
            color="primary"
            label="Dog's Name"
            value="${dogsName}"
            focused
          />
          <br />

          <TextField
            variant="outlined"
            color="primary"
            label="Date and Time"
            value="${date}"
            focused
          />
        </Box>
      </Container>
    </div>
  )
}

export default Placeholder
