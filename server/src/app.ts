import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/check", (req: Request, res: Response) => {
  res.sendStatus(200);
  console.log(req.url);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
