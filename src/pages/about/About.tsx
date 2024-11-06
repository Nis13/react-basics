import AboutView from "./AboutView";
import { useAbout } from "./useAbout";

export const About = () => {
  const logic = useAbout();
  return <AboutView {...logic} />;
};
