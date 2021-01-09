import axios from "axios";
const url = "https://hirng-x2021.glitch.me/api";
const fetchData = async () => {
  const data = await axios.get(url);
  console.log("data", data);
};
export default fetchData;
