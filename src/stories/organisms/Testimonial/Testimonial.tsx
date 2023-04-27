import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  Box,
  Container,
  styled,
  Typography,
} from '@mui/material'
import { Avatar } from '@mui/material'
import homeStyles from '../../../theme/homeStyles'

const reviews = [
  {
    id: 1,
    name: 'Karl Brighton',
    statement:
      'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
    image_url:
      'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
    position: 'Software Engineer at Kadex',
  },
  {
    id: 2,
    name: 'Krishna Bells',
    statement:
      'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
    image_url:
      'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
    position: 'Product Manager at Google',
  },
  {
    id: 3,
    name: 'Ben Spiff',
    statement:
      'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
    image_url:
      'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
    position: 'Founder of Crypto',
  },
]

const Testimonial = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }))

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  }))

  return (
    <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold' }}
          >
            Testimonials
          </Typography>
          <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1 }}>
            Check what our clients say about us!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          <Box
            sx={{
              flexGrow: 1,
              padding: '20px',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '300px',
            }}
          >
            <Grid container spacing={2}>
              {reviews.map((review) => (
                <Grid item sm={12} md={4} key={review.id}>
                  <Card sx={homeStyles.testimonialCard}>
                    <CardContent>
                      <Typography sx={homeStyles.testimonialStatement}>
                        "{review.statement}"
                      </Typography>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar
                          src={review.image_url}
                          alt={review.name}
                          sx={homeStyles.avatar}
                        />
                        <Box>
                          <Typography>{review.name}</Typography>
                          <Typography sx={homeStyles.testimonialPosition}>
                            {review.position}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </PropertiesBox>
      </Container>
    </Box>
  )
}

export default Testimonial
