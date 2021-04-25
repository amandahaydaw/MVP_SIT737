const mongoose = require('mongoose');
const UserModel = require('../DB/models/medication.js');
const userData = { medicationName: 'XYZ1', Dosage: '250mg', Time: new Date(), Days: 'monday', repeat: 2 };




describe('User Model Testing to validate DB schema for mecication.js feature file', () => {

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

    it('create & save a medication reminder successfully', async() => {
        const validUser = new UserModel(userData);
        const savedUser = await validUser.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.medicationName).toBe(userData.medicationName);
        expect(savedUser.Dosage).toBe(userData.Dosage);
        // expect(savedUser.Time).toBe(userData.Time);
        //test new variable to check whatever if its defined 
        expect(savedUser.times).toBeUndefined();

    });

    //closing connection
    afterAll(async() => {
        await mongoose.connection.close();
    });
})