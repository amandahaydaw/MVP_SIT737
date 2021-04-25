const mongoose = require('mongoose');
const UserModel = require('../DB/models/user');
const userData = { email: 'test' + Math.random() + '@gmail.com', name: 'john' + Math.random() + '@gmail.com' };

describe('User Model Testing to validate DB schema user.js feature file', () => {

    // By using mongoose.connect
    beforeAll(async() => {
        await mongoose.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async() => {
        const validUser = new UserModel(userData);
        const savedUser = await validUser.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.name).toBe(userData.name);
        //test new variable to check whatever if its defined 
        expect(savedUser.Usernames).toBeUndefined();

    });

    //closing connection
    afterAll(async() => {
        await mongoose.connection.close();
    });
})