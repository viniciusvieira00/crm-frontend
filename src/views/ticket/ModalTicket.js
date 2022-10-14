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
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import api from 'src/utils/api'
import authService from 'src/utils/auth/auth-service'

const ModalTicket = (props) => {
    const {setValues,values, handleChange, handleSubmit, client} = props;
    const [clientes,setClientes] = useState([])
    const [age,setAge]= useState()



  useEffect( () => {
    setValues({
      titulo : "",
      client : ""
  })


  const user = authService.getCurrentUser();
  api.get(`api/clients/user/${user.user}`).then((data) => {
    setClientes(data.data)
  })

},[])
  return (
    <Card sx={{mt: '150px',maxWidth:'50%', alignItems: 'center', maxHeight: '30%'}}>
      <CardHeader title='Adicionar novo Ticket' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent >
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange('titulo')}
                value= {values.titulo}
                label='Titulo'
                placeholder='Titulo'
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
            <InputLabel id="demo-simple-select-label">Clientes</InputLabel>

            
                


                    <>
                              <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Clientes"
                          onChange={handleChange('client')}
                      >
                      {clientes.map((item) => (<MenuItem value={item._id}>{item.name}</MenuItem>))}
                    
                    </Select>
                    </> 

                
            

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

export default ModalTicket