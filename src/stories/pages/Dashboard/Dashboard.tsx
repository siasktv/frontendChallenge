import React from "react";

export interface DashboardProps {
  loading: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ loading }: DashboardProps) => {
  return <div className="">{loading}</div>;
};

export default Dashboard;
