import { Request, Response, NextFunction } from 'express';
import userService from './userService';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      authId,
      email,
      name,
    } = req.body;
    const user = await userService.createUser({ authId, email, name });
    return res.status(201).json({ data: { user } });
  } catch (err) {
    return next(err);
  }
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({ data: {} });
  } catch (err) {
    return next(err);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ data: {} });
  } catch (err) {
    return next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ data: {} });
  } catch (err) {
    return next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.sendStatus(204);
  } catch (err) {
    return next(err);
  }
};

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
