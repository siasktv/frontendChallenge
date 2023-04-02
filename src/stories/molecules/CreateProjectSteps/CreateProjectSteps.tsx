import { Box, Step, StepLabel, Stepper } from "@mui/material";

interface CreateProjectStepsProps {
  activeStep: number;
}
const steps = ["Input Project Details", "Input Social Procurement"];

export const CreateProjectSteps = ({ activeStep }: CreateProjectStepsProps) => {
  return (
    <Box sx={{ width: "100%" }} mt="10vh">
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
