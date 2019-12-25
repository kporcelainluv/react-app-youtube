import axios from "axios";
const KEY = "AIzaSyBmUuebjjFKzsgKZ8nuaf90VN1Fsscs-Ek";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: `${KEY}`
  }
});
