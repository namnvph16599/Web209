import axios from "axios";
import { PORT } from "../constants";
const instance = axios.create({
    baseURL: PORT
})

export default instance