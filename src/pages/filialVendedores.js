

// ** MUI Imports
import Grid from '@mui/material/Grid'
import React from 'react'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import { useState } from 'react'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Box, Button, Input, Modal, Typography } from '@mui/material'
import api from '../utils/api'
import authService from 'src/utils/auth/auth-service'

// ** Demo Components Imports
import Table from 'src/views/filial/vendedores/Table'
import Trophy from 'src/views/dashboard/Trophy'
import QRCode from 'react-qr-code';
import { useEffect } from 'react'
import authHeader from 'src/utils/auth/auth-header'
import { useRouter } from 'next/router'
import ModalClient from 'src/views/filial/vendedores/ModalClient'
import FilialTickets from './filialTickets'
import next from 'next'

const FilialVendedores = () => {


    const timer = ms => new Promise(res => setTimeout(res, ms))
    const [value, setValue] = useState('');

    const [filial, setFilial] = useState([]);

    const [open, setOpen] = useState(false);
  
    const [message, setMessage] = useState('');
    
    const [numero,setNumero] = useState('');
    
    const [clientsFiltered, setClientsFiltered] = useState()
    
    const [clients, setClients] = useState([]);
    
    const [openFilter, setOpenFilter] = useState(false);
    
    const [currentUser, setCurrentUser] = useState(undefined);
    
    const [values, setValues] = useState({
      email : '',
      name : '',
      password: '',
      filial: '',
      id: ''
    });
    
    const [filter, setFilter] = useState('')
  
    const handleOpen = () => setOpen(true);
    
    const handleClose = () => {
      setOpen(false);
    }
  
    const handleFilter = event => 
      setFilter(event.target.value)
  
  
    const handleCloseFilter = () => setOpenFilter(false);
    
    const handleOpenFilter = () => setOpenFilter(true);
  
    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value })
    }
    
    const router = useRouter()
  
  
    const handleRefreshUser = () => {
      const user = authService.getCurrentUser();
      api.put(`api/users/`+ values.id, {
          name: values.name,
          email: values.email,
          password: values.password,
          filial: values.filial
      },  { params:{'cargo': user.cargo}, headers: authHeader()})
      window.location.reload()
  }
  
  const handleDeleteClient = (id) => {
    
    const user = authService.getCurrentUser();
    api.delete(`api/filial/${id}`, {params:{'cargo': 'donofilial'},headers: authHeader()})
    window.location.reload()
  }
  
    
  
    useEffect( () => {
      const user = authService.getCurrentUser();
  
      if(user) {
        setCurrentUser(user)
        console.log(user)
        api.get(`api/filial/vendedores/${user.user}`, {params:{'cargo': user.cargo}, headers: authHeader()})
        .then((data) => {
        setClients(data.data);
        console.log(data.data)
  
          
      })
      api.get(`api/filial/${user.user}`, {params:{'cargo': user.cargo}, headers: authHeader()})
      .then((data) => {
      setFilial(data.data);
      console.log(data.data)
    })
      } else {
        alert('Você não está logado')
        router.push('/')
        console.log('Nao existe ', currentUser)
      }
  
  
      setClientsFiltered(clients)
      console.log('oi', clientsFiltered)
      
      
  
      
    },[])
  
    const handleSubmit = async () => {
  
      try {
        const user = authService.getCurrentUser();
        
        api.post(`api/users/`, {
            name: values.name,
            email: values.email,
            password: values.password,
            filial: filial.id
        },  { params:{'cargo': user.cargo}, headers: authHeader()}).then((data) => {
            if(data.data.id){
                console.log(data.data)
                api.put(`api/filial/${filial.id}`, {
                    vendedores: data.data.id
                },  { params:{'cargo': user.cargo}, headers: authHeader()})
            }

        })


        await timer(2000)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
  
    }
    
    const handleFilterClients = () => {
      let arr = []
      clientsFiltered.filter((item) => {
        if(item.name.includes(filter))  {
          arr.push(item)
        }
  
      })
      setClientsFiltered(arr)
  
    }
    
    const filtro = clients.filter((item) => item!== null && item.id.includes(filter))
  
    
  
  

  return (
  
  <>
    <Grid sx={{display: 'flex', alignItem: 'center', justifyContent: 'center'}} container spacing={6}>
<Grid item xs={6} md={4}>
  <Typography variant='h4'>Vendedores</Typography>
</Grid>
<Grid item xs={6} md={4}>
  <Input
    placeholder='Filtro'
    onFocus={handleOpenFilter}
    value={filter}
    onChange={handleFilter}
  >

  </Input>
</Grid>
<Grid item xs={12}>
  <Table 
    handleDeleteClient = {handleDeleteClient}
    openFilter = {openFilter} 
    clients = {clients} 
    filter = {filter} 
    handleRefreshUser = {handleRefreshUser} 
    setValues={setValues} 
    handleChange = {handleChange} 
    values = {values} 
    rows = {clients} 
    filtro = {filtro}
    clientsFiltered = {clientsFiltered}
    setClientsFiltered = {setClientsFiltered}

  />
          <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'left',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mt: '30px'}}>
        <Button onClick={handleOpen} color='primary' variant='contained'><Typography  color={'white'}>Adicionar Cliente</Typography></Button>
        </Box>
    </Box>
</Grid>

</Grid>
<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
sx={{justifyContent: 'center', display: 'flex'}}
>
<ModalClient filial = {filial} setFilial = {setFilial} setValues = {setValues} handleSubmit ={handleSubmit} handleChange = {handleChange} values = {values}/>
</Modal>
  </>

    
  )
}

export default FilialVendedores