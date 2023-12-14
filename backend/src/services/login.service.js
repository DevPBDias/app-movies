import User from "../models/User.js";

const getUserLogin = (email) => User.findOne({ email: email }).select('+password');

export default {
    getUserLogin,
}