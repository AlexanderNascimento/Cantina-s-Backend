const Express = require('express');
const router = Express.Router();

const Users = require('../Database/USER.js');

router.post('/register', (req, res) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const rm = req.body.rm;

    Users.findOne({ where: { tb01_RM: rm } }).then(async (Data) => {

        if (Data == undefined) {

                try {
                    const createUser = await Users.create({
                        tb01_Name: name,
                        tb01_LastName: lastName,
                        tb01_RM: rm,
                        tb01_Password: password,
                    })
                    res.send(JSON.stringify({ aproved: true }));
                } catch (error) {
                    res.send(JSON.stringify({ aproved: error }));
                }
        } else {

            res.send(JSON.stringify({ aproved: false, message:'Rm já existente'}));

        }

    }).catch((e) => {
        console.log(e);
    });

});

module.exports = router;
