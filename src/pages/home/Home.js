import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css"
import YoutubeEmbed from "../../components/ytembed/YoutubeEmbed";
import CoachingList from "../../components/coachinglist/CoachingList";
import BikeService from "../../services/firebase.service"

import { useEffect, useState } from "react";

function Home() {

  const [bikes, setBikes] = useState([]);

  const addBike = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const surname = e.target.name.value
    BikeService.addBike(name, surname).then(() => {
      getAllBikes()
    })
  }

  const removeBike = (key) => {
    BikeService.removeBike(key).then(() => {
      getAllBikes()
    })
  }

  const getAllBikes = () => {
    BikeService.getAllBikes().then(data => {
      let allBikes = []
      data.forEach(item => {
        allBikes.push({
          key: item.key,
          name: item.val().name,
          surname: item.val().surname
        })
      })
      setBikes(allBikes)
    })
  }

  useEffect(() => {
    getAllBikes()
  }, [])

  return (
    <>
      <Header />
      <div className="top_info">
        <YoutubeEmbed embedId="Z89W5KcB9dc" />
        <h1 className="top_info_quote">Confia en nosotros y serás capaz de esto y más</h1>
      </div>

      <form onSubmit={addBike}>
        <input type="text" name="name" />
        <input type="text" name="surname" />
        <button type="submit">Add Bike</button>

      </form>
      {bikes.map(b =>
        <p>{b.key} {b.name} {b.surname} <button onClick={() => removeBike(b.key)}>Delete</button></p>)}
      <CoachingList />
      <Footer />
    </>
  );
}

export default Home;