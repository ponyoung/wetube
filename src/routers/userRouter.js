import express from "express";
import {
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  getEdit,
  postEdit,
} from "../controllers/userController";
import { protectorMiddleware, pubilcOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", pubilcOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", pubilcOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
