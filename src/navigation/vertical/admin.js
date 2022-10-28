// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import PhoneRefreshOutline from 'mdi-material-ui/PhoneRefreshOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Account from 'mdi-material-ui/Account'
import CartOutline from 'mdi-material-ui/CartOutline'
import { GoogleCirclesCommunities, Magnify } from 'mdi-material-ui'

const navigation = () => {

  return [
    {
      title: 'Início',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Conta',
      icon: AccountCogOutline,
      path: `/account-settings/:id`
    },
    {
      sectionTitle: 'Utilidades'
    },
    {
      title: 'Oportunidades',
      icon: Account,
      path: '/clientes',
      openInNewTab: false
    },
    {
      title: 'Tickets',
      icon: CartOutline,
      path: '/tickets',
      openInNewTab: false
    },
    {
      title: 'Tarefas',
      icon: GoogleCirclesCommunities,
      path: '/tarefas',
      openInNewTab: false
    },
    {
      title: 'Filial',
      icon: Magnify,
      path: '/filial',
      openInNewTab: false
    },
    {
      sectionTitle: 'Whatsapp'
    },
    {
      title: 'BOT',
      icon: AlertCircleOutline,
      path: '/bot',
      openInNewTab: false
    },
    
    // {
    //   sectionTitle: 'Utilidades'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
