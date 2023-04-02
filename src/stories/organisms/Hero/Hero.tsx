import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import homeStyles from "../../../theme/homeStyles";

const Hero = () => {
  return (
    <Box sx={homeStyles.heroBox}>
      <Grid container spacing={6} sx={homeStyles.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} sx={homeStyles.title}>
            Procurement that makes a difference
          </Typography>
          <Typography variant="h6" sx={homeStyles.subtitle}>
            Welcome to Social Pro, your destination for socially responsible
            procurement. We've created a platform that enables you to make
            informed decisions about your procurement practices and prioritize
            social values alongside traditional criteria. Whether you're looking
            to support local businesses, promote ethical practices, or create
            employment opportunities for underrepresented groups, Social Pro has
            got you covered. Join us in building a more inclusive, sustainable,
            and equitable world through procurement.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            Contact Us
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={"hero.png"} alt="My Team" style={homeStyles.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
