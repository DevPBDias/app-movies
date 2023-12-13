import User from "../models/User.js";

const createUser = (body) => User.create(body);

export default { 
    createUser,
}