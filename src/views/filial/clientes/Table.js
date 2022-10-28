// ** MUI Imports
import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { DotsVertical } from 'mdi-material-ui'
import { Button, IconButton, ListItem, Menu, MenuItem, Modal } from '@mui/material'

import { useState } from 'react'
import ModalClient from './ModalClient'
import ModalClientEdit from './ModalClientEdit'

const DashboardTable = (props) => {
  const {clientsFiltered,setClientsFiltered,handleRefreshUser, values,handleChange,rows, setValues, clients, filter, openFilter, filtro, handleDeleteClient} = props
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
    console.log(filter)
    console.log(rowId)
  }




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
        <Table sx={{ minWidth: 500 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map(row => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }} >
              
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.empresa}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                <IconButton value = {row._id} onClick={() => {handleOpenModal(row._id)}} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                  <DotsVertical />



                </IconButton>

                </TableCell>
                <Modal
                  open={open}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{justifyContent: 'center', display: 'flex'}}
                >
                  <ModalClientEdit handleRefreshUser = {handleRefreshUser} setValues = {setValues} values= {values} handleChange = {handleChange} rowId = {rowId} rows = {row} row = {rows}/>
                </Modal>
                

              </TableRow>
              
              
            ))} */}

            {
              openFilter ? (
                filtro.map(row => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }} >
              
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.empresa}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                <IconButton value = {openAction} onClick={handleClickAction} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                <DotsVertical />



              </IconButton>
              <Menu
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
        <MenuItem onClick={() => {handleOpenModal(row._id)}}>Editar</MenuItem>
        <MenuItem onClick={() => {handleDeleteClient(row._id)}}>Deletar</MenuItem>
      </Menu>

                </TableCell>
                <Modal
                  open={open}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{justifyContent: 'center', display: 'flex'}}
                >
                  <ModalClientEdit handleRefreshUser = {handleRefreshUser} setValues = {setValues} values= {values} handleChange = {handleChange} rowId = {rowId} rows = {row} row = {rows}/>
                </Modal>
                

              </TableRow>
              
              
            ))
               ) : (
                rows.map(row => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }} >
              
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.empresa}</Typography>
                  </Box>
                </TableCell>

                <TableCell >
                  {
                    row.status === 'Em processo' ? (<Typography color={'green'}>{row.status}</Typography>) : (row.status === 'Sem contato' ? (<Typography color={'red'}>{row.status}</Typography>) : (<Typography>{row.status}</Typography>))
                  }
                </TableCell>
                <TableCell>
                <IconButton value = {openAction} onClick={handleClickAction} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                <DotsVertical />



              </IconButton>
              <Menu
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
        <MenuItem onClick={() => {handleOpenModal(row._id)}}>Editar</MenuItem>
        <MenuItem onClick={() => {handleDeleteClient(row._id)}}>Deletar</MenuItem>
      </Menu>

                </TableCell>
                <Modal
                  open={open}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{justifyContent: 'center', display: 'flex'}}
                >
                  <ModalClientEdit handleRefreshUser = {handleRefreshUser} setValues = {setValues} values= {values} handleChange = {handleChange} rowId = {rowId} rows = {row} row = {rows}/>
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

export default DashboardTable
