import { styled, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

import fbIcon from '../../../images/fbicon.png'
import twitterIcon from '../../../images/twittericon.png'
import linkedinIcon from '../../../images/linkedinicon.png'

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }))

  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }))

  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: '#7A7A7E',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  }))

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Team</FooterLink>
            <br />
            <FooterLink>History</FooterLink>
            <br />
            <FooterLink>Contact us</FooterLink>
            <br />
            <FooterLink>Locations</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Features
            </Typography>

            <FooterLink>Cool stuff</FooterLink>
            <br />
            <FooterLink>Random feature</FooterLink>
            <br />
            <FooterLink>Team feature</FooterLink>
            <br />
            <FooterLink>Developer stuff</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Resource</FooterLink>
            <br />
            <FooterLink>Resource name</FooterLink>
            <br />
            <FooterLink>Another resource</FooterLink>
            <br />
            <FooterLink>Final resource</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#7A7A7E',
                fontWeight: '500',
                mb: 2,
              }}
            >
              Everything you need in one platform.
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: 'pointer' }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: 'pointer' }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: 'pointer' }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  )
}

export default Footer
