import axios from "axios";

function axiosGetData(query, page) {
  const URL = `https://pixabay.com/api/?per_page=12
    &key=22788715-8437fcb04a405122d442af916&image_type=photo&orientation=horizontal`;

  return axios.get(`${URL}&q=${query}&page=${page}`);
}

export default axiosGetData;
