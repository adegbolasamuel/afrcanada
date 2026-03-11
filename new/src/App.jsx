import { Header } from './Header'; // Your header component (named export)
import HeroSection from './HeroSection'; // Your new hero section (default export)
import AboutSection from './AboutSection';
import ExpoDetailsSection from './ExpoDetailsSection';
import IndigenousPartnershipSection from './IndigenousPartnershipSection';
import './header.css'; // Or your global CSS\
import "./HeroSection.css"
import "./AboutSection.css"
import "./IndigenousPartnershipSection.css"
import Footer from './Footer';
import "./Footer.css"
import PartnerNewsCTASection from './PartnerNewsCTASection';

export function App() { 
  return (
    <div className="App">
      <Header />
      <HeroSection /> {/* This is where your new hero section goes */}
       <AboutSection />
       <ExpoDetailsSection />
       <IndigenousPartnershipSection />
       <PartnerNewsCTASection />
       <Footer />
    </div>
  );
}