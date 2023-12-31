import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

const getUserLogin = (email) => User.findOne({ email: email }).select('+password');

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

export default {
    getUserLogin,
    generateToken,
}