import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css"
import YoutubeEmbed from "../../components/ytembed/YoutubeEmbed";

function Home() {
  return (
    <>
      <Header />
      <div className="top_info">
        <YoutubeEmbed embedId="#" />
        <h1 className="top_info_quote">Confia en nosotros y serás capaz de esto y más</h1>
      </div>
      <div className="coaching_info">
        <div className="coaching_info_container">
          <div className="coaching_info_container_img"><img src="" alt=""></img></div>
          <div className="coaching_info_container_title"><h2></h2></div>
          <div className="coaching_info_container_info"><p></p></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;