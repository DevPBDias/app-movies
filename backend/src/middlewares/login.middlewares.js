import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.send(401);
    }

    const authParts = authorization.split(" ");

    if (authParts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = authParts;

    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token inválido!" });
      }

      const getUser = await userService.getUserById(decoded.id);

      if (!getUser || !getUser.id) {
        return res.status(401).send({ message: "Inválido token!" });
      }

      req.userId = getUser.id;

      return next();
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};