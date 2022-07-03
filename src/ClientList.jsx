import { React, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ClientList = ({ clients }) => {
  return (
    <Container>
      <h1>Current Client List</h1>
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
