// registerRepository.js

const { v4: uuidv4 } = require('uuid');

class registerRepository {
    constructor({ model }) {
        this.model = model;
    }

    async registerRep(dto) {
        try {
            // Generate confirmation code
            const confirmationCode = generateConfirmationCode();

            // Save user with confirmation code
            return await this.model.create({ ...dto, confirmationCode });
        } catch (err) {
            console.log(err);
        }
    }

    async loginRep(dto) {
        try {
            return await this.model.findOne({
                where: {
                    userName: dto
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async confirmEmail(confirmationCode) {
        try {
            const user = await this.model.findOne({
                where: {
                    confirmationCode
                }
            });

            if (user) {
                // Update isConfirmed to true
                await user.update({ isConfirmed: true });
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = registerRepository;

// Function to generate confirmation code
const generateConfirmationCode = () => {
    return uuidv4();
};
