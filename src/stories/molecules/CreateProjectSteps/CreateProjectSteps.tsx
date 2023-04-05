import { Box, Step, StepLabel, Stepper } from "@mui/material";

interface CreateProjectStepsProps {
  activeStep: number;
}
const steps = [
  "Project Details",
  "Input Site Office Details",
  "Social Procurement Details",
];

export const CreateProjectSteps = ({ activeStep }: CreateProjectStepsProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
