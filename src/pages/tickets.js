import React , {useState} from 'react'
import ModalTicket from 'src/views/ticket/ModalTicket';
import Tabela from 'src/views/ticket/Table';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Box, Button, Input, Modal, Typography, Grid } from '@mui/material'
import api from '../utils/api'

import { useEffect } from 'react'
import authHeader from 'src/utils/auth/auth-header'
import authService from 'src/utils/auth/auth-service';
import { useRouter } from 'next/router'
import { array } from 'prop-types';

export default function Vendas() {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [numero,setNumero] = useState('');
  const [ticketsFiltered, setTicketsFiltered] = useState()
  const [tickets, setTickets] = useState([]);
  const [clients, setClient] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [clientName, setClientName] = useState()
  const [clientsName, setClientsName] = useState([])
  const [elementTicket, setElementTicket] = useState()
  const [clientsTickets, setClientsTickets] =useState()
  const [ticketTitulo, setTicketTitulo] = useState()
  const [values, setValues] = useState({
    item : '',
    client : '',
    id: ''
  });
  const [filter, setFilter] = useState('')

  const clientTickets = []

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

  const handleSubmit = () => {
    try {
      
      api.post('api/tickets',
      {
        titulo : values.titulo, 
        client: values.client
      }, {        headers: authHeader()})
      window.location.reload()
      
    } catch (error) {
      console.log(error)
    }

  }
  const handleRefreshUser = () => {
    api.put(`api/tickets/`+ values.id, {
        titulo: values.titulo,
        client: values.client
    }, {        headers: authHeader()})
    window.location.reload()
}

const handleDeleteTicket = (id) => {
  api.delete(`api/tickets/${id}`, {        headers: authHeader()})
  window.location.reload()
}

  

  const handleGetTicket = (id) => {
    
    api.get(`api/tickets/${id}`, { headers: authHeader()})
    .then((data) => {
    setClient(data.data);
    console.log(clients)

      
  })
  }
 

  useEffect( () => {

    const user = authService.getCurrentUser();

    if(user) {
      setCurrentUser(user)
      console.log(user)
      api.get(`api/tickets/getall/${user.user}`, { headers: authHeader()})
      .then((data) => {
      setTickets(data.data);
      console.log(tickets)
        
    })


    
    } else {
      alert('Você não está logado')
      router.push('/')
      console.log('Nao existe ', currentUser)
    }

    setTicketsFiltered(tickets)

    
  },[])
  const handleFilterClients = () => {
    let arr = []
    ticketsFiltered.filter((item) => {
      if(item.titulo.includes(filter))  {
        arr.push(item)
      }

    })
    setTicketsFiltered(arr)

  }
  const filtro = tickets.filter((item) => item.client.includes(filter))

  return (
    <>
  <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Typography variant='h4'>Tickets</Typography>
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
          <Tabela 
          handleDeleteTicket = {handleDeleteTicket}
            openFilter = {openFilter} 
            tickets = {tickets} 
            filter = {filter} 
            setTickets = {setTickets}
            handleRefreshUser = {handleRefreshUser} 
            setValues={setValues} 
            handleChange = {handleChange} 
            values = {values} 
            ticketsFiltered = {ticketsFiltered}
            setTicketsFiltered = {setTicketsFiltered}

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
                <Button onClick={handleOpen} color='primary' variant='contained'><Typography  color={'white'}>Adicionar Tickets</Typography></Button>
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
        <ModalTicket setValues = {setValues} handleSubmit ={handleSubmit} handleChange = {handleChange} client = {clients} values = {values}/>
      </Modal>      
    </>
  )
}
