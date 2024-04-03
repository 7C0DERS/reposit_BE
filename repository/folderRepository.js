class folderRepository {
    constructor({ model }) {
        this.model = model;
    }
    async createFolder(dto) {
        try {



            const user = await this.model.create({ ...dto});
            return { user }; 
        } catch (err) {
            console.error(err);
            throw err; 
        }
    }
}
module.exports = folderRepository;