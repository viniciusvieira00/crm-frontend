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
import Table from 'src/views/clientes/Table'
import Trophy from 'src/views/dashboard/Trophy'
import QRCode from 'react-qr-code';
import { useEffect } from 'react'
import authHeader from 'src/utils/auth/auth-header'
import { useRouter } from 'next/router'
import ModalClient from 'src/views/clientes/ModalClient'

const Clientes = () => {

  const [value, setValue] = useState('');

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
    status: '',
    salary: '',
    empresa: '',
    phone: '',
    produto: '',
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
    api.put(`api/clients/`+ values.id, {
        name: values.name,
        phone: values.phone,
        produto: values.produto,
        salary: values.salary,
        email: values.email,
        empresa: values.empresa,
        status: values.status,

    },  { params:{'cargo': user.cargo}, headers: authHeader()})
    window.location.reload()
}

const handleDeleteClient = (id) => {
  
  const user = authService.getCurrentUser();
  api.delete(`api/clients/${id}/${user.user}`, {params:{'cargo': user.cargo},headers: authHeader()})
  window.location.reload()
}

  

  useEffect( () => {
    const user = authService.getCurrentUser();

    if(user) {
      setCurrentUser(user)
      console.log(user)
      api.get(`api/clients/user/${user.user}`, {params:{'cargo': user.cargo}, headers: authHeader()})
      .then((data) => {
      setClients(data.data);
      console.log(clients)

        
    })
    } else {
      alert('Você não está logado')
      router.push('/')
      console.log('Nao existe ', currentUser)
    }


    setClientsFiltered(clients)
    console.log('oi', clientsFiltered)
    
    

    
  },[])

  const handleSubmit = () => {

    try {
      const user = authService.getCurrentUser();
      
      api.post(`api/clients/user/${user.user}`,
      {
        email : values.email, 
        name: values.name, 
        status: values.status, 
        empresa: values.empresa, 
        phone: values.phone, 
        produto: values.produto,
      }, {params:{'cargo': user.cargo},headers: authHeader()})

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
  
  const filtro = clients.filter((item) => item.name.includes(filter))

  

  return (
  
  <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Typography variant='h4'>Clientes</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
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
        </Grid>
        <Box
                sx={{
                  ml: '20px',
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-evenly'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mt: '30px'}}>
                <Button onClick={handleOpen} color='primary' variant='contained'><Typography  color={'white'}>Adicionar Cliente</Typography></Button>
                </Box>
            </Box>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{justifyContent: 'center', display: 'flex'}}
      >
        <ModalClient setValues = {setValues} handleSubmit ={handleSubmit} handleChange = {handleChange} values = {values}/>
      </Modal>
    </ApexChartWrapper>

    
  )
}

export default Clientes
