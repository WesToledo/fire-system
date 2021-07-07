const express = require("express");

const authMiddleware = require("./src/app/middleware/auth");

const user = require("./src/app/controllers/user.controller");
const auth = require("./src/app/controllers/authorization.controller");
const classficator = require('./src/app/controllers/classificator.controller')

//Auth
const rootRouter = express.Router();
rootRouter.post("/login", auth.login);

// Users
const userRouter = express.Router();
userRouter.post("/create", user.create);
userRouter.get("/", authMiddleware, user.list);
userRouter.get("/:id", authMiddleware, user.index);
userRouter.put("/update/:id", authMiddleware, user.update);
userRouter.delete("/remove/:id", authMiddleware, user.remove);

// Users
const classificatorRouter = express.Router();
classificatorRouter.post("/classificate", classficator.classificate);


module.exports = {
  rootRouter,
  userRouter,
  classificatorRouter
};
