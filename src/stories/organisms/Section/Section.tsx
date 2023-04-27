import { Box, styled, Typography } from '@mui/material'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'

const Section = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
  }))

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    gap: '150px',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0',
      flexDirection: 'column',
    },
  }))

  const GuideBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(5),

    width: '50%',
    flexBasis: '0',
    flexGrow: 1,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          width: '5%',
          height: '5px',
          backgroundColor: '#000339',
          margin: '0 auto',
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#5A6473',
            textAlign: 'center',
          }}
        >
          Whether you're looking to support local businesses, promote ethical
          practices, or create employment opportunities for underrepresented
          groups, Social Pro has got you covered. - All in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <EngineeringOutlinedIcon sx={{ fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
              textAlign: 'center',
            }}
          >
            Solving world problems through various web applications using
            efficient programs and tools
          </Typography>
        </GuideBox>

        <GuideBox>
          <AllInclusiveIcon sx={{ fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
              textAlign: 'center',
            }}
          >
            Through team work, we collaborate and deliver quality projects of
            high standards
          </Typography>
        </GuideBox>

        <GuideBox>
          <PaidOutlinedIcon sx={{ fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
              textAlign: 'center',
            }}
          >
            Flexible payment plan is applicable to all our services
          </Typography>
        </GuideBox>
      </GuidesBox>
    </Box>
  )
}

export default Section
