import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const VerifyLogin = () => {
  const { answerCustomChallenge } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const [email, answer] = [
      params.get("email") || "",
      params.get("code") || "",
    ];

    answerCustomChallenge(email, answer)
      .then(() => {
        navigate("/");
      })
      .catch((e: any) => {
        console.log(e);
        console.log("Invalid login link!");
      });
  });

  return <div></div>;
};

export default VerifyLogin;
