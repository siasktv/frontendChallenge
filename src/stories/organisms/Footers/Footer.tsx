import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography/Typography";

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </Box>
  );
};
