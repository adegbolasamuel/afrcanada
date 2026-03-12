import { Header } from './Header'; 
import HeroSection from './HeroSection'; 
import AboutSection from './AboutSection';
import ExpoDetailsSection from './ExpoDetailsSection';
import IndigenousPartnershipSection from './IndigenousPartnershipSection';
import './header.css'; 
import "./HeroSection.css"
import "./AboutSection.css"
import "./IndigenousPartnershipSection.css"
import Footer from './Footer';
import "./App.css"
import "./Footer.css"
import PartnerNewsCTASection from './PartnerNewsCTASection';

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