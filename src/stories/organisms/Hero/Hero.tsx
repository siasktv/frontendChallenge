import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import myteam from "../../../images/myteam.jpg";
import homeStyles from "../../../theme/homeStyles";

const Hero = () => {
  return (
    <Box sx={homeStyles.heroBox}>
      <Grid container spacing={6} sx={homeStyles.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} sx={homeStyles.title}>
            Let's scale your business
          </Typography>
          <Typography variant="h6" sx={homeStyles.subtitle}>
            Hire professionals who will help your business make 10X your
            previous income. With over 5years experience in Marketing & Business
            strategy, we are your best client.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            HIRE US
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myteam} alt="My Team" style={homeStyles.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
