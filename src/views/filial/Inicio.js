// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import { useEffect, useState } from 'react'
import authService from 'src/utils/auth/auth-service'
import api from 'src/utils/api'
import authHeader from 'src/utils/auth/auth-header'







const Inicio = (props) => {
  const {filial,clients,tickets,donoName,dono} = props


  useEffect(() => {
    
  },[])
  return (
    <Card>
      <CardHeader
        title={filial.name}

        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Dono da Filial: {donoName}
            </Box>
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>

        <Grid container spacing={[5, 0]}>
        <Grid item xs={12} sm={4}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `primary.main`
            }}
          >
            <TrendingUp sx={{ fontSize: '1.75rem' }} />
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>Vendedores</Typography>
            <Typography variant='h6'>{filial.vendedores.length || 'não definido'}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `success.main`
            }}
          >
            <AccountOutline sx={{ fontSize: '1.75rem' }} />
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>Oportunidades Feitas</Typography>
            <Typography variant='h6'>{clients.length || 'não definido'}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `warning.main`
            }}
          >
            <CellphoneLink sx={{ fontSize: '1.75rem' }} />
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>Todos os Tickets</Typography>
            <Typography variant='h6'>{tickets.length || 'não definido'}</Typography>
          </Box>
        </Box>
      </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

export default Inicio
