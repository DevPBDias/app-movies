import mongoose from 'mongoose';
import userService from '../services/user.service.js'

const createUser = async (req, res) => {
    try {
        const { name, userName, password, email, avatar } = req.body;

        if (!userName || !name || !email || !password || !avatar) {
            return res.status(400)
                .send({ message: 'Ih, preencha todos os campos para prosseguir' })
        }

        const user = await userService.createUser(req.body);

        if (!user) {
            return res.status(400)
                .send({ message: 'Acho que o usuário não foi criado !?' })
        }

        return res.status(201).send({
            message: 'Usuário criado com sucesso!!',
            userCreated: {
                id: user.id,
                name,
                userName,
                email,
                password,
                avatar
            }
        });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();

        if (users.length === 0) {
            return res.status(400)
                .send({ message: 'Acho que não existe nenhum usuário!!' })
        }

        return res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send({ message: "ID inválido!" });
        }

        const userFound = await userService.getUserById(userId);

        if (!userFound) {
            return res.status(400)
                .send({ message: 'Acho que o usuário não foi encontrado !?' })
        }

        return res.status(200).send(userFound);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
};