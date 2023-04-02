import { useState } from "react";
import { CreateProjectForm } from "../../molecules/CreateProjectForm/CreateProjectForm";
import { CreateProjectSteps } from "../../molecules/CreateProjectSteps/CreateProjectSteps";
import { CreateSocialProcurementForm } from "../../molecules/CreateSocialProcurementForm/CreateSocialProcurementForm";
import { Layout } from "./Layout";

export const CreateProject = () => {
  const [activeStep, setActiveStep] = useState(1);

  const selectedCreateProjectStep = (() => {
    switch (activeStep) {
      default:
      case 0:
        return <CreateProjectForm setActiveStep={setActiveStep} />;
      case 1:
        return <CreateSocialProcurementForm />;
    }
  })();
  return (
    <Layout>
      <CreateProjectSteps activeStep={activeStep} />
      {selectedCreateProjectStep}
    </Layout>
  );
};
