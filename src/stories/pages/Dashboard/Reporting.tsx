import React from "react";

export interface ReportingProps {
  loading: boolean;
}

const Reporting: React.FC<ReportingProps> = ({ loading }: ReportingProps) => {
  return <div className="">{loading}</div>;
};

export default Reporting;
