import axios from 'axios';

class CarsService {
  constructor() {
    this.cars = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  list() {
    return this.cars.get('/cars/')
      .then(({ data }) => {
        return data
      });
  }

  create(car) {
    const { model, image, price } = car;
    console.log(model);
    return this.cars.post('/cars/create', { model, image, price })
      .then(({ data }) => data);
  }

}


const carsService = new CarsService();

export default carsService;