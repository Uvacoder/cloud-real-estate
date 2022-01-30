import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "fd5153f737mshb3ddf3c9d04b347p17fd73jsn78b4e66064f5",
    },
  });
  return data;
};
