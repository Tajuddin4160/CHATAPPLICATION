import UserModel from "../models/AuthModels.js";
import bcrypt from 'bcryptjs';
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await UserModel.findOne({ email })

        if (existUser) {
            return res.status(409).json({ sucess: false, message: 'user already exist' })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const NewUser = new UserModel({ name, email, password: hashedPassword })
        await NewUser.save()
        return res.status(200).json({ success: true, message: 'user register success' })

    } catch (error) {

        return res.status(500).json({ sucess: false, message: 'internal server error' })
    }

}
export { register };