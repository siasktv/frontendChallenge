import React from "react";
import Home from "../../../stories/pages/Home/Home";
import Layout from "../../../stories/pages/Home/Layout";

export interface HomeViewProps {}

const HomeView: React.FC<HomeViewProps> = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomeView;
