import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentDateTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });

  // Get client IP address
  const clientIp = req.headers["x-forwarded-for"] || req.ip;

  console.log(
    `[${currentDateTime}] ${req.method} ${req.url} - IP: ${clientIp}`
  );
  next();
};
