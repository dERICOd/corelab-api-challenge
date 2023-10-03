import express from "express";
import { taskRoutes } from "../routes/taskRoutes";
import Cors from "Cors";

const corsOptions = {
  origin: "http://localhost:3000",
};
export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
  }

  private router() {
    this.server.use(Cors(corsOptions));
    this.server.use(taskRoutes);
  }
}