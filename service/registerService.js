require('dotenv').config();
const DataTypes = require('sequelize');
const { Op } = require('sequelize')
const db = require('../db/Connection');
const registerRepository = require('../repository/regsiterRepository');
const registerTableModel = require('../db/model/registertable')(db.sequelize,DataTypes);
const registerRep = new registerRepository(
    { model: registerTableModel }
  );
class RegisterService {
    static async registerSer(req){

        const { userName, email, password } = req;

        try {
          const user = await registerRep.registerRep(req)
          console.log(req,'re');
          return user;
        } catch (error) {
          console.log(error);
        }
      }
    
}
module.exports = RegisterService