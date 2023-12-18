import mongoose from "mongoose";
import userService from "../services/user.service.js";

export const validationId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido!" });
    }

    next();
}

export const validationUser = async (req, res, next) => {
    const userId = req.params.id;

    const getUser = await userService.getUserById(userId);

    if (!getUser) {
        return res.status(400).send({ message: 'Acho que o usuário não foi encontrado !?' })
    }

    req.id = userId;
    req.user = getUser; // para eu poder enviar o usuário encontrado para meu controller do getUserById

    next();
}