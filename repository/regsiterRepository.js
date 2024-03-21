class registerRepository {
    constructor ({model}) {
        this.model = model
    }
    async registerRep(dto){
        try{
return this.model.create(dto)
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = registerRepository