import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <>
      <Navbar />

      <Hero
        title="OfferOrbit Dashboard"
        subtitle="Track applications, organize opportunities, and land your dream role."
        goal="Today's Goal: Apply to 2 internships"
      />

      <StatsSection />
    </>
  );
}

export default App;