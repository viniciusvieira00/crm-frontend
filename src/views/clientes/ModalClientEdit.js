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

const ModalClientEdit = (props) => {
    const {rows, row,values,handleChange, setValues, handleRefreshUser, rowId} = props;



    useEffect( () => {





        row.map((item) => {
          if(item._id == rowId) {
            console.log('foi')
            setValues({
              email : item.email, 
              name: item.name, 
              status: item.status, 
              empresa: item.empresa, 
              salary: item.salary, 
              phone: item.phone, 
              produto: item.produto,
              status: item.status,
              id: item.id
          })
          }
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
                onChange={handleChange('name')}
                value= {values.name}
                label='Nome Completo'
                placeholder={values.name}
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
                value= {values.email}
                onChange={handleChange('email')}
                type='email'
                label='Email'
                placeholder={values.email}
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
                placeholder= {values.phone}
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
                label='Produto comprado'
                onChange={handleChange('produto')}
                value= {values.produto}
                placeholder={values.produto}
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
                label='Valor gasto'
                value={values.salary}
                onChange={handleChange('salary')}
                placeholder={values.salary}
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
                value= {values.empresa}
                label='Nome da Empresa'
                onChange={handleChange('empresa')}
                placeholder={values.empresa}
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
                value= {values.status}
                label='Status Atual'
                onChange={handleChange('status')}
                placeholder={values.status}
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
              <Button onClick={handleRefreshUser} fullWidth type='submit' variant='contained' size='large'>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ModalClientEdit
