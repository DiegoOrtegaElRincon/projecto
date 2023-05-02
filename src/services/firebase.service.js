import { ref, get, remove, push } from "firebase/database";
import database from "../Firebase";

const bikesref = ref(database, "/prueba")

const getAllBikes = () => {
    return get(bikesref)
}

const removeBike = (key) => {
    const bikeToDeleteRef = ref(database, `/prueba/${key}`)
    return remove(bikeToDeleteRef)
}

const addBike = (name1, surname) => {
    return push(bikesref, {
        name: name1,
        surname: surname
    })
}


export default {
    getAllBikes,
    removeBike,
    addBike
}