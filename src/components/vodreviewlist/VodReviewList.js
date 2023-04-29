import { useState, useEffect } from "react";
import "./VodReviewList.css";
import vodsService from "../../services/vods.service";
import YoutubeEmbed from "../ytembed/YoutubeEmbed";

function VodReviewList() {

    const [vodlist, setVodlist] = useState([]);
    const [query, setQuery] = useState("");

    const getVodlist = () => {
        const allVodlist = vodsService.getVods();
        setVodlist(allVodlist);
    }

    const showVodlist = () => {
        return (
            vodlist.filter(c =>
                c.title.toLowerCase().includes(query.toLowerCase()))
                .map(c => {
                    return (
                        <div className="video-container">
                            <h3>{c.title}</h3>
                            <YoutubeEmbed embedId={c.embed} />
                        </div>
                    );
                })
        );
    }

    const handleChange = (event) => {
        const searchValue = event.target.value;
        setQuery(searchValue);
    }

    useEffect(() => {
        getVodlist();
    }, []);

    return (
        <>
        <div className="top">
            <h1>Aquí encontrarás los mejores tutoriales públicos</h1>
            <input type="search" onChange={handleChange} />
        </div>
            <div className="vod-container">
                {showVodlist()}
            </div>
        </>
    );
}

export default VodReviewList;