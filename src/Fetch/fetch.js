import axios from "axios";

axios.defaults.baseURL = "https://localhost:44398/";

export function getOptions() {
  return HandleRequest("get", "options/getoptions");
}

async function HandleRequest(method, urlEndpoint, data) {
  let result = await axios({ method: method, url: urlEndpoint, data: data });
  return result;
}
