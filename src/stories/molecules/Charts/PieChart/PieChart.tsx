import { Box } from "@mui/material";

const PieChart = ({ bleech = false, progress = 0.11, size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        margin: "auto",
        background: `radial-gradient(${"white"} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${
          bleech ? "white" : "#D7E9F2"
        } ${angle}deg 360deg),
            ${bleech ? "white" : "#005783"}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default PieChart;
