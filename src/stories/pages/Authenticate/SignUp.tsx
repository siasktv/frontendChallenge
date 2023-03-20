import React from "react";

export interface SignUpPageProps {
  loading: boolean;
}

const SignUp: React.FC<SignUpPageProps> = ({ loading }: SignUpPageProps) => {
  return <div className="">{loading}</div>;
};

export default SignUp;
