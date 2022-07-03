import React from 'react'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const TemplateList = ({ templates }) => {
  console.log(templates)
  return (
    <Container>
      <h1>Current Templates</h1>
      <Grid container spacing={2}>
        {templates.map(template => (
          <Grid item key={template.id} xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader title={template.tempName} />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {template.tempBody}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default TemplateList
