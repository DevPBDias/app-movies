import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // para nao aceitar repetidos
        lowercase: true, // para salvar sempre em lowercase no banco
    },
    password: {
        type: String,
        required: true,
        select: false, // para nao mostrar a senha quando puxar do banco
    },
    avatar: {
        type: String,
        required: true,
    },  
})

const User = mongoose.model("User", UserSchema)

export default User;