import User from "../models/User";

const createUser = (body) => User.create(body);

export default { 
    createUser,
}