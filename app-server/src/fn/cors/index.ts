import { Request, Response, NextFunction } from "express";

export default function middleware(
  _: Request,
  res: Response,
  next: NextFunction
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "private, no-cashe");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  res.setHeader(
    "Access-Control-Expose-Headers",
    "AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To, AMP-Same-Origin"
  );
  next();
}
