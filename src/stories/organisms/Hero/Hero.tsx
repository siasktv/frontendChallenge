import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import homeStyles from '../../../theme/homeStyles'
import { Container } from '@mui/system'
import CustomButton from '../../atoms/CustomButton'

const Hero = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }))

  return (
    <Container>
      <Box sx={homeStyles.heroBox}>
        <Box sx={{ flex: '1', marginRight: '2rem' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              color: '#687690',
              fontWeight: '500',
              mt: 10,
              mb: 4,
            }}
          >
            Welcome to SocialPro
          </Typography>
          <Title variant="h1">Procurement that makes a difference.</Title>
          <Typography
            variant="body2"
            sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
          >
            A platform that enables you to make informed decisions about your
            procurement practices and prioritize social values alongside
            traditional criteria. Join us in building a more inclusive,
            sustainable, and equitable world through procurement.
          </Typography>
          <CustomButton
            backgroundColor="#017dc5"
            color="#fff"
            buttonText="Contact Us"
            heroBtn={true}
            guideBtn={undefined}
            getStartedBtn={undefined}
            onClick={undefined}
          />
        </Box>
        <Box sx={{ flex: '1.25' }}>
          <img
            src={'hero2.svg'}
            alt="heroImg"
            style={{
              maxWidth: '100%',
              marginLeft: '2rem',
            }}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Hero
