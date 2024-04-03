require('dotenv').config();
const DataTypes = require('sequelize');
const db = require('../db/Connection');
const folderRepository = require('../repository//folderRepository');
const repFOlderTableModel = require('../db/model/repfolder')(db.sequelize,DataTypes);
const registerRep = new folderRepository(
    { model: repFOlderTableModel }
  );
  class folderService {
    static async folderServ(req) {
        try {
            const { user } = await registerRep.createFolder(req); 
            return user;
        } catch (error) {
            console.log(error);
            throw error; // Re-throw the error for handling in the caller
        }
    }
}
module.exports = folderService