import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
import jwt_decode from "jwt-decode";


const setToken = async (token) => {
  await setItemAsync("token", token);
};

const getToken = async () => {
  return await getItemAsync("token", token);
};

const deleteToken = async () => {
  await deleteItemAsync("token",token);
};

const checkToken = async () => {
  const token = await getToken();
  if (token) {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      await deleteToken();
      return false;
    }
    return true;
  }
  return false;
};
  

export { setToken, getToken, deleteToken, checkToken };
