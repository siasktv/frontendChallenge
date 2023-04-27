import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GlobalStyles from '@mui/material/GlobalStyles'
import AppBar from '../molecules/Appbar/Appbar'
import Footer from '../molecules/Footer/Footer'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        SocialPro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export const BasicLayout = (props: LayoutProps) => {
  const { children } = props
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <AppBar />
      {children}
      <Footer />

      <Copyright sx={{ mt: 5 }} />
    </>
  )
}
