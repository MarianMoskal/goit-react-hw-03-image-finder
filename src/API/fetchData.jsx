import axios from "axios";

const fetchData = async (state) => {
  const { query, page } = state;

  const URL = "https://pixabay.com/api/";
  const API_KEY = "22788715-8437fcb04a405122d442af916";

  axios.defaults.baseURL = URL;
  axios.defaults.params = {
    key: API_KEY,
    per_page: 12,
    image_type: "photo",
    orientation: "horizontal",
    q: query,
    page: page,
  };

  return await axios();
};

export default fetchData;

//  .then(({ data }) => {
//     // console.log(data);
//     this.setState((state) => ({
//       data,
//       hits: [...state.hits, ...data.hits],
//     }));
//     loaderVisible();
//   })
//   .catch((error) => {
//     console.log(error);
//     alert(error);
//   });
