import { Layout } from "./Layout";
import { Stack } from "@mui/system";
import { useState } from "react";
import { MembershipForm } from "../../organisms/MembershipForm/MembershipForm";
import { ProfileForm } from "../../organisms/ProfileForm/ProfileForm";
import { LanguageForm } from "../../organisms/LanguageForm/LanguageForm";

export const Profile = (): JSX.Element => {
  const [accountView, setAccountView] = useState("profile");

  const selectedAccountView = (() => {
    switch (accountView) {
      default:
      case "profile":
        return <ProfileForm />;
      case "membership":
        return <MembershipForm />;
      case "language":
        return <LanguageForm />;
    }
  })();
  return (
    <Layout setAccountView={setAccountView}>
      <Stack>{selectedAccountView}</Stack>
    </Layout>
  );
};
