import { Request, Response, NextFunction } from 'express';

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(404);
};

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.sendStatus(500);
};

export {
  notFoundHandler,
  errorHandler,
};
