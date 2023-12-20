import loginService from "../services/login.service.js";
import bcrypt from "bcrypt";


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const getUser = await loginService.getUserLogin(email);

        if (!getUser) {
            return res.status(400)
                .send({ message: 'Email or password wrong' })
        }

        const passwordIsValid = bcrypt.compareSync(password, getUser.password);

        if (!passwordIsValid) {
            return res.status(404).send({ message: "Email or password wrong" });
        }

        const token = loginService.generateToken(getUser.id)

        res.send({ token });
    } catch (error) {
        res.status(500).send({ message: error.message })

    }
}

export default {
    loginUser
};
