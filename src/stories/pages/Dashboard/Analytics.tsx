import React from "react";

export interface AnalyticsProps {
  loading: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ loading }: AnalyticsProps) => {
  return <div className="">{loading}</div>;
};

export default Analytics;
