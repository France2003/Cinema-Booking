import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any = {},
  message: string = "Success",
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
  message: string = "Something went wrong",
  status = 400
) => {
  return res.status(status).json({
    success: false,
    message,
  });
};
