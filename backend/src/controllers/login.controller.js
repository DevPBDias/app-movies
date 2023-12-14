import loginService from "../services/login.service.js";

const loginUser = async (req, res) => {
    try {
        const { email } = req.body;

        const getUser = await loginService.getUserLogin(email);

        if (!getUser) {
            return res.status(400)
                .send({ message: 'Email ou senha incorreto!' })
        }

        res.send(getUser);
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
}

export default {
    loginUser
};