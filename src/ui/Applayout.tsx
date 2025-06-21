import Header from "../components/Header";
import Main from "../components/Main";
import ScrollToSection from "../Layout/Layout";
function Applayout() {
  return (
    <div>
      <ScrollToSection />
      <Header />
      <Main />
    </div>
  );
}

export default Applayout;
