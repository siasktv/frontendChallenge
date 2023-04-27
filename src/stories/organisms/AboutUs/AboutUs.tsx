import bestTeams from '../../../images/bestTeams.jpg'
import { styled, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import CustomButton from '../../atoms/CustomButton'

const AboutUs = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(10),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }))

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }))

  const Divider = styled('div')(({ theme }) => ({
    width: '13%',
    height: '5px',
    backgroundColor: '#000339',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }))

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={bestTeams} alt="My Team" style={{ maxWidth: '100%' }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: '35px',
                color: '#000339',
                fontWeight: '700',
                my: 3,
              }}
            >
              We build, We revive.
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#5A6473',
                lineHeight: '27px',
              }}
            >
              Your business needs to be in safe hands at all times. We ensure
              you never run out of customers and not run at loss. We are trusted
              by over 500+ companies to deliver quality marketing campaigns
              using Digital marketing & Offline marketing channels.
            </Typography>
            <Box sx={{ marginTop: '30px' }}>
              <CustomButton
                backgroundColor="#017dc5"
                color="#fff"
                buttonText="Contact Us"
                onClick={undefined}
                heroBtn={true}
                guideBtn={undefined}
                getStartedBtn={undefined}
              />
            </Box>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}

export default AboutUs
