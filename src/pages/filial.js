// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Box, Button, Input, Modal, Typography } from '@mui/material'

// ** Demo Components Imports
import Table from 'src/views/filial/clientes/Table'
import Trophy from 'src/views/dashboard/Trophy'
import QRCode from 'react-qr-code';
import React, { useEffect, useState } from 'react'
import authService from 'src/utils/auth/auth-service'
import api from 'src/utils/api'
import authHeader from 'src/utils/auth/auth-header'
import router, { useRouter } from 'next/router'
import ModalClient from 'src/views/clientes/ModalClient'
import FilialTickets from './filialTickets'
import FilialClients from './filialClients'
import FilialVendedores from './filialVendedores'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import Inicio from 'src/views/filial/Inicio'

const Filial = () => {


  const timer = ms => new Promise(res => setTimeout(res, ms))
  const [filial,setFilial] = useState([])

  const [dono,setDono] = useState()
  

  const [donoName,setDonoName] = useState()

  const [clients,setClients] = useState([])
  const [finishedTimeout, setFinishedTimeout] = useState(false)

  const [tickets,setTickets] = useState([])

  const show =  () => {
    return (
      <Inicio clients = {clients} tickets={tickets}  donoName = {donoName} dono = {dono} filial = {filial}/>
    )
  }
  
  useEffect( () => {

    const user = authService.getCurrentUser();
  
    if(user) {


      if(user.cargo == 'donofilial' || 'admin'){
        const id = setTimeout(() => {
          setFinishedTimeout(true);
        }, 1000);
        api.get(`api/filial/${user.user}`, {params:{'cargo': user.cargo}, headers: authHeader()})
      .then((data) => {
      setFilial(data.data);
      setDono(data.data.dono)
      console.log(data.data)

      api.get(`api/users/${data.data.dono}`, {params:{'cargo': 'cargo'}, headers: authHeader()})
      .then((data) => {
        console.log(data)
        setDonoName(data.data.name)
        
      })


      


    })
    api.get(`api/filial/clientesfilial/${user.user}`, {params:{'cargo': user.cargo}, headers: authHeader()})
    .then((data) => {
    setClients(data.data);
    console.log(data.data)

    api.get(`api/tickets/getall/${user.user}`, {params:{'cargo': user.cargo}, headers: authHeader()})
    .then((data) => {
    setTickets(data.data);
    console.log(tickets)
      
      })

          
      })
      } else {
        alert('Você não é dono de uma filial')
        router.push('/clientes')
      }

      







    } 

    

  },[])


  return (
  
  <ApexChartWrapper>
  <Grid sx={{alignItems: 'center', }} alignItems= 'center' justifyContent={'center'} >
  <Box  item xs={6}>
  
  <Grid mt={10} mb={10} item xs={6} md={8}>
        {finishedTimeout && show()}
    </Grid>
    <Box item xs={6}>
      <FilialVendedores/>
      </Box>
    <FilialClients/>
    </Box>

    <Box item xs={6}>
      <FilialTickets/>
      </Box>



    </Grid>
    </ApexChartWrapper>

    
  )
}

export default Filial
