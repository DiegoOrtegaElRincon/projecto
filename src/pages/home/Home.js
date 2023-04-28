import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css"
import YoutubeEmbed from "../../components/ytembed/YoutubeEmbed";
import CoachingList from "../../components/coachinglist/CoachingList";

function Home() {
  return (
    <>
      <Header />
      <div className="top_info">
        <YoutubeEmbed embedId="#" />
        <h1 className="top_info_quote">Confia en nosotros y serás capaz de esto y más</h1>
      </div>
      <CoachingList/>
      <Footer />
    </>
  );
}

export default Home;