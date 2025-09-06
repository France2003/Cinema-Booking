import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message = "Success",
  status = 200
) => {
  return res.status(status).json({
    success: true,
    message,
    ...data,
  });
};

export const errorResponse = (
  res: Response,
  error: string,
  status = 500
) => {
  return res.status(status).json({
    success: false,
    message: error,
  });
};
