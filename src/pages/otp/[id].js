// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import api from 'src/utils/api'

// ** Icons Imports

import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import authService from 'src/utils/auth/auth-service'
import authHeader from 'src/utils/auth/auth-header'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LoginPage = (props) => {
  
  // ** State
  const [values, setValues] = useState({
    token: '',
    email: '',
    showPassword: false
  })
  const {id, setId} = props
 
  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleChange = prop => event => {
    console.log(values)
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }


  const handleLogin = async (e) => {
    const user = authService.getCurrentUser();
    e.preventDefault();
    try {
      
      await authService.verify(user.user,values.token).then((res) => {

        if(res.data.status == "FAILED"){
          console.log('foi')
          alert(res.response.data.status);
          router.push('/otp')
        }
    
      })
    } catch (error) {

      if(error.status == 'FAILED') {
        console.log(error)
        alert(error.message)
        router.push(`/otp/${user.user}`)
      } else {
        alert('Você verificou seu email')
        router.push(`/`)
      }

    }
  }
  
  const handleResendOTP = async (e) => {
    e.preventDefault();
    try {
      const user = authService.getCurrentUser();
      api.post(`api/users/resend-verify/${user.user}`,{params:{'cargo': user.cargo}, headers: authHeader()}).then((data) => {
        const dados = data.data
        alert(dados.message)
      })

    } catch (error) {
      alert(error.message)
      console.log(error.status)


    }
  }
  
  const pagina = () => {
    

    return (

      <>
      <Card sx={{ zIndex: 1 }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography
                variant='h6'
                sx={{
                  ml: 3,
                  lineHeight: 1,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '1.5rem !important'
                }}
              >
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
                Insira seu Token para acessar
              </Typography>
              <Typography sx={{ color: 'darkred',fontSize: 15, fontWeight: 200, marginBottom: 1.5 }}>
                Acesse seu email para ter acesso ao seu token
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField onChange={handleChange('token')} autoFocus fullWidth value={values.token} id='token' label='Token' sx={{ marginBottom: 4 }} />

              
              
              <Button
                fullWidth
                size='large'
                variant='contained'
                sx={{ marginBottom: 7 }}
                onClick={handleLogin}
              >
                Login
              </Button>
              
              <Divider sx={{ my: 5 }}>problemas?</Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              
              <Button
                fullWidth
                size='large'
                variant='contained'
                sx={{ marginBottom: 7 }}
                onClick={handleResendOTP}
              >
                Reenviar código
              </Button>
              
              </Box>
            </form>
          </CardContent>
        </Card>
        <FooterIllustrationsV1 />
        </>
    )
  }
  



  return (
    <Box className='content-center'>
      {pagina()}
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
