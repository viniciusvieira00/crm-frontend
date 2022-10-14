
// ** MUI Imports
import Grid from '@mui/material/Grid'

import { useEffect, useState } from 'react'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import api from '../utils/api'
import authService from 'src/utils/auth/auth-service'
import authHeader from 'src/utils/auth/auth-header'
import { useRouter } from 'next/router'
import Teste from '../views/tarefas/Board'

const Tarefas = () => {

  const [boards, setBoards] = useState();
  const [currentUser, setCurrentUser] = useState(undefined)

  const router = useRouter()
  

  useEffect( () => {
    
    const user = authService.getCurrentUser();

    api.get('api/boards', { headers: authHeader()}).then((res) => {
        console.log(res + "Requisição")
        setBoards(res.data)
        console.log(boards)
    })

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
      <Grid ml = {3} container spacing={12} mt={3}>
        {/* <Grid item xs= {14} my={4} md= {12} >
          <Teste/>
        </Grid> */}
          <iframe width={'100%'} height= {'1000px'} src="https://6349e38ce374d21d5b847b5d--timely-zuccutto-7697a6.netlify.app/"></iframe>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Tarefas
