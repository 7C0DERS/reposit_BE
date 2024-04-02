// registerRepository.js

const { v4: uuidv4 } = require('uuid');

// Function to generate confirmation code
const generateConfirmationCode = () => {
    return uuidv4();
};

class registerRepository {
    constructor({ model }) {
        this.model = model;
    }
    async registerRep(dto) {
        try {
            // Generate confirmation code
            const confirmationCode = generateConfirmationCode();
            console.log('Confirmation Code:', confirmationCode);

            // Save user with confirmation code
            const user = await this.model.create({ ...dto, confirmationCode });
            return { user, confirmationCode }; // Return the user and confirmation code
        } catch (err) {
            console.error(err); // Log the error
            throw err; // Throw the error to be caught by the caller
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
            console.log('Confirmation code received:', confirmationCode);
            
            // Query the database to find the user with the given confirmation code
            const user = await this.model.findOne({
                where: {
                    confirmationCode
                }
            });
    
            console.log('User found in database:', user);
    
            if (user) {
                // Update isConfirmed to true
                await user.update({ isConfirmed: true });
                console.log('User confirmed successfully.');
                return true;
            } else {
                console.log('User not found for confirmation code:', confirmationCode);
                return false;
            }
        } catch (error) {
            console.error('Error confirming email:', error);
            return false;
        }
    }
    
    
}

module.exports = registerRepository;
