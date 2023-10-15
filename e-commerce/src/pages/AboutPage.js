import AboutContent from "../components/About/AboutContent";
import AboutHeader from "../components/About/AboutHeader";
import AboutStats from "../components/About/AboutStats";
import { AboutVideo } from "../components/About/AboutVideo";

const AboutPage = () => {
  return (
    <div className="py-36">
      <div className=" container m-auto">
        <AboutHeader />
        <AboutContent />
        <AboutStats />
        <AboutVideo />
      </div>
    </div>
  );
};
export default AboutPage;
