import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });

export const getAllWorks = () => API.get("/works");

export const getAllExperiences = () => API.get("/experiences");
