import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

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
});

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  })
  

const User = mongoose.model("User", UserSchema);

export default User;