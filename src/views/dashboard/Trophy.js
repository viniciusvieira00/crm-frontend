// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import authService from 'src/utils/auth/auth-service'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {

  // ** Hook
  const router = useRouter()
  const [user,setUser] = useState([])
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  useEffect(() => {

    const user = authService.getCurrentUser();

    setUser(user)

  },[])

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Parabéns {user.nome}</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Este mês você completou
        </Typography>
        <Typography variant='h6' sx={{ my: 4, color: 'primary.main' }}>
          {user.clientes} oportunidades
        </Typography>
        <Button onClick={() => {router.push('/clientes')}} size='small' variant='contained'>
          Ver todas
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Trophy
