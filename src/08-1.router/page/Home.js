import { Helmet } from "react-helmet-async";
import { Section } from "../components/Section";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>홈 | PhotoView</title>
      </Helmet>

      <Section>
        <div></div>
      </Section>
    </div>
  );
};
