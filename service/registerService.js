require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const DataTypes = require('sequelize');
const db = require('../db/Connection');
const registerRepository = require('../repository/regsiterRepository');
const registerTableModel = require('../db/model/registertable')(db.sequelize,DataTypes);
const sendConfirmationEmail = require('../repository/nodemailer')
const registerRep = new registerRepository(
    { model: registerTableModel }
  );
class RegisterService {
    static async registerSer(req) {
        try {
            const { user, confirmationCode } = await registerRep.registerRep(req); // Get user and confirmation code
            await sendConfirmationEmail(user.email, confirmationCode); // Send confirmation email
            return user;
        } catch (error) {
            console.log(error);
            throw error; // Re-throw the error for handling in the caller
        }
    }


static async loginSer(credentials) {
    try {
        const { userName, password } = credentials;
        const user = await registerRep.loginRep(userName);
        if (!user) {
            return { message: 'Invalid username or password' };
        }

        if (!user.isConfirmed) {
            return { message: 'Email not confirmed' };
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { message: 'Invalid username or password' };
        }

        const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });
        return {
            message: 'Login successful',
            token
        };
    } catch (error) {
        console.log(error);
    }
}
static async confirmEmail(confirmationCode) {
    try {
        const confirmed = await registerRep.confirmEmail(confirmationCode);
        return confirmed;
    } catch (error) {
        console.error('Error confirming email:', error);
        throw error;
    }
}

}
module.exports = RegisterService