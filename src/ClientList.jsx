import { React, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ClientList = ({ clients }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {clients.map(client => (
          <Grid item key={client.id} xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title={client.clientName}
                subheader={client.clientEmail}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {client.dogName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ClientList
