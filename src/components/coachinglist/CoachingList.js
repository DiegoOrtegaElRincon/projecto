import coachingService from "../../services/coaching.service";
import "./CoachingList.css";
import { useEffect, useState } from "react";

function CarList() {
    const [coaching, setCoaching] = useState([]);

    const [query, setQuery] = useState("");

    const getCoaching = () => {
        const allCoaching = coachingService.getCoaching;
        setCoaching(allCoaching);
    }

    const handleChange = (event) => {
        const searchValue = event.target.value;
        setQuery(searchValue);
    }

    const showCoaching = () => {
        return (
            coaching.map(c => {
                return (
                    <div className="coaching_info_container">
                        <div className="coaching_info_container_img"><img src={`/assets/img/${c.img}`} alt="coaching img" /></div>
                        <div className="coaching_info_container_title"><h2>{c.title}</h2></div>
                        <div className="coaching_info_container_info"><p>{c.info}</p></div>
                    </div>
                );
            })
        );
    }

    useEffect(() => {
        getCoaching();
    }, [])

    return (
        <>
            <div className="coaching_info">
                <div className="car-list-container">
                    {showCoaching()}
                </div>
            </div>
        </>
    );
}

export default CarList;