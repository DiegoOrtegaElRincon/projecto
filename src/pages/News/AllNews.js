import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function AllNews() {
    return (
        <>
            <Header />
            <ul>
                <li><a href="/new1">Notas de la versión 6.07 de VALORANT</a></li>
                <li><a href="/new2">Preguntas frecuentes de la beta abierta mundial de Premier</a></li>
                <li><a href="/new3">Notas de la versión 6.08 de VALORANT</a></li>
            </ul>
            <Footer />
        </>
    );
}

export default AllNews;