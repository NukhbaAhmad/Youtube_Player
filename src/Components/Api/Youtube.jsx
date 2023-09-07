import axios from "axios";

// Access key
const KEY = "AIzaSyA-GRpqmePHVm7AxlEf7Qp8nQrhnbWLjeY";

// Instance of Axios
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY,
  },
});
