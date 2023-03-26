import { Layout } from "./Layout";
import { Stack } from "@mui/system";
import { useState } from "react";
import { ConditionProperties } from "../../organisms/ConditionProperties/ConditionProperties";
import { ConditionDocuments } from "../../organisms/ConditionDocuments/ConditionDocuments";
import { ConditionMail } from "../../organisms/ConditionMail/ConditionMail";
import { ConditionCollaborators } from "../../organisms/ConditionCollaborators/ConditionCollaborators";
import { ConditionReview } from "../../organisms/ConditionReview/ConditionReview";
import { ConditionEventLog } from "../../organisms/ConditionEventLog/ConditionEventLog";

export const ViewCondition = (): JSX.Element => {
  const [conditionView, setConditionView] = useState("properties");

  const selectedConditionView = (() => {
    switch (conditionView) {
      default:
      case "properties":
        return <ConditionProperties />;
      case "documents":
        return <ConditionDocuments />;
      case "mail":
        return <ConditionMail />;
      case "collaborators":
        return <ConditionCollaborators />;
      case "review":
        return <ConditionReview />;
      case "eventlog":
        return <ConditionEventLog />;
    }
  })();
  return (
    <Layout setConditionView={setConditionView}>
      <Stack>{selectedConditionView}</Stack>
    </Layout>
  );
};
