
// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/Geral'
import TabSecurity from 'src/views/account-settings/Security'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import api from 'src/utils/api'
import authService from 'src/utils/auth/auth-service'
import authHeader from 'src/utils/auth/auth-header'
import { useRouter } from 'next/router'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const UserSettings = () => {

  // ** State

  const router = useRouter()
  
  const [value,setValue] = useState('account')

  const [user,setUser] = useState([])

  const [values, setValues] = useState({

    nome: '',
    cargo: '',
    email: '',
    senha: '',
    novaSenha: '',
    confirmarNovaSenha: '',
    user: '',
    showConfirmNewPassword: false,
    showCurrentPassword: false,
    showNewPassword: false
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleRefreshUser = () => {
    const { id } = router.query
    api.put(`api/users/`+ id, {
        name: values.nome,
        email: values.email

    },  { params:{'cargo': user.cargo}, headers: authHeader()})
    window.location.reload()
}





  useEffect(() => {

    const user= authService.getCurrentUser()

    if(user){
        api.get(`api/users/${user.user}`, {params:{'cargo': user.cargo}, headers: authHeader()})
        .then((data) => {
        setUser(data.data);
        console.log(data.data)
        setValues({
          nome: data.data.name,
          cargo: data.data.cargo,
          email: data.data.email,
        })
    
          
      })
    } else {
      router.push('/')
    }




  },[])


  return (

    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Conta</TabName>
              </Box>
            }
          />
          <Tab
            value='security'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Segurança</TabName>
              </Box>
            }
          />

        </TabList>

        <TabPanel sx={{ p: 0 }} value='account'>
          <TabAccount setValues= {setValues} values = {values} user = {user} handleRefreshUser={handleRefreshUser}/>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <TabSecurity setValues= {setValues} values = {values} user = {user} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default UserSettings
