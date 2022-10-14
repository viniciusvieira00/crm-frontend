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
import authService from 'src/utils/auth/auth-service'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Button, Typography } from '@mui/material'
import api from '../utils/api'
import BotInit from 'src/views/bot/BotInit'

// ** Demo Components Imports
import Table from 'src/views/clientes/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import QRCode from 'react-qr-code';
import BotQr from 'src/views/bot/BotQr'
import BotMessage from 'src/views/bot/BotMessage'
import { useEffect } from 'react'
import BotDisparo from 'src/views/bot/BotDisparo'
import { useRouter } from 'next/router'
import authHeader from 'src/utils/auth/auth-header'

const Bot = () => {

  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [numero,setNumero] = useState('');
  const [gerar,setGerar] = useState(false)
  const [files,setFile] = useState();
  const [currentUser, setCurrentUser] = useState(undefined)
 
  const router = useRouter()

  const handleInit = () => {
    api.get('api/bot', { headers: authHeader()}).then((res) => {
      setValue(res.data.qr)
    })}
  
  
  const handleSubmit = () => {
    api.post("api/bot/send-message", { numero: numero, message : message}, { headers: authHeader()}).then((res) => {
      console.log(res);
    });
  }

  const handleMessages = () => {
    const arrayNumeros = [];
    files?.map((d) => {
      arrayNumeros.push(d.numero)
   })
    api.post("api/bot/send-multiple-message", { numeros: arrayNumeros, message : message}, { headers: authHeader()}).then((res) => {
      console.log(res);
    });
  }


  const handleDisconnect = () => {
    api.post("api/bot/disconnect",{ headers: authHeader()} ).then((res) => {console.log(res)})
  }

  const handleDelete = () => setValue(null)

  const handleMessage = (event) => setMessage(event.target.value)

  const handleNumero = (event) => setNumero(event.target.value);

  useEffect( () => {
    const user = authService.getCurrentUser();

    if(user) {
      setCurrentUser(user)
      console.log(user)
    } else {
      alert('Você não está logado')
      router.push('/')
      console.log('Nao existe ', currentUser)
    }



    
  },[])


  return (
    
    <ApexChartWrapper>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <BotInit value = {value} handleInit = {handleInit} setValue = {setValue} handleDisconnect = {handleDisconnect}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <BotQr setValue = {setValue} value = {value} handleDelete = {handleDelete}/>
        </Grid>
        <Grid item xs={12} >
          <BotMessage handleMessage = {handleMessage} message = {message} handleNumero = {handleNumero} numero = {numero} handleSubmit = {handleSubmit} />
        </Grid>
        <Grid item xs={12} >
          <BotDisparo  files = {files} setFile = {setFile} handleMessages= {handleMessages} handleMessage = {handleMessage} message = {message} handleNumero = {handleNumero} numero = {numero} handleSubmit = {handleSubmit} />
        </Grid>

      </Grid>
    </ApexChartWrapper>
  )
}

export default Bot
