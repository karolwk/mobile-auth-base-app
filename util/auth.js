import axios from 'axios';

const API_KEY = 'AIzaSyB61hgmFHXsFXBskKEKIaNG1UypKdTSsGw';

export const createUser = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};