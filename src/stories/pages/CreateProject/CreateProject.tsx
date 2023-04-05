import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import Title from "../../atoms/Title/Title";
import { CreateProjectForm } from "../../molecules/CreateProjectForm/CreateProjectForm";
import { CreateProjectSteps } from "../../molecules/CreateProjectSteps/CreateProjectSteps";
import { CreateSocialProcurementForm } from "../../molecules/CreateSocialProcurementForm/CreateSocialProcurementForm";
import { SiteOfficeForm } from "../../molecules/SiteOfficeForm/SiteOfficeForm";

export const CreateProject = () => {
  const [activeStep, setActiveStep] = useState(0);

  const selectedCreateProjectStep = (() => {
    switch (activeStep) {
      default:
      case 0:
        return <CreateProjectForm setActiveStep={setActiveStep} />;
      case 1:
        return <SiteOfficeForm setActiveStep={setActiveStep} />;
      case 2:
        return <CreateSocialProcurementForm />;
    }
  })();
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Title>Create Project</Title>
          <CreateProjectSteps activeStep={activeStep} />
          {selectedCreateProjectStep}
        </Paper>
      </Grid>
    </>
  );
};
