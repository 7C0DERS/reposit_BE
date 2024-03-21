class registerRepository {
    constructor({ model }) {
        this.model = model
    }


    async registerRep(dto) {
        try {
            return this.model.create(dto)
        }
        catch (err) {
            console.log(err);
        }
    }

    async loginRep(dto) {
      try {
        return await this.model.findOne({
          where: {
            userName: dto
          }
        })
      } catch (error) {
        console.log(error);
      }
    }

}

module.exports = registerRepository