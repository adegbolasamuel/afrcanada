<<<<<<< HEAD
import  {Header} from './header'; 
import HeroSection from './HeroSection'; 
import AboutSection from './AboutSection';
import ExpoDetailsSection from './ExpoDetailsSection';
import IndigenousPartnershipSection from './IndigenousPartnershipSection';
import './Header.css'; 
import "./HeroSection.css"
import "./AboutSection.css"
import "./IndigenousPartnershipSection.css"
import Footer from './Footer';
import "./App.css"
import "./Footer.css"
import PartnerNewsCTASection from './PartnerNewsCTASection';
=======
import { Header } from "./header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExpoDetailsSection from "./ExpoDetailsSection";
import IndigenousPartnershipSection from "./IndigenousPartnershipSection";
import "./Header.css";
import "./HeroSection.css";
import "./AboutSection.css";
import "./IndigenousPartnershipSection.css";
import "./ExpoDetailsSection.css";
import "./PartnerNewsCTASection.css";
import Footer from "./Footer";
import "./App.css";
import "./Footer.css";
import PartnerNewsCTASection from "./PartnerNewsCTASection";
>>>>>>> 29db7e46a21cad530d7784d3af8fbae28f70fbaf

export function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExpoDetailsSection />
      <IndigenousPartnershipSection />
      <PartnerNewsCTASection />
      <Footer />
    </div>
  );
}
