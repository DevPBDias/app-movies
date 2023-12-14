import User from "../models/User.js";

const createUser = (body) => User.create(body);
const getAllUsers = () => User.find();
const getUserById = (id) => User.findById(id);

const updateUser = (
    id,
    name,
    userName,
    email,
    password,
    avatar,
) =>
    User.findOneAndUpdate({ _id: id },
        {
            name,
            userName,
            email,
            password,
            avatar,
        },
        { rawResult: true }
    );

export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
}