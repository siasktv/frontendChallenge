import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

interface SummaryCardProps {
  title: string;
  count: number;
  colour: string;
  icon: React.ReactElement;
}

export const SummaryCard = ({
  title,
  count,
  colour,
  icon,
}: SummaryCardProps) => {
  return (
    <React.Fragment>
      <CardContent sx={{ backgroundColor: colour, borderRadius: "10px" }}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography sx={{ fontSize: 15 }} color="text.secondary">
            {title}
          </Typography>
          {icon}
        </Stack>

        <Typography variant="body2">{count}</Typography>
      </CardContent>
    </React.Fragment>
  );
};
