// ** MUI Imports
import Grid from '@mui/material/Grid'
import React, { useEffect } from 'react'
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
import { Box, Button, Typography, Modal } from '@mui/material'
import api from '../utils/api'

import Kanban from 'src/views/vendas/Kanban'


const Vendas = () => {
//   const [open, setOpen] = useState(false);
//   const [orders, setOrders] = useState([]);
//   const [currentUser, setCurrentUser] = useState(undefined);
//   const [values, setValues] = useState({
//     user : '',
//     phone : '',
//     email : '',
//     city : '',
//     country : '',
//     totalPrice : '',
//     orderItems: '',
//     status: '',
//     id: ''
//   });

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value })
//   }

//   const handleSubmit = () => {
//     try {
      
//       api.post('api/orders',
//       {
//         user : values.user,
//         phone : values.phone,
//         email : values.email,
//         city : values.city,
//         country : values.country,
//         totalPrice : values.totalPrice,
//         orderItems: values.orderItems,
//         status: values.status
//       }, {headers: authHeader()})

//       window.location.reload()
      
//     } catch (error) {
//       console.log(error)
//     }

//   }

//   const handleRefreshOrder = () => {
//     api.put(`api/orders/`+ values.id, {
//         user : values.user,
//         phone : values.phone,
//         email : values.email,
//         city : values.city,
//         country : values.country,
//         totalPrice : values.totalPrice,
//         orderItems: values.orderItems,
//         status: values.status
//     }, {        headers: authHeader()})
//     window.location.reload()
// }
//   useEffect( () => {
//     const user = authService.getCurrentUser();

//     if(user) {
//       setCurrentUser(user)
//       console.log(user)
//       api.get("api/orders", { headers: authHeader()})
//       .then((data) => {
//       setOrders(data.data);
//       console.log(orders)

        
//     })
//     } else {
//       alert('Você não está logado')
//       router.push('/')
//       console.log('Nao existe ', currentUser)
//     }



    
//   },[])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={4}>
          <Typography variant='h4'>Vendas</Typography>
        </Grid>
        <Grid item xs={12}>
          <TableVendas setValues={setValues} handleChange = {handleChange} handleRefreshOrder = {handleRefreshOrder} values = {values} rows = {orders}/>
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
                <Button onClick={handleOpen} color='primary' variant='contained'><Typography  color={'white'}>Adicionar Venda</Typography></Button>
                </Box>
            </Box> */}


            <Kanban/>
      </Grid>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{justifyContent: 'center', display: 'flex'}}
      >
        <ModalVenda handleChange = {handleChange} values = {values} handleSubmit= {handleSubmit}/>
      </Modal> */}
    </ApexChartWrapper>
  )
}

export default Vendas
