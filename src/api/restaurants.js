import instance from ".";

const getAllCategories = async () => {
  const response = await instance.get("/category");
  return response.data;
};

const getAllRestaurants = async () => {
  const response = await instance.get("/resturant");
  return response.data;
};

const getRestaurantById = async (id) => {
  const response = await instance.get(`/resturant/${id}`);
  return response.data;
};

const getRestaurantItems = async (id) => {
  const response = await instance.get(`/resturant/${id}/items`);
  return response.data;
};

const getItemDetails = async (id) => {
  const response = await instance.get(`/item/${id}`);
  return response.data;
};

export {
  getAllCategories,
  getAllRestaurants,
  getRestaurantById,
  getRestaurantItems,
  getItemDetails,
};
