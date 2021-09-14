const Express = require('express');
const router = Express.Router();

const { Op } = require('sequelize');

const Users = require('../Database/USER.js');

router.post('/login', (req, res) => {
    const rm = req.body.rm;
    const password = req.body.password;

    Users.findOne({
        where: {
            [Op.and]: [
                { tb01_RM: rm },
                { tb01_Password: password }
            ]
        }
    }).then((data)=>{
        if(data!=undefined){
            res.send({aproved:true,message:data});
        }else{
            res.send({aproved:false,message:'failed'});
        }
    }).catch((e) => {
        console.log(e)
    })
});


module.exports = router;
