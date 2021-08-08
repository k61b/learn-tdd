import axios from "axios";

const client = axios.create({
  baseURL:
    "https://outside-in-dev-api.herokuapp.com/mPFKmo8wZRdGHl3CyDKhhfXxFraVUKpN",
});

const api = {
  loadPlaces() {
    return client.get("/restaurants").then(response => response.data);
  },
  createPlace(name) {
    return client.post("restaurants", { name }).then(response => response.data);
  },
};

export default api;
