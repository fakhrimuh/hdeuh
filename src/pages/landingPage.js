import Header from "../components/header";
import HeroRight from "../components/heroRight";
import DataUser from "../components/dataUser";
import HeroLeft from "../components/heroLeft";
import Cards from "../components/card";
import HeroCenter from "../components/heroCenter";
// import Carousel from "./components/carousel";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HeroRight />
      <DataUser />
      <HeroLeft />
      <Cards />
      <HeroCenter />
      {/* <p>Carousel Belum Bisa</p> */}
      <Footer />
    </div>
  );
}
