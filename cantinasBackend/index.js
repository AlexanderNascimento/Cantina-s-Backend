const Express = require('express');
const Cors = require('cors');
const App = Express();

    const Register= require('./Routes/Register.js');
    const Login = require('./Routes/Login.js');

App.use(Cors());
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());

const port = 3000
App.listen(port, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log('server listening on port ' + port);
    }
})

    App.use('/', Register);
    App.use('/', Login);
    App.get('/',(req,res)=>{
        res.send('Welcome to backend')
    })
module.exports = App;
