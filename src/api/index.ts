import axios from 'axios'

interface Params {
  [propName: string]: any
}

export const path: string = 'http://localhost:8081'

export const get = (url: string, params: Params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${path}${url}`, { params })
      .then((res) => {
        if (res.status === 200) resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
