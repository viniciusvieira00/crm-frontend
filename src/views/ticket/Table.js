// ** MUI Imports
import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { DotsVertical, PencilBoxOutline, TrashCan } from 'mdi-material-ui'
import { Button, IconButton, ListItem, MenuItem, Menu } from '@mui/material'
import {Input, Modal, Typography, Grid } from '@mui/material'

import { useState } from 'react'
import ModalTicket from './ModalTicket'
import ModalTicketEdit from './ModalTicketEdit'

const Tabela = (props) => {
  const {
            openFilter,
            tickets,
            filter,
            handleRefreshUser,
            setValues,
            handleChange,
            values,
            rows,
            handleDeleteTicket,
  
            ticketsFiltered,
            setTicketsFiltered
  } = props
  const [rowId,setRowId] = useState('')



  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAction = Boolean(anchorEl);
  const handleClickAction = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAction = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);
  const handleRowId = (id) => setRowId(id);
  const handleOpenModal = (id) => {
    setOpen(true)
    handleRowId(id)
    console.log(rowId)
  }
  const filtro = tickets.filter((item) => item.titulo.includes(filter))




  const handleCloseModal = () => setOpen(false);

  const statusObj = {
    aplicado: { color: 'info' },
    rejeitado: { color: 'error' },
    andamento: { color: 'primary' },
    reavaliado: { color: 'warning' },
    captado: { color: 'success' }
  }

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
              openFilter ? (
                filtro.map(row => (
                  <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }} >
              
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.id}</Typography>
                </Box>
              </TableCell>
              <TableCell>{row.titulo}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>
              <IconButton value = {row.id} onClick={() => {handleOpenModal(row._id,row.name)}} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                    <PencilBoxOutline />
                </IconButton>
              <IconButton value = {row.id} onClick={() => {handleDeleteTicket(row._id)}} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'red' }}>
                  <TrashCan />
              </IconButton>
              {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openAction}
        onClose={handleCloseAction}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleCloseAction}>Editar</MenuItem>
        <MenuItem onClick={() => {handleDeleteTicket(row.id)}}>Deletar</MenuItem>
      </Menu> */}

              </TableCell>
              <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{justifyContent: 'center', display: 'flex'}}
              >
                <ModalTicketEdit handleRefreshUser = {handleRefreshUser} setValues = {setValues} values= {values} handleChange = {handleChange} rowId = {rowId} rows = {tickets} row = {rows}/>
              </Modal>
              

            </TableRow>
              
              
            ))
              ) : (
                tickets?.map(row => (
                  <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }} >
              
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.id}</Typography>
                </Box>
              </TableCell>
              <TableCell>{row.titulo}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>
              <IconButton value = {row.id} onClick={() => {handleOpenModal(row._id,row.name)}} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                    <PencilBoxOutline />
                </IconButton>
              <IconButton value = {row.id} onClick={() => {handleDeleteTicket(row._id)}} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'red' }}>
                  <TrashCan />
              </IconButton>
              {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openAction}
        onClose={handleCloseAction}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleCloseAction}>Editar</MenuItem>
        <MenuItem onClick={() => {handleDeleteTicket(row.id)}}>Deletar</MenuItem>
      </Menu> */}
              </TableCell>
              <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{justifyContent: 'center', display: 'flex'}}
              >
                <ModalTicketEdit handleRefreshUser = {handleRefreshUser} setValues = {setValues} values= {values} handleChange = {handleChange} rowId = {rowId} rows = {tickets} row = {rows}/>
              </Modal>

              

            </TableRow>
              
              
            ))

              )
                

               

              }

          </TableBody>
        </Table>
      </TableContainer>

    </Card>
  )
}

export default Tabela
