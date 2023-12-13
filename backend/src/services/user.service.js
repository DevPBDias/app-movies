import User from "../models/User.js";

const createUser = (body) => User.create(body);
const getAllUsers = () => User.find();

export default { 
    createUser,
    getAllUsers,
}