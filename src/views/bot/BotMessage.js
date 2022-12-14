// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { Grid, Paper, TextField} from '@mui/material'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FormHelperText from '@mui/material'
import CardContent from '@mui/material/CardContent'
import api from 'src/utils/api'
// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const BotMessage = (props) => {

  const {handleNumero,handleSubmit,handleMessage,numero,message} = props;
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Envio de mensagem'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>

        <Typography id='form-layouts-basic-password-helper'>
                  Insira o numero sem o 9 a mais, e com o 55, para evitar erros
          </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Grid item xs={12}>

              <TextField
                fullWidth
                value={numero}
                label={"Numero"}
                onChange={handleNumero}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              fullWidth
              value={message}
              label={"Mensagem"}
              onChange={handleMessage}
            />
          </Grid>
        </Box>
        <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-evenly'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mt: '30px'}}>
                <Button color='primary' variant='contained' onClick={handleSubmit} ><Typography  color={'white'}>Enviar mensagem</Typography></Button>
                </Box>
              </Box>
      </CardContent>
    </Card>
  )
}

export default BotMessage;
