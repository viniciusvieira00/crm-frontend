// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import { useEffect, useState } from 'react'
import { InputLabel, Menu, MenuItem, Select } from '@mui/material'

const ModalClient = (props) => {
    const {setValues,values, handleChange, handleSubmit} = props;
    const [age,setAge]= useState()



  useEffect( () => {
    setValues({
      user : "",
      phone : "",
      email : "",
      city : "",
      country : "",
      totalPrice : "",
      orderItems: "",
      status: "",
      id: ""
  })

},[])
  return (
    <Card sx={{mt: '150px',maxWidth:'50%', alignItems: 'center', maxHeight: '50%'}}>
      <CardHeader title='Adicionar nova oportunidade' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent >
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange('name')}
                value= {values.name}
                label='Nome Completo'
                placeholder='Nome'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange('email')}
                value= {values.email}
                type='email'
                label='Email'
                placeholder='email@exemplo.com.br'
                helperText='Você pode usar letras e números'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange('phone')}
                value= {values.phone}
                type='number'
                label='Número'
                placeholder='+55 (00) 0000 - 0000'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Phone />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange('produto')}
                label='Produto(s) de interesse'
                value= {values.produto}
                placeholder='Produto'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange('empresa')}
                value= {values.empresa}
                label='Nome da Empresa'
                placeholder='Empresa'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Status"
                      onChange={handleChange('status')}
                  >

                        <MenuItem value= {'Sem contato'}>Sem contato</MenuItem>
                        <MenuItem value= {'Em contato'}>Em contato</MenuItem>
                        <MenuItem value= {'Em processo'}>Em processo</MenuItem>
                        <MenuItem value= {'Reunião agendada'}>Reunião agendada</MenuItem>
                        <MenuItem value= {'Proposta Enviada'}>Proposta enviada</MenuItem>                      
                    </Select>
            </Grid>
            
            <Grid item xs={6}>
              <Button fullWidth onClick={handleSubmit} type='submit' variant='contained' size='large'>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ModalClient
