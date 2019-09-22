import express from "express";

export function logErrors(err: any, _1: any, _2: any, next: any) {
  console.error(err.stack);
  console.log(err.message);
  next(err);
}

export function errorHandler(
  err: Error,
  _1: express.Request,
  res: express.Response,
  _2: Function
) {
  res.status(500).send({ error: err.message });
}
