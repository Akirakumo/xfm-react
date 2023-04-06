import axios from "axios";

export const path = "http://127.0.0.1:8081";

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${path}${url}`, { params })
      .then((res) => {
        if (res.status === 200) resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
