import React from "react";
import { useAuth } from "../../../hooks/useAuth";

export interface LoginPageProps {}

const Login: React.FC<LoginPageProps> = () => {
  const [loading, setLoading] = React.useState(false);
  const { signIn } = useAuth();

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      let response = await signIn(values);
      console.log(response.message);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  return <div className="">{loading}</div>;
};

export default Login;
