// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import { useEffect, useState } from 'react'
// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Button, Typography } from '@mui/material'
import api from '../utils/api'
import authService from 'src/utils/auth/auth-service'
// ** Demo Components Imports
import Table from 'src/views/clientes/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import QRCode from 'react-qr-code';
import { useRouter } from 'next/router'
const Dashboard = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [numero,setNumero] = useState('');
  const [currentUser, setCurrentUser] = useState(undefined)
 
  const router = useRouter()
  
  const handleSubmit = () => {
    api.post("api/bot/send-message", { numero: numero, message : message}).then((res) => {
      console.log(res);
    });
  }


  const handleDelete = () => setValue('')
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
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy/>
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='R$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Faturamento total'
                subtitle='Lucro anual'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='R$78'
                title='Devolvido'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='Vendas'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Clientes com dúvidas'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard