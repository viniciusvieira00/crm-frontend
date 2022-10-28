// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Feito `}

        {` por `}
        <Link target='_blank' href='https://d4business.co'>
          D4B
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link
            target='_blank'
            href='https://github.com/viniciusvieira00'
          >
            Início
          </Link>
          <Link target='_blank' href='https://github.com/viniciusvieira00'>
            Sobre nós
          </Link>
          <Link
            target='_blank'
            href='https://github.com/viniciusvieira00'
          >
            Instruções de uso
          </Link>
          <Link
            target='_blank'
            href='https://github.com/viniciusvieira00'
          >
            Suporte
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
