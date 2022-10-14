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
import { Button, IconButton, Modal } from '@mui/material'

import { useState } from 'react'
import ModalVendaEdit from './ModalVendaEdit'

const TableVendas = (props) => {
  
  const [open, setOpen] = useState(false);
  const {rows, setValues, values, handleRefreshOrder, handleChange} = props;
  const handleOpenModal = () => {
    setOpen(true);
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
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Usuário</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>País</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Produtos</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }} >
              
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.user}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.totalPrice}</TableCell>
                <TableCell>{row.orderItems}</TableCell>
                <TableCell>
                  <Chip
                    color={[statusObj].color}
                    label={row.status}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>
                <IconButton value = {row._id} onClick={handleOpenModal} size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
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
                    <ModalVendaEdit handleRefreshOrder = {handleRefreshOrder} setValues = {setValues} values= {values} handleChange = {handleChange} rows = {row}/>
                </Modal>
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Card>
  )
}

export default TableVendas
