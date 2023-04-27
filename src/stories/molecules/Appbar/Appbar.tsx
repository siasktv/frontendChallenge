import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import ListAltIcon from '@mui/icons-material/ListAlt'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'
import logoImg from '../../../images/logo.png'
import { Container } from '@mui/system'
import CustomButton from '../../atoms/CustomButton'
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'
import { useState } from 'react'

const AppBar: React.FC = () => {
  const navigate = useNavigate()
  const [mobileMenu, setMobileMenu] = useState<{ [key: string]: boolean }>({
    left: false,
  })

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setMobileMenu({ ...mobileMenu, [anchor]: open })
    }

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Features', 'Enterprise', ' Support', 'Contact'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  )

  const NavLink: any = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: '#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#017dc5',
    },
  }))

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }))

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }))

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
  }))

  const NavbarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }))

  const handleLogin = () => {
    navigate('/login')
  }
  const handleSignUp = () => {
    navigate('/sign-up')
  }
  const handleHome = () => {
    navigate('/')
  }

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomMenuIcon onClick={toggleDrawer('left', true)} />
          <Drawer
            anchor="left"
            open={mobileMenu['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            onClick={handleHome}
          >
            <NavbarLogo src={logoImg} alt="logo" height="50px" />
            {/* <img src="logo_alt.png" alt="Social Pro" height="50px" /> */}
          </Typography>
        </Box>

        <NavbarLinksBox>
          <NavLink onClick={handleHome} variant="body2">
            Home
          </NavLink>
          <NavLink variant="body2">Features</NavLink>
          <NavLink variant="body2">Enterprise</NavLink>
          <NavLink variant="body2">Support</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <NavLink variant="body2" onClick={handleLogin}>
          Login
        </NavLink>
        <CustomButton
          backgroundColor="#017dc5"
          color="#fff"
          buttonText="Register"
          onClick={handleSignUp}
          heroBtn={undefined}
          guideBtn={undefined}
          getStartedBtn={undefined}
        />
      </Box>
    </NavbarContainer>
  )
}

export default AppBar
