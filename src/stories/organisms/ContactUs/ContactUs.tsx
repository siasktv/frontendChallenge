import { styled, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useState } from 'react'
import CustomButton from '../../atoms/CustomButton'

const ContactUs = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#17275F',
    height: '700px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3, 3, 0, 3),
      width: '90%',
    },
  }))

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  }))

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [subject] = useState('')
  const [message, setMessage] = useState('')

  const submitForm = (e: any) => {
    e.preventDefault()
    console.log({ email, firstName, subject, message })
  }

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: '35px', color: 'white', fontWeight: '700' }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{ fontSize: '16px', color: '#ccc', fontWeight: '500', my: 3 }}
          >
            We would love to hear from you, send us a message here!
          </Typography>
          <Box
            sx={{
              component: 'form',
              padding: '20px',
              marginY: '15px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              justifyContent: 'space-around',
            }}
          >
            <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: '0.75rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderWidth: '2px',
                      borderColor: 'rgba(0,0,0,0.3)',
                    },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '-0.75rem',
                  left: '1.25rem',
                  fontSize: '0.75rem',
                  bgcolor: 'background.default',
                  padding: '0.25rem',
                }}
              >
                Name
              </Box>
            </Box>

            <Box
              sx={{
                position: 'relative',
                marginBottom: '2rem',
                height: '4rem',
              }}
            >
              <TextField
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  borderRadius: '0.75rem',
                  borderColor: 'rgba(0,0,0,0.3)',
                  '& .MuiOutlinedInput-root': {
                    background: 'none',
                    '& fieldset': {
                      borderWidth: '2px',
                      borderColor: 'rgba(0,0,0,0.3)',
                    },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '-0.75rem',
                  left: '1.25rem',
                  fontSize: '0.75rem',
                  bgcolor: 'background.default',
                  padding: '0.25rem',
                }}
              >
                Email
              </Box>
            </Box>

            <Box
              sx={{
                position: 'relative',
                height: '10rem',
              }}
            >
              <TextField
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                fullWidth
                sx={{
                  borderRadius: '0.75rem',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderWidth: '2px',
                      borderColor: 'rgba(0,0,0,0.3)',
                    },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '-0.75rem',
                  left: '1.25rem',
                  fontSize: '0.75rem',
                  bgcolor: 'background.default',
                  padding: '0.25rem',
                }}
              >
                Message
              </Box>
            </Box>
          </Box>

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Send message"
            getStartedBtn={true}
            heroBtn={undefined}
            guideBtn={undefined}
            onClick={submitForm}
          />
        </Box>

        <img
          src={'mobile.svg'}
          alt="illustration"
          style={{ maxWidth: '30%' }}
        />
      </CustomContainer>
    </CustomBox>
  )
}

export default ContactUs
