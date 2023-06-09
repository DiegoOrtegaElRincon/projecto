import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css"
import YoutubeEmbed from "../../components/ytembed/YoutubeEmbed";
import CoachingList from "../../components/coachinglist/CoachingList";

import { useEffect, useState } from "react";

function Home() {
  return (
    <>
      <Header />
      <div className="top_info">
        <YoutubeEmbed embedId="Z89W5KcB9dc" />
        <h1 className="top_info_quote">Confia en nosotros y serás capaz de esto y más</h1>
      </div>
      <CoachingList />
      <Footer />
    </>
  );
}

export default Home;