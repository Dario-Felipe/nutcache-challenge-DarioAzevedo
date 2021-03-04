import axios from 'axios';

const Api = axios.create({
  baseURL: `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}/nutemployee`,
});

export default Api;
