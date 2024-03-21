require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const DataTypes = require('sequelize');
const db = require('../db/Connection');
const registerRepository = require('../repository/regsiterRepository');
const registerTableModel = require('../db/model/registertable')(db.sequelize,DataTypes);
const registerRep = new registerRepository(
    { model: registerTableModel }
  );
class RegisterService {
    static async registerSer(req){
        try {
          const user = await registerRep.registerRep(req)
          console.log(req,'re');
          return user;
        } catch (error) {
          console.log(error);
        }
      }
    
    static async loginSer(credentials) {
      try {
        const { userName, password } = credentials;  
          const user = await registerRep.loginRep(userName);
          if (!user) {
            return { message: 'Invalid username or password' };
          }      
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return { message: 'Invalid username or password' };
          }
          const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });
          return {
            message: 'Login successful',
            token 
          }
      } catch (error) {
        
      }
    }
}
module.exports = RegisterService