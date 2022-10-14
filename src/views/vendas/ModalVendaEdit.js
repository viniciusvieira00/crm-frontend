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
import api from 'src/utils/api'
import { useEffect } from 'react'

const ModalVendaEdit = (props) => {
    const {rows,values,handleChange, setValues, handleRefreshOrder} = props;



    useEffect( () => {

        setValues({
            user : rows.user,
            phone : rows.phone,
            email : rows.email,
            city : rows.city,
            country : rows.country,
            totalPrice : rows.totalPrice,
            orderItems: rows.orderItems,
            status: rows.status,
            id: rows.id
        })

    },[])

  return (
    <Card sx={{mt: '150px',maxWidth:'50%', alignItems: 'center', maxHeight: '50%'}}>
      <CardHeader title='Editar informações' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent >
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange('user')}
                value= {values.user}
                label='Usuário'
                placeholder={rows.user}
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
                onChange={handleChange('phone')}
                value= {values.phone}
                type='number'
                label='Número'
                placeholder= {rows.phone}
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
                onChange={handleChange('email')}
                value= {values.email}
                type='email'
                label='Email'
                placeholder={rows.email}
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
                onChange={handleChange('totalPrice')}
                label='Produtos'
                value= {values.totalPrice}
                placeholder={rows.totalPrice}
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
                onChange={handleChange('city')}
                value= {values.city}
                label='Nome da Cidade'
                placeholder={rows.city}
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
                onChange={handleChange('status')}
                value= {values.status}
                label='Status Atual'
                placeholder={rows.status}
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
              <Button onClick={handleRefreshOrder} fullWidth type='submit' variant='contained' size='large'>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ModalVendaEdit
