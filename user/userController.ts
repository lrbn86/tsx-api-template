const createUser = async (req, res) => {
  return res.status(201).json({ data: {} });
};

const getUsers = async (req, res) => {
  return res.status(200).json({ data: {} });
};

const getUser = async (req, res) => {
  return res.status(200).json({ data: {} });
};

const updateUser = async (req, res) => {
  return res.status(200).json({ data: {} });
};

const deleteUser = async (req, res) => {
  return res.sendStatus(204);
};

export {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
