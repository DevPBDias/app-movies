import User from "../models/User.js";

const createUser = (body) => User.create(body);
const getAllUsers = () => User.find();
const getUserById = (id) => User.findById(id);

export default { 
    createUser,
    getAllUsers,
    getUserById,
}