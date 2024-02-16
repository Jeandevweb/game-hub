import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "79b3c0b7c18e4b0a89922656511f3408",
  },
});
