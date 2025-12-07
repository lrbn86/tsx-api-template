import userRepository from './userRepository';

const createUser = async (data) => {
  const user = await userRepository.create(data);
  return user;
};

const getUsers = async () => {

};

const getUser = async (id: string) => {

};

const updateUser = async (id: string, data) => {

};

const deleteUser = async (id: string) => {

};

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
