import AboutUs from "../../organisms/AboutUs/AboutUs";
import ContactUs from "../../organisms/ContactUs/ContactUs";
import Footer from "../../organisms/Footer/Footer";
import Hero from "../../organisms/Hero/Hero";
import Section from "../../organisms/Section/Section";
import Testimonial from "../../organisms/Testimonial/Testimonial";
import { Layout } from "./Layout";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
    </Layout>
  );
};
